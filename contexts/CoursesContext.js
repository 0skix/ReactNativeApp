import React, { createContext, useState } from "react";
export const CoursesContext = createContext();
export const CoursesContextProvider = ({ children }) => {
	const [progress, setProgress] = useState({
		whaling: 0,
		smsPhishing: 0,
		nigerian: 0,
		spear: 0,
		clone: 0,
		pharming: 0,
	});
	const value = { progress, setProgress };
	return (
		<CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
	);
};
