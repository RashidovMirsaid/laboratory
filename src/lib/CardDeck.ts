import Card from './Card';

class CardDeck {
	private allCards: Card[] = [];

	private constructor() {}

	static createDeck(): CardDeck {
		const deck = new CardDeck();

		const ranks = [
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'j',
			'q',
			'k',
			'a',
		];
		const suits: ('diams' | 'hearts' | 'clubs' | 'spades')[] = [
			'diams',
			'hearts',
			'clubs',
			'spades',
		];

		for (const suit of suits) {
			for (const rank of ranks) {
				const card = new Card(rank, suit);
				deck.allCards.push(card);
			}
		}

		return deck;
	}

	private getRandom(): number {
		return Math.floor(Math.random() * this.allCards.length);
	}

	getCard(): Card | undefined {
		const random = this.getRandom();
		return this.allCards.splice(random, 1)[0];
	}

	getCards(howMany: number): Card[] {
		const cards: Card[] = [];
		for (let i = 0; i < howMany; i++) {
			const random = this.getRandom();
			const randomCard = this.allCards.splice(random, 1)[0];
			if (randomCard) {
				cards.push(randomCard);
			}
		}
		return cards;
	}
}
export default CardDeck;
