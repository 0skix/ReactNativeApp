import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { CoursesContext } from "../contexts/CoursesContext";
import { StyledText1 } from "./Welcome";
// button który dodaje 0.2 za każdym wcisnięciem do pierwszego elementu stejta z coursescontext
const Nigerian = () => {
	const {
		progress,
		setProgress,

		cNigerian,
		setcNigerian,
	} = useContext(CoursesContext);

	const text = [
		"• SMS phishing – atak socjotechniczny polegający na rozsyłaniu SMS-ów, które mają skłonić ofiarę do podjęcia określonego działania.",
		"• Przykładem SMS phishingu jest wiadomość w której kurier prosi o niewielką dopłatę do przesyłki w celu szybszego jej dostarczenia.",
		"• W przypadku SMS phishingu cyberprzestępcy używają wiadomościtekstowych, aby skłonić potencjalne ofiary do podania danych osobowych.",
		"• Wiadomości tekstowe zazwyczaj zawierają linki do podrobionych stron, które wyglądają identycznie jak strony banków czy innych stron, które znamy. Zdobywają tym samym nasze zaufanie i chętniej podajemy swoje dane, które następnie są wykorzystywane do niecnych celów hakerów.",
		"• SmsPhishing zyskał popularność wśród przestępców, gdy ż stale rosnąca popularność smartfonów umożliwia im kradzież poufnych danych bez konieczności przełamywania zabezpieczeń komputera lub sieci.",
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
							checked={cNigerian[index]}
							onPress={() => {
								if (cNigerian[index] === false) {
									setcNigerian((prevState) => {
										let result = prevState;
										result[index] = true;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[2] = cNigerian.reduce(
											(acc, curr) => (curr === true ? acc + 0.2 : acc),
											0
										);
										return [...result];
									});
								} else if (cNigerian[index] === true) {
									setcNigerian((prevState) => {
										let result = prevState;
										result[index] = false;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[2] = cNigerian.reduce(
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

export default Nigerian;
