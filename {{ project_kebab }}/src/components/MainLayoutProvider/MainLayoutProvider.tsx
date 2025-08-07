import type React from 'react';
import { Box } from '@mui/material';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Nav } from '../Nav';

interface MainLayoutProviderProps {
  children: React.ReactNode;
}

export const MainLayoutProvider = ({ children }: MainLayoutProviderProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <Box sx={{ display: 'flex', flex: 1 }}>
        <Nav />

        <Box
          component="main"
          sx={{
            flex: 1,
            p: 3,
            ml: { md: '250px' }, // Account for permanent drawer width on desktop
          }}
        >
          {children}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};