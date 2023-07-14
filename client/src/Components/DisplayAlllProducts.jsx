import React from "react";
import { Link } from "react-router-dom";


const DisplayAllProducts = ({allProducts}) => {
    console.log(allProducts)
    return(
        <div>
            <p>All Products</p>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    { allProducts.map( product => {
                        return ( 
                    <tr key={product._id}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                    </tr>
                        )})}
                </tbody>
            </table>    
            <p><Link to={"/newProduct"}>Add a new Product </Link></p>


        </div>


    )

    
}




export default DisplayAllProducts;