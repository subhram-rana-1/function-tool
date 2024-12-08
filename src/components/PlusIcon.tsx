import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './plus-icon.css';

function PlusIcon() {
    const style = {
        fontSize: '40px',
        color: '#d4d2d2',
        fontWeight: '20',
        border: 'none',
        backgroundColor: 'white',
        borderRadius: '50px',
    }

    const [isPopped, setIsPopped] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsPopped(true);
        // setTimeout(() => {
        //     navigate('/graph');
        // }, 200); // Navigate after the animation duration
    };

    return (
        <span>
            <button
            style={style}
            className={`button-pop ${isPopped ? 'button-pop-out' : ''}`}
            onClick={handleClick}
            onMouseDown={() => setIsPopped(true)}
            onMouseUp={() => setIsPopped(false)}
            onMouseLeave={() => setIsPopped(false)}>
                +
            </button>
        </span>
        // <button type="button" className="btn btn-secondary">+</button>
    )
}

export default PlusIcon;
