import React, { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
import styled from "styled-components/native";
import { StyledContainer, StyledText } from "./Welcome";
import {
	TouchableOpacity,
	TextInput,
	View,
	Text,
	ImageBackground,
} from "react-native";
const Profile = () => {
	const { profile, setProfile } = useContext(ProfileContext);
	return (
		<ImageBackground
			imageStyle={{
				resizeMode: "repeat",
				opacity: 1,
			}}
			style={{ width: "100%", height: "100%" }}
			source={require("../assets/VectorWave.png")}
		>
			<StyledContainer>
				<StyledText>Welcome {profile.name}</StyledText>
				<StyledText>Your age {profile.age}</StyledText>
				<StyledText>Your course progress ...</StyledText>
				<StyledText>Passed exams ...</StyledText>
				<StyledText>Your certificate...</StyledText>
			</StyledContainer>
		</ImageBackground>
	);
};

export default Profile;
