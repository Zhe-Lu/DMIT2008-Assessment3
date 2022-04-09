import React , {useState}from "react";
import {useNumberFormat} from 'hooks/useNumberFormat'
import {AddProductStyles} from './styles'
import {useAddNewProduct} from 'hooks/useAddNewProduct'
import {ProductEditor} from "components/products/ProductEditor"
import { EditorFeedBack } from "components/products/EditorFeedBack";
import ProductPreview from 'assests/images/placeholderComputer.jpg'

const defaults = {
    description: "Enter product description here",
    name: "Product Name",
    price: 123.45
}

function AddProduct ({children,...props}){
    const [isWriting, setIsWriting] = useState(false)
    const [productName, setProductName] = useState(defaults.name);
    const [productPrice, setProductPrice] = useState(defaults.price);
    const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null});
    const [productDescription, setProductDescription] = useState(defaults.description);
    const [loading, productLoader] = useAddNewProduct();
    const formatter = useNumberFormat()

    


    function handleProductName(name){
        setProductName(name)
    }

    function handleProductPrice(price){
        setProductPrice(formatter(price))
    }

    function handleProductDescription(description){
        setProductDescription(description)
    }

    function handleSubmit(e){
        e.preventDefault();
        const productData = {
            productName,
            productPrice,
            productDescription
        }

        setIsWriting(true)
        productLoader(productData, productImage.file)

        setProductDescription(defaults.description)
        setProductImage({previewImage:ProductPreview, file:null})
        setProductName(defaults.name)
        setProductPrice(defaults.price)
    }

    if(isWriting){
        return <EditorFeedBack status={loading} writeCompleted={setIsWriting}/>
    } else {
        return(
            <AddProductStyles {...props}>
                <ProductEditor 
                    productName={productName} 
                    productPrice={productPrice}
                    productImage={productImage}
                    productDescription={productDescription}
                    handleProductName={handleProductName}
                    handleProductPrice={handleProductPrice}
                    handleProductDescription={handleProductDescription}
                    setProductImage={setProductImage}
                    handleSubmit={handleSubmit}
                />
            </AddProductStyles>
        )
    }    
}

export default AddProduct;