// import React from "react";
// import ReactDOM from "react-dom";
// // import { Link } from "react-router-dom";

// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Link from "@material-ui/core/Link";
// import SignIn from "../Signup-login/login-guide";
// // import "../App.css";

// // material ui theme for navigation styling. the palette colors won't work (wip) maybe you can figure it out tim. material.ui.com/styles/theme i believe it is. --------
// const useStyles = makeStyles(theme => ({
//   palette: {
//     primary: {
//       main: "#e0f7fa"
//     },
//     secondary: {
//       main: "#ef5350"
//     }
//   },
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

// // navigation function component. -- material ui
// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Wanderlust
//           </Typography>
//           <Button color="inherit" component="button">
//             <Link
//               component="button"
//               color="inherit"
//               aria-label="menu"
//               variant="body2"
//               onClick={() => {
//                 alert("HEY");
//               }}
//             >
//               Sign In
//             </Link>
//           </Button>
//           <Button color="inherit" component="button" href="">
//           <Link
//               component="button"
//               color="inherit"
//               aria-label="menu"
//               variant="body2"
//               onClick={() => {
//                 alert("HEY");
//               }}
//             >
//               Sign Up
//             </Link>
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }