import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './plus-icon-landing-page.css';
import EquationWritingBox from "./EquationWritingBox";

function PlusIconLandingPage() {
    const size = 60
    const style = {
        fontSize: '60px', // Adjust this value as needed to center the plus sign
        color: '#b8b5b5',
        border: 'none',
        padding: '0 0 8px 2px',
        backgroundColor: '#ececec',
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
        display: 'flex', // Add display flex to center the plus sign
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
    }

    const [showDialog, setShowDialog] = useState(false);

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    return (
        <div>
            <button
                style={style}
                className="button-pop"
                onClick={handleClick}
            >
                +
            </button>

            {/* Use DialogBox Component */}
            {showDialog && (
                <EquationWritingBox
                    message="This is a reusable dialog box!"
                    onClose={handleCloseDialog}
                />
            )}
        </div>
    )
}

export default PlusIconLandingPage;
