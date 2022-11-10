import useDarkMode from "@/hooks/useDarkMode";
import React, { createContext } from "react";

interface ContextProps {}

export const AppContext = createContext({} as ContextProps);

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
