import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { Button, Overlay, Card } from "react-native-elements";
import { CoursesContext } from "../contexts/CoursesContext";
// button który dodaje 0.2 za każdym wcisnięciem do pierwszego elementu stejta z coursescontext
const Clone = () => {
	const { progress, setProgress } = useContext(CoursesContext);
	return (
		<Card>
			<Card.Title>
				Zapoznaj się z atakiem typu ClonePhishing {progress.whaling}
			</Card.Title>
			<Card.Divider />

			<Text style={{ marginBottom: 10 }}>
				• Clone phishing – typ phishingu, w którym prawdziwy e-mail posiadający
				załącznik lub link zostaje użyty orzez przestępcę jako wzór przy
				tworzeniu wiadomości na potrzeby oszustwa.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• Przykładem Clone phishingu jest powiadomienie przychodzące na
				Facebook’u, kiedy ktoś „próbował” się włamać nam na konto.
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
				• Ta technika może zostać użyta pośrednio, przy pomocy wcześniej
				zainfekowanej maszyny do stworzenia następnej wykorzystującej zaufanie
				społeczne do wnioskowanego adresu email, ponieważ obie strony otrzymują
				taki sam mail.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• Technika clone phishingu zyskała niewiarygodną popularność, przez
				wszelakie dodatkowe zabezpieczenia na prawie każdej stronie takie jak
				podwójna weryfikacja.
			</Text>
		</Card>
	);
};

export default Clone;
