import { createRoot } from 'react-dom/client'

function App() {
	return (
		<form action="api/onboarding">
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
				<label htmlFor="passwordInput">Password:</label>
				<input type='password' name='password' />
				<label htmlFor="ageInput">Age:</label>
				<input type='number' min={0} max={200} />
				<label htmlFor="photoInput">Photo:</label>
				<input type='file' accept='image/*' />
				<label htmlFor="colorInput">Color:</label>
				<input type='color' />
				<label htmlFor="startDateInput">Start Date:</label>
				<input type='date' />
			</div>
			{/* 🐨 add appropriate inputs for:
				- password
				- age (accepting numbers from 0 to 200)
				- photo (restricts the input to only accept image files)
				- color
				- startDate
			 */}
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
