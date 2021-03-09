import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const category = useContext(CategoryContext);
    const {name} = props.product;
    return (
        <div>
            <h4>This is Category Detail : {name}</h4>
        </div>
    );
};

export default CategoryDetail;