import React, { createContext, useState } from "react";
export const TestsContext = createContext();
export const TestsContextProvider = ({ children }) => {
	const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0, 0]);
	const value = { progress, setProgress };
	return (
		<TestsContext.Provider value={value}>{children}</TestsContext.Provider>
	);
};
