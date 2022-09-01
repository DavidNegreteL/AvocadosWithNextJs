import styled from "styled-components";

export const ProductSummaryWrapper = styled.section`
    display: flex;
    flex-direction: column;
`;
export const ProductDetailsWrapper = styled.section`
    display: flex;
    > * {
        margin-left: 1rem;
    }
`;
export const ProductImage = styled.img``;
export const ProductOverviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const ProductTitle = styled.h4`
`;
export const ProductPrice = styled.p`
    font-size: 0.7rem;
`;
export const ProductSku = styled.p`
    padding: 0.2rem;
    background-color: lightgray;
    width: max-content;
    border-radius: 0.250rem;
    font-size: 0.5rem;
`;
export const ProductOrderWrapper = styled.div`
`;
export const ProductOrderUnits = styled.input.attrs({type: 'number'})`
`;
export const ProductAddButtom = styled.button`
`;
export const ProductDescriptionWrapper = styled.section``;
export const ProductDescription = styled.p``;
export const ProductTableWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
export const ProductDetailsTable = styled.table`
    width: 50%;
    border-collapse: collapse;
    & td {
        border: 1px solid #ccc;
        padding: 0.5rem;
    }
    & th {
        border: 1px solid #ccc;
        background-color: #CCC;
        padding: 0.5rem;
    }
`;