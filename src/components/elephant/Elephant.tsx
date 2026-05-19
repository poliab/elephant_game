import { useState } from 'react'
import Congratulations from '../congratulations/Congratulations'
import GameOver from '../gameOver/GameOver'
import './Elephant.css'

export function Elephant(props) {
	const [weight, setWeight] = useState(100) // 100 условных единиц

	const handleFeedHealthyFood = () => {
		return setWeight(weight + 20)
	}

	const handleFeedJunkFood = () => {
		return setWeight(weight - 20)
	}
 
	if (weight >= 200) {		
		return <Congratulations onStart={props.onStart} />
	}

	if (weight <= 20) {		
		return <GameOver onStart={props.onStart} />
	}

	return (
		<div>
			<div>
				<div>
					<h1 className="game-title">Покорми слона</h1>
					<p className="status-text">Размер слона: {weight}</p>

					<button className="game-btn primary" onClick={handleFeedHealthyFood}>
						Кормить слона полезной едой 🥬🍉🍌
					</button>

					<button className="game-btn danger" onClick={handleFeedJunkFood}>
						Кормить слона вредной едой 🍔🍬🍕
					</button>

					<div className="elephant" style={{ fontSize: `${weight}px` }}>🐘</div>
				</div>
			</div>
		</div>
	)
}
