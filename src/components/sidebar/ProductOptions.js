import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

const ProductOptionStyles = styled.ul`

`

function ProductOptions (props){
    return(
        <ProductOptionStyles>
            <li>
                <Link to="/dashboard">View All Products</Link>
            </li>
            <li>
                <Link to="add">Add New Product</Link>
            </li>
        </ProductOptionStyles>
    )
}

export default ProductOptions;