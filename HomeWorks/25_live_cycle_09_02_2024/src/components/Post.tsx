import React, { FC } from 'react'
import { IPost } from './PostsLists'

interface IProps {
    info: IPost
}

const Post: FC<IProps> = ({ info: {body, title} }) => {

    
    return (
        <>
            <h2>{title}</h2>
            <p>{body}</p>
        </>
    )
}

export default Post
