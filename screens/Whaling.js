import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { Button, Overlay, Card } from "react-native-elements";
import { CoursesContext } from "../contexts/CoursesContext";
// button który dodaje 0.2 za każdym wcisnięciem do pierwszego elementu stejta z coursescontext
const Whaling = () => {
	const { progress, setProgress } = useContext(CoursesContext);
	return (
		<Card>
			<Card.Title>
				Zapoznaj się z atakiem typu Whaling {progress.whaling}
			</Card.Title>
			<Card.Divider />

			<Text style={{ marginBottom: 10 }}>
				Whaling – atak phishingowy nakierowany na osoby decyzyjne wyższego
				szczebla.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• Whaling nie jest wysyłanym na ślepo spamem. Jest zaplanowanym atakiem
				na konkretne osoby, zazwyczaj będące członkami działów finansowych
				dużych korporacji.
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
				• Ataki typu whaling są stosunkowo trudne do wykonania, ale przynoszą
				hakerom największe korzyści. Prezesi firm i członkowie zarządu są
				uprzywilejowani w kwestii dostępu do danych: mają dostęp do praktycznie
				każdego zasobu firmy i w przeciwieństwie do średniego szczebla
				pracowników, nie obejmuje ich konteneryzacja informacji.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• Hakerzy przygotowują się do ataku i skrupulatnie wyczekują momentu do
				ataku, wykorzystują momenty w których osoby decyzyjne są poza obszarem
				firmy, np. na wyjazdach służbowych co zwiększa szansę na powodzenie
				ataku.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• Warto w wypadku podejrzanych sytuacji skontaktować się z piszącą do
				nas osobą inną drogą niż mailową np. poprzez telefon komórkowy. Osoby
				próbujące wyłudzić dane lub pieniądze mogą próbować utrzymać kontakt
				mailowy, co wyda się podejrzane i zwiększy szansę na obronienie się
				przed whalingiem.
			</Text>
		</Card>
	);
};

export default Whaling;
