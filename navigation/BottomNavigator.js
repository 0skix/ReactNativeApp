import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
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
		<Tab.Navigator initialRouteName="Welcome">
			<Tab.Screen
				name="Welcome"
				component={Welcome}
				// options={{
				// 	tabBarIcon: () => <TabBarIcon name="ios-code" color={"red"} />,
				// }}
			/>
			<Tab.Screen
				name="Courses"
				component={CoursesStackScreen}
				// options={{
				// 	tabBarIcon: () => <TabBarIcon name="ios-code" color={"red"} />,
				// }}
			/>
			<Tab.Screen
				name="Tests"
				component={Tests}
				// options={{
				// 	tabBarIcon: () => <TabBarIcon name="ios-code" color={"red"} />,
				// }}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				// options={{
				// 	tabBarIcon: () => <TabBarIcon name="ios-code" color={"red"} />,
				// }}
			/>
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
