import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Chip } from '@mui/material';
import MainLayout from '@/components/layout/MainLayout';

const accessories = [
  {
    id: 1,
    name: 'Key Cover',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1607435097405-db48f377bff6?w=800&auto=format&fit=crop&q=60',
    category: 'Key Organizer',
    description: 'Elegant leather key cover to organize your keys and reduce pocket bulk',
    features: ['Premium leather', 'Fits 3-4 keys', 'Magnetic closure']
  },
  {
    id: 2,
    name: 'Tech Pouch',
    price: '$59',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60',
    category: 'Organization',
    description: 'Keep your cables, chargers, and tech accessories neatly organized',
    features: ['Water-resistant', 'Multiple compartments', 'Compact design']
  },
  {
    id: 3,
    name: 'Leather Luggage Tag',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60',
    category: 'Travel',
    description: 'Stylish and durable luggage tag with privacy flap',
    features: ['Full-grain leather', 'Privacy cover', 'Secure attachment']
  },
  {
    id: 4,
    name: 'Pencil Case',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=60',
    category: 'Organization',
    description: 'Elegant case for your writing instruments and small accessories',
    features: ['Premium materials', 'Magnetic closure', 'Compact design']
  }
];

export default function AccessoriesPage() {
  return (
    <MainLayout>
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 6 }}>
            Accessories Collection
          </Typography>
          
          <Grid container spacing={4}>
            {accessories.map((accessory) => (
              <Grid item key={accessory.id} xs={12} sm={6} md={4}>
                <Card 
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={accessory.image}
                    alt={accessory.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {accessory.name}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {accessory.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {accessory.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {accessory.features.map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature}
                          size="small"
                          sx={{
                            bgcolor: 'primary.light',
                            color: 'primary.contrastText'
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
}