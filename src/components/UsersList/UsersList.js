import React from 'react'

const UsersList = props => {
	return (
		<ul>
			<li>{props.username}</li>
			<li>{props.age}</li>
		</ul>
	)
}

export default UsersList
