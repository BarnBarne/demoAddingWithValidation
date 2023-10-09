import React from 'react'

import styles from './UsersList.module.css'
import Card from '../UI/Card'

const UsersList = props => {
	const usersList = props.userData.map(user => (
		<li key={user.username + user.age + Math.random()}>
			{user.username} ({user.age} years old)
		</li>
	))

	return (
		<Card className={styles.users}>
			<ul>{usersList}</ul>
		</Card>
	)
}

export default UsersList
