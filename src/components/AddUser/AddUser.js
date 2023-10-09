import React, { useState } from 'react'

const AddUser = props => {
	const [username, setUsername] = useState()
	const [age, setAge] = useState()

	const usernameHandler = event => {
		setUsername(event.target.value)
	}

	const ageHandler = event => {
		setAge(event.target.value)
	}

	const addUserHandler = (event) => {
        event.preventDefault()
		const NewUser = {
			username: username,
			age: age,
		}

		props.onAddUser(NewUser)
	}

	return (
		<form onSubmit={addUserHandler}>
			<input onChange={usernameHandler}></input>
			<input type='number' onChange={ageHandler}></input>
			<button>Add User</button>
		</form>
	)
}

export default AddUser
