import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    z-index: 26;
    background-color: ${({ theme }) => theme.colors.background};
    display: ${props => props.display};
    flex-direction: column;
    overflow: hidden;
`;

const ListContainer = styled.div`
    overflow: auto;
    height: 100%;
    margin-right: 22px;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        height: 20px !important;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const MenuBlock = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    margin-right: 5px;
    padding: 12px 28px 22px;
`;

const MenuTitle = styled.span`
    font-size: 12px;
    opacity: 0.8;
    text-transform: uppercase;
    padding: 8px 0;
    color: ${({ theme }) => theme.colors.text_3}
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 2px;
`;

const MenuItem = styled.li`
    margin: 10px 0;
    a{
        color: ${({ theme }) => theme.colors.text_4};
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        &:hover{
          color: ${({ theme }) => theme.colors.primary_hover};
        }
    }
`;

type MobileMenuProps = {
    display: string
}

export default function MobileMenu(props: MobileMenuProps) {
    return (
        <>
            <MenuContainer display={props.display}>
                <ListContainer>
                    <MenuBlock>
                        <MenuTitle>News Categories</MenuTitle>
                        <MenuList>
                            <MenuItem><a href="/news/lifestyle">Lifestyle</a></MenuItem>
                            <MenuItem><a href="/news/music-business">Music Business</a></MenuItem>
                            <MenuItem><a href="/news/music-history">Music History</a></MenuItem>
                            <MenuItem><a href="/news/people">People</a></MenuItem>
                            <MenuItem><a href="/news/releases">Releases</a></MenuItem>
                        </MenuList>
                    </MenuBlock>
                    <MenuBlock>
                        <MenuTitle>Follow us</MenuTitle>
                        <MenuList>
                            <MenuItem><a href="#">Instagram</a></MenuItem>
                        </MenuList>
                    </MenuBlock>
                    <MenuBlock>
                        <MenuTitle>Talk with us</MenuTitle>
                        <MenuList>
                            <MenuItem><a href="#">Email</a></MenuItem>
                        </MenuList>
                    </MenuBlock>
                </ListContainer>
            </MenuContainer>
        </>
    )
}