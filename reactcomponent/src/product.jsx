import ProductDesc from "./Description";
import ProductName from "./Name";
import ProductPrice from "./Price";
import ProductImage from "./Image";
import React from "react";

export default function product ({id}){
    
    return(
        <div style={{width:"400px"}}> 
            <img style={{width:"200px"}} src={ProductImage({id})} alt="baha2"></img>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div>name= {ProductName({id})}</div>
                <div>price= {ProductPrice({id})}</div>
                <div>description={ProductDesc({id})}</div>             
            </div>
            
        </div>
    )
}