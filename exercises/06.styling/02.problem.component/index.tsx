import { createRoot } from 'react-dom/client'
import React from '#node_modules/@types/react'

// 🐨 create a component called "Box" which accepts style (defaults to {}), className (defaults to ''), and children props.

export function Box({
	style = {},
	className = '',
	...otherProps
}: React.ComponentProps<'div'>) {
	return (
		<div
			className={`box box--${className}`}
			style={{ fontStyle: 'italic', ...style }}
			{...otherProps}
		/>
	)
}



// 🐨 Make it render a div with the style, className, and children applied.
// 🐨 Also automatically add the fontStyle: 'italic' style to the style prop so consumers don't have to provide that
// 🐨 And automatically add the "box" className to the className prop so consumers don't have to provide that as well.
// 🚨 make sure to export the Box component so it can be imported in the test file.

// 💯 as a bonus, have this accept any number of additional props (typed as React.ComponentProps<'div'>)
// and apply those to the rendered div as well.

// 🐨 update all of these to use the <Box> component with the appropriate props.
const smallBox = (
	<Box
		className="small"
		style={{ backgroundColor: 'lightblue' }}
	>
		small lightblue box
	</Box>
)
const mediumBox = (
	<Box
		className='medium'
		style={{ backgroundColor: 'pink' }}
	>
		medium pink box
	</Box>
)
const largeBox = (
	<Box
		className='large'
		style={{ backgroundColor: 'orange' }}
	>
		large orange box
	</Box>
)
const sizelessColorlessBox = (
	// <div className="box" style={{ fontStyle: 'italic' }}>
	// 	sizeless colorless box
	// </div>
	<Box>
		sizeless colorless box
	</Box>
)

function App() {
	return (
		<div>
			{smallBox}
			{mediumBox}
			{largeBox}
			{sizelessColorlessBox}
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
