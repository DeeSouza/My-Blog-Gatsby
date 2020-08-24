import React from 'react';
import { Home as IconHome, Grid as IconGrid } from 'styled-icons/boxicons-solid';
import { SearchAlt2 as IconSearch, UpArrowAlt as IconUp, Bulb as IconLight } from 'styled-icons/boxicons-regular';

import * as S from './styled';

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Go Back Home">
                <S.MenuBarItem>
                    <IconHome />
                </S.MenuBarItem>
            </S.MenuBarLink>

            <S.MenuBarLink to="/search" title="Search">
                <S.MenuBarItem>
                    <IconSearch />
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>

        <S.MenuBarGroup>
            <S.MenuBarItem title="Change Theme">
                <IconLight />
            </S.MenuBarItem>
            <S.MenuBarItem title="Change View">
                <IconGrid />
            </S.MenuBarItem>
            <S.MenuBarItem title="Go To Top">
                <IconUp />
            </S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
);

export default MenuBar;