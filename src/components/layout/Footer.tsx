import { Container, Grid, Typography, Link as MuiLink, Box } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
  const footerSections = [
    {
      title: 'Help',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Shipping', href: '/shipping' },
        { label: 'Returns', href: '/returns' },
        { label: 'Warranty', href: '/warranty' }
      ]
    },
    {
      title: 'About',
      links: [
        { label: 'Our Story', href: '/our-story' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Reviews', href: '/reviews' }
      ]
    },
    {
      title: 'Social',
      links: [
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'YouTube', href: 'https://youtube.com' }
      ]
    }
  ];

  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', py: 8, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {footerSections.map((section) => (
            <Grid item xs={12} sm={4} key={section.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.label} sx={{ mb: 1 }}>
                    <Link href={link.href} passHref>
                      <MuiLink
                        underline="hover"
                        color="text.secondary"
                        sx={{ cursor: 'pointer' }}
                      >
                        {link.label}
                      </MuiLink>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 8 }}
        >
          © {new Date().getFullYear()} Bellroy. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;