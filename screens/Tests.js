import React, { useContext, useState } from "react";
import {
	View,
	ImageBackground,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { Text, Button, Overlay, Card } from "react-native-elements";
import { TestsContext } from "../contexts/TestsContext";
import { StyledText1 } from "./Welcome";
const Tests = ({ navigation }) => {
	const [visible, setVisible] = useState(true);
	const toggleOverlay = () => {
		setVisible(!visible);
	};
	const [cards, setCards] = useState([
		{ id: "1", name: `Test1`, route: "Test1" },
		{
			id: "2",
			name: `Test2`,
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
					<Text>• Jesteś w sekcji Testy:</Text>
					<Text>• Jeśli chcesz napisać test ukończ wszystkie kursy</Text>
					<Text>• Ukończysz kursy poprzez przeczytanie ich i odznaczenie.</Text>
				</Overlay>
				<FlatList
					data={cards}
					renderItem={({ item, index }) => (
						<Card>
							<TouchableOpacity onPress={() => navigation.navigate(item.route)}>
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
