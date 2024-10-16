import React from "react";
import AppContainer from "./components/AppContainer.tsx";
import {MantineProvider} from "@mantine/core";
import {RootState} from "store/store";
import {useAppSelector} from "store/hooks";

const App: React.FC = () => {

    const currentTheme = useAppSelector((state: RootState) => state.theme.currentTheme);
    return (
        <MantineProvider forceColorScheme={currentTheme}>
            <AppContainer>
            </AppContainer>
        </MantineProvider>
    )
}

export default App
