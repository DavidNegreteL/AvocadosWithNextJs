import styled from "styled-components";

export const Card = styled.a`
    width: 200px;
    border: 1px solid #CCC;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 5px -5px #CCC;
    color: black;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 5px #CCC;
    }
    &:visited{
        color: black;
    }
`;
export const CardImage = styled.img`
    max-width: 100%;
    border-radius:  0.3rem 0.3rem 0 0;
    border-bottom: 1px solid #CCC;
`;
export const CardTitle = styled.h4`
    margin-left: 0.5rem;
`;
export const CardDescription = styled.p`
    font-size: 0.7rem;
    margin-left: 0.5rem;
`;