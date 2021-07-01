import React, { useContext, useState } from "react";
import {
	View,
	FlatList,
	ImageBackground,
	ScrollView,
	Alert,
	Image,
} from "react-native";
import { Card, Text, LinearProgress, Button } from "react-native-elements";
import Svg, {
	G,
	Path,
	Circle,
	Defs,
	LinearGradient,
	Stop,
} from "react-native-svg";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { CoursesContext } from "../contexts/CoursesContext";
import { TestsContext } from "../contexts/TestsContext";
import { ProfileContext } from "../contexts/ProfileContext";
import { StyledText1 } from "./Welcome";
import styled from "styled-components/native";
import { Overlay } from "react-native-elements/dist/overlay/Overlay";

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
	const [visible, setVisible] = useState(true);
	const toggleOverlay = () => {
		setVisible(!visible);
	};
	const { profile } = useContext(ProfileContext);
	const [cards1, setCards1] = useState([
		{ id: "1", name: `Test A`, route: "TestA" },
		{
			id: "2",
			name: `Test B`,
			route: "TestB",
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
			<Overlay isVisible={!visible} onBackdropPress={toggleOverlay}>
				<Svg
					width={300}
					height={300}
					viewBox="0 0 408 428"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<G filter="url(#prefix__filter0_i)">
						<Path
							d="M98.972 82.5c-14.5 17 14.999 30 14.499 29l8.501-7c-12-13-8.501-15-12.5-22-3.2-5.6-8.334-2.333-10.5 0z"
							fill="#BD792A"
						/>
					</G>
					<Path
						d="M98.972 82.5c-14.5 17 14.999 30 14.499 29l8.501-7c-12-13-8.501-15-12.5-22-3.2-5.6-8.334-2.333-10.5 0z"
						stroke="#000"
						strokeWidth={2}
					/>
					<G filter="url(#prefix__filter1_i)">
						<Path
							d="M237.972 92c7.2 8.8-14.667 20.667-26.5 25.5l-6-6.5c11.2-7.6 16.333-17.167 17.5-21 2-3 7.8-6.8 15 2z"
							fill="#BD792A"
						/>
					</G>
					<Path
						d="M237.972 92c7.2 8.8-14.667 20.667-26.5 25.5l-6-6.5c11.2-7.6 16.333-17.167 17.5-21 2-3 7.8-6.8 15 2z"
						stroke="#000"
						strokeWidth={2}
					/>
					<G filter="url(#prefix__filter2_i)">
						<Path
							d="M86.972 138.5c4.5-1 35.5-59.5 95.5-39.5 48 16 52.333 68.667 48.5 93 17.167 20.833 50 72 44 110-4.618 29.244-18.143 79.146-62.745 103.5 7.915 2.5 22.745 9.3 18.745 16.5-4 7.2-24.667-3.33-34.5-9.495-26.605 9.385-62.095 10.654-109.5-2.505-6.619-1.837-12.777-3.911-18.5-6.197-13.334 6.066-42.4 16.298-52 8.702-9.6-7.596 20-13.99 36-16.238-78.27-43.243-50.963-135.433-24-180.767l24-30c-13.334-15.667-25.1-47 34.5-47z"
							fill="#BD792A"
						/>
					</G>
					<Path
						d="M212.227 405.5c44.602-24.354 58.127-74.256 62.745-103.5 6-38-26.833-89.167-44-110 3.833-24.333-.5-77-48.5-93-60-20-91 38.5-95.5 39.5-59.6 0-47.833 31.333-34.5 47l-24 30c-26.963 45.334-54.27 137.524 24 180.767m159.755 9.233c7.915 2.5 22.745 9.3 18.745 16.5-4 7.2-24.667-3.33-34.5-9.495m15.755-7.005a107.262 107.262 0 01-15.755 7.005m0 0c-26.605 9.385-62.095 10.654-109.5-2.505-6.619-1.837-12.777-3.911-18.5-6.197m-16-7.536c-16 2.248-45.6 8.642-36 16.238 9.6 7.596 38.666-2.636 52-8.702m-16-7.536c4.909 2.712 10.234 5.232 16 7.536"
						stroke="#000"
						strokeWidth={2}
					/>
					<G filter="url(#prefix__filter3_d)">
						<Path
							d="M159.471 259.5c50.4 40.4 31.667 122.167 16 158-50 7.2-88.833-5.667-102-13-5.333-44.667-7.4-136.2 27-145 34.4-8.8 53.667-3.667 59 0z"
							fill="#FFDAA4"
						/>
					</G>
					<Circle cx={107.972} cy={134} r={5} fill="#000" />
					<Circle cx={169.972} cy={134} r={5} fill="#000" />
					<Path
						d="M129.573 144.227c-8-1.6-10.333 5.666-10.5 9.5-1.418 4.8 12.409 6.333 19.5 6.5 5.5.166 16.9-.9 18.5-6.5 1.6-5.6-4-8.667-7-9.5-3.5.666-12.5 1.6-20.5 0z"
						fill="#693900"
						stroke="#000"
					/>
					<G filter="url(#prefix__filter4_i)">
						<Path
							d="M201.972 207.5c-20.8-4-38 32.667-44 51.5-5.5-3-25.7-6.8-62.5 2-.666-14.333-10.1-49.4-42.5-75-14-16-26.9-47.8 33.5-47 12.333.667 36.5 3.2 34.5 8-2 3.167-2 10.4 14 14 7.667-.167 23-2.4 23-10 3.918 4.034 6.872 6.002 18.5 7 49.5-.5 51.5 54.5 25.5 49.5z"
							fill="#FFDAA4"
						/>
					</G>
					<G filter="url(#prefix__filter5_i)">
						<Path
							d="M121.98 227.252c1.602-.321 5.372-.209 7.635 2.81-2.671 1.755-7.105 6.229-3.464 10.083 6.554-.03 20.021 3.53 21.462 18.009.434 8.691-2.894 27.789-19.681 34.648-18.77-4.878-24.74-22.358-25.379-30.489-.905-6.622 1.567-20.349 18.698-22.283-1.054-1.284-2.384-5.637.729-12.778z"
							fill="#4F2C16"
						/>
					</G>
					<Path
						d="M126.151 240.145c-3.641-3.854.793-8.328 3.464-10.083-2.263-3.019-6.033-3.131-7.635-2.81-3.113 7.141-1.783 11.494-.729 12.778m4.9.115c6.554-.03 20.021 3.53 21.462 18.009m-21.462-18.009l-4.9-.115m26.362 18.124c-6.953-3.703-25.699-8.054-45.06 4.159m45.06-4.159c.434 8.691-2.894 27.789-19.681 34.648-18.77-4.878-24.74-22.358-25.379-30.489m0 0c-.905-6.622 1.567-20.349 18.698-22.283"
						stroke="#000"
						strokeWidth={5}
					/>
					<G filter="url(#prefix__filter6_i)">
						<Path
							d="M147.516 258.031c-18.648-8.453-37.732-.683-44.942 4.258 2.828 21.399 18.098 29.242 25.379 30.489 17.15-7.673 20.188-26.362 19.563-34.747z"
							fill="#A0592B"
						/>
					</G>
					<Path
						d="M147.516 258.031c-18.648-8.453-37.732-.683-44.942 4.258 2.828 21.399 18.098 29.242 25.379 30.489 17.15-7.673 20.188-26.362 19.563-34.747z"
						stroke="#000"
						strokeWidth={5}
					/>
					<Path
						d="M106.972 267c.4-10-15.834-17.5-24-20l3.5 16c6.666 5.5 20.1 14 20.5 4z"
						fill="#BD792A"
					/>
					<Path
						d="M82.972 247c8.166 2.5 24.4 10 24 20-.4 10-13.834 1.5-20.5-4"
						stroke="#000"
					/>
					<Path
						d="M142.659 270.294c-7.046-9.294 12.719-20.146 23.482-24.41l1.542 3.34 1.542 3.339 3.084 6.68c-6.948 7.556-22.605 20.344-29.65 11.051z"
						fill="#BD792A"
					/>
					<G filter="url(#prefix__filter7_i)">
						<Path
							d="M166.141 245.884c-10.763 4.264-30.528 15.116-23.482 24.41 7.045 9.293 22.702-3.495 29.65-11.051"
							stroke="#000"
						/>
					</G>
					<Path
						d="M176.472 158c8.333-.333 27.5 2.8 37.5 18 2.5 4.5 6.6 15.6 3 24-1.167 3.167-5.8 9.1-15 7.5M136.972 160v9m0 0c2.333 1.833 8.7 4.4 15.5 0m-15.5 0c-1.667 2-7.2 4.8-16 0"
						stroke="#000"
					/>
					<Path
						d="M131.972 184v-12.5c1-.167 3.4-.8 5-2 2.888 1.357 4.533 2.124 6 2 1 3.333 2.5 10.3 2.5 13.5 0 3.2-4.667.667-7-1-.4 1.6-4.5.667-6.5 0z"
						fill="#fff"
					/>
					<Path
						d="M138.472 184c-.4 1.6-4.5.667-6.5 0v-12.5c1-.167 3.4-.8 5-2m1.5 14.5c.4-1.6-.834-10.333-1.5-14.5m1.5 14.5c2.333 1.667 7 4.2 7 1s-1.5-10.167-2.5-13.5c-1.467.124-3.112-.643-6-2"
						stroke="#000"
					/>
					<G filter="url(#prefix__filter8_i)">
						<Path
							d="M254.972 364c8.333-15.167 24.2-51.8 21-77-4-31.5-14.5-49-21-59-3.5-31.333-.3-100.9 40.5-128.5 40.8-27.6 80-15.833 94.5-6.5 8.333 7.667 22.9 30.3 14.5 59.5-33.834-15.833-87.5-21.6-31.5 82 50.481 93.39-13.075 146.337-62.107 166.096-4.62 2.445-9.752 4.339-15.393 5.299-15.277 2.6-34.292-1.655-57-20.395l16.5-21.5z"
							fill="#CB6E00"
						/>
						<Path
							d="M254.972 364c8.333-15.167 24.2-51.8 21-77-4-31.5-14.5-49-21-59-3.5-31.333-.3-100.9 40.5-128.5 40.8-27.6 80-15.833 94.5-6.5 8.333 7.667 22.9 30.3 14.5 59.5-33.834-15.833-87.5-21.6-31.5 82 50.481 93.39-13.075 146.337-62.107 166.096-4.62 2.445-9.752 4.339-15.393 5.299-15.277 2.6-34.292-1.655-57-20.395l16.5-21.5z"
							fill="url(#prefix__paint0_linear)"
						/>
					</G>
					<Path
						d="M404.472 152.5c8.4-29.2-6.167-51.833-14.5-59.5-14.5-9.333-53.7-21.1-94.5 6.5s-44 97.167-40.5 128.5c6.5 10 17 27.5 21 59 3.2 25.2-12.667 61.833-21 77l-16.5 21.5c22.708 18.74 41.723 22.995 57 20.395m109-253.395c-1-9.833-8-30.9-28-36.5-25-7-54.5 20.5-57 33.5s-20.5 58 16 101.5 13 110 0 127.5c-7.268 9.783-20.63 24.099-40 27.395m109-253.395c-33.834-15.833-87.5-21.6-31.5 82s-28.333 157.43-77.5 171.395"
						stroke="#000"
					/>
					<Path
						d="M60.596 105.326C48.154 94.031 58.26 83.777 64.87 80.062c10.206 4.677 25.496 10.204 44.072 14.835 3.276-20.563 12.095-65.44 21.163-80.444 9.069-15.004 30.048-4.414 39.404 2.756 19.416-13.88 32.697-4.063 36.91 2.58l10.22 83.212c14.572-1.654 29.283-4.62 43.753-9.266 14.114 4.595 11.176 16.987 7.943 22.609-74.776 22.839-192.185 3.101-207.738-11.018z"
						fill="#816647"
					/>
					<Path
						d="M216.638 103.001c14.572-1.654 29.283-4.62 43.753-9.266 14.114 4.595 11.176 16.987 7.943 22.609-74.776 22.839-192.185 3.101-207.738-11.018-12.442-11.295-2.336-21.549 4.273-25.264 10.206 4.677 25.496 10.204 44.072 14.835M216.638 103l-10.22-83.211c-4.213-6.644-17.494-16.46-36.91-2.581-9.356-7.17-30.335-17.76-39.404-2.756-9.068 15.004-17.887 59.88-21.163 80.444M216.638 103c-39.412 4.473-77.807-.654-107.697-8.105"
						stroke="#000"
					/>
					<Path
						d="M216.472 103c-42.8 5.2-89.5-3.167-107.5-8l1.5-10c17.166 4.667 62.2 12.9 105 8.5l1 9.5z"
						fill="#B18C60"
						stroke="#000"
					/>
					<Defs>
						<LinearGradient
							id="prefix__paint0_linear"
							x1={322.734}
							y1={82.331}
							x2={322.734}
							y2={406.59}
							gradientUnits="userSpaceOnUse"
						>
							<Stop stopColor="#A35700" />
							<Stop offset={1} stopColor="#fff" stopOpacity={0} />
						</LinearGradient>
					</Defs>
				</Svg>
				<StyledText1 style={{ textAlign: "center" }} h1>
					Otrzymujesz Order Wiewióra!{" "}
				</StyledText1>
			</Overlay>

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
					<Button
						buttonStyle={{
							borderRadius: 0,
							marginLeft: 0,
							marginRight: 0,
							marginBottom: 0,
						}}
						title="Sprawdź czy Ci się udało!"
						onPress={() =>
							score[0] >= 0.5 && score[1] >= 0.5
								? setVisible(!visible)
								: Alert.alert(
										"Na order musisz zasłużyć... Zdaj testy na poziomie conajmniej 50%"
								  )
						}
					/>
				</Card>
			</ScrollView>
		</ImageBackground>
	);
};

export default Courses;
