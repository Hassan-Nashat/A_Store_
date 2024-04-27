import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { addProducts } from '../routes/store/Slices/Card'
import { useDispatch } from 'react-redux'

export default function ProductDetails() {
  const [item, setItem] = useState()
  const params = useParams()
  const location = useLocation()
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log(params);
    setItem(location.state.product);
    console.log(searchParams);
    console.log(item);
  })
  const dispatch = useDispatch();
  const addToCart = (product) => {

    dispatch(addProducts(product));

  }


  return (
    <div className="card-prod">
      {item &&
        <div class="card-product col-8">
          <div className="imgproduct" style={{ width: "700px", height: "700px"}}>
          <img  src={item.images[0]} class="card-img-top1"  alt="..." />

          </div>
          <div class="card-body-product">
            <div className="allbody-product">

            <h5 class="card-title-product-title">{item.title.slice(0,10)}</h5>
            <p class="card-text-product-dis">{item.description.slice(0,10)}</p>
            <p class="card-textproduct-price">Price : {item.price}</p>
            <li className="nav-item1 btn btn-outline-success btn-lg ">
                                <Link className=" link-offset-2 link-underline link-underline-opacity-0 link-light " to="/card"  onClick={() => { addToCart(item) }}>Go To Card</Link>
                            </li>
            </div>
          </div>
        </div>
      }


    </div>
  )
}
