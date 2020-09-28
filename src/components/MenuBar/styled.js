import styled from 'styled-components';
import { Link } from 'gatsby';
import media from 'styled-media-query';

export const MenuBarWrapper = styled.aside`
    align-items: center;
    background: var(--mediumBackground);
    border-left: 1px solid var(--borders);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0.8rem 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 3.75rem;
    transition: background 0.5s;

    ${media.lessThan('large')`
      height: auto;
      bottom: 0;
      top: auto;
      width: 100%;
      flex-direction: row;
      padding: 0rem 0;
      border-top: 2px solid var(--borders);
      z-index: 5;
    `}
`

export const MenuBarGroup = styled.div`
    display: flex;
    flex-direction: column;

    ${media.lessThan('large')`
      height: auto;
      width: 100%;
      position: relative;
      flex-direction: row;

      &:last-child{
          justify-content: flex-end;

          span:nth-child(2){
              display: none;
          }
      }
    `}
`

export const MenuBarLink = styled(Link)`
    display: block;
`

export const MenuBarItem = styled.span`
    color: var(--texts);
    cursor: pointer;
    display: block;
    height: 3.75rem;
    width: 3.75rem;
    padding: 1.1rem;
    position: relative;

    &.light {
        color: #d4d400;
        
        &:hover{
            color: #e2e240;
        }
    }

    &:hover {
        color: var(--highlight);
    }

    ${media.lessThan('large')`
        padding: 0.8rem;
        height: 3rem;
        width: 3rem;
    `}

`