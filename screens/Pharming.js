import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { CoursesContext } from "../contexts/CoursesContext";
import { StyledText1 } from "./Welcome";
const Pharming = () => {
	const { progress, setProgress, cPharming, setcPharming } =
		useContext(CoursesContext);

	const text = [
		"• Pharming – oszustwo, polegające na modyfikacji adresu www w celu przekierowania użytkownika na fałszywą strone.",
		"• Aby ta technika mogła zadziałać potrzebne jest przeprowadzenie dodatkowego ataku na urządzenie potencjalnej ofiary, w tym celu najczęściej wykorzystuje się dwa rodzaje ataków: Zatruciu globalnego serwera DNS, Atak z wykorzystaniem Trojanów.",
		"• Atak polegający na zatruciu globalnego serwera DNS, w celu skojarzenia prawdziwego adresu z serwerem zawierającym strone wykradającą poufne dane",
		"• Atak z wykorzystaniem trojanów polega na uprzednim zainfekowaniu urządzenia wirusami, modyfikując lokalne pliki w systemie użytkownika, odpowiedzialne za tłumaczenie nazw URL.",
		"• W zdecydowanej większości przypadków, zabezpieczenie przed Pharmingiem odbywa się za pomocą programu antywirusowego z aktualną bazą wirusów, oraz sprawdzanie czy strona na która wchodzimy posiada odpowiednie certyfikaty.",
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
							checked={cPharming[index]}
							onPress={() => {
								if (cPharming[index] === false) {
									setcPharming((prevState) => {
										let result = prevState;
										result[index] = true;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[5] = cPharming.reduce(
											(acc, curr) => (curr === true ? acc + 0.2 : acc),
											0
										);
										return [...result];
									});
								} else if (cPharming[index] === true) {
									setcPharming((prevState) => {
										let result = prevState;
										result[index] = false;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[5] = cPharming.reduce(
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

export default Pharming;
