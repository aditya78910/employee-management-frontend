import { Outlet } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";

function RootLayout(){
    return(
        <>
            <HorizontalNav/>
            <Outlet/>
        </>
    )
}

export default RootLayout;