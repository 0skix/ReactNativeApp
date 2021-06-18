import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Welcome from "../screens/Welcome";
import Courses from "../screens/Courses";
import Whaling from "../screens/Whaling";
import Tests from "../screens/Tests";
import Profile from "../screens/Profile";
import SmsPhishing from "../screens/SmsPhishing";
import Pharming from "../screens/Pharming";
import Spear from "../screens/Spear";
import Clone from "../screens/Clone";
import Nigerian from "../screens/Nigerian";
const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === "Welcome") {
						iconName = focused ? "home" : "home";
					} else if (route.name === "Courses") {
						iconName = focused ? "bulb1" : "bulb1";
					} else if (route.name === "Tests") {
						iconName = focused ? "select1" : "select1";
					} else if (route.name === "Profile") {
						iconName = focused ? "profile" : "profile";
					}
					return <AntDesign name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "#FEC034",
				inactiveTintColor: "white",
				activeBackgroundColor: "#FEC034",
				inactiveTintColor: "white",
				activeBackgroundColor: "#1c66c0",
				inactiveBackgroundColor: "#1c66c0",
			}}
		>
			<Tab.Screen name="Welcome" component={Welcome} />
			<Tab.Screen name="Courses" component={CoursesStackScreen} />
			<Tab.Screen name="Tests" component={Tests} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
}

const CoursesStack = createStackNavigator();

function CoursesStackScreen() {
	return (
		<CoursesStack.Navigator initialRouteName="Courses">
			<CoursesStack.Screen name="Courses" component={Courses} />
			<CoursesStack.Screen name="Whaling" component={Whaling} />
			<CoursesStack.Screen name="SmsPhishing" component={SmsPhishing} />
			<CoursesStack.Screen name="Pharming" component={Pharming} />
			<CoursesStack.Screen name="Spear" component={Spear} />
			<CoursesStack.Screen name="Clone" component={Clone} />
			<CoursesStack.Screen name="Nigerian" component={Nigerian} />
		</CoursesStack.Navigator>
	);
}
