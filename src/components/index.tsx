import React, { useState } from 'react';
import { CardContainer, Image, Title } from './card/index';


export default function Card(data: Partial<ProductList>) {

    interface CardProps {
        data: {
            id: number;
            Name: string;
            Price: number;
            reatilPrice: number;
            description: string;
            ThumbnailURL: string
        }
    }

    const { Name, Price, RetailPrice, Description, ThumbnailURL} = data;

    return (
        <CardContainer>
            <Image src={ThumbnailURL} alt={Name}/>
            <Title>Name</Title>
        </CardContainer>
    )
}