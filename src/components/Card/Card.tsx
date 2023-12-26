import React from 'react';

interface CardProps {
	suit: 'diams' | 'hearts' | 'spades' | 'clubs';
	rank: string;
}

const Card: React.FC<CardProps> = (props) => {
	const suitMarks = (suit: string) => {
		switch (suit) {
			case 'diams':
				return '♦';
			case 'hearts':
				return '♥';
			case 'spades':
				return '♠';
			case 'clubs':
				return '♣';
			default:
				return '';
		}
	};

	return (
		<div className='Card'>
			<div className='playingCards faceImages'>
				<span className={`card rank-${props.rank} ${props.suit}`}>
					<span className='rank'>{props.rank}</span>
					<span className='rank'>{suitMarks(props.suit)}</span>
				</span>
			</div>
		</div>
	);
};

export default Card;
