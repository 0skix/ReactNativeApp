import React, { useState, useContext } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Button, Overlay, Card } from "react-native-elements";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { CoursesContext } from "../contexts/CoursesContext";
import { StyledContainer, StyledText1 } from "./Welcome";

const Whaling = () => {
	const { progress, setProgress, checked, setChecked, cWhaling, setcWhaling } =
		useContext(CoursesContext);
	const text = [
		"• Whaling – atak phishingowy nakierowany na osoby decyzyjne wyższego szczebla.",
		"• Whaling nie jest wysyłanym na ślepo spamem. Jest zaplanowanym atakiem na konkretne osoby, zazwyczaj będące członkami działów	finansowych dużych korporacji.",
		"• Ataki typu whaling są stosunkowo trudne do wykonania, ale przynoszą hakerom największe korzyści. Prezesi firm i członkowie zarządu są uprzywilejowani w kwestii dostępu do danych: mają dostęp do praktycznie każdego zasobu firmy i w przeciwieństwie do średniego szczebla pracowników, nie obejmuje ich konteneryzacja informacji.",
		"• Hakerzy przygotowują się do ataku i skrupulatnie wyczekują momentu do ataku, wykorzystują momenty w których osoby decyzyjne są poza obszarem firmy, np. na wyjazdach służbowych co zwiększa szansę na powodzenie ataku.",
		"• Warto w wypadku podejrzanych sytuacji skontaktować się z piszącą donas osobą inną drogą niż mailową np. poprzez telefon komórkowy. Osoby próbujące wyłudzić dane lub pieniądze mogą próbować utrzymać kontakt mailowy, co wyda się podejrzane i zwiększy szansę na obronienie się przed whalingiem.",
	];
	return (
		<FlatList
			data={text}
			renderItem={({ item, index }) => (
				<>
					<Card>
						<StyledText1 style={{ marginBottom: 5 }}>{item}</StyledText1>
						<CheckBox
							center
							title="Odznacz sekcje"
							checkedIcon="dot-circle-o"
							uncheckedIcon="circle-o"
							iconRight
							checked={cWhaling[index]}
							onPress={() => {
								if (cWhaling[index] === false) {
									setcWhaling((prevState) => {
										let result = prevState;
										result[index] = true;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[0] = cWhaling.reduce(
											(acc, curr) => (curr === true ? acc + 0.2 : acc),
											0
										);
										return [...result];
									});
								} else if (cWhaling[index] === true) {
									setcWhaling((prevState) => {
										let result = prevState;
										result[index] = false;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[0] = cWhaling.reduce(
											(acc, curr) => (curr === true ? acc + 0.2 : acc),
											0
										);
										return [...result];
									});
								}
							}}
						/>
					</Card>
				</>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default Whaling;
