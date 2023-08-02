import React from 'react'
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import "../App.css"
import Navbar from './Navbar'
import CardList from './CardList'
import Data from './Data_home_page'

const data = [
    { title: "BHAPA ILISH", content: "Recipe" },
    { title: "ILISH MACH BHAJA",content: "Recipe" },
    { title: "GONDHORAJ ILISH PATURI", content: "Recipe" },
    { title: "ILISH PULAO", content: "Recipe" },
    { title: "ILISH LYAJA BHORTA", content: "Recipe" },
    { title: "DAHI AALU DUM", content: "Recipe" },
    { title: "BEGUNI", content: "Recipe" },
    { title: "CHICKEN BIRYANI", content: "Recipe" },
];

export const Content = () => {
    return (
        <div>
            <Navbar />
            <div className='wrap'>
                <section className='display_class'>
                    <h1 className='heading1'>Beginner friendly recipes</h1>
                    <h3 className='heading2'>Cooking is fun with us</h3>
                </section>
                <br />
                <h2 className='heading3'>Choose your recipes</h2>
                <br />
                <CardList data={data} />
            </div>
        </div>
    )
}

export default Content