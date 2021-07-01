import React, { useState, useContext } from "react";
import { Formik } from "formik";
import { Button, Overlay, Card } from "react-native-elements";
import { View, ImageBackground } from "react-native";
import { ProfileContext } from "../contexts/ProfileContext";
import styled from "styled-components/native";
import { Input } from "react-native-elements/dist/input/Input";

export const StyledContainer = styled.View`
	margin: 10px;
	padding: 10px;
	align-items: center;
`;
export const StyledText = styled.Text`
	color: white;
	font-size: 20px;
	text-align: left;
`;
export const StyledText1 = styled.Text`
	font-size: 18px;
	color: #000000;
	font-weight: 700;
	text-decoration: none solid rgb(68, 68, 68);
	text-align: justify;
`;
const StyledButtonText = styled.Text`
	color: black;
	text-align: center;
`;
const StyledTO = styled.TouchableOpacity`
	width: 60%;
	margin: 10px;
	padding: 10px;
	background-color: ${({ color }) => (color === true ? "red" : "#fff8e6")};
	border: 2px solid black;
`;
const StyledTextInput = styled.TextInput`
	width: 60%;
	margin: 10px;
	background-color: white;
	border: 2px solid black;
`;
const Welcome = () => {
	const [visible, setVisible] = useState(true);
	const [visible1, setVisible1] = useState(true);
	const [change, setChange] = useState(false);
	const { profile, setProfile } = useContext(ProfileContext);
	const image = { uri: "../assets/images/VectorWave.png" };

	const toggleOverlay = () => {
		setVisible(!visible);
	};
	const toggleOverlay1 = () => {
		setVisible1(!visible1);
	};
	return (
		<ImageBackground
			imageStyle={{
				resizeMode: "repeat",
				opacity: 1,
			}}
			style={{ width: "100%", height: "100%" }}
			source={require("../assets/VectorWave.png")}
		>
			<View>
				<Button title="Otwórz Panel" onPress={toggleOverlay} />
				<Card>
					<Card.Title>Witaj</Card.Title>
					<Card.Divider />

					<StyledText1 style={{ marginBottom: 10 }}>
						Nasza aplikacja ma za zadanie uświadomić Ci jakie zagrożenia mogą
						Cie spotkać w internecie i jak się przed nimi bronić
					</StyledText1>
					<StyledText1 style={{ marginBottom: 10 }}>
						Podaj nam swoje imię oraz wiek. Te dane pozwolą nam Cię lepiej
						poznać.
					</StyledText1>
					<StyledText1 style={{ marginBottom: 10 }}>
						Jeśli program nie poprosił Cię o wpisanie danych lub jeszcze tego
						nie zrobiłeś kliknij w przycisk Otwórz Panel
					</StyledText1>
					<StyledText1 style={{ marginBottom: 10 }}>
						Jeśli podałeś swoje dane wyswiętlą się one po kliknięciu:
					</StyledText1>
					<Button
						buttonStyle={{
							borderRadius: 0,
							marginLeft: 0,
							marginRight: 0,
							marginBottom: 0,
						}}
						title="Wyświetl dane"
						onPress={toggleOverlay1}
					/>
				</Card>
				<Overlay isVisible={!visible1} onBackdropPress={toggleOverlay1}>
					<StyledText1 h1>Twoje dane to:</StyledText1>
					<StyledText1 h1>Imie: {profile.name} </StyledText1>
					<StyledText1 h1>Wiek: {profile.age} </StyledText1>
				</Overlay>
				<Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
					<Formik
						initialValues={{ name: "", age: 0 }}
						onSubmit={(values, { setSubmitting }) => {
							setChange(!change);
							setVisible(!visible);
							setProfile({ name: values.name, age: values.age });
						}}
					>
						{({ isSubmitting, handleSubmit, handleChange, values }) => (
							<StyledContainer>
								<StyledText1>Podaj swoje dane</StyledText1>
								<Input
									placeholder="Imie"
									leftIcon={{ type: "font-awesome", name: "address-card" }}
									onChangeText={handleChange("name")}
									type="text"
									name="name"
								/>
								<Input
									placeholder="Wiek"
									leftIcon={{ type: "font-awesome", name: "balance-scale" }}
									onChangeText={handleChange("age")}
									type="number"
									name="age"
								/>
								<Button
									title="Zapisz"
									onPress={handleSubmit}
									color={change}
									type="outline"
								/>
							</StyledContainer>
						)}
					</Formik>
				</Overlay>
			</View>
		</ImageBackground>
	);
};

export default Welcome;
