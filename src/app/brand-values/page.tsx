import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

const brandValues = [
  {
    id: 1,
    title: 'Designed in Melbourne',
    description: 'We are a design-obsessed brand based in Australia, but our products are carried right across the globe.',
    image: 'https://images.unsplash.com/photo-1494236472818-d35e50e604cf?w=800&auto=format&fit=crop&q=60',
    link: { text: 'Read About Us', href: '/about' }
  },
  {
    id: 2,
    title: 'Engineered slim',
    description: 'We re-engineered the everyday wallet back in 2010, removing all excess and slimming millions of pockets in the process.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60',
    link: { text: 'Slim Your Wallet', href: '/wallets' }
  },
  {
    id: 3,
    title: 'Certified B Corp',
    description: 'We\'re recognized for using business as a force for good. Which includes our development of recycled materials.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60',
    link: { text: 'Learn About Our Materials', href: '/materials' }
  },
  {
    id: 4,
    title: 'Making products that last',
    description: 'We\'re committed to making products that can be used and loved for as long as possible. Read about our product guarantees.',
    image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&auto=format&fit=crop&q=60',
    link: { text: 'On The Journal', href: '/warranty' }
  }
];

export default function BrandValuesPage() {
  return (
    <MainLayout>
      <Box sx={{ bgcolor: 'white', py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {brandValues.map((value) => (
              <Grid item xs={12} sm={6} md={3} key={value.id}>
                <Box textAlign="center">
                  <Box
                    component="img"
                    src={value.image}
                    alt={value.title}
                    sx={{
                      width: 180,
                      height: 180,
                      borderRadius: '50%',
                      mb: 3,
                      objectFit: 'cover',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                    {value.description}
                  </Typography>
                  <Link href={value.link.href} passHref>
                    <Button
                      color="primary"
                      sx={{
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: 'primary.dark'
                        }
                      }}
                    >
                      {value.link.text}
                    </Button>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
}