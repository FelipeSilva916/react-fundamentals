import { createRoot } from 'react-dom/client'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div
	className='box box--small'
	style={{ fontStyle: 'italic', backgroundColor: 'lightblue' }}
> small lightblue box</div >
const mediumBox = <div
	className='box box--medium'
	style={{ fontStyle: 'italic', backgroundColor: 'pink' }}
>medium pink box</div>
const largeBox = <div
	className='box box--large'
	style={{ fontStyle: 'italic', backgroundColor: 'orange' }}
>large orange box</div>

// 💰 the sizelessColorlessBox should still be a box, just with no size or color
const sizelessColorlessBox = <div
	className='box'
	style={{ fontStyle: 'italic' }}
>sizeless colorless box</div>

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
