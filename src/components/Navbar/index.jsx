import React from "react";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavLogo,
} from "../../globalstyles/Styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = ({ toggle }) => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/home">Commerce Task</NavLogo>
            <NavBtn>
              <NavBtnLink to="/cart">
                <AiOutlineShoppingCart
                  color="#000"
                  fontSize="2rem"
                  style={{ paddingRight: "10px" }}
                />{" "}
                Cart ({state.length})
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
