import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { CoursesContext } from "../contexts/CoursesContext";
import { StyledText1 } from "./Welcome";
const Clone = () => {
	const { progress, setProgress, cClone, setcClone } =
		useContext(CoursesContext);

	const text = [
		"•	Clone phishing – Polega on na tym, że prawdziwa wiadomość mailowa, w której znajduje się link lub załącznik, zostaje zastąpiona złośliwymi wersjami. Następnie wiadomość taka wysyłana jest do ofiary z innego adresu mailowego. Z reguły są to wiadomość, które rzekomo pochodzą od różnego typu instytucji rządowych czy banków.",
		"•	Należy pamiętać, że tego rodzaju firmy, w szczególności banki, nigdy nie proszą użytkowników o podanie poufnych informacji. W przypadku clone phishing wykorzystywane jest zaufanie społeczne, które posiada dana firma lub instytucja. Działa tutaj prosty mechanizm – użytkownik wychodzi z założenia, że skoro otrzymał maila na przykład z Ministerstwa Finansów, to musi on być wiarygodny. Niestety – z reguły jest to próba oszustwa.",
		"•	Ta technika może zostać użyta pośrednio, przy pomocy wcześniej zainfekowanej maszyny do stworzenia następnej wykorzystującej zaufanie społeczne do wnioskowanego adresu email, ponieważ obie strony otrzymują taki sam mail.",
		"•	Technika clone phishingu zyskała niewiarygodną popularność, przez wszelakie dodatkowe zabezpieczenia na prawie każdej stronie takie jak podwójna weryfikacja.",
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
							checked={cClone[index]}
							onPress={() => {
								if (cClone[index] === false) {
									setcClone((prevState) => {
										let result = prevState;
										result[index] = true;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[4] = cClone.reduce(
											(acc, curr) => (curr === true ? acc + 0.25 : acc),
											0
										);
										return [...result];
									});
								} else if (cClone[index] === true) {
									setcClone((prevState) => {
										let result = prevState;
										result[index] = false;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[4] = cClone.reduce(
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

export default Clone;
