import { useNavigate } from 'react-router-dom';

function PlusIcon() {
    const style = {
        fontSize: '100px',
        color: '#d4d2d2',
        fontWeight: '20',
        border: 'none',
        backgroundColor: 'white',
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/graph');
    };

    return (
        <button style={style} onClick={handleClick}>+</button>
    )
}

export default PlusIcon;
