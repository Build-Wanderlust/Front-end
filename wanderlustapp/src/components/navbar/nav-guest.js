import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Link from '@material-ui/core/Link';

// import "../App.css";

// material ui theme for navigation styling. the palette colors won't work (wip) maybe you can figure it out tim. material.ui.com/styles/theme i believe it is. --------
const useStyles = makeStyles(theme => ({
  palette: {
    primary: {
      main: '#e0f7fa',
    },
    secondary: {
      main: '#ef5350',
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// navigation function component. -- material ui
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Wanderlust
          </Typography>
          <Button color="inherit" component="button">
          {/* <SignIn /> */}
          Sign In
          </Button>
          <Button color="inherit" component="button" href="">
          Sign Up
          </Button>

        </Toolbar>
      </AppBar>

    </div>
  );
}
//////////////////// //////////////////// //////////////////// //////////////////// second material ui navigation with tabs. 

// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`nav-tabpanel-${index}`}
//       aria-labelledby={`nav-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `nav-tab-${index}`,
//     'aria-controls': `nav-tabpanel-${index}`,
//   };
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={event => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function NavTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Tabs
//           variant="fullWidth"
//           value={value}
//           onChange={handleChange}
//           aria-label="nav tabs example"
//         >
//           <LinkTab label="Page One" href="/SignIn" {...a11yProps(0)} />
//           <LinkTab label="Page Two" href="/SignUp" {...a11yProps(1)} />
//           <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         Page One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Page Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Page Three
//       </TabPanel>
//     </div>
//   );
// }
