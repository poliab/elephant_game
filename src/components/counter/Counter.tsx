import { useState } from 'react';
import './Counter.css';

export function Counter(props) {
	const [value, setValue] = useState(1)
	const handleClick = () => {
		setValue(value + 1)
		if (value + 1 === 5 && props.onFinish) {
			props.onFinish()
		}
	}
	return (
		<div>
			<h3 className="game-title">Мини-игра</h3>
			<p className="game-text">Нажми на кнопку 5 раз, чтобы увидеть слона</p>
			<button className="game-btn restart" onClick={handleClick}>+ {value}</button>
		</div>
	);
}
