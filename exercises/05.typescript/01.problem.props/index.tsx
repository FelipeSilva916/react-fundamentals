import { createRoot } from 'react-dom/client'

const operations = {
	'+': (left: number, right: number): number => left + right,
	'-': (left: number, right: number): number => left - right,
	'*': (left: number, right: number): number => left * right,
	'/': (left: number, right: number): number => left / right,
}

// 🦺 create a type called CalculatorProps
type CalculatorProps = {
	left?: number,
	right?: number,
	operator?: keyof typeof operations,
}

// 🦺 set the type for this props argument to CalculatorProps
function Calculator({ left = 0, operator = '+', right = 0 }: CalculatorProps) {
	const result = operations[operator](left, right)
	return (
		<div>
			<code>
				{left} {operator} {right} = <output>{result}</output>
			</code>
		</div>
	)
}

function App() {
	return (
		<div>
			<h1>Calculator</h1>
			<Calculator />
			<Calculator left={1} right={2} />
			<Calculator left={1} operator="*" right={2} />
			<Calculator operator="/" right={2} />
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
