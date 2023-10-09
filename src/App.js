import React, { useState } from 'react'

import AddUser from './components/AddUser/AddUser'
import UsersList from './components/UsersList/UsersList'

function App() {
	const [newUser, setNewUser] = useState('')
	
	const show = data => {
		setNewUser(prevUsers => {
			return [...prevUsers, ...data]
		})
	}

	return (
		<div>
			<AddUser onAddUser={show} />
			{!newUser && <p>No users added</p>}
			{newUser && <UsersList userData={newUser} />}
		</div>
	)
}

export default App
