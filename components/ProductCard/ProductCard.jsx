import React from "react";
import * as Styled from './ProductCard.styled';
import Link from 'next/link';

export const ProductCard = ({cardId, cardImg, cardTitle, cardDescription}) => {
    return (
        <Link href="/product/[id]" as={`/product/${cardId}`} passHref>
            <Styled.Card>
                <Styled.CardImage src={cardImg}/>
                <Styled.CardTitle>
                    {cardTitle}
                </Styled.CardTitle>
                <Styled.CardDescription>
                    {cardDescription}
                </Styled.CardDescription>
            </Styled.Card>
        </Link>
    );
};