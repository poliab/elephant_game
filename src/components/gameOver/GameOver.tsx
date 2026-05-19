import './GameOver.css'

function GameOver(props) {

	return (
		<div className='result-card lose-card'>
			<h2 className='result-title'>Ой-ой...</h2>
			<p className='result-text'>У твоего слоника заболел живот и вместо того чтобы играть со своими друзьями он пошел к врачу. В следующий раз корми слона правильной пищей, чтобы слоник был здоров</p>
			<button className='restart-btn' onClick={props.onStart}>
				Но не расстраивайся. Давай сыграем еще раз
			</button>
			<div className='result-emoji'>🥲</div>
		</div>
	)
}

export default GameOver