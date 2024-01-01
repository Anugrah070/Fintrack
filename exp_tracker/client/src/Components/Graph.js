import React from "react"
import {Doughnut} from 'react-chartjs-2'
import {Chart,ArcElement} from 'chart.js'
import Label from './Label'
import { chart_Data,getTotal } from "../helper/helper"
import {default as api}from '../store/apiSlice'

Chart.register(ArcElement)

const config={
  data:{
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        borderRadius:30,
        spacing:10
      }]
  },
  options:{
    cutout:220
  }
}



export default function Graph(){
  const {data,isFetching,isSuccess,isError}= api.useGetLabelsQuery()

  let GraphData
 
  if (isFetching) {
   GraphData=<div>Fetching data</div>
  }
 
  else if(isSuccess){
   
   GraphData=<Doughnut {...chart_Data(data)}/>
  }
 
  else if(isError){
   GraphData=<div>Error while fetching data</div>
  }
 
    
    return(
        <div className="item flex flex-col ">
            <div className="chart relative "></div>
            {GraphData}
            <div className=" absolute title" >
                <h3 className=" mb-4 font-bold text-4xl title">Total <span className=" block text-3xl text-emerald-400">${getTotal(data)??0}</span></h3>
            </div>

            <div className=' flex flex-col gap-4 py-4' ><Label/>
            </div>
        </div>
        )
    
}

