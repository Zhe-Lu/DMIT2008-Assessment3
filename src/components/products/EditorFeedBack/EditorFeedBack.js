import React from "react";
import {Button} from 'ui/buttons'
import { useNavigate } from "react-router-dom";
import {EditorFeedBackStyles, FeedBackMessage, FeedBack, FeedBackOptions} from './styles'

function EditorFeedBack({children, status, writeCompleted, ...props}){

    const navigator = useNavigate();

    return (
        <EditorFeedBackStyles {...props}>
            {
                !status
                ?
                <FeedBack>
                    <FeedBackMessage>Product Uploaded Successfully</FeedBackMessage>
                </FeedBack>
                :
                <FeedBack>
                    <FeedBackMessage>Upload In Progress</FeedBackMessage>
                </FeedBack>
            }

            

            <FeedBackOptions>
                <Button
                    onClick={()=> writeCompleted(false)}
                    disabled={status}
                >Add Another Product</Button>

                <Button
                    onClick={()=>navigator('/dashboard')}
                >View All Products</Button>
            </FeedBackOptions>
        </EditorFeedBackStyles>
    )
}

export default EditorFeedBack