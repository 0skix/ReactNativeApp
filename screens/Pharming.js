import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { Button, Overlay, Card } from "react-native-elements";
import { CoursesContext } from "../contexts/CoursesContext";
// button który dodaje 0.2 za każdym wcisnięciem do pierwszego elementu stejta z coursescontext
const Pharming = () => {
	const { progress, setProgress } = useContext(CoursesContext);
	return (
		<Card>
			<Card.Title>
				Zapoznaj się z atakiem typu Pharming {progress.whaling}
			</Card.Title>
			<Card.Divider />

			<Text style={{ marginBottom: 10 }}>
				• Pharming – oszustwo, polegające na modyfikacji adresu www w celu
				przekierowania użytkownika na fałszywą strone.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• Aby ta technika mogła zadziałać potrzebne jest przeprowadzenie
				dodatkowego ataku na urządzenie potencjalnej ofiary, w tym celu
				najczęściej wykorzystuje się dwa rodzaje ataków: Zatruciu globalnego
				serwera DNS, Atak z wykorzystaniem Trojanów.
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
				• Atak polegający na zatruciu globalnego serwera DNS, w celu skojarzenia
				prawdziwego adresu z serwerem zawierającym strone wykradającą poufne
				dane.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• Atak z wykorzystaniem trojanów polega na uprzednim zainfekowaniu
				urządzenia wirusami, modyfikując lokalne pliki w systemie użytkownika,
				odpowiedzialne za tłumaczenie nazw URL.
			</Text>
			<Text style={{ marginBottom: 10 }}>
				• W zdecydowanej większości przypadków, zapobieganie wygląda, przy
				zainstalowaniu programu antywirusowego z aktualną bazą wirusów, oraz
				uprzedzanie się czy strona na która wchodzimy posiada odpowiednie
				certyfikaty.
			</Text>
		</Card>
	);
};

export default Pharming;
