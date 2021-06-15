// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./screens/Welcome";
import ProfileContextProvider from "./contexts/ProfileContext";
import { CoursesContextProvider } from "./contexts/CoursesContext";
import BottomNavigator from "./navigation/BottomNavigator";
const Root = createStackNavigator();
import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
	return (
		<SafeAreaProvider>
			<CoursesContextProvider>
				<ProfileContextProvider>
					<NavigationContainer>
						<Root.Navigator>
							<Root.Screen name="Root" component={BottomNavigator} />
						</Root.Navigator>
					</NavigationContainer>
				</ProfileContextProvider>
			</CoursesContextProvider>
		</SafeAreaProvider>
	);
}

export default App;
