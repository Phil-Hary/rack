import React, {useReducer, createContext, useEffect, useState} from 'react';

let initialState = {
	user: {
		name: "",
		email: ""
	},
	isLoggedIn: false
}

const reducer = (state, action) => {
	switch(action.type) {
		case "LOGIN": 
			return {
				user: {
					name: action.payload.name,
					email: action.payload.email,
				},
				isLoggedIn: action.payload.isLoggedIn
			}
		}
		return state;
}

const RackContext = createContext();

const RackProvider = (props) => {

	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const name = window.localStorage.getItem('user');
		const email = window.localStorage.getItem('email');
		const isLoggedIn = window.localStorage.getItem('isLoggedIn');

		initialState = {
			user: {
				name: name || initialState.user.name,
				email: email || initialState.user.email,
			},
			isLoggedIn: isLoggedIn || initialState.isLoggedIn
		}

		setLoading(false)

	});

	const [rackState, dispatch] = useReducer(reducer, initialState);

	const actions = {
		loginUser: (name, email, isLoggedIn) => {
			dispatch({
				type: "LOGIN",
				payload: {
					name,
					email,
					isLoggedIn
				}
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