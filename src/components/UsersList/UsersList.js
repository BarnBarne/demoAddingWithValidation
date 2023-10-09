import React from 'react'

const UsersList = props => {
	const usersList = props.userData.map(user => (
		<li>
			{user.username} ({user.age} years old)
		</li>
	))

	return <ul>{usersList}</ul>
}

export default UsersList
