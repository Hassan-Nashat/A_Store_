import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, removeSpecificProduct, removProducts } from '../routes/store/Slices/Card';
export default function Card() {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.Card)
  const[price , setPrice] = useState(true);
  const [total ,setTotal] = useState([]);
  const [count , setCount] = useState (true);
    
  
  const removeSpecificProductFromCart = (product) => {
    dispatch(removeSpecificProduct(product));
    
  }
  
  
  const removProductsFromCart = (product) => {
    dispatch(removProducts(product));
    
  }
  
  
  const addToCart = (product) => {
    dispatch(addProducts(product));
    
  }

  // Total Price//

  const handprice = ()=>{
  let xp = 0;
  cart.map((item) => (xp += item.price  * item.count ))
  setPrice(xp);
  };
  useEffect(() => {
  
  handprice();
  
  });
  // total count//
  const handcount = ()=>{
  let count = 0;
  cart.map((item) => (count += item.count ))
  setCount(count);
  };
  useEffect(() => {
  
  handcount();
  
  });

  // Html from Card //

  return (
    <div className="allcard">
      <div className='row'>
        <div className="CARDTITLE">
          <h1>Card</h1>
          <h6>قد تختلف الأسعار والتفاصيل الأخرى حسب حجم المنتج ولونه.</h6>

        </div>

        {
          cart && cart.map((item) => {
            return (

              <div className='col-lg-4 col-md-6 col-12'>

                <div className="cardCARD" key={item.id}>
                  <img className="card-img-top-CARD" style={{ width: "170px", height: "165px" }} src={item.images[0]} alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title-CARD">{item.title}</h5>
                    <p className="card-text-CARD">{item.description.slice(0,40)}...</p>
                    <p className="card-text-CARD-price"> Price : {item.price * item.count}</p>
                    <p className="card-text-CARD-pices">Pices : {item.count}</p>
                    <button className="btnmins " onClick={() => { removeSpecificProductFromCart(item) }}>Reduce</button><br />
                    <button className="btnremove " onClick={() => { removProductsFromCart(item) }}>remove</button><br />
                    <button className="btnbls " onClick={() => { addToCart(item) }}>Add</button>
                    
                    
                </div>
                  </div>
              </div>
            );
          })
        }
                  <div className="total-price">
                    <span> Total Price : <span className="real">{price}</span></span><br />
                    <span className="real2"> Total Pices : <span className="real">{count}</span></span>
                    <button className="btnbls1 btn btn-outline-success btn-lg   " onClick={() => {  }}>Buy now</button>
                  </div>
      </div>

    </div>
  )
}

