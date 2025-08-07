import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Home, Info, ContactMail } from '@mui/icons-material';
import { useState } from 'react';

const navItems = [
  { text: 'Home', icon: <Home />, path: '/' },
  { text: 'About', icon: <Info />, path: '/about' },
  { text: 'Contact', icon: <ContactMail />, path: '/contact' },
];

export const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    );
  }

  return (
    <Box component="nav" sx={{ display: { xs: 'none', md: 'block' } }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            position: 'relative',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};