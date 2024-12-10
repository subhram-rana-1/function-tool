import AddEquation from "./AddEquation";
import { CSSProperties } from 'react';
import PlusIconLandingPage from "./PlusIconLandingPage";

function LandingPage() {
    const outerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 20,
        height: "100vh",
        overflow: "hidden",
    }

    const innerStyle: CSSProperties = {
        ...outerStyle,
        flexDirection: "column",
        height: "auto",
        justifyContent: "center",
    };

    return (
        <div style={outerStyle}>
            <div style={innerStyle}>
                <div><PlusIconLandingPage/></div>
                <div><AddEquation/></div>
            </div>
        </div>
    )
}

export default LandingPage;
