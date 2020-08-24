import React from 'react';

import * as S from './styled';

const PostItem = () => (
    <S.PostItemLink to="/slug">
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">
                Misc
            </S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>
                    30 de Junho de 2020 * 4 min de leitura
                </S.PostItemDate>
                <S.PostItemTitle>Diga não as drogas</S.PostItemTitle>
                <S.PostItemDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores totam incidunt fugit quidem, ullam maiores qui rem hic expedita ex quisquam quas sed nesciunt distinctio, dolor, placeat itaque aliquid perspiciatis.</S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem;