import React, { createContext, useState } from "react";
export const CoursesContext = createContext();
export const CoursesContextProvider = ({ children }) => {
	const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0]);
	const [checked, setChecked] = useState(false);
	const [cSmsPhishing, setcSmsPhishing] = useState({
		a: false,
		b: false,
		c: false,
		d: false,
		e: false,
	});
	const value = {
		progress,
		setProgress,
		checked,
		setChecked,
		cSmsPhishing,
		setcSmsPhishing,
	};
	return (
		<CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
	);
};
