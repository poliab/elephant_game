import { useState } from 'react';
import { Counter } from '../counter/Counter';
import { Elephant } from '../elephant/Elephant';
import './Game.css';

export function Game() {
	const [activePage, setActivePage] = useState('counter')

	const handleFinish = () => { setActivePage('elephant') }
	const handleStart = () => { setActivePage('counter') }
	
	return (
		<div className="game-wrapper">
			<div className="game-card">
				{activePage === 'counter'
					&& <Counter onFinish={handleFinish} />}
				{activePage === 'elephant'
					&& <Elephant onStart={handleStart}/>}
			</div>
		</div>
	)	
}
