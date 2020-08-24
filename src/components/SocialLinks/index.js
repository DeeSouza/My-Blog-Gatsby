import React from 'react';
import Icons from './icons';
import links from './content'

import * as S from './styled';

const SocialLinks = () => {
    return (
        <S.SocialLinksWrapper>
            <S.SocialLinksList>
                {links.map(link => {
                    const Icon = Icons[link.label];

                    return (
                        <S.SocialLinksItem key={link.label}>
                            <S.SocialLinksLink href={link.url} title={link.label} target="_blank" rel="noopner noreferrer">
                                <S.IconWrapper>
                                    <Icon />
                                </S.IconWrapper>
                            </S.SocialLinksLink>
                        </S.SocialLinksItem>
                    )
                })}
            </S.SocialLinksList>
        </S.SocialLinksWrapper>
    )
}

export default SocialLinks;