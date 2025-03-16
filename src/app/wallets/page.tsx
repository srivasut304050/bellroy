import { Box, Container, Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';

const wallets = [
  {
    id: 1,
    name: 'Note Sleeve',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60',
    category: 'Bifold',
    description: 'Slim profile with room for bills, cards and coins',
    features: ['Full-grain leather', 'RFID protection', 'Quick access card slots']
  },
  {
    id: 2,
    name: 'Apex Slim Sleeve',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800&auto=format&fit=crop&q=60',
    category: 'Card Holder',
    description: 'Ultra-slim design for the minimalist',
    features: ['Premium leather', 'Pull-tab card access', 'Holds up to 8 cards']
  },
  {
    id: 3,
    name: 'Hide & Seek',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800&auto=format&fit=crop&q=60',
    category: 'Bifold',
    description: 'Classic wallet with hidden bill section and RFID protection',
    features: ['Hidden compartment', 'RFID protection', 'Coin pocket']
  },
  {
    id: 4,
    name: 'Travel Wallet',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60',
    category: 'Travel',
    description: 'Keep your passport, cards and travel documents organized',
    features: ['Passport pocket', 'Micro pen included', 'RFID protection']
  }
];

export default function WalletsPage() {
  return (
    <MainLayout>
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 6 }}>
            Wallets Collection
          </Typography>
          
          <Grid container spacing={4}>
            {wallets.map((wallet) => (
              <Grid item key={wallet.id} xs={12} sm={6} md={4}>
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
                  <Box sx={{ position: 'relative', width: '100%', height: 300 }}>
                    <Image
                      src={wallet.image}
                      alt={wallet.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {wallet.name}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {wallet.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {wallet.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {wallet.features.map((feature, index) => (
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