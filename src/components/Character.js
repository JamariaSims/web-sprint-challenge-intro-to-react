// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {
	const { character } = props;
	const Div = styled.div`
		position: relative;
		display: flex;
		flex-direction: column;
	`;
	const DivDrop = styled.div`
		position: relative;
		display: block;
	`;
	const H1 = styled.h1``;
	const P = styled.p``;
	return (
		<Div className={character["name"]}>
			<H1>{`${character["name"]}`}</H1>
			<DivDrop className="drop-menu">
				<P>{`${character["gender"]}`}</P>
				<P>{`${character["height"]}`}</P>
				<P>{`${character["mass"]}`}</P>
				<P>{`${character["birth_year"]}`}</P>
				<P>{`${character["eye-color"]}`}</P>
				<P>{`${character["hair_color"]}`}</P>
				<P>{`${character["skin_color"]}`}</P>
			</DivDrop>
		</Div>
	);
};
export default Character;
