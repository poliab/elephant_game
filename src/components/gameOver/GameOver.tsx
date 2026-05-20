import './GameOver.css'
import type { RestartProps } from '../../types/game.type'

function GameOver(props: RestartProps) {

	return (
		<div className='result-card lose-card'>
			<h2 className='result-title'>Ой-ой...</h2>
			<p className='result-text'>У твого слоненя заболів животик, і замість того, щоб гратися зі своїми друзями, він пішов до лікаря. Наступного разу годуй слоненя правильною їжею, щоб воно було здоровим</p>
			<button className='restart-btn' onClick={props.onStart}>
                Але не засмучуйся. Давай зіграємо ще раз
            </button>
			<div className='result-emoji'>🥲</div>
		</div>
	)
}

export default GameOver