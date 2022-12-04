// import {Typography} from '@mui/material'
import NavBar from './Component/NavBar';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import Body from './Component/Body';
import { Container } from '@mui/system';
import CakeSection from './Component/CakeSection';
import ContactUs from './Component/ContactUs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});


function App() {
  return (
     <>
     <ThemeProvider theme={theme}>
     {/* <Typography variant="h1" backgroundColor="green"> I am Heading</Typography> */}
     <NavBar/>
     <Container>
     <Body/>
     </Container>
     <CakeSection/>
     <ContactUs/>
     </ThemeProvider>
     </>
  );
}

export default App;
