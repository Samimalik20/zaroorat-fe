"use client";

import {
  Stack,
  Avatar,
  FileButton,
  Center,
  Box,
  ActionIcon,
  Loader,
} from "@mantine/core";
import { useAuth } from "../../contexts/AuthContext";
import IconCamera from "../../assets/icons/IconCamera";
import axios from "axios";
import { useState } from "react";

export const API_URL = import.meta.env.VITE_API_URL;

export function AvatarCard() {
  const { user, accessToken, setUser } = useAuth();
  console.log(user, "user");
  const [preview, setPreview] = useState(user?.profileImage?.url || null);
  const [loading, setLoading] = useState(false);

  const uploadProfileImage = async (file: any) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.patch(
        `${API_URL}auth/${user?._id}/upload-profile`,
        formData,
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );
      setUser(response?.data?.user);
      setPreview(response?.data?.user?.profileImage?.url); // Update preview image
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack>
      <Center>
        <FileButton
          onChange={(file) => {
            if (file) {
              uploadProfileImage(file);
            }
          }}
          accept="image/png,image/jpeg"
        >
          {(props) => (
            <Box
              pos="relative"
              {...props}
              style={{
                cursor: "pointer",
              }}
            >
              <Avatar
                src={preview}
                size={120}
                radius={120}
                style={{
                  border: "1px solid gray",
                }}
              />

              <ActionIcon
                variant="filled"
                radius="xl"
                size="md"
                pos="absolute"
                bottom={0}
                right={0}
                loading={loading}
              >
                {loading ? <Loader size="xs" color="white" /> : <IconCamera />}
              </ActionIcon>
            </Box>
          )}
        </FileButton>
      </Center>
    </Stack>
  );
}
