import React, { useRef } from 'react'

import styles from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'

const AddUser = props => {
	const nameInputRef = useRef()
	const ageInputRef = useRef()

	const addUserHandler = event => {
		event.preventDefault()
		const enteredName = nameInputRef.current.value
		const enteredAge = ageInputRef.current.value
		if (enteredName.trim().length === 0 || enteredAge.length === 0) {
			props.onError({
				title: 'input valid age or username',
				message: 'Please enter a valid age or username (non-empty values)',
			})
			return
		}

		if (+enteredAge > 150) {
			props.onError({
				title: 'Invalid age',
				message: 'Please enter a valid age (max age is 150)',
			})
			return
		}

		if (+enteredAge < 1) {
			props.onError({
				title: 'Invalid age',
				message: 'Please enter a valid age (age must be greater than 0)',
			})
			return
		}

		const NewUser = [
			{
				username: enteredName,
				age: enteredAge,
			},
		]

		props.onAddUser(NewUser)
		nameInputRef.current.value = ''
		ageInputRef.current.value = ''
	}

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				{/* uncontrolled component */}
				<input id='username' type='text' ref={nameInputRef}></input>
				<label htmlFor='age'>Age (Years)</label>
				{/* uncontrolled component */}
				<input id='age' type='number' ref={ageInputRef}></input>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
