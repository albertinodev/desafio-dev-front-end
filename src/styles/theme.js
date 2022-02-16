import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins'
  },
  palette: {
    primary: {
      main: '#F7D77F',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FAF9F7',
    },
  },
});

export default theme;