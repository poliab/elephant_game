import { useState } from 'react'

export function Elephant(props) {
	const [weight, setWeight] = useState(100) // 100 условных единиц


	const handleFeedHealthyFood = () => {
		return setWeight(weight + 20)
	}

	const handleFeedJunkFood = () => {
		return setWeight(weight - 20)
	}

	return (
		<div>
			<div>
				<div>
					<h1>Покорми слона</h1>
					<button onClick={handleFeedHealthyFood}>Кормить слона полезной едой 🥬🍉🍌</button>
					<br />
					<button onClick={handleFeedJunkFood}>Кормить слона вредной едой 🍔🍬🍕</button>
					<div style={{ fontSize: `${weight}px` }}>🐘</div>
					<button onClick={() => { props.onStart() }}>Давай сыграем еще раз</button>
				</div>
			</div>
		</div>
	)
}
