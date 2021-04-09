import React from 'react'
import Article from '../components/Article'

export default (props) => {
    console.log("Templates/Article.render props", props);
    return (
        <Article 
            title={props.pageContext.title} 
            content={props.pageContext.content} 
        />
    )
}