import React from 'react'
import {default as api}from '../store/apiSlice'
import { getSum } from '../helper/helper'
import { getLabels } from '../helper/helper'

export default function Label() {

 const {data,isFetching,isSuccess,isError}= api.useGetLabelsQuery()

 let transaction

 if (isFetching) {
  transaction=<div>Fetching data</div>
 }

 else if(isSuccess){
  
  transaction=getLabels(data,"type").map((v,i)=>{return(<ShowLabelComponent key={i} objdata={v} />)})
 }

 else if(isError){
  transaction=<div>Error while fetching data</div>
 }

  
  // const traverse=data.map((v,i)=>{return(<ShowLabelComponent key={i} objdata={v} />)})
  return(
    transaction
  )
}

function ShowLabelComponent(props){
  return (


  <div className='labels flex justify-between gap-24'>

    <div className=' flex  gap-4'>
      <div className=' w-4 h-4 rounded' style={{backgroundColor:`${props.objdata.color}`}}></div>
      <h3 className=' text-md'>{props.objdata.type}</h3>

    </div>
      <h3 className=' font-bold'>{Math.round(props.objdata.percent)}%</h3>
  </div>

  )
}
