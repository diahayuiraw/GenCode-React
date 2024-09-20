import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
    },
    secondary: {
      main: '#f50057', // Custom secondary color
    },
  },
  typography: {
    h6: {
      fontSize: '1.5rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Custom Themed App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <div style={{ padding: '20px' }}>
        <Button variant="contained" color="primary">
          Custom Primary Button
        </Button>
        <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
          Custom Secondary Button
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;