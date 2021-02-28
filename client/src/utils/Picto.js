import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 50px;
	height: 63px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.image {
		width: 80%;
	}
	.text {
		font-size: 15px;
	}
`

export default function Picto({ imageSource, text }) {
	return (
		<Container>
			<img src={imageSource} className="image" alt="pictogram image"></img>
			<p className="text"> {text}</p>
		</Container>
	)
}
