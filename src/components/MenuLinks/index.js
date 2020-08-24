import React from 'react';
import links from './content';

import * as S from './styled';

const MenuLinks = () => {
    return (
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                {links.map(({ label, url }) => (
                    <S.MenuLinksItem key={label}>
                        <S.MenuLinksLink to={url} activeClassName="active">
                            {label}
                        </S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.MenuLinksWrapper>
    )
}

export default MenuLinks;