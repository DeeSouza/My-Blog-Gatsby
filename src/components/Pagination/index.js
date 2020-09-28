import React from 'react';
import PropTypes from 'prop-types';
import AnyLink from 'gatsby-plugin-transition-link/AniLink';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirst && <AnyLink 
                        to={prevPage}
                        cover
                        direction="right"
                        bg={getThemeColor()}
                        duration={0.6}
                    >
                        Página Anterior
                    </AnyLink>}

        <p>{currentPage} de {numPages}</p>

        {!isLast && <AnyLink 
                        to={nextPage} 
                        cover
                        direction="right"
                        bg={getThemeColor()}
                        duration={0.6}
                    >
                        Próxima Página
                    </AnyLink>}
    </S.PaginationWrapper>
);

Pagination.propTypes = {
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    prevPage: PropTypes.string.isRequired,
    nextPage: PropTypes.string.isRequired,
}

export default Pagination;