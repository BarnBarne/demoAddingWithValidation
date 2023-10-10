import React, { useState } from 'react'

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
import ErrorModal from './components/UI/ErrorModal'

function App() {
	const [newUser, setNewUser] = useState('')
	const [error, setError] = useState('')

	const addUserHandler = user => {
		setNewUser(prevUsers => {
			return [...prevUsers, ...user]
		})
	}

	const closeErrorHandler = () => {
		setError(null)
	}

	const errorHandler = errorMsg => {
		setError(errorMsg)
	}

	return (
		<>
			{error && <ErrorModal title={error.title} message={error.message} onCloseError={closeErrorHandler} />}
			<AddUser onAddUser={addUserHandler} onError={errorHandler} />
			{newUser && <UsersList userData={newUser} />}
		</>
	)
}

export default App
