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
		<StyledContainer>
			<StyledText>Welcome {profile.name}</StyledText>
			<StyledText>Your age {profile.age}</StyledText>
			<StyledText>Your course progress ...</StyledText>
			<StyledText>Passed exams ...</StyledText>
			<StyledText>Your certificate...</StyledText>
		</StyledContainer>
	);
};

export default Profile;
