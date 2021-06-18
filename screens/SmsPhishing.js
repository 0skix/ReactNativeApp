import React, { useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Overlay, Card } from "react-native-elements";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { CoursesContext } from "../contexts/CoursesContext";
import { StyledContainer, StyledText1 } from "./Welcome";
// button który dodaje 0.2 za każdym wcisnięciem do pierwszego elementu stejta z coursescontext
const SmsPhishing = () => {
	const {
		progress,
		setProgress,
		checked,
		setChecked,
		cSmsPhishing,
		setcSmsPhishing,
	} = useContext(CoursesContext);
	return (
		<ScrollView>
			<Card>
				<Card.Title>Zapoznaj się z atakiem typu SmsPhishing</Card.Title>
				<Card.Divider />
				<StyledText1 style={{ marginBottom: 5 }}>
					• SMS phishing – atak socjotechniczny polegający na rozsyłaniu SMS-ów,
					które mają skłonić ofiarę do podjęcia określonego działania.
				</StyledText1>
				<CheckBox
					center
					title="Odznacz sekcje"
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
					iconRight
					checked={cSmsPhishing.a}
					onPress={() => {
						if (cSmsPhishing.a === false) {
							setcSmsPhishing((prevState) => {
								return { ...prevState, a: (prevState.a = true) };
							});
							setProgress((prevState) => {
								return { ...prevState, whaling: prevState.whaling + 0.2 };
							});
						} else if (cSmsPhishing.a === true) {
							setcSmsPhishing((prevState) => {
								return { ...prevState, a: (prevState.a = false) };
							});
							setProgress((prevState) => {
								return {
									...prevState,
									whaling: prevState.whaling - 0.2,
								};
							});
						}
					}}
				/>
				<Card.Divider />
				<StyledText1 style={{ marginBottom: 15 }}>
					• Przykładem SMS phishingu jest wiadomość w której kurier prosi o
					niewielką dopłatę do przesyłki w celu szybszego jej dostarczenia.
				</StyledText1>
				<CheckBox
					center
					title="Odznacz sekcje"
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
					iconRight
					checked={cSmsPhishing.b}
					onPress={() => {
						if (cSmsPhishing.b === false) {
							setcSmsPhishing((prevState) => {
								return { ...prevState, b: (prevState.a = true) };
							});
							setProgress((prevState) => {
								return { ...prevState, whaling: prevState.whaling + 0.2 };
							});
						} else if (cSmsPhishing.b === true) {
							setcSmsPhishing((prevState) => {
								return { ...prevState, b: (prevState.a = false) };
							});
							setProgress((prevState) => {
								return {
									...prevState,
									whaling: prevState.whaling - 0.2,
								};
							});
						}
					}}
				/>

				<Card.Divider />
				<StyledText1 style={{ marginBottom: 15 }}>
					• W przypadku SMS phishingu cyberprzestępcy używają wiadomości
					tekstowych, aby skłonić potencjalne ofiary do podania danych
					osobowych.
				</StyledText1>
				<CheckBox
					center
					title="Odznacz sekcje"
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
					iconRight
					checked={cSmsPhishing.c}
					onPress={() => {
						if (cSmsPhishing.c === false) {
							setcSmsPhishing((prevState) => {
								return { ...prevState, c: (prevState.a = true) };
							});
							setProgress((prevState) => {
								return { ...prevState, whaling: prevState.whaling + 0.2 };
							});
						} else if (cSmsPhishing.c === true) {
							setcSmsPhishing((prevState) => {
								return { ...prevState, c: (prevState.a = false) };
							});
							setProgress((prevState) => {
								return {
									...prevState,
									whaling: prevState.whaling - 0.2,
								};
							});
						}
					}}
				/>
				<Card.Divider />
				<StyledText1 style={{ marginBottom: 15 }}>
					• Wiadomości tekstowe zazwyczaj zawierają linki do podrobionych stron,
					które wyglądają identycznie jak strony banków czy innych stron, które
					znamy. Zdobywają tym samym nasze zaufanie i chętniej podajemy swoje
					dane, które następnie są wykorzystywane do niecnych celów hakerów.
				</StyledText1>
				<CheckBox
					center
					title="Odznacz sekcje"
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
					iconRight
					checked={cSmsPhishing.d}
					onPress={() => {
						if (cSmsPhishing.d === false) {
							setcSmsPhishing((prevState) => {
								return { ...prevState, d: (prevState.a = true) };
							});
							setProgress((prevState) => {
								return { ...prevState, whaling: prevState.whaling + 0.2 };
							});
						} else if (cSmsPhishing.d === true) {
							setcSmsPhishing((prevState) => {
								return { ...prevState, d: (prevState.a = false) };
							});
							setProgress((prevState) => {
								return {
									...prevState,
									whaling: prevState.whaling - 0.2,
								};
							});
						}
					}}
				/>
				<Card.Divider />
				<StyledText1 style={{ marginBottom: 15 }}>
					• SmsPhishing zyskał popularność wśród przestępców, gdy ż stale
					rosnąca popularność smartfonów umożliwia im kradzież poufnych danych
					bez konieczności przełamywania zabezpieczeń komputera lub sieci.
				</StyledText1>
				<CheckBox
					center
					title="Odznacz sekcje"
					checkedIcon="dot-circle-o"
					uncheckedIcon="circle-o"
					iconRight
					checked={cSmsPhishing.e}
					onPress={() => {
						if (cSmsPhishing.e === false) {
							setcSmsPhishing((prevState) => {
								return { ...prevState, e: (prevState.a = true) };
							});
							setProgress((prevState) => {
								return { ...prevState, whaling: prevState.whaling + 0.2 };
							});
						} else if (cSmsPhishing.e === true) {
							setcSmsPhishing((prevState) => {
								return { ...prevState, e: (prevState.a = false) };
							});
							setProgress((prevState) => {
								return {
									...prevState,
									whaling: prevState.whaling - 0.2,
								};
							});
						}
					}}
				/>
			</Card>
		</ScrollView>
	);
};

export default SmsPhishing;
