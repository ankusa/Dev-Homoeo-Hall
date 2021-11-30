import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useParams,useHistory} from 'react-router-dom';
import {Grid,Paper} from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import img from '../images/a1.jpg'
import img2 from '../images/a2.jpg'
import Dialog from '@material-ui/core/Dialog';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import InputUnstyled from '@mui/core/InputUnstyled';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import DirectionsIcon from '@mui/icons-material/Directions';
import BallotIcon from '@mui/icons-material/Ballot';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { alpha } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Select from '@mui/material/Select';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { BoxContainer } from '../accountBox/common';
import SecurityIcon from '@mui/icons-material/Security';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ShopSharpIcon from '@mui/icons-material/ShopSharp';
import ExtensionIcon from '@mui/icons-material/Extension';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import CancelIcon from '@mui/icons-material/Cancel';
import './Admin.css';
import CollapsibleTable from './Ordertaable';
const SliderProps = {
  zoomFactor: 8, // How much the image should zoom on hover in percent
  slideMargin: 10, // Margin on each side of slides
  maxVisibleSlides: 6,
  pageTransition: 500 // Transition when flipping pages
};



const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: '#264653',
    },
  },
  typography: {
    h5: {
      fontWeight: 450 // or 'bold'
    },
    h4:{
      fontSize:'22px',
      fontWeight:420
    }
  }
});

function AdminOrders({Id}) {
  console.log(Id);
  var history= useHistory();
  const handleDialogOpen1 = (product) => {
    history.push(`/adminorders/pending`);
  };
  const handleDialogOpen2 = (product) => {
    history.push(`/adminorders/delivered`);
  };
  const handleDialogOpen3 = (product) => {
    history.push(`/adminorders/cancelled`);
  };
    return (
      <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1}} >
      <AppBar position="static" color="secondary">
        <Toolbar>
        
        <IconButton
          size="large"
          aria-label="show 3 items"
          color="inherit"
        >
          
        <ShoppingCartSharpIcon />
          
         
        </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
          Orders
          </Typography>
          <Box>
        
          <Link to="/adminhome" className="link"> <HomeIcon fontSize="large" /> </Link>
          <Link to="/logout" className="link"> <Button variant="outlined" color="inherit">Logout</Button></Link>
          </Box>
          </Toolbar>
          </AppBar>
          <Grid sx={{ flexGrow: 1 }} container spacing={2} id="itemss">
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={10} id="griditem">
          
              <Grid item id="cardgrid">
              
               <Card sx={{ maxWidth: 250 }}  >
               <a onClick={() => handleDialogOpen1()} style={{cursor:'pointer'}}>
               <CardMedia
            component="img"
            
            image="https://icon-library.com/images/waiting-icon/waiting-icon-18.jpg"
            alt="product"
            id="carditem"
            
          />
         
          <CardContent sx={{ borderTop: 0.5,borderColor: 'grey.500' }}>
          <Typography  variant="h5" component="div" id="titlecartt">
          <AccessTimeFilledIcon />
           Pending Orders
        </Typography>
          </CardContent>
          </a>
                 </Card>
                 
              </Grid>
             
              <Grid item id="cardgrid">
              
               <Card sx={{ maxWidth: 250 }}  >
               <a onClick={() => handleDialogOpen2()} style={{cursor:'pointer'}}>
               <CardMedia
            component="img"
            
            image="https://icon2.cleanpng.com/20181206/pig/kisspng-photographic-film-computer-icons-reel-portable-net-protezione-in-tempo-reale-icon-free-download-pn-5c0959b5f25e89.9473040115441166619928.jpg"
            alt="product"
            id="carditem"
            
          />
         
          <CardContent sx={{ borderTop: 0.5,borderColor: 'grey.500' }}>
          <Typography  variant="h5" component="div" id="titlecartt">
          <CheckCircleIcon />
           Delivered Orders
        </Typography>
          </CardContent>
          </a>
                 </Card>
                 
              </Grid>
              
             <Grid item id="cardgrid">
              
             <Card sx={{ maxWidth: 250 }}  >
             <a onClick={() => handleDialogOpen3()} style={{cursor:'pointer'}}>
             <CardMedia
          component="img"
           
          image="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/0/1036.10-cancel-order-icon-iconbunny.jpg"
          alt="product"
          id="carditem"
          
        />
       
        <CardContent sx={{ borderTop: 0.5,borderColor: 'grey.500' }}>
        <Typography  variant="h5" component="div" id="titlecartt">
        <CancelIcon />
         Cancelled Orders
      </Typography>
        </CardContent>
        </a>
               </Card>
               
            </Grid>
            </Grid>
          </Grid>
          </Grid>
      </Box>
      </ThemeProvider>
    );
  }

export default AdminOrders