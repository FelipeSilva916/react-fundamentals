import { createRoot } from 'react-dom/client'

export function Box({
	// 💯 you can keep the style and className props here, but you can make this
	// still work if you remove them. Give that a shot if you want.
	style = {},
	className = '',
	// 🐨 add a size prop here
	size,
	...otherProps // 🦺 intersect (&) this with an object that has a size prop type here which is
	// optional and is one of "small", "medium", or "large"
}: React.ComponentProps<'div'> & { size?: 'small' | 'medium' | 'large' }) {
	// 🐨 based on the size prop, define a new variable called sizeClassName
	return (
		<div
			// 🐨 add the sizeClassName to the className prop
			// 💯 for something extra, handle the case where no className is given (remove extra spaces).

			className={`box box--${size}`}
			style={{ fontStyle: 'italic', ...style }}
			{...otherProps}
		/>
	)
}

function App() {
	return (
		<div>
			{/* 🐨 update all these boxes to use the size prop */}
			<Box style={{ backgroundColor: 'lightblue' }}
				size='small'
			>
				small lightblue box
			</Box>
			<Box style={{ backgroundColor: 'pink' }}
				size='medium'
			>
				medium pink box
			</Box>

			<Box
				size='large'
				style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
