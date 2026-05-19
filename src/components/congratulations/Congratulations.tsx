import './Congratulations.css'

function Congratulations(props) {

	return <div className='result-card win-card'>
		<h2 className='result-title'>🎉 Победа!</h2>
		<p className='result-text'>
			Поздравляю! Твой слон наелся здоровой пищи и с улыбкой побежал играть с другими слонами🎉
		</p>
		<button className='restart-btn' onClick={props.onStart}>
			Давай сыграем еще раз и покормим другого слона
		</button>
		<div className='result-emoji'>😊</div>
	</div>
}

export default Congratulations