import React, { useContext, useState } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import { Card, Text, LinearProgress } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { CoursesContext } from "../contexts/CoursesContext";
import { ProfileContext } from "../contexts/ProfileContext";
import { StyledText1 } from "./Welcome";

const Courses = ({ navigation }) => {
	const { progress } = useContext(CoursesContext);
	const { profile } = useContext(ProfileContext);

	const [cards] = useState([
		{ id: "1", name: `Whaling`, route: "Whaling", context: "whaling" },
		{
			id: "2",
			name: `SMS Phishing`,
			route: "SmsPhishing",
			context: "smsPhishing",
		},
		{
			id: "3",
			name: `Nigeryjskie oszustwa`,
			route: "Nigerian",
			context: "nigerian",
		},
		{ id: "4", name: `Spear Phishing`, route: "Spear", context: "spear" },
		{ id: "5", name: `Clone Phishing`, route: "Clone", context: "clone" },
		{ id: "6", name: `Pharming`, route: "Pharming", context: "pharming" },
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
			<Card>
				<ListItem>
					<Avatar
						size="large"
						overlayContainerStyle={{ backgroundColor: "blue" }}
						rounded
						icon={{ name: "home", color: "white" }}
					/>

					<StyledText1>{profile.name}</StyledText1>
				</ListItem>
				<Card.Divider />
				<Text h4>Twoje Kursy:</Text>
				<Card.Divider />
				<View>
					<FlatList
						data={cards}
						renderItem={({ item, index }) => (
							<View>
								<StyledText1>{item.name}</StyledText1>
								<LinearProgress
									color="secondary"
									variant={"determinate"}
									value={progress[index]}
								/>

								<Card.Divider />
							</View>
						)}
						keyExtractor={(item) => item.id}
					/>
				</View>
				<Card.Divider />
				<Text h4>Twoje Testy:</Text>
			</Card>
		</ImageBackground>
	);
};

export default Courses;
