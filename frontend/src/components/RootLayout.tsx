import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";

function RootLayout() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    );
}

export default RootLayout;