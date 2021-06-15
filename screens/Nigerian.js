import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { Button, Overlay, Card } from "react-native-elements";
import { CoursesContext } from "../contexts/CoursesContext";
// button który dodaje 0.2 za każdym wcisnięciem do pierwszego elementu stejta z coursescontext
const Nigerian = () => {
	const { progress, setProgress } = useContext(CoursesContext);
	return (
		<Card>
			<Card.Title>
				Zapoznaj się z atakiem typu NigeryjskieOszustwa {progress.whaling}
			</Card.Title>
			<Card.Divider />

			<Text style={{ marginBottom: 10 }}>
				• Nigeryjskie oszustwo – oszustwo, najczęściej zapoczątkowane kontaktem
				poprzez wykorzystanie poczty elektronicznej, polegające na wciągnięciu
				ofiary w grę psychologiczną, której fabuła oparta jest na fikcyjnym
				transferze dużej (często przesadnie wygórowanej) kwoty pieniędzy, z
				jednego z krajów afrykańskich (najczęściej Nigerii, choć obecnie może
				również chodzić o każdy inny) - mającą na celu wyłudzenie pieniędzy.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• W korespondencji pada propozycja zyskania znacznej kwoty pieniędzy,
				części fortuny, jaką posiada (czy też odziedziczył) oszust, ale której
				sam nie może podjąć z banku z różnych przyczyn. Oszust usiłuje w ten
				sposób zyskać przychylność ofiary, co następnie wykorzysta przy dalszym
				oszustwie.
				<Button
					buttonStyle={{
						borderRadius: 0,
						marginLeft: 0,
						marginRight: 0,
						marginBottom: 0,
					}}
					title="Przeczytano"
					onPress={() => {
						setProgress((prevState) => {
							return { ...prevState, whaling: prevState.whaling + 0.2 };
						});
					}}
				/>
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• Potencjalna ofiara otrzymuje poprzez pocztę elektroniczną,
				spreparowaną wiadomość o wygranej dużej sumie pieniędzy w jednej z
				loterii któregoś europejskiego kraju. Do powyższej informacji załączone
				są certyfikaty uprawdopodobniające wygraną oraz istnienie samej loterii.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• Oszuści żerują na łatwowierności, próbują także taktyki ze spadkiem.
				Wmawiają ofierze, że jest jedynym, żyjącym spadkobiercą ogromnego
				spadku, ale zanim go otrzyma musi spełnić określone kryteria, czy też
				opłacić różnego rodzaju składki czy podatki.
			</Text>
		</Card>
	);
};

export default Nigerian;
