import React, { useContext, useState } from "react";
import {
	View,
	ImageBackground,
	FlatList,
	TouchableOpacity,
	Alert,
} from "react-native";
import { Text, Button, Overlay, Card } from "react-native-elements";
import { CoursesContext } from "../contexts/CoursesContext";
import { StyledText1 } from "./Welcome";
const Tests = ({ navigation }) => {
	const { progress, setProgress } = useContext(CoursesContext);
	const [visible, setVisible] = useState(true);
	const toggleOverlay = () => {
		setVisible(!visible);
	};
	const [cards, setCards] = useState([
		{ id: "1", name: `Test A`, route: "Test1" },
		{
			id: "2",
			name: `Test B`,
			route: "Test2",
		},
	]);
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
				<Button title="Instrukcja" onPress={toggleOverlay} />

				<Overlay isVisible={!visible} onBackdropPress={toggleOverlay}>
					<StyledText1>• Jesteś w sekcji Testy:</StyledText1>
					<StyledText1>
						• Jeśli chcesz napisać test ukończ wszystkie kursy
					</StyledText1>
					<StyledText1>
						• Ukończysz kursy poprzez przeczytanie ich i odznaczenie.
					</StyledText1>
				</Overlay>
				<FlatList
					data={cards}
					renderItem={({ item, index }) => (
						<Card>
							<TouchableOpacity
								onPress={() =>
									progress.reduce((acc, curr) => acc + curr, 0) === 7
										? navigation.navigate(item.route)
										: Alert.alert("Proszę ukończyć wszystkie kursy.")
								}
							>
								<Text h4>{item.name}</Text>
							</TouchableOpacity>
						</Card>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</ImageBackground>
	);
};

export default Tests;
