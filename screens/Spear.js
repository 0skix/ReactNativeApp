import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { Button, Overlay, Card } from "react-native-elements";
import { CoursesContext } from "../contexts/CoursesContext";
// button który dodaje 0.2 za każdym wcisnięciem do pierwszego elementu stejta z coursescontext
const Spear = () => {
	const { progress, setProgress } = useContext(CoursesContext);
	return (
		<Card>
			<Card.Title>
				Zapoznaj się z atakiem typu SpearPhishing {progress.whaling}
			</Card.Title>
			<Card.Divider />

			<Text style={{ marginBottom: 10 }}>
				• Spear phishing – To nie atak na anonimowego użytkownika sieci, ale
				taki, który poprzedza wywiad środowiskowy oparty na informacjach
				dostępnych w sieci.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• W trakcie przygotowań do ataku oszuści przeprowadzają pogłębiony
				wywiad środowiskowy oparty na dostępnych w internecie informacjach
				dotyczących potencjalnej ofiary.
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
				• Hakerzy przygotowują się do ataku i skrupulatnie wyczekują momentu do
				ataku, wykorzystują momenty w których osoby są poza obszarem firmy, np.
				na wyjazdach służbowych co zwiększa szansę na powodzenie ataku.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• Podobnie jak w przypadku tradycyjnych ataków phishingowych, ofiary
				otrzymują e-mail, który wydaje się pochodzić od zaufanej osoby bądź
				organizacji. Jednak przestępcy wykorzystujący spear phishing zamiast
				rozsyłać zainfekowane wiadomości do milionów przypadkowych użytkowników
				starannie dobierają swoje ofiary. Taka strategia znacznie zwiększa
				szanse na sukces i powoduje, że nielegalne działania są trudniejsze do
				wykrycia. Dodatkowo, inaczej niż w przypadku standardowych ataków
				wymierzonych w nielegalne zdobycie środków finansowych, celem
				przestępców wykorzystujących spear phishing jest zazwyczaj pozyskanie
				konkretnych informacji, takich jak hasła dostępowe czy tajemnice
				handlowe.
			</Text>
		</Card>
	);
};

export default Spear;
