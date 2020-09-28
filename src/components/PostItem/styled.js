import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
    color: var(--texts);
    display: flex;
    text-decoration: none;

    body#grid & {
        background-color: var(--background);
    }

    &:hover {
        color: var(--highlight);
    }

    ${media.lessThan('large')`
        text-align: left;
    `}
`;

export const PostItemWrapper = styled.section`
    align-items: center;
    border-bottom: 1px solid #37444d;
    display: flex;
    padding: 2rem 3rem;
    width: 100%;

    body#grid & {
        border: none;
        padding: 2rem 1rem;
        flex-direction: column;
        justify-content: center;
    }

    ${media.lessThan('large')`
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding: 1.5rem;
    `}
`;

export const PostItemTag = styled.div`
    align-items: center;
    background: ${props => props.background || 'var(--highlight)'};
    border-radius: 50%;
    color: #FFF;
    display: flex;
    font-size: 1.3rem;
    font-weight: 700;
    justify-content: center;
    min-height: 90px;
    min-width: 90px;
    text-transform: uppercase;  

    body#grid & {
        margin-bottom: 1.5rem;
    }

    ${media.lessThan('large')`
        border-radius: 4px;
        margin-bottom: 0.4rem;
        min-height: auto;
        padding: 2px 5px;
        font-size: 1rem;
        min-width: auto;
    `}
`;

export const PostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;

    ${media.lessThan('large')`
        margin-left: 0;
    `}
`;

export const PostItemDate = styled.time`
    font-size: 0.9rem;

    ${media.lessThan('large')`
        font-size: 0.7rem;
    `}
`;

export const PostItemTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0.2rem 0 0.5rem;

    body#grid & {
        line-height: 1.1;
        margin: 0.8rem 0;
    }

    ${media.lessThan('large')`
        margin-left: 0;
        font-size: 1.3rem;
    `}
`;

export const PostItemDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.2;

    ${media.lessThan('large')`
        font-size: 1rem;
    `}
`;