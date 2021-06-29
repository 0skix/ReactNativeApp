import React, { useContext, useState } from "react";
import { View, FlatList, ImageBackground, ScrollView } from "react-native";
import { Card, Text, LinearProgress, Button } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { CoursesContext } from "../contexts/CoursesContext";
import { TestsContext } from "../contexts/TestsContext";
import { ProfileContext } from "../contexts/ProfileContext";
import { StyledText1 } from "./Welcome";
import styled from "styled-components/native";

export const StyledText2 = styled.Text`
	font-size: 18px;
	color: #000000;
	font-weight: 700;
	text-decoration: none solid rgb(68, 68, 68);
	text-align: center;
`;
const Courses = ({ navigation }) => {
	const {
		score,
		setScore,
		toggle,
		setToggle,
		setToggle1,
		confirm,
		confirm1,
		setConfirm,
		setConfirm1,
	} = useContext(TestsContext);
	const { progress } = useContext(CoursesContext);
	const { profile } = useContext(ProfileContext);
	const [cards1, setCards1] = useState([
		{ id: "1", name: `Test A`, route: "Test1" },
		{
			id: "2",
			name: `Test B`,
			route: "Test2",
		},
	]);
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
			<ScrollView>
				<Card>
					<ListItem>
						<Avatar
							size="large"
							overlayContainerStyle={{ backgroundColor: "blue" }}
							rounded
							icon={{ name: "home", color: "white" }}
						/>

						<StyledText1>{profile.name}</StyledText1>
						<StyledText1>Lat: {profile.age}</StyledText1>
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
					<Card.Divider />
					<FlatList
						data={cards1}
						renderItem={({ item, index }) => (
							<View>
								<StyledText2>
									{item.name} {score[index].toPrecision(2) * 100}%{" "}
								</StyledText2>
								<LinearProgress
									color="secondary"
									variant={"determinate"}
									value={score[index]}
								/>
								<Button
									onPress={() => {
										if (index === 0) {
											setToggle(true), setConfirm(!confirm);
										} else if (index === 1)
											setToggle1(true), setConfirm1(!confirm1);
									}}
									type="clear"
									size={15}
									title="Odblokuj test"
								/>
								<Card.Divider />
							</View>
						)}
						keyExtractor={(item) => item.id}
					/>
				</Card>
			</ScrollView>
		</ImageBackground>
	);
};

export default Courses;
