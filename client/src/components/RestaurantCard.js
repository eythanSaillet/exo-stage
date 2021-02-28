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
			position: absolute;
			right: 0;
			width: 50px;
			height: 50px;
			background: green;
			cursor: pointer;
		}
		.photo {
			width: 100%;
			img {
				width: 100%;
			}
		}
	}
`

export default function RestaurantCard({ name, type, address, imageSource }) {
	const cardRef = useRef(null)
	const exitCross = useRef(null)

	return (
		<Container>
			<div
				className="button"
				onClick={() => {
					cardRef.current.style.visibility = 'visible'
				}}
			>
				{name}
			</div>
			<div className="card" ref={cardRef}>
				<div
					className="exitCross"
					onClick={() => {
						cardRef.current.style.visibility = 'hidden'
					}}
					ref={exitCross}
				></div>
				<div className="photo">
					<img src={imageSource} />
				</div>
				<div className="infos">
					<p className="name">{name}</p>
					<p className="type">{type}</p>
					<p className="adress">{address}</p>
				</div>
				<div className="pictos"></div>
			</div>
		</Container>
	)
}
