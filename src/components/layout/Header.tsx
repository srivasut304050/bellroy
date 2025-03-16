import { AppBar, Toolbar, Typography, Button, IconButton, Container, Box } from '@mui/material';
import { ShoppingBagOutlined, MenuOutlined, SearchOutlined, PersonOutline } from '@mui/icons-material';
import Link from 'next/link';

const Header = () => {
  const menuItems = [
    { label: 'Wallets', href: '/wallets' },
    { label: 'Bags', href: '/bags' },
    { label: 'Accessories', href: '/accessories' }
  ];

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { sm: 'none' } }}
            >
              <MenuOutlined />
            </IconButton>

            <Link href="/" passHref>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: 'black',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                BELLROY
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <Button
                  color="inherit"
                  sx={{
                    color: 'black',
                    '&:hover': {
                      bgcolor: 'transparent',
                      color: 'primary.main'
                    }
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton color="inherit" aria-label="search">
              <SearchOutlined />
            </IconButton>
            <IconButton color="inherit" aria-label="account">
              <PersonOutline />
            </IconButton>
            <IconButton color="inherit" aria-label="shopping bag">
              <ShoppingBagOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;