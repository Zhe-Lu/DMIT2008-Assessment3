import styled from 'styled-components'

const EditorFeedBackStyles = styled.aside`
    width: 80%;
    margin: 4rem auto 0;
    text-align: center;
`

const FeedBackMessage = styled.figcaption`
    font-size: 1.75rem;
    font-weight: 600;
`

const FeedBack = styled.figure`
    
`

const FeedBackOptions = styled.footer`
    margin-top: 1.5rem;
    button {
        margin: 0.25rem;
        width: fit-content;
    }
`


export {EditorFeedBackStyles, FeedBack, FeedBackMessage, FeedBackOptions}