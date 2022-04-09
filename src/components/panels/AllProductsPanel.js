import {ref, get} from "firebase/database"
import {db} from 'libs/firebase'
import React, { useEffect, useState } from "react";

import {PanelStyles, PanelBody, PanelHeader} from './styles'

function AllProductsPanel({title, ...props}){
    const [productData, setProductData] = useState(null)

    useEffect(()=>{
        async function getProductData(){
            const productRef = ref(db, 'products')
            const productSnapshot = await get(productRef)
            setProductData(Object.values(productSnapshot.val()))
        }

        getProductData();
    }, [])

    return (
        <PanelStyles>
            <PanelHeader>
                <h2>{title || "Display Panel"}</h2>
            </PanelHeader>
            <PanelBody>
                {productData? <p>data loaded</p> : <p>There is no data</p>}
            </PanelBody>
        </PanelStyles>
    );
}

export default AllProductsPanel;