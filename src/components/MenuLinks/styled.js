import styled from 'styled-components';
import AnyLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const MenuLinksWrapper = styled.nav`
    ${media.lessThan('large')`
        display: none;
    `}
`;

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
`;

export const MenuLinksItem = styled.li`
    padding: .5rem 0;

    .active{
        color: var(--highlight);
    }
`;

export const MenuLinksLink = styled(AnyLink)`
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover{
        color: var(--highlight);
    }
`;

export const IconWrapper = styled.div`
    fill: #bbb;
    width: 30px;
    height: 30px;
`;