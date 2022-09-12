import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Badge } from "@mui/material";
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const NavAppBar = () => {

  const { cartQuantity } = useContext(CartContext)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Link className='navbar' to='/'>INFORMÁTICA</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}><Link className='navbar1' to="/">Productos</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link className='navbar1' to="/Nosotros">Nosotros</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link className='navbar1' to="/Contacto">Contacto</Link></MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h7"
            noWrap
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
          <Link className='navbar' to='/'>INFORMÁTICA</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button  onClick={handleCloseNavMenu} sx={{ my: 2 }}><Link className='navbar1' to="/">Productos</Link></Button>
              <Button  onClick={handleCloseNavMenu} sx={{ my: 2 }}><Link className='navbar1' to="/Nosotros">Nosotros</Link></Button>
              <Button  onClick={handleCloseNavMenu} sx={{ my: 2 }}><Link className='navbar1' to="/Contacto">Contacto</Link></Button>
          </Box>
          <Button><Badge badgeContent={cartQuantity()}><Link to="/Cart"><LocalGroceryStoreRoundedIcon/></Link></Badge></Button>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}><Typography>Iniciar</Typography></MenuItem>
              <MenuItem onClick={handleCloseUserMenu}><Typography>Cuenta</Typography></MenuItem>
              <MenuItem onClick={handleCloseUserMenu}><Typography>Cerrar sesión</Typography></MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default NavAppBar;