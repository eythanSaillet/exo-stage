import React, { useRef } from 'react'
import styled from 'styled-components'

import Picto from '../utils/Picto'
import CloseCross from '../assets/close.svg'
import RestaurantPicto from '../assets/restaurant.svg'

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
		background: lightblue;
		cursor: pointer;
		transform: translate(-50%, -50%);
	}
	.card {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 300px;
		height: 500px;
		transform: translate(-50%, -50%);
		visibility: hidden;
		background: white;
		border: 1px solid black;
		.exitCross {
			position: absolute;
			right: 0;
			width: 25px;
			height: 25px;
			margin: 10px;
			cursor: pointer;
			img {
				width: 100%;
			}
		}
		.photo {
			width: 100%;
			margin-top: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				width: 80%;
			}
		}
		.infos {
			padding: 15px 25px 20px 25px;
			p {
				margin: 10px;
			}
			.name {
				font-size: 25px;
			}
			.type {
				font-size: 20px;
				color: darkgrey;
			}
			.address {
				font-size: 22px;
			}
		}
		.pictos {
			display: flex;
			justify-content: space-between;
			width: calc(100% - 40px);
			padding: 0 20px;
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
				>
					<img src={CloseCross} alt="close button image" />
				</div>
				<div className="photo">
					<img src={imageSource} alt="restaurant image" />
				</div>
				<div className="infos">
					<p className="name">{name}</p>
					<p className="type">{type}</p>
					<p className="adress">{address}</p>
				</div>
				<div className="pictos">
					<Picto imageSource={RestaurantPicto} text="Carnivore" />
					<Picto imageSource={RestaurantPicto} text="Tradi" />
					<Picto imageSource={RestaurantPicto} text="Locale" />
				</div>
			</div>
		</Container>
	)
}
