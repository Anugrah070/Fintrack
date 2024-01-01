import{createApi,fetchBaseQuery}from '@reduxjs/toolkit/query/react'
// import { category } from '/projects/expense tracker/exp_tracker/server/models/model'

const baseURI='http://localhost:8080'

export const apiSlice=createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseURI}),
    endpoints:builder=>({
        //GET CATEGORIES
        getCategories:builder.query({
            query:()=>'/api/categories',
            providesTags:['categories']
        }),
        
        //GET LABELS
        getLabels:builder.query({
            query:()=>'/api/labels',
            providesTags:['transaction']
        }),

        //ADDING NEW TRANSACTION
        addTransaction:builder.mutation({
            query:(initialTransaction)=>({
                url:'/api/transactions',
                method:'POST',
                body:initialTransaction
            }),
            invalidatesTags:['transaction']
        }),

        //DELETE RECORD
        deleteTransaction:builder.mutation({
            query:(recordID)=>({
                url:'/api/transactions',
                method:'DELETE',
                body:recordID
            }),
            invalidatesTags:['transaction']
        })
    })
})

export default apiSlice