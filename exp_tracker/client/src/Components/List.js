import React from 'react'
import 'boxicons' 
import {default as api}from '../store/apiSlice'


export default function List() {

  
  const handleClick = (e) => {
    if (!e.target.dataset.id) {
      return;
    }
  
    const transactionId = e.target.dataset.id;
  
    // Call the deleteTransaction mutation with the transactionId
    deleteTransaction({ _id: transactionId })
      .unwrap()
      .then(() => {
        // Handle successful deletion (e.g., refetch data if needed)
        console.log(`Transaction with ID ${transactionId} deleted successfully.`);
      })
      .catch((error) => {
        // Handle error
        console.error('Error deleting transaction:', error);
      });
  };
  
  const {data,isFetching,isSuccess,isError}= api.useGetLabelsQuery()
  const[deleteTransaction]=api.useDeleteTransactionMutation()

  
  let transaction
  
  if (isFetching) {
    transaction=<div>Fetching data</div>
  }
  else if(isSuccess){
    transaction=data.map((v,i)=>{return(<ShowHistory key={i} handler={handleClick} category={v}/>)})
  }
  else if(isError){
    transaction=<div>Error while fetching data</div>
  }
  
  
  
  return (
    <div>
      <h1 className=' text-4xl py-6 font-bold'>List</h1>

      <div className=' items ' >
        {transaction}
      </div>
    </div>
  )
}

function ShowHistory(props){
  return(
      <div className=''style={{borderRight:`8px solid ${props.category.color??'#e5e5e5'}`}}>

          <div className='flex border bg-gray-100 flex-row gap-10 py-4 rounded '>
              <button onClick={props.handler} className=' px-5'><box-icon data-id={props.category._id??""} name="trash"></box-icon></button>

          <span>{props.category.name}</span></div>
          
      </div>
  )
}
