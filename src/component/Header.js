import React,{useState} from "react";
import { Button, Dropdown, Menu } from 'semantic-ui-react'


const Header=()=>{

    const [activeItem,setActiveItem]=useState({})

   const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })


    return(
        <>
          <Menu size='mini'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
        </>
    )
}

export default Header;