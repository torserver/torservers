import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const HamburgerMenu = styled.div`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  margin-right: 1rem; // Add some right margin
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>YourLogo</Logo>
      <HamburgerMenu>
        <FaBars />
      </HamburgerMenu>
    </HeaderContainer>
  );
}

export default Header;