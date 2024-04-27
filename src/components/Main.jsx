import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProducts } from '../routes/store/Slices/Card';

function Main() {
  const [counter, setCounter] = useState(0)
  const [product, setProduct] = useState()
  const [loader, setLoader] = useState(false)





  useEffect(() => {
    setLoader(true)
    axios.get('https://dummyjson.com/products')
      .then(function (response) { setProduct(response.data.products); })
      .catch(function (error) { console.log(error); });
    setLoader(false)

  }, [])


  const navigate = useNavigate();
  const dispatch = useDispatch();


  const goToDetails = (product) => {

    navigate(`/Product/${product.id}`, {
      state: { product }
    })

  }
  const addToCart = (product) => {

    dispatch(addProducts(product));

  }

  return (<>
  
  <div className="Upstore">
      <h1>St<span>o</span>r<span>e</span></h1>
      

  </div>
      
    <div className='row'>
      {
        product && product.map((item) => {
          return (

            <div className="col-lg-4 col-md-6 col-12 mb-3 rounded-5  " key={item.id}>
              <div className=""><div className="card" >
                <div className="card-body row">
                  

                  {/* IMAGE */}
                  <div className="col-lg-4 col-6 border border-warning ">
                    <div style={{ width: "185px", height: "150px" }}>

                      <img className="card-img-top w-100 h-100" src={item.images[0]} alt={item.title} />
                    </div>
                  </div>

                  {/* info */}

                  <div className="col-lg-8 col-6 bg-dark.bg-gradient " >
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-outline-warning " onClick={() => { goToDetails(item) }}>Go somewhere</button>
                    <button className="btn btn-outline-warning " onClick={() => { addToCart(item) }}> Add to Card</button>
                  </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })
      }
    </div>

  </>
  )

}


export default Main