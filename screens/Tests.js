import React from "react";
import { ImageBackground, View } from "react-native";

const Tests = () => {
	return (
		<ImageBackground
			imageStyle={{
				resizeMode: "repeat",
				opacity: 1,
			}}
			style={{ width: "100%", height: "100%" }}
			source={require("../assets/VectorWave.png")}
		>
			<View></View>
		</ImageBackground>
	);
};

export default Tests;
