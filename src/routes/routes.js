import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './../components/Main'
import NotFound from '../components/NotFound'
import Product from '../components/Product'
import Card from '../components/Card'
export default function routes() {
    return (
        <Routes>
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="/" element={<Main />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/Product/:id"  element={<Product/>} />

        </Routes>

    )
}
