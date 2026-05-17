import { useState } from 'react';
import { Counter } from './Counter';
import { Elephant } from './Elephant';


export function Game() {
	const [activePage, setActivePage] = useState('counter')

	const handleFinish = () => { setActivePage('elephant') }
	const handleStart = () => {setActivePage('counter')}
	
	return (
		<div>
			{activePage === 'counter'
				&& <Counter onFinish={handleFinish} />}
			{activePage === 'elephant'
				&& <Elephant onStart={handleStart}/>}
		</div>
	)	
}
