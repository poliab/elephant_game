import { useState } from 'react';
import './Counter.css';
import type { CounterProps } from '../../types/game.type'

export function Counter(props: CounterProps) {
	const [value, setValue] = useState(1)
	const handleClick = () => {
		setValue(value + 1)
		if (value + 1 === 5 && props.onFinish) {
			props.onFinish()
		}
	}
	return (
		<div>
			<h3 className="game-title">Міні-гра</h3>
            <p className="game-text">Натисни на кнопку 5 разів, щоб побачити слона</p>
			<button className="game-btn restart" onClick={handleClick}>+ {value}</button>
		</div>
	);
}
