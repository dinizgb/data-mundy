import React from 'react';
import styled from 'styled-components';

type MobileMenuProps = {
    display: string;
}

const MenuContainer = styled.div<MobileMenuProps>`
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
    padding: 12px 28px 22px 0;
`;

const MenuTitle = styled.span`
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 8px 0;
    margin-left: 40px;
    color: ${({ theme }) => theme.colors.text_4};
    border-bottom: 4px solid ${({ theme }) => theme.colors.text_4};
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
    margin-left: 2px;
`;

const MenuItem = styled.li`
    margin: 5px 0;
    a{
        color: ${({ theme }) => theme.colors.text_4};
        font-size: 17px;
        font-weight: 400;
        text-decoration: none;
        &:hover{
          color: ${({ theme }) => theme.colors.primary_hover};
        }
    }
`;

export default function MobileMenu(props: MobileMenuProps) {
    return (
        <>
            <MenuContainer display={props.display}>
                <ListContainer>
                    <MenuBlock>
                        <MenuTitle>News</MenuTitle>
                        <MenuList>
                            <MenuItem><a href="/news/history/">History</a></MenuItem>
                            <MenuItem><a href="/news/nature/">Nature</a></MenuItem>
                            <MenuItem><a href="/news/space/">Space</a></MenuItem>
                            <MenuItem><a href="/news/tech/">Tech</a></MenuItem>
                        </MenuList>
                    </MenuBlock>
                    <MenuBlock>
                        <MenuTitle>Charts</MenuTitle>
                        <MenuList>
                            <MenuItem><a href="/charts/sports/">Sports</a></MenuItem>
                            <MenuItem><a href="/charts/people/">People</a></MenuItem>
                            <MenuItem><a href="/charts/politics/">Politics</a></MenuItem>
                            <MenuItem><a href="/charts/military/">Military</a></MenuItem>
                            <MenuItem><a href="/charts/technology/">Technology</a></MenuItem>
                            <MenuItem><a href="/charts/business/">Business</a></MenuItem>
                            <MenuItem><a href="/charts/economics/">Economics</a></MenuItem>
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