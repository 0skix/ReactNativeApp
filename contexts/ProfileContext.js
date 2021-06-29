import React, { createContext, useState } from "react";
export const ProfileContext = createContext();
export const ProfileContextProvider = ({ children }) => {
	const [profile, setProfile] = useState({ name: "", age: null });
	const value = { profile, setProfile };
	return (
		<ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
	);
};

export default ProfileContextProvider;
