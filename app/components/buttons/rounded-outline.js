import React from 'react';

const Button = props => {
    const onClick = () => {
        props.onClick();
    };
    return (
        <div className="game_button" style=`width: `>

        </div>
    );
};
export default Button;