import React, { createContext, useState } from "react";
export const CoursesContext = createContext();
export const CoursesContextProvider = ({ children }) => {
	const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0, 0]);
	const [checked, setChecked] = useState(false);
	const [cSmsPhishing, setcSmsPhishing] = useState([
		false,
		false,
		false,
		false,
		false,
	]);
	const [cWhaling, setcWhaling] = useState([false, false, false, false, false]);
	const [cSpear, setcSpear] = useState([false, false, false, false, false]);
	const [cClone, setcClone] = useState([false, false, false, false, false]);
	const [cPharming, setcPharming] = useState([
		false,
		false,
		false,
		false,
		false,
	]);
	const [cNigerian, setcNigerian] = useState([
		false,
		false,
		false,
		false,
		false,
	]);
	const [cProtect, setcProtect] = useState([false, false, false, false, false]);
	const value = {
		progress,
		setProgress,
		checked,
		setChecked,
		cSmsPhishing,
		setcSmsPhishing,
		cWhaling,
		setcWhaling,
		cNigerian,
		setcNigerian,
		cSpear,
		setcSpear,
		cClone,
		setcClone,
		cPharming,
		setcPharming,
		cProtect,
		setcProtect,
	};
	return (
		<CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
	);
};
