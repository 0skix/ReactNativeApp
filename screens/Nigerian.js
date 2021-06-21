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
		"• Nigeryjskie oszustwo – oszustwo, najczęściej zapoczątkowane kontaktem poprzez wykorzystanie poczty elektronicznej, polegające na wciągnięciu ofiary w grę psychologiczną, której fabuła oparta jest na fikcyjnym transferze dużej (często przesadnie wygórowanej) kwoty pieniędzy, z jednego z krajów afrykańskich (najczęściej Nigerii, choć obecnie może również chodzić o każdy inny) - mającą na celu wyłudzenie pieniędzy.",
		"• W korespondencji pada propozycja zyskania znacznej kwoty pieniędzy, części fortuny, jaką posiada (czy też odziedziczył) oszust, ale której sam nie może podjąć z banku z różnych przyczyn. Oszust usiłuje w ten sposób zyskać przychylność ofiary, co następnie wykorzysta przy dalszym oszustwie.",
		"• Potencjalna ofiara otrzymuje poprzez pocztę elektroniczną, spreparowaną wiadomość o wygranej dużej sumie pieniędzy w jednej z loterii któregoś europejskiego kraju. Do powyższej informacji załączone są certyfikaty uprawdopodobniające wygraną oraz istnienie samej loterii.",
		"• Oszuści żerują na łatwowierności, próbują także taktyki ze spadkiem. Wmawiają ofierze, że jest jedynym,  żyjącym spadkobiercą ogromnego spadku, ale zanim go otrzyma musi spełnić określone kryteria, czy też opłacić różnego rodzaju składki czy podatki.",
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
											(acc, curr) => (curr === true ? acc + 0.25 : acc),
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

export default Nigerian;
