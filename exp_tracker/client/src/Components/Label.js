import React from 'react'

const obj=[
  {
    type:'Savings',
    color:'#f9c74f',
    percent:45

  },
  {
    type:'Investment',
    color:'#9d4edd',
    percent:35

  },
  {
    type:'expense',
    color:'#f9c74f',
    percent:20
  }

]


export default function Label() {
  
  const traverse=obj.map(data=>{return(<ShowLabelComponent objdata={data} />)})
  return(
    traverse
  )
}

function ShowLabelComponent(props){
  return (


  <div className='labels flex justify-between gap-24'>

    <div className=' flex  gap-4'>
      <div className=' w-4 h-4 rounded' style={{backgroundColor:`${props.objdata.color}`}}></div>
      <h3 className=' text-md'>{props.objdata.type}</h3>

    </div>
      <h3 className=' font-bold'>{props.objdata.percent}%</h3>
  </div>

  )
}
