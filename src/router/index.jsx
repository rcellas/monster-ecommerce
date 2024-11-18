import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../pages/home/Home'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import ProductCreatorForm from '../pages/ProductCreatorForm/ProductCreatorForm'
import ProductManager from '../pages/ProductManager/ProductManager'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <Home/>,
            },
            {
                path:"/monsters/:monsterId",
                element: <ProductDetail/>
            },
            {
                path:"/create",
                element:<ProductCreatorForm/>
            },
            {
                path:"/prooduct-manager",
                element:<ProductManager/>
            }
        ]
    }
])
