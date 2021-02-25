import React, {useReducer, createContext, useEffect, useState} from 'react';

let initialState = {
	user: {
		name: "",
		email: ""
	},
	isLoggedIn: false,
	alert: {
		isVisible: false,
		message: "",
		severity: ""
	}
}

const reducer = (state, action) => {
	switch(action.type) {
		case "LOGIN": 
			return {
				... state,
				user: {
					name: action.payload.name,
					email: action.payload.email,
				},
				isLoggedIn: action.payload.isLoggedIn
			}

		case "DISPLAY_ALERT":
			const {message, severity} = action.payload;
			return {
				...state,
				alert: {
					...state.alert,
					isVisible: true,
					message,
					severity
				}
			}

		case "CLOSE_ALERT":
			return {
				...state,
				alert: {
					...state.alert,
					isVisible: false
				}
			}

		case "LOGOUT":
			return {
				...state,
				user: {
					name: "",
					email: ""
				},
				isLoggedIn: false,

			}

		return state;
		}
}

const RackContext = createContext();

const RackProvider = (props) => {

	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const name = window.localStorage.getItem('user');
		const email = window.localStorage.getItem('email');
		const isLoggedIn = window.localStorage.getItem('isLoggedIn') === "true";


		console.log("Calling useEffect");
		console.log({name, email, isLoggedIn})

		initialState = {
			user: {
				name: name || initialState.user.name,
				email: email || initialState.user.email,
			},
			isLoggedIn: isLoggedIn || initialState.isLoggedIn
		}

		setLoading(false)

	}, []);

	const [rackState, dispatch] = useReducer(reducer, initialState);

	const actions = {
		loginUser: (email, name, isLoggedIn) => {
			dispatch({
				type: "LOGIN",
				payload: {
					name,
					email,
					isLoggedIn
				}
			})
		},

		displayAlert: (message, severity) => {
			dispatch({
				type: "DISPLAY_ALERT",
				payload: {
					message,
					severity
				}
			})
		},

		closeAlert: () => {
			dispatch({
				type: "CLOSE_ALERT",
			})
		},

		logoutUser: () => {
			dispatch({
				type: "LOGOUT",
			})
		}

	}

	return(
		!isLoading && (
			<RackContext.Provider value={{ rackState, rackActions: actions}} >
				{ props.children}
			</RackContext.Provider>)
		) 
}

export { RackContext, RackProvider};