import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Card, Text, CheckBox, Overlay, Button } from "react-native-elements";
import { StyledText1 } from "./Welcome";
import { TestsContext } from "../contexts/TestsContext";

//state z arrayem co ma tyle elementów co array "answers", elementy zero. jeśli zcheckowany jest odpowiedni asnwer, zamień
const Test1 = () => {
	const { score, setScore, toggle, setToggle, confirm, setConfirm } =
		useContext(TestsContext);
	const [visible, setVisible] = useState(false);
	const [test, setTest] = useState([
		{
			question: "Whaling jest to:",
			answers: [
				{
					answer: "Atak na osoby decyzyjne wysokiego szczebla.",
					correct: true,
				},
				{ answer: "Próba oszustwa metodą na wnuczka.", correct: false },
				{
					answer: "Wysyłanie SMS-ów z fałszywymi linkami do znanych nam stron.",
					correct: false,
				},
				{
					answer:
						"Oszustwo polegające na fałszywej ofercie sprzedaży przedmiotu/usługi.",
					correct: false,
				},
			],
		},
		{
			question: "Whaling w większości wypadków jest:",
			answers: [
				{ answer: "Spontaniczny", correct: false },
				{ answer: "Zaplanowany", correct: true },
				{ answer: "Nieprzemyślany", correct: false },
				{ answer: "Niegroźny", correct: false },
			],
		},
		{
			question: "Aby sprawnie chronić się przed Whalingiem należy:",
			answers: [
				{ answer: "Utrzymywać wyłącznie kontakt mailowy.", correct: false },
				{
					answer:
						"Weryfikować otrzymywane informacje poprzez inną drogę komunikacji np. telefon komórkowy.",
					correct: true,
				},
				{
					answer:
						"Otwierać każdy link otrzymywany w wiadomościach na skrzynce elektronicznej.",
					correct: false,
				},
				{
					answer: "Codziennie zmieniać hasło do każdego konta.",
					correct: false,
				},
			],
		},
		{
			question:
				"Jednym z najbardziej znanych rodzajów nigeryjskiego oszustwa jest:",
			answers: [
				{ answer: "Metoda na wnuczka", correct: false },
				{
					answer:
						"Podawanie się za księcia chcącego przekazać nam swój majątek",
					correct: true,
				},
				{ answer: "Wygrana na nieznanej loterii", correct: false },
				{ answer: "Podszywanie się pod pracownika banku.", correct: false },
			],
		},
		{
			question: "Oszustwo nigeryjskie polega na:",
			answers: [
				{ answer: "Rozsyłaniu podejrzanych SMS-ów", correct: false },
				{
					answer:
						"Wciągnięciu ofiary w grę psychologiczną, mającą za celu kradzież jej pieniędzy.",
					correct: true,
				},
				{
					answer: "Spersonalizowanym ataku na prezesa firmy",
					correct: false,
				},
				{
					answer: "Odnalezieniu swoich zaginionych krewnych",
					correct: false,
				},
			],
		},
		{
			question: "Wiadomości od hakerów mogą zawierać:",
			answers: [
				{ answer: "Spontaniczny", correct: false },
				{
					answer:
						"Linki do podrobionych stron, które wyglądają identycznie jak np. strony banków.",
					correct: true,
				},
				{
					answer: "Propozycje wzięcia udziału w konkursie internetowym.",
					correct: false,
				},
				{ answer: "Kupony rabatowe.", correct: false },
			],
		},
		{
			question: "Aby na czas obronić się przed SMS Phishingiem należy:",
			answers: [
				{ answer: "Odpisywać na podejrzane wiadomości", correct: false },
				{
					answer: "Zablokować podejrzany numer wysyłający spam",
					correct: true,
				},
				{
					answer: "Przesłać podejrzane wiadomości do innych",
					correct: false,
				},
				{
					answer:
						"Wchodzić w linki otrzymywane w wiadomościach SMS od nieznanych numerów",
					correct: false,
				},
			],
		},
		{
			question: "Nigeryjskie oszustwa najczęściej mają swój początek:",
			answers: [
				{ answer: "Poprzez rozmowę telefoniczną", correct: false },
				{ answer: "Na ulicy", correct: false },
				{ answer: "Na serwisach społecznościowych", correct: false },
				{ answer: "Poprzez pocztę elektroniczną", correct: true },
			],
		},
		{
			question: "Definicją SMS Phishingu jest:",
			answers: [
				{
					answer: "Phishing spersonalizowany pod konkretną osobę lub firmę",
					correct: false,
				},
				{
					answer:
						"Atak socjotechniczny polegający na rozsyłaniu SMS-ów, które mają skłonić ofiarę do podjęcia określonego działania",
					correct: true,
				},
				{
					answer:
						"Atak phishingowy nakierowany na osoby decyzyjne wyższego szczebla",
					correct: false,
				},
				{
					answer:
						"Próba wyłudzenia pieniędzy poprzez podszywanie się pod nigeryjskiego księcia",
					correct: false,
				},
			],
		},
		{
			question: "Oszustwo nigeryjskie cechuje się:",
			answers: [
				{ answer: "Kradzieżą naszego konta na Facebooku", correct: false },
				{ answer: "Błędami gramatycznymi i literówkami", correct: true },
				{
					answer: "Przemyślanym i spersonalizowanym atakiem na naszą osobę",
					correct: false,
				},
				{ answer: "Zalewającym nas spamem", correct: false },
			],
		},
	]);

	const [checked, setChecked] = useState(
		test.map((el) => {
			return { answer: "", correct: false, id: null };
		})
	);
	useEffect(() => {
		confirm === false
			? setChecked(
					test.map((el) => {
						return { answer: "", correct: false, id: null };
					})
			  )
			: null;
	}, [confirm]);
	return (
		<ScrollView>
			{test.map((el, id) => {
				return (
					<>
						<Card>
							<Text h4 style={{ marginBottom: 20 }}>
								{el.question}
							</Text>
							<Card.Divider />
							{el.answers.map((el, index) => {
								return (
									<>
										<StyledText1>
											<CheckBox
												disabled={confirm}
												containerStyle={{
													maxWidth: 300,
													minWidth: 300,
													backgroundColor:
														confirm === true
															? checked[id].answer === el.answer
																? el.correct === true
																	? "green"
																	: "red"
																: null
															: null,
												}}
												checked={checked[id].answer === el.answer}
												title={el.answer}
												onPress={() =>
													setChecked((prevState) => {
														let result = prevState;
														result[id] = {
															...prevState,
															answer: el.answer,
															correct: el.correct,
														};
														return [...result];
													})
												}
											/>
										</StyledText1>
										<Card.Divider />
									</>
								);
							})}
							<Card.Divider />
						</Card>
					</>
				);
			})}
			<Card>
				<Button
					disabled={!toggle}
					onPress={() => {
						setScore((prevState) => {
							let result = prevState;
							result[0] = checked.reduce(
								(acc, curr) => (curr.correct === true ? acc + 0.1 : acc),
								0
							);
							return [...result];
						});
						setToggle(false);
						setVisible(!visible);
						setConfirm(!confirm);
					}}
					title="Zapisz odpowiedzi"
				/>
			</Card>
			<View>
				<Overlay isVisible={visible}>
					<StyledText1>Zakończyłeś test!</StyledText1>
					<StyledText1>
						Twój wynik to {score[0].toPrecision(2) * 100}%
					</StyledText1>
					<StyledText1></StyledText1>
					<Button
						title="Zamknij"
						onPress={() => {
							setVisible(!visible);
						}}
						type="outline"
					></Button>
				</Overlay>
			</View>
		</ScrollView>
	);
};

export default Test1;
