import React, { FC } from 'react'
import { IPhoto } from './PhotoList'



interface IProps {
    photo: IPhoto
}

const Photo: FC<IProps> = ({ photo: {title, url} }) => {

    
    return (
     <img src={url} alt={title} />
    )
}

export default Photo
