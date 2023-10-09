import React, { useState } from 'react'

import AddUser from './components/AddUser/AddUser'
import UsersList from './components/UsersList/UsersList'

function App() {
	const [newUser, setNewUser] = useState()
	const show = data => {
		setNewUser(data)
	}

	return (
		<div>
			<AddUser onAddUser={show} />
			{newUser && <UsersList username={newUser.username} age={newUser.age} />}
		</div>
	)
}

export default App
