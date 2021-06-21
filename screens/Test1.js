import React, { useState } from "react";
import { View } from "react-native";
import { Card, Text, CheckBox, FlatListm, Button } from "react-native-elements";
import { StyledText1 } from "./Welcome";

//state z arrayem co ma tyle elementów co array "answers", elementy zero. jeśli zcheckowany jest odpowiedni asnwer, zamień
const Test1 = () => {
	const [checked, setChecked] = useState([
		[false, false, false, false],
		[false, false, false, false],
	]);
	const [test, setTest] = useState([
		{
			question: "Czy Kamil jest potężny?",
			answers: [
				{ answer: "tak", correct: false },
				{ answer: "asde", correct: false },
				{ answer: "tasdasak", correct: true },
				{ answer: "nie", correct: false },
			],
		},
		{
			question: "Czy Kamil jest głupi?",
			answers: [
				{ answer: "tak", correct: true },
				{ answer: "nie", correct: false },
				{ answer: "halo", correct: false },
				{ answer: "asdasd", correct: false },
			],
		},
	]);
	const [answers, setanswers] = useState([0, 0]);
	return (
		<View>
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
												checked={checked[id][index]}
												center
												title={el.answer}
												onPress={() => {
													if (checked[id][index] === false) {
														setChecked((prevState) => {
															let result = prevState;
															result[id] = [false, false, false, false];
															result[id][index] = true;
															return [...result];
														});
													} else if (checked[id][index] === true) {
														setChecked((prevState) => {
															let result = prevState;
															result[id][index] = false;
															return [...result];
														});
													}
												}}
											/>
										</StyledText1>
									</>
								);
							})}
							<Card.Divider />
						</Card>
					</>
				);
			})}
			<Card>
				<Button onPress={() => {}} title="Zapisz odpowiedzi" type="outline" />
			</Card>
		</View>
	);
};

export default Test1;
