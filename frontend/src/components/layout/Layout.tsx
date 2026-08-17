import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsappButton from "../common/WhatsappButton";

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />

            <main>{children}</main>

            <Footer />

            <WhatsappButton />
        </>
    );
}

export default Layout;