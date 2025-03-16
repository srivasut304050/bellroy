import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Chip } from '@mui/material';
import MainLayout from '@/components/layout/MainLayout';

const bags = [
  {
    id: 1,
    name: 'Lite Daypack',
    price: '$119',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60',
    category: 'Backpack',
    description: 'Lightweight and versatile daypack perfect for everyday carry',
    features: ['Water-resistant', '13" laptop sleeve', 'Quick-access pockets']
  },
  {
    id: 2,
    name: 'Classic Tote',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=60',
    category: 'Tote',
    description: 'Spacious tote bag with premium organization features',
    features: ['Premium leather', 'Padded laptop compartment', 'Multiple organizer pockets']
  },
  {
    id: 3,
    name: 'Transit Backpack',
    price: '$229',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&auto=format&fit=crop&q=60',
    category: 'Backpack',
    description: 'Perfect travel companion with expandable storage',
    features: ['Expandable', 'TSA-friendly laptop access', 'Hidden passport pocket']
  },
  {
    id: 4,
    name: 'Sling Mini',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&auto=format&fit=crop&q=60',
    category: 'Sling',
    description: 'Compact sling bag for essential items',
    features: ['Water-resistant', 'Quick-access pockets', 'Adjustable strap']
  }
];

export default function BagsPage() {
  return (
    <MainLayout>
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 6 }}>
            Bags Collection
          </Typography>
          
          <Grid container spacing={4}>
            {bags.map((bag) => (
              <Grid item key={bag.id} xs={12} sm={6} md={4}>
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
                    image={bag.image}
                    alt={bag.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {bag.name}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {bag.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {bag.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {bag.features.map((feature, index) => (
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