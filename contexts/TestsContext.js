import React, { createContext, useState } from "react";
export const TestsContext = createContext();
export const TestsContextProvider = ({ children }) => {
	const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0, 0]);
	const [toggle, setToggle] = useState(true);
	const [toggle1, setToggle1] = useState(true);
	const [score, setScore] = useState([0, 0]);
	const [confirm, setConfirm] = useState(false);
	const [confirm1, setConfirm1] = useState(false);
	const value = {
		progress,
		setProgress,
		score,
		setScore,
		toggle,
		setToggle,
		confirm,
		setConfirm,
		toggle1,
		setToggle1,
		confirm1,
		setConfirm1,
	};
	return (
		<TestsContext.Provider value={value}>{children}</TestsContext.Provider>
	);
};
