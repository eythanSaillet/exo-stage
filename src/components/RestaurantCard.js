import React, { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	.button {
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 10px;
		padding: 8px 15px;
		font-size: 22px;
		background: pink;
		cursor: pointer;
		transform: translate(-50%, -50%);
	}
	.card {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 300px;
		height: 500px;
		background: red;
		transform: translate(-50%, -50%);
		visibility: hidden;
		.exitCross {
			width: 50px;
			height: 50px;
			background: green;
			cursor: pointer;
		}
	}
`

export default function RestaurantCard() {
	const cardRef = useRef(null)
	const exitCross = useRef(null)

	// function openCard() {
	// 	const cardStyle = getComputedStyle(cardRef.current)
	// 	console.log(cardStyle.current)
	// 	if (cardStyle.visibility === 'hidden') {
	// 		cardRef.current.style.visibility = 'visible'
	// 	} else {
	// 		cardRef.current.style.visibility = 'hidden'
	// 	}
	// }

	return (
		<Container>
			<div
				className="button"
				onClick={() => {
					cardRef.current.style.visibility = 'visible'
				}}
			>
				Bonjour
			</div>
			<div className="card" ref={cardRef}>
				<div
					className="exitCross"
					onClick={() => {
						cardRef.current.style.visibility = 'hidden'
					}}
					ref={exitCross}
				></div>
			</div>
		</Container>
	)
}
