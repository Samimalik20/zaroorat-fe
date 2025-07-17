import {
  Box,
  Container,
  Group,
  Text,

  Divider,
  Stack,
  Anchor,
  Center,
  Flex,
} from '@mantine/core';
import IconBrandFacebook from '../../assets/icons/IconBrandFacebook';
import IconBrandInstagram from '../../assets/icons/IconBrandInstagram';
import IconBrandTwitter from '../../assets/icons/IconBrandTwitter';
import IconBrandWhatsapp from '../../assets/icons/IconBrandWhatsapp';


const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },

];

const Footer = () => {
  return (
    <Box bg="#2f9e44" color="white" pt="md">
      <Container size="lg">
        <Flex
          justify="space-between"
          wrap="wrap"
          align="center"
          py="md"
          gap="md"
        >
          <Stack gap={4}>
            <Text size="lg" fw={600} c={'white'}>
              Quick Links
            </Text>
            {navLinks.map((link) => (
              <Anchor key={link.href} href={link.href} c="white">
                {link.label}
              </Anchor>
            ))}
          </Stack>

          <Stack gap="xs" align="center">
            <Text size="lg" fw={600} c={'white'}>
              Follow Us
            </Text>
            <Group gap="xs">
              <Anchor href="https://facebook.com" target="_blank" color="white">
                <IconBrandFacebook size={20} color='white'/>
              </Anchor>
              <Anchor href="https://instagram.com" target="_blank" color="white">
                <IconBrandInstagram size={20} color='white'/>
              </Anchor>
              <Anchor href="https://twitter.com" target="_blank" color="white">
                <IconBrandTwitter size={20} color='white'/>
              </Anchor>
              <Anchor href="https://linkedin.com" target="_blank" color="white">
                <IconBrandWhatsapp size={20} color='white'/>
              </Anchor>
            </Group>
          </Stack>
        </Flex>

        <Divider color="white" my="sm" />

        <Center py="sm">
          <Text size="sm" color="white">
            © {new Date().getFullYear()} Zaroorat. All rights reserved.
          </Text>
        </Center>
      </Container>
    </Box>
  );
};

export default Footer;
