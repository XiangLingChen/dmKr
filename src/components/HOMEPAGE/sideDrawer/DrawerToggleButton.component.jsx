import React from 'react';
import './DrawerToggleButton.style.css';

const DrawerToggleButton = props =>(
    <button className="button-container" onClick={props.click}>
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
    </button>
);

export default DrawerToggleButton;