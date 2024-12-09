import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../pages/home/Home'
import MonsterDetail from '../pages/MonsterDetail/MonsterDetail'
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
                path:"/shop/monsters/:monsterId",
                element: <MonsterDetail/>
            },
            {
                path:"/create",
                element:<ProductCreatorForm/>
            },
            {
                path:"/product-manager",
                element:<ProductManager/>
            }
        ]
    }
])