import styled from 'styled-components';

const ProductPreviewStyles  = styled.section`
    max-width: 360px;
    align-self: stretch;
    padding: 3rem 2rem;
    background-color: #f8fafc;
`;

const ProductImage = styled.div`
    margin: 1rem auto 0;
    width: 300px;
    img{
        width: 100%;
        height: auto;
    }
`

const ProductName = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2;
    margin-bottom: 0.25rem;
    letter-spacing: -0.5px;
    word-wrap: break-word;

`

const ProductPrice = styled.p`
    font-size: 1.75rem;
    font-weight: 100;
    letter-spacing: -1px;
    margin-top: -0.3rem;
    margin-bottom: 0.25rem;
`

const ProductDescription = styled.p`
    textarea{
        font-size: 13px;

    }
`

export {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription}