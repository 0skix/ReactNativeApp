import React, { useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Overlay, Card } from "react-native-elements";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { CoursesContext } from "../contexts/CoursesContext";
// button który dodaje 0.2 za każdym wcisnięciem do pierwszego elementu stejta z coursescontext
const SmsPhishing = () => {
	const { progress, setProgress } = useContext(CoursesContext);
	return (
		<ScrollView>
			<Card>
				<Card.Title>
					Zapoznaj się z atakiem typu SmsPhishing {progress.whaling}
				</Card.Title>
				<Card.Divider />
				<Text style={{ marginBottom: 10 }}>
					• SMS phishing – atak socjotechniczny polegający na rozsyłaniu SMS-ów,
					które mają skłonić ofiarę do podjęcia określonego działania.
				</Text>
				<CheckBox
					center
					title="Odznacz sekcje"
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
				/>
				<Text style={{ marginBottom: 10 }}>
					• Przykładem SMS phishingu jest wiadomość w której kurier prosi o
					niewielką dopłatę do przesyłki w celu szybszego jej dostarczenia.
				</Text>
				<CheckBox
					center
					title="Odznacz sekcje"
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
				/>
				<Text style={{ marginBottom: 10 }}>
					• W przypadku SMS phishingu cyberprzestępcy używają wiadomości
					tekstowych, aby skłonić potencjalne ofiary do podania danych
					osobowych.
				</Text>
				<CheckBox
					center
					title="Odznacz sekcje"
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
				/>
				<Text style={{ marginBottom: 10 }}>
					• Wiadomości tekstowe zazwyczaj zawierają linki do podrobionych stron,
					które wyglądają identycznie jak strony banków czy innych stron, które
					znamy. Zdobywają tym samym nasze zaufanie i chętniej podajemy swoje
					dane, które następnie są wykorzystywane do niecnych celów hakerów.
				</Text>
				<CheckBox
					center
					title="Odznacz sekcje"
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
				/>
				<Text style={{ marginBottom: 10 }}>
					• SmsPhishing zyskał popularność wśród przestępców, gdy ż stale
					rosnąca popularność smartfonów umożliwia im kradzież poufnych danych
					bez konieczności przełamywania zabezpieczeń komputera lub sieci.
				</Text>
				<CheckBox
					center
					title="Odznacz sekcje"
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
				/>
			</Card>
		</ScrollView>
	);
};

export default SmsPhishing;
