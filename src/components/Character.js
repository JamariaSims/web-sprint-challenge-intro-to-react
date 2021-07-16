// Write your Character component here
import React from "react";
import styled from "styled-components";
const Title = styled.h1``;
const characterView = styled.div;
const Character = (props) => {
	const { character } = props;
	const characterData = Object.keys(character);
	return (
		<characterView>
			<Title>{character["name"]}</Title>
			{characterData.map((charData) => {
				return charData === "name" ? null : (
					<p
						className={charData + character["name"]}
					>{`${charData}: ${character[charData]}`}</p>
				);
			})}
		</characterView>
	);
};

export default Character;
