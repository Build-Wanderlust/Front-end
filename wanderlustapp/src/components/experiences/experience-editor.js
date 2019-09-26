
// form template to use for experience editor


// import React, { isValidElement } from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import NameIcon from "@material-ui/icons/SupervisorAccount";
// import LockIcon from "@material-ui/icons/Lock";
// import EmailIcon from "@material-ui/icons/Email";

// export const Form = props => {
// 	const {
// 		values: { name, email, password, confirmPassword },
// 		errors,
// 		touched,
// 		handleSubmit,
// 		handleChange,
// 		isValid,
// 		setFieldTouched
// 	} = props;
// 	console.table(props);

// 	const change = (name, e) => {
// 		e.persist();
// 		handleChange(e);
// 		setFieldTouched(name, true, false);
//     };
    
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<TextField
// 				name="name"
// 				helperText={touched.name ? errors.name : ""}
// 				error={Boolean(errors.name)}
// 				label="Name"
// 				value={name}
// 				onChange={handleChange}
// 				fullWidth
// 				InputProps={{
// 					startAdornment: (
// 						<InputAdornment position="start">
// 							<NameIcon />
// 						</InputAdornment>
// 					)
// 				}}
// 			/>
// 			<div>{Boolean(errors.name) ? errors.name : ""}</div>
// 			<TextField
// 				name="email"
// 				helperText={touched.email ? errors.email : ""}
// 				error={Boolean(errors.email)}
// 				label="Email"
// 				fullWidth
// 				value={email}
// 				onChange={handleChange}
// 				InputProps={{
// 					startAdornment: (
// 						<InputAdornment position="start">
// 							<EmailIcon />
// 						</InputAdornment>
// 					)
// 				}}
// 			/>
// 			<div>{Boolean(errors.email) ? errors.email : ""}</div>
// 			<TextField
// 				name="password"
// 				helperText={touched.password ? errors.password : ""}
// 				error={Boolean(errors.password)}
// 				label="Password"
// 				fullWidth
// 				type="password"
// 				value={password}
// 				onChange={handleChange}
// 				InputProps={{
// 					startAdornment: (
// 						<InputAdornment position="start">
// 							<LockIcon />
// 						</InputAdornment>
// 					)
// 				}}
// 			/>
// 			<div>{errors.password}</div>
// 			<TextField
// 				name="confirmPassword"
// 				helperText={touched.confirmPassword ? errors.confirmPassword : ""}
// 				error={Boolean(errors.confirmPassword)}
// 				label="Confirm Password"
// 				fullWidth
// 				type="password"
// 				value={confirmPassword}
// 				onChange={handleChange}
// 				InputProps={{
// 					startAdornment: (
// 						<InputAdornment position="start">
// 							<LockIcon />
// 						</InputAdornment>
// 					)
// 				}}
// 			/>
//             {/* create path to new user homepage nav layout. */}
// 			<div>{errors.confirmPassword}</div>
// 			<Button
// 				type="submit"
// 				fullWidth
// 				variant="raised"
// 				color="primary"
// 				disabled={!isValid}
// 			>
// 				Sign Up
// 			</Button>
            
// 		</form>
// 	);
// };


///////////////////////index.js
// import React, { Component } from "react";
// import { Formik } from "formik";
// import withStyles from "@material-ui/core/styles/withStyles";
// import { Form } from "./SignInA";
// import Paper from "@material-ui/core/Paper";
// import * as Yup from "yup";
// import 'index.css';
// const styles = theme => ({
//   paper: {
//     marginTop: theme.spacing.unit * 8,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
//       .spacing.unit * 5}px`
//   },
//   container: {
//     maxWidth: "200px"
//   }
// });

// const validationSchema = Yup.object({
//   name: Yup.string("Enter a name").required("Name is required"),
//   email: Yup.string("Enter your email")
//     .email("Enter a valid email")
//     .required("Email is required"),
//   password: Yup.string("")
//     .min(8, "Password must contain atleast 8 characters")
//     .required("Enter your password"),
//   confirmPassword: Yup.string("Enter your password")
//     .required("Confirm your password")
//     .oneOf([Yup.ref("password")], "Password does not match")
// });

// class InputForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   submit = data => {
//     console.log(data);
//   };

//   render() {
//     const classes = this.props;
//     const values = { name: "", email: "", confirmPassword: "", password: "" };
//     return (
//       <div className="SignInPage">
//         <React.Fragment>
//           <div className={classes.container}>
//             <Paper elevation={1} className={classes.paper}>
//               <h1>Sign In</h1>
//               <Formik
//                 render={props => <Form {...props} />}
//                 initialValues={values}
//                 validationSchema={validationSchema}
//                 onSubmit={this.submit}
//               />
//             </Paper>
//           </div>
//         </React.Fragment>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(InputForm);

