import './Congratulations.css'
import type { RestartProps } from '../../types/game.type'

function Congratulations(props: RestartProps) {

	return <div className='result-card win-card'>
		<h2 className='result-title'>🎉 Перемога!</h2>
        <p className='result-text'>
            Вітаю! Твій слон наївся здорової їжі та з посмішкою побіг гратися з іншими слонами🎉
        </p>
		<button className='restart-btn' onClick={props.onStart}>
            Давай зіграємо ще раз і нагодуємо іншого слона
        </button>
		<div className='result-emoji'>😊</div>
	</div>
}

export default Congratulations