import React from 'react';

const DefaultButton = props => {
    const onClick = () => {
        props.onClick();
    };
    const handleClick = () => {
        alert('button clicked');
    };
    return (
        <button type="button" className="outlined" onClick={() => {handleClick()}}>
            button
        </button>
    );
};
export default DefaultButton;