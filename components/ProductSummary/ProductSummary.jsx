import React from "react";
import * as Styled from './ProductSummary.styled';
export const ProductSummary = ({product}) => {
    return (
        <Styled.ProductSummaryWrapper>
            <Styled.ProductDetailsWrapper>
                <Styled.ProductImage src={product.image}/>
                <Styled.ProductOverviewWrapper>
                    <Styled.ProductTitle>
                        {product.name}
                    </Styled.ProductTitle>
                    <Styled.ProductPrice>
                        ${product.price}
                    </Styled.ProductPrice>
                    <Styled.ProductSku>
                        {product.sku}
                    </Styled.ProductSku>
                    <Styled.ProductOrderWrapper>
                        <Styled.ProductOrderUnits/>
                        <Styled.ProductAddButtom>
                            Add to Cart
                        </Styled.ProductAddButtom>
                    </Styled.ProductOrderWrapper>
                </Styled.ProductOverviewWrapper>
            </Styled.ProductDetailsWrapper>
            <Styled.ProductDescriptionWrapper>
                <p>About this Avocado</p>
                <Styled.ProductDescription>
                    {product.attributes.description}
                </Styled.ProductDescription>
            </Styled.ProductDescriptionWrapper>
            <Styled.ProductTableWrapper>
                <Styled.ProductDetailsTable>
                    <thead>
                        <tr>
                            <th colSpan={2}>Attributes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Shape</td>
                            <td>{product.attributes.shape}</td>
                        </tr>
                        <tr>
                            <td>Hardiness</td>
                            <td>{product.attributes.hardiness}</td>
                        </tr>
                        <tr>
                            <td>Taste</td>
                            <td>{product.attributes.taste}</td>
                        </tr>
                    </tbody>
                </Styled.ProductDetailsTable>
            </Styled.ProductTableWrapper>
        </Styled.ProductSummaryWrapper>
    );
};