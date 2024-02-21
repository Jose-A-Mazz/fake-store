import React from 'react'
import styles from "./CategoryLayout.module.css"
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import {Footer} from "../Components/Footer"

export const CategoryLayout = () => {
 
    return (
        <>
        <Navbar />
        <main className={styles["category-page-main-component"]}>
        <Outlet />
        </main>
        <Footer />
        </>
    )
}
