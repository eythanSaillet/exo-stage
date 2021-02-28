import styled from 'styled-components'

import RestaurantCard from './components/RestaurantCard'

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
				<RestaurantCard />
			</div>
			<div className="cardContainer card2">
				<RestaurantCard />
			</div>
		</Container>
	)
}

export default App
