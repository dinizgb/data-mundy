import * as React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import MobileMenu from '../Menus/MobileMenu';

type NavProps = {
  display: string;
}

const NavContainer = styled.nav`
  float: right;
  @media (max-width: 768px){
    padding: 0;
  }
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  @media (max-width: 885px){
    display: flex;
  }
`;

const NavLi = styled.li`
  display: flex;
  padding: 0 0 0 25px;
  a{
      color: #fff;
      font-weight: 500;
      text-decoration: none;
      &:hover{
        color: ${({ theme }) => theme.colors.primary_hover};
      }
  }
  @media (max-width: 885px){
    display: none;
  }
`;

const NavLiMobile = styled.li`
  padding: 0 0 0 25px;
  color: #fff;
  cursor: pointer;
  &:hover{
    color: ${({ theme }) => theme.colors.primary_hover};
  }
`;

const MenuOverlay = styled.div<NavProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 25;
    transition: all 1s ease 0s;
    display: ${props => props.display};
`;

export default function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  function toggleMobileMenu(){setShowMobileMenu(!showMobileMenu);}
  return (
    <NavContainer>
        <NavUl>
            <NavLi><a href="/news/">News</a></NavLi>
            <NavLi><a href="/charts/">Charts</a></NavLi>
            <NavLi><a href="/specials/">Specials</a></NavLi>
            <NavLiMobile onClick={toggleMobileMenu}><MenuIcon/></NavLiMobile>
            <MobileMenu display={showMobileMenu ? "block" : "none"} />
            <MenuOverlay display={showMobileMenu ? "block" : "none"} onClick={toggleMobileMenu} />
        </NavUl>
    </NavContainer>
  );
}