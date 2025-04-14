
import { useParams } from "react-router";
import Header from '../../common/Header/Header'
import { useEffect, useState } from "react";
import './Product.css'

export default function Product() {

  const { id } = useParams();
  console.log(id)

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const singleProduct = async ({ id }) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const product = await response.json();
      console.log(product)
      setProduct(product)

    };
    singleProduct({ id });
  }, []);



  return (
    <>
      <div className="product-detail">
        <Header title={`Product Id:  ${id}`} />
      </div>
      <div className="product-detail">
        <h1>{product.title}</h1>
        <h3>{product.category}</h3>
        <h6>{product.description}</h6>
        <img src={product.image} alt="" />
        <h1>${product.price}</h1>
      </div>

    </>

  )
}
