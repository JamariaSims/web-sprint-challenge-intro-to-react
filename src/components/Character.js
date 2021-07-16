// Write your Character component here
import React from "react";
import styled from "styled-components";
const Title = styled.h1``;
const Character = (props) => {
	const { character } = props;
	const characterData = Object.keys(character);
	return (
		<div>
			<Title>{character[characterData[0]]}</Title>
			<div>
				<ul>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[1]]}
					</ol>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[2]]}
					</ol>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[3]]}
					</ol>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[4]]}
					</ol>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[5]]}
					</ol>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[6]]}
					</ol>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[7]]}
					</ol>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[8]]}
					</ol>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[9]]}
					</ol>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[10]]}
					</ol>
					<ol key={Math.floor(Math.random() * 1000)}>
						{character[characterData[11]]}
					</ol>
				</ul>
			</div>
		</div>
	);
};

export default Character;
