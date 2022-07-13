import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import { useState } from 'react'
import axios from 'axios'

export default function Add_Product() {

const[productName,setproductName]=useState('');
const[productdescription,setproductdescription]=useState('');
const[productprice,setproductprice]=useState('')
const[main,setmain]=useState('');
const[addproduct ,setaddproduct]=useState(false);


var data="";
  const btnhandler = ()=>{
    axios.post('http://localhost:5000/createProduct/:id', {
      product_name:productName,
      product_description:productdescription,
      product_price:productprice,
    product_image:main,
    
    })
    .then(function(response){
       data=response.data 

       if(data._id !='')
       {
          setaddproduct(true)
       }
       console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });

  }

  return (
      <>
    <div className='wrapper'>
        <Header/>
        <Menu/>
        <div className='content-wrapper' >

            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">Add Product</span>
            </div>
          </nav>
         
      <form className="form-horizontal" style={{marginLeft:"100px"}} method='post'>
        <fieldset>
   
    
  
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="product_name">PRODUCT NAME</label>  
            <div className="col-md-4">
              <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required type="text" onChange={(a)=>{setproductName(a.target.value)}} />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="product_description">PRODUCT DESCRIPTION</label>
            <div className="col-md-4">                     
              <textarea className="form-control" id="product_description" name="product_description" defaultValue={""} onChange={(a)=>{setproductdescription(a.target.value)}} />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="product_name">PRODUCT PRICE</label>  
            <div className="col-md-4">
              <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required type="text" onChange={(a)=>{setproductprice(a.target.value)}} />
            </div>
          </div>
         

        
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="filebutton">main_image</label>
                <div className="col-md-4">
                  <input  name="image" className="input-file" type="text" onChange={(a)=>{setmain(a.target.value)}} />
                </div>
              </div>
             
              <div className="form-group">
                
                <div className="col-md-4">
                  <input type="button" name="siglebutton" className="btn btn-primary"onClick={()=>{btnhandler()}} value="SUBMIT"></input>
                </div>
              </div>
            </fieldset>
      </form>
                             
        </div>
          
    </div>
    </>
  )
}