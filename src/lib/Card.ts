class Card {
	suit: 'diams' | 'spades' | 'hearts' | 'clubs';
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
	constructor(
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
			| 'A',
		suit: 'diams' | 'spades' | 'hearts' | 'clubs'
	) {
		this.suit = suit;
		this.rank = rank;
	}
}
export default Card;
