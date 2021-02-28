import styled from 'styled-components'

import RestaurantCard from './components/RestaurantCard'
import Dumbo from './assets/dumbo.png'
import Bouillon47 from './assets/bouillon47.png'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	.cardContainer {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

function App() {
	return (
		<Container>
			<div className="cardContainer card1">
				<RestaurantCard name="Dumbo" type="Burgers" address="30 rue de Turenne, 75003 Paris" imageSource={Dumbo} />
			</div>
			<div className="cardContainer card2">
				<RestaurantCard name="Bouillon 47" type="Gastro tradi" address="10 boulevard Port-Royal, 75013 Paris" imageSource={Bouillon47} />
			</div>
		</Container>
	)
}

export default App
