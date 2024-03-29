import React, { useContext, useState } from "react";
import {
	View,
	FlatList,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import { Card, Text, LinearProgress } from "react-native-elements";
import { CoursesContext } from "../contexts/CoursesContext";

const Courses = ({ navigation }) => {
	const { progress, setProgress } = useContext(CoursesContext);
	const [cards, setCards] = useState([
		{ id: "1", name: `Whaling`, route: "Whaling" },
		{
			id: "2",
			name: `SMS Phishing`,
			route: "SmsPhishing",
		},
		{
			id: "3",
			name: `Nigeryjskie oszustwa`,
			route: "Nigerian",
		},
		{ id: "4", name: `Spear Phishing`, route: "Spear" },
		{ id: "5", name: `Clone Phishing`, route: "Clone" },
		{ id: "6", name: `Pharming`, route: "Pharming" },
		{
			id: "7",
			name: `Co musisz wiedzieć!`,
			route: "Protect",
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
				<FlatList
					data={cards}
					renderItem={({ item, index }) => (
						<Card>
							<TouchableOpacity onPress={() => navigation.navigate(item.route)}>
								<Text h4>{item.name}</Text>
								<LinearProgress
									color="primary"
									variant={"determinate"}
									value={progress[index]}
								/>
							</TouchableOpacity>
						</Card>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</ImageBackground>
	);
};

export default Courses;
