import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";

import * as yup from "yup";

import { useMediaQuery } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../contexts/AuthContext";
import { SignInDto } from "../../http/Api";
import http from "../../http";
import { Role } from "../../interfaces/ICommonIconProps";
function SignIn() {
  const queryClient = useQueryClient();
  const { setAccessToken, setUser, accessToken, user } = useAuth();
  const navigate = useNavigate();
  const isSmall = useMediaQuery("(max-width: 768px)");
  const schema = yup.object({
    email: yup
      .string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });
  const form = useForm<SignInDto>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(schema),
  });
  const { mutate: signIn, isPending: loading } = useMutation({
    mutationFn: http.auth.userControllerSignIn,
  });

  async function handleSignInSubmit(values: SignInDto) {
    signIn(values, {
      onSuccess: async (data) => {
        setAccessToken(data.data.accessToken || "");

        if (data.data.user) {
          setUser(data.data.user);
        }

        queryClient.invalidateQueries({ queryKey: ["auth"] });
      },
    });
  }

  if (accessToken) {
    if (user?.role === Role.ADMIN) {
      return <Navigate to="/dashboard" />;
    } else if (user?.role === Role.CITY_MANAGER) {
      return <Navigate to="/dashboard/city-salesmans" />;
    } else if (user?.role === Role.SALESMAN) {
      return <Navigate to="/dashboard/city-professionals" />;
    } else {
      return <Navigate to="/" />;
    }
  }

  return (
    <Card p={isSmall?"xs":"xl"} radius={"xl"} w={isSmall ? 350 : 500}>
      <form onSubmit={form.onSubmit(handleSignInSubmit)}>
        <Stack align="center" gap={isSmall?"xs":"md"} mx={isSmall?"xs":"xl"}>
          <Stack gap={1} align="center">
            <Title ta={isSmall ? "center" : "start"} order={1}>
              Welcome Back!
            </Title>
            <Text ta={"center"}>Enter your credentials to sign in</Text>
          </Stack>
          <br />

          <Stack w={"100%"} gap={isSmall?"xs":"md"}>
            <TextInput
              label="Your Email"
              type="email"
              placeholder="Email"
              withAsterisk
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter Your Password"
              withAsterisk
              {...form.getInputProps("password")}
            />
            <Group justify={"space-between"} align="center">
              <Checkbox label="Remember Me?" />
              <Anchor
                underline="always"
                onClick={() => navigate("/auth/forgot-password")}
              >
                Forgot Password?
              </Anchor>
            </Group>
            <br />
            <Button type="submit" fullWidth loading={loading}>
              Sign In
            </Button>
          </Stack>
        </Stack>
      </form>
    </Card>
  );
}

export default SignIn;
