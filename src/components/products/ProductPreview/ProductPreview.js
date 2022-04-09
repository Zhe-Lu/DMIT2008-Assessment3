import React from "react";
import { ProductDescription, ProductName, ProductPrice, ProductImage } from "./styles";


import {ProductPreviewStyles} from './styles'

function ProductPreview({children, productName, productPrice, productImage, productDescription, ...props}){
    return (
        <ProductPreviewStyles {...props}>
            <ProductImage>
                <img src={productImage.previewImage} alt="computer" width={320} height={184}/>
            </ProductImage>
            <ProductName>{productName}</ProductName>
            <ProductPrice>${productPrice}</ProductPrice>
            <ProductDescription>{productDescription}</ProductDescription>
        </ProductPreviewStyles>
    );
}

export default ProductPreview;