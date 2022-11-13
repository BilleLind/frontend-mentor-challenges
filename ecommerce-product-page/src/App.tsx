import Navigation from './components/Navigation'
import { useState } from 'react'
function App() {
	const [open, setOpen] = useState<boolean>(false)

	const openMenu = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	return (
		<div >
			<Navigation open={open} openMenu={openMenu} />
			<h2>dsada</h2>
		</div>
	)
}

export default App
