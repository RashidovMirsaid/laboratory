import { useState } from 'react';
import Cards from './components/Cards/Cards';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';

function App() {
	const [cards, setCards] = useState<Card[]>([]);

	const dealCards = () => {
		const deck = CardDeck.createDeck();
		const dealtCards: Card[] = [];

		for (let i = 0; i < 5; i++) {
			const card = deck.getCard();
			if (card) {
				dealtCards.push(card);
			}
		}

		setCards(dealtCards);
	};

	return (
		<div className='App'>
			<button onClick={dealCards}>Раздать карты</button>
			{cards.length > 0 && (
				<div className='playingCards faceImages'>
					{cards.map((card) => (
						<Cards suit={card.suit} rank={card.rank} />
					))}
				</div>
			)}
		</div>
	);
}

export default App;
