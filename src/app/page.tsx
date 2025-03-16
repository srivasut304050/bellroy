import Image from "next/image";

import { Box, Container, Typography, Grid, Button, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { ArrowForward, LocalShipping, Security, Star } from '@mui/icons-material';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function Home() {
  const categoryShowcase = [
    {
      id: 1,
      title: 'Wallets',
      description: 'Slim, functional designs for your everyday carry',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60',
      link: '/wallets'
    },
    {
      id: 2,
      title: 'Bags',
      description: 'From everyday carry to travel companions',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60',
      link: '/bags'
    },
    {
      id: 3,
      title: 'Accessories',
      description: 'Thoughtful additions to enhance your daily life',
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&auto=format&fit=crop&q=60',
      link: '/accessories'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      title: 'Note Sleeve Wallet',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60',
      category: 'Wallets'
    },
    {
      id: 2,
      title: 'Lite Daypack',
      price: '$119',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60',
      category: 'Bags'
    },
    {
      id: 3,
      title: 'Key Cover',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1607435097405-db48f377bff6?w=800&auto=format&fit=crop&q=60',
      category: 'Accessories'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <Box
        sx={{
          height: '90vh',
          position: 'relative',
          backgroundImage: 'url(https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ color: 'white', maxWidth: 650 }}>
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '3rem', md: '5rem' },
                letterSpacing: '-0.02em',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                animation: 'fadeIn 1s ease-out'
              }}
            >
              THE FUN IN
              <br />
              FUNCTION
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4,
                maxWidth: 600,
                lineHeight: 1.6,
                fontSize: { xs: '1.2rem', md: '1.6rem' },
                opacity: 0.9
              }}
            >
              We've built products for a better way to carry
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                component={Link}
                href="/bags"
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: 'grey.100',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Explore Collection
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Search Bar Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 3 }}>
        <Container maxWidth="md">
          <Box 
            component="form" 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'white',
              borderRadius: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              p: 1
            }}
          >
            <Typography variant="body1" sx={{ ml: 2, mr: 2 }}>Traveling soon? These smart products will help...</Typography>
            <Button 
              variant="contained" 
              color="primary"
              size="small"
              sx={{ ml: 'auto', borderRadius: 1 }}
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Category Showcase */}
      <Container maxWidth="lg" sx={{ my: 12 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            mb: 6,
            fontWeight: 600,
            textAlign: 'center'
          }}
        >
          Discover Our Collections
        </Typography>
        <Grid container spacing={4}>
          {categoryShowcase.map((category) => (
            <Grid item key={category.id} xs={12} md={4}>
              <Link href={category.link} passHref style={{ textDecoration: 'none' }}>
                <Card 
                  sx={{ 
                    height: '500px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
                    '&:hover': {
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.1)'
                      },
                      '& .overlay-content': {
                        transform: 'translateY(0)',
                        opacity: 1
                      }
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="500"
                    image={category.image}
                    alt={category.title}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.8s ease'
                    }}
                  />
                  <Box
                    className="overlay-content"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.85)',
                      color: 'white',
                      p: 4,
                      transform: 'translateY(20px)',
                      opacity: 0.9,
                      transition: 'all 0.4s ease',
                      backdropFilter: 'blur(5px)'
                    }}
                  >
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>
                      {category.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2, opacity: 0.9, lineHeight: 1.6 }}>
                      {category.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="inherit"
                      endIcon={<ArrowForward />}
                      sx={{
                        mt: 2,
                        borderColor: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                    >
                      Explore {category.title}
                    </Button>
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products */}
      <Box sx={{ bgcolor: 'grey.50', py: 12 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            sx={{ 
              mb: 6,
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            {featuredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: '20px',
                        fontWeight: 600
                      }}
                    >
                      {product.price}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="overline" color="primary.main" sx={{ fontWeight: 600, letterSpacing: 1.5 }}>
                      {product.category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700, mt: 1 }}>
                      {product.title}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{
                        mt: 2,
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        py: 1
                      }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Brand Values Section */}
      <Box sx={{ bgcolor: 'white', py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1494236472818-d35e50e604cf?w=800&auto=format&fit=crop&q=60"
                  alt="Melbourne Design"
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
                  Designed in Melbourne
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                  We are a design-obsessed brand based in Australia, but our products are carried right across the globe.
                </Typography>
                <Link href="/about" passHref>
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
                    Read About Us
                  </Button>
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60"
                  alt="Slim Wallet"
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
                  Engineered slim
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                  We re-engineered the everyday wallet back in 2010, removing all excess and slimming millions of pockets in the process.
                </Typography>
                <Link href="/wallets" passHref>
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
                    Slim Your Wallet
                  </Button>
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60"
                  alt="B Corp Certification"
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
                  Certified B Corp
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                  We're recognized for using business as a force for good. Which includes our development of recycled materials.
                </Typography>
                <Link href="/materials" passHref>
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
                    Learn About Our Materials
                  </Button>
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&auto=format&fit=crop&q=60"
                  alt="Product Quality"
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
                  Making products that last
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                  We're committed to making products that can be used and loved for as long as possible. Read about our product guarantees.
                </Typography>
                <Link href="/warranty" passHref>
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
                    On The Journal
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'white', py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <IconButton
                  sx={{ 
                    bgcolor: 'primary.light',
                    mb: 3,
                    p: 2,
                    '&:hover': { bgcolor: 'primary.light' }
                  }}
                >
                  <Star sx={{ fontSize: 40, color: 'primary.main' }} />
                </IconButton>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Premium Materials
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  Crafted from the finest leather and sustainable materials for lasting quality
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <IconButton
                  sx={{ 
                    bgcolor: 'primary.light',
                    mb: 3,
                    p: 2,
                    '&:hover': { bgcolor: 'primary.light' }
                  }}
                >
                  <Security sx={{ fontSize: 40, color: 'primary.main' }} />
                </IconButton>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  3 Year Warranty
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  We stand behind our products with pride and guarantee their quality
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <IconButton
                  sx={{ 
                    bgcolor: 'primary.light',
                    mb: 3,
                    p: 2,
                    '&:hover': { bgcolor: 'primary.light' }
                  }}
                >
                  <LocalShipping sx={{ fontSize: 40, color: 'primary.main' }} />
                </IconButton>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Free Shipping
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                  Enjoy free worldwide shipping on all orders over $99
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
}