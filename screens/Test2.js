import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Card, Text, CheckBox, Overlay, Button } from "react-native-elements";
import { StyledText1 } from "./Welcome";
import { TestsContext } from "../contexts/TestsContext";

//state z arrayem co ma tyle elementów co array "answers", elementy zero. jeśli zcheckowany jest odpowiedni asnwer, zamień
const Test1 = () => {
	const { score, setScore, toggle1, setToggle1, confirm1, setConfirm1 } =
		useContext(TestsContext);
	const [visible, setVisible] = useState(false);
	const [test, setTest] = useState([
		{
			question: "Co to jest Spear phishing?",
			answers: [
				{
					answer: "Atak poprzedzony wywiadem środowiskowym.",
					correct: true,
				},
				{ answer: "Atak na anonimowego użytkownika sieci.", correct: false },
				{
					answer: "Atak na osoby wyższego szczebla.",
					correct: false,
				},
				{
					answer: "Atak przy wykorzystaniu SMS’ów.",
					correct: false,
				},
			],
		},
		{
			question: "Dlaczego spear phishing jest coraz bardziej popularny?",
			answers: [
				{
					answer:
						"Ponieważ ataki celują w jak największą ilość osób, co ułatwia dostęp do dużej ilości danych.",
					correct: false,
				},
				{ answer: "Ponieważ ataki są proste w wykonaniu.", correct: false },
				{
					answer: "Ponieważ większość osób nie używa antywirusa.",
					correct: false,
				},
				{
					answer:
						"Ponieważ ataki są starannie dobierane pod poszczególne osoby, co utrudnia ich wykrycie.",
					correct: true,
				},
			],
		},
		{
			question: "Co będzie przykładnem Clone Phishingu?",
			answers: [
				{
					answer: "SMS od operatora o nieuregulowanej wpłacie.",
					correct: false,
				},
				{
					answer: "Powiadomienie e-mail o włamaniu na nasze konto.",
					correct: true,
				},
				{
					answer: "E-mail z linkiem potwierdzającym założenie konta.",
					correct: false,
				},
				{
					answer: "Wolniejsza praca naszego urządzenia.",
					correct: false,
				},
			],
		},
		{
			question: "Jak używany jest Clone Phishing?",
			answers: [
				{
					answer:
						"Hakerzy podszywają się pod osobę z rodziny wysyłając SMS’y, proszące o pieniądze.",
					correct: false,
				},
				{
					answer:
						"Tworzą strone o podobnej nazwie, licząc że dana osoba popełni błąd.",
					correct: false,
				},
				{
					answer:
						"Hakerzy posługują się prawdziwym e-mailem jako wzór, aby wzrosła ich wiarygodność, lecz zmieniają link.",
					correct: true,
				},
				{
					answer:
						"Tworzą konta na stronach społecznościowych podszywając się pod kogos.",
					correct: false,
				},
			],
		},
		{
			question: "Dlaczego Clone Phishing jest aktualnie popularny?",
			answers: [
				{ answer: "Przez naiwność nowych użytkowników.", correct: false },
				{
					answer:
						"Przez wszelakie dodatkowe zabezpieczenia, jak podwójna weryfikacja.",
					correct: true,
				},
				{
					answer: "Przez stale rosnącą ilość nowych mediów społecznościowych.",
					correct: false,
				},
				{
					answer: "Przez ludzką chęć pomocy innym.",
					correct: false,
				},
			],
		},
		{
			question: "Na czym polega atak zatruwający serwer DNS?",
			answers: [
				{
					answer:
						"Na skojarzeniu przez urządzenie programu hakera, jako ten który jest potrzebny.",
					correct: false,
				},
				{
					answer:
						"Na skojarzeniu przez urządzenie strony wykradającej dane z jego odpowiednikiem.",
					correct: true,
				},
				{
					answer:
						"Na skojarzeniu przez urządzenie adresu hakera, jako ten który jest zaufany.",
					correct: false,
				},
				{
					answer: "Na autokorekcie adresu przez urządzenie na stronę hakera.",
					correct: false,
				},
			],
		},
		{
			question: "Na czym polega atak z wykorzystaniem trojanów?",
			answers: [
				{
					answer:
						"Na zainfekowaniu urządzenia wirusami, ukrywającymi pliki w systemie.",
					correct: false,
				},
				{
					answer:
						"Na zainfekowaniu urządzenia wirusami, monitorującymi pliki w systemie.",
					correct: false,
				},
				{
					answer:
						"Na zainfekowaniu urządzenia wirusami, usuwającymi pliki w systemie.",
					correct: false,
				},
				{
					answer:
						"Na zainfekowaniu urządzenia wirusami, modyfikującymi pliki w systemie.",
					correct: true,
				},
			],
		},
		{
			question: "Co jest potrzebne by Pharming mógł zadziałać?",
			answers: [
				{ answer: "Dodatkowy atak na urządzenie.", correct: true },
				{ answer: "Dostęp do urządzenia ofiary.", correct: false },
				{ answer: "Wcześniejszy wywiad o osobie.", correct: false },
				{ answer: "Dostęp do sieci ofiary.", correct: false },
			],
		},
		{
			question: "Co to jest Pharming?",
			answers: [
				{
					answer: "Oszustwo, polegające na wysyłaniu SMS’ów",
					correct: false,
				},
				{
					answer: "Oszustwo, polegające na modyfikacji adresu strony.",
					correct: true,
				},
				{
					answer: "Oszustwo, polegające na wysyłaniu e-maili.",
					correct: false,
				},
				{
					answer: "Oszustwo, polegające na próbach włamania na konto.",
					correct: false,
				},
			],
		},
		{
			question: "W jakim celu zazwyczaj używa się spear phishing?",
			answers: [
				{
					answer: "W celu  pozyskania jak największej ilości informacji.",
					correct: false,
				},
				{
					answer: "W celu włamania się i monitorowania ruchów danych osób.",
					correct: false,
				},
				{
					answer: "W celu pozyskania konkretnych informacji jak np.: hasła.",
					correct: true,
				},
				{
					answer: "W celu zniszczenia oprogramowania danej osoby.",
					correct: false,
				},
			],
		},
	]);

	const [checked, setChecked] = useState(
		test.map((el) => {
			return { answer: "", correct: false, id: null };
		})
	);
	useEffect(() => {
		confirm1 === false
			? setChecked(
					test.map((el) => {
						return { answer: "", correct: false, id: null };
					})
			  )
			: null;
	}, [confirm1]);
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
												disabled={confirm1}
												containerStyle={{
													maxWidth: 300,
													minWidth: 300,
													backgroundColor:
														confirm1 === true
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
					disabled={!toggle1}
					onPress={() => {
						setScore((prevState) => {
							let result = prevState;
							result[1] = checked.reduce(
								(acc, curr) => (curr.correct === true ? acc + 0.1 : acc),
								0
							);
							return [...result];
						});
						setToggle1(false);
						setVisible(!visible);
						setConfirm1(!confirm1);
					}}
					title="Zapisz odpowiedzi"
				/>
			</Card>
			<View>
				<Overlay isVisible={visible}>
					<StyledText1>Zakończyłeś test!</StyledText1>
					<StyledText1>
						Twój wynik to {score[1].toPrecision(2) * 100}%
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
