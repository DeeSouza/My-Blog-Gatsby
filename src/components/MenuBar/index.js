import React, { useState, useEffect } from 'react';
import { Home as IconHome, Grid as IconGrid } from 'styled-icons/boxicons-solid';
import { ThList as IconList } from 'styled-icons/typicons'
import { SearchAlt2 as IconSearch, UpArrowAlt as IconUp, Bulb as IconLight } from 'styled-icons/boxicons-regular';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const MenuBar = () => {
    const [theme, setTheme] = useState(null);
    const [display, setDisplay] = useState(null);

    const isDarkMode = theme === 'dark';
    const isListMode = display === 'list';

    useEffect(() => {
        setTheme(window.__theme);
        setDisplay(window.__display);

        window.__onThemeChange = () => setTheme(window.__theme);
        window.__onDisplayChange = () => setDisplay(window.__display);
    }, []);

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink 
                    cover
                    direction="left"
                    bg={getThemeColor()}
                    duration={0.6}
                    to="/" 
                    title="Go Back Home"
                >
                    <S.MenuBarItem>
                        <IconHome />
                    </S.MenuBarItem>
                </S.MenuBarLink>

                <S.MenuBarLink 
                    cover
                    direction="left"
                    bg="#16202c"
                    duration={0.6}
                    to="/search" 
                    title="Search"
                >
                    <S.MenuBarItem>
                        <IconSearch />
                    </S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>

            <S.MenuBarGroup>
                <S.MenuBarItem className={theme} title="Change Theme" onClick={() => {
                    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
                }}>
                    <IconLight />
                </S.MenuBarItem>
                <S.MenuBarItem title="Change View" onClick={() => {
                    window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
                }}>
                    {isListMode ? <IconGrid /> : <IconList />}
                </S.MenuBarItem>
                <S.MenuBarItem title="Go To Top">
                    <IconUp />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
};

export default MenuBar;