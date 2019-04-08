import React from 'react';
import { ProductTile } from './ProductTile';

export const ProductGrid = (props) => {
    return (
        <React.Fragment>
            <div>This is the Product Grid component</div>
            <ProductTile />
        </React.Fragment>
    );
}