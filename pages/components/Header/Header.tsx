import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Header = ({menuItems, filterItems}: {menuItems: string[]; filterItems: any}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose category to show
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {menuItems.map((category, id) => {
          return (
            <Dropdown.Item onClick={() => filterItems(category, true)} key={id}>
              {category}
            </Dropdown.Item>
          );
        })}
        <Dropdown.Item onClick={() => filterItems('All', false)}>
              All
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Header;
