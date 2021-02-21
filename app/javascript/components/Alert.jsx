import React, { useContext } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {RackContext} from '../store'; 


const Alert = (props) => {
	const { rackState, rackActions } = useContext(RackContext);

	const { alert } = rackState;
	const { isVisible, message, severity } = alert;

	console.log({rackState});

	return (
		<Snackbar
			open={isVisible} 
			autoHideDuration={6000}
			onClose={rackActions.closeAlert}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
		>
			<MuiAlert elevation={6} variant="filled" onClose={rackActions.closeAlert} severity={severity}>
			  {message}
			</MuiAlert>
		</Snackbar>
	)
}

export default Alert;
