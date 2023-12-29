import React from 'react'
import 'boxicons'

const obj=[
    {
      name:'Savings',
      color:'#f9c74f',
      percent:45
  
    },
    {
      name:'Investment',
      color:'#9d4edd',
      percent:35
  
    },
    {
      name:'expense',
      color:'#f9c74f',
      percent:20
    }
  
  ]
  function ShowHistory(props){
    return(
        <div className=''style={{borderRight:`8px solid ${props.category.color??'#e5e5e5'}`}}>

            <div className='flex border bg-gray-100 flex-row gap-10 py-4 rounded '>
                <button className=' px-5'><box-icon name="trash"></box-icon></button>

            <span>{props.category.name}</span></div>
            
        </div>
    )
}

export default function List() {
  return (
    <div>
      <h1 className=' text-4xl py-6 font-bold'>List</h1>

      <div className=' items ' >
        {obj.map((data,i)=>{
        return(<ShowHistory key={i} category={data}/>)})}
      </div>
    </div>
  )
}

