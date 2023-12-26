import React from 'react';

interface CardProps {
	suit: 'diams' | 'hearts' | 'spades' | 'clubs';
	rank:
		| '2'
		| '3'
		| '4'
		| '5'
		| '6'
		| '7'
		| '8'
		| '9'
		| '10'
		| 'J'
		| 'Q'
		| 'K'
		| 'A';
}

const Card: React.FC<CardProps> = (props) => {
	return (
		<div className='Card'>
			<div className='playingCards faceImages'>
				<span className={`card rank-${props.rank} ${props.suit}`}>
					<span className='rank'>${props.rank}</span>
					<span className='rank'>${props.suit}</span>
				</span>
			</div>
		</div>
	);
};

export default Card;
