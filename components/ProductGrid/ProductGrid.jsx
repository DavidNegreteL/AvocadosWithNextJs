import React from "react";
import * as Styled from './ProductGrid.styled';

export const ProductGrid = ({children}) => {
    return (
        <Styled.GridCards>
            {children}
        </Styled.GridCards>
    )
}