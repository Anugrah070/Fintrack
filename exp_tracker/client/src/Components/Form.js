import React from 'react'
import{useForm} from 'react-hook-form'
import List from './List'


export default function Form() {
    const {handleSubmit,register,resetField}=useForm()
    return (
    <div>
        <h1 className=' text-4xl font-bold'>TRANSACTIONS</h1>
        

      <form onSubmit={handleSubmit(data=>{console.log(data)})} id='form'>
        <div className=' grid gap-4'>
        <div className=' input-group py-3'>
            <input {...register('name')} className=' p-3 form-input' type='text' placeholder='SIP,Salary,Products'>
            
            </input></div>
      
        <select {...register('type')} className='form-input text-2xl'>
            <option value='Investment'>Investment</option>
            <option value='Savings'>Savings</option>
            <option value='Expense'>Expense</option>

        </select>
        <div className=' input-group py-3'>
            <input {...register('amount')} className=' form-input p-3' type='text' placeholder='Amount'>
            
            </input></div>

        <div className='Submit-btn'>
        <button className=' text-white py-5 w-full bg-indigo-500'>Make transaction</button>
        </div>
        
        </div>
        
      </form>

      <List/>
    </div>
  )
}
