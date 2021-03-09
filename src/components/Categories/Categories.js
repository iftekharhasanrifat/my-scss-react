import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
const allProducts = [
    {name: 'Lenovo', category: 'laptop'},{name: 'Asus', category: 'laptop'},{name: 'Dell', category: 'laptop'},
    {name: 'Iphone', category: 'mobile'},{name: 'Nokia', category: 'mobile'},{name: 'Samsung', category: 'mobile'},
    {name: 'Nikon', category: 'camera'},{name: 'Sony', category: 'camera'},{name: 'Canon', category: 'camera'}
]
const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products,setProducts] = useState([]);
   
    useEffect(()=>{
     console.log(category);
      const matchedProducts = allProducts.filter(product => product.category.toLowerCase() ===category.toLowerCase());
      setProducts(matchedProducts);
    },[category])
    return (
        <div>
            <h2>please select your categories : {category}</h2>
            {
                products.map(product => <CategoryDetail product={product}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;