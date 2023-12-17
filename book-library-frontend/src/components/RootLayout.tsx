import MainNavigation from "./navigation/MainNavigation";
import {Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
