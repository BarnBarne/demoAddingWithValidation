import React, { useState } from 'react'

import styles from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'

const AddUser = props => {
	const [username, setUsername] = useState('')
	const [age, setAge] = useState('')

	const usernameHandler = event => {
		setUsername(event.target.value)
	}

	const ageHandler = event => {
		setAge(event.target.value)
	}

	const addUserHandler = event => {
		event.preventDefault()
		if (username.trim().length === 0 || age.length === 0) {
			props.onError({
				title: 'input valid age or username',
				message: 'Please enter a valid age or username (non-empty values)',
			})
			return
		}

		if (+age > 150) {
			props.onError({
				title: 'Invalid age',
				message: 'Please enter a valid age (max age is 150)',
			})
			return
		}

		if (+age < 1) {
			props.onError({
				title: 'Invalid age',
				message: 'Please enter a valid age (age must be greater than 0)',
			})
			return
		}

		const NewUser = [
			{
				username: username,
				age: age,
			},
		]

		props.onAddUser(NewUser)
		setUsername('')
		setAge('')
	}

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input id='username' type='text' value={username} onChange={usernameHandler}></input>
				<label htmlFor='age'>Age (Years)</label>
				<input id='age' type='number' value={age} onChange={ageHandler}></input>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
