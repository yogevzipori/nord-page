import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function MenuButton() {
  return (
      <div>
    <DropdownButton id="menu-button" title="NordVPN" size="large">
      <Dropdown.Item href="#/action-1">What is a VPN?</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Download VPN</Dropdown.Item>
      <Dropdown.Item href="#/action-3">More Deals </Dropdown.Item>
    </DropdownButton>
    </div>
  )
};

export default MenuButton;