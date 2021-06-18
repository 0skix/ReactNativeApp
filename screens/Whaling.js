import React, { useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Overlay, Card } from "react-native-elements";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { CoursesContext } from "../contexts/CoursesContext";
import { StyledContainer, StyledText1 } from "./Welcome";

const Whaling = () => {
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
				<Card.Title>
					Zapoznaj się z atakiem typu Whaling {progress.whaling}
				</Card.Title>
				<Card.Divider />
				<StyledText1 style={{ marginBottom: 10 }}>
					Whaling – atak phishingowy nakierowany na osoby decyzyjne wyższego
					szczebla.
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
				<StyledText1 style={{ marginBottom: 10 }}>
					• Whaling nie jest wysyłanym na ślepo spamem. Jest zaplanowanym
					atakiem na konkretne osoby, zazwyczaj będące członkami działów
					finansowych dużych korporacji.
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
				<StyledText1 style={{ marginBottom: 10 }}>
					• Ataki typu whaling są stosunkowo trudne do wykonania, ale przynoszą
					hakerom największe korzyści. Prezesi firm i członkowie zarządu są
					uprzywilejowani w kwestii dostępu do danych: mają dostęp do
					praktycznie każdego zasobu firmy i w przeciwieństwie do średniego
					szczebla pracowników, nie obejmuje ich konteneryzacja informacji.
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
				<StyledText1 style={{ marginBottom: 10 }}>
					• Hakerzy przygotowują się do ataku i skrupulatnie wyczekują momentu
					do ataku, wykorzystują momenty w których osoby decyzyjne są poza
					obszarem firmy, np. na wyjazdach służbowych co zwiększa szansę na
					powodzenie ataku.
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

				<StyledText1 style={{ marginBottom: 10 }}>
					• Warto w wypadku podejrzanych sytuacji skontaktować się z piszącą do
					nas osobą inną drogą niż mailową np. poprzez telefon komórkowy. Osoby
					próbujące wyłudzić dane lub pieniądze mogą próbować utrzymać kontakt
					mailowy, co wyda się podejrzane i zwiększy szansę na obronienie się
					przed whalingiem.
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
			</Card>
		</ScrollView>
	);
};

export default Whaling;
