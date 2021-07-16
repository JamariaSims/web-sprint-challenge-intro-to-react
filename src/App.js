import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";
import styled from "styled-components";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [character, setCharacter] = useState([]);
	useEffect(() => {
		axios.get("https://swapi.dev/api/people").then((response) => {
			setCharacter(response.data);
		});
	}, []);

	return (
		<div className="App">
			<div className="characters">
				{character.map((char) => (
					<Character character={char} />
				))}
			</div>
		</div>
	);
};

export default App;
