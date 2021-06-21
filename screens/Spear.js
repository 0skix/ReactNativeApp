import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { CoursesContext } from "../contexts/CoursesContext";
import { StyledText1 } from "./Welcome";

const Spear = () => {
	const { progress, setProgress, cSpear, setcSpear } =
		useContext(CoursesContext);

	const text = [
		"• Spear phishing – To nie atak na anonimowego użytkownika sieci, ale taki, który poprzedza wywiad środowiskowy oparty na informacjach dostępnych w sieci.",
		"• W trakcie przygotowań do ataku oszuści przeprowadzają pogłębiony wywiad środowiskowy oparty na dostępnych w internecie informacjach dotyczących potencjalnej ofiary.",
		"• Hakerzy przygotowują się do ataku i skrupulatnie wyczekują momentu do ataku, wykorzystują momenty w których osoby są poza obszarem firmy, np. na wyjazdach służbowych co zwiększa szansę na powodzenie ataku.",
		"• Podobnie jak w przypadku tradycyjnych ataków phishingowych, ofiary otrzymują e-mail, który wydaje się pochodzić od zaufanej osoby bądź organizacji. Jednak przestępcy wykorzystujący spear phishing zamiast rozsyłać zainfekowane wiadomości do milionów przypadkowych użytkowników starannie dobierają swoje ofiary. Taka strategia znacznie zwiększa szanse na sukces i powoduje, że nielegalne działania są trudniejsze do wykrycia. Dodatkowo, inaczej niż w przypadku standardowych ataków wymierzonych w nielegalne zdobycie środków finansowych, celem przestępców wykorzystujących spear phishing jest zazwyczaj pozyskanie konkretnych informacji, takich jak hasła dostępowe czy tajemnice handlowe.",
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
							checked={cSpear[index]}
							onPress={() => {
								if (cSpear[index] === false) {
									setcSpear((prevState) => {
										let result = prevState;
										result[index] = true;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[3] = cSpear.reduce(
											(acc, curr) => (curr === true ? acc + 0.25 : acc),
											0
										);
										return [...result];
									});
								} else if (cSpear[index] === true) {
									setcSpear((prevState) => {
										let result = prevState;
										result[index] = false;
										return [...result];
									});
									setProgress((prevState) => {
										let result = prevState;
										result[3] = cSpear.reduce(
											(acc, curr) => (curr === true ? acc + 0.25 : acc),
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

export default Spear;
