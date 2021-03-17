import React, { useEffect, useState } from 'react';
import { InsertWords } from '../../components/insertWords'
import { Navbar } from '../../components/navbar';
import api from '../../services/api';
import styles from '../../styles/pages/Home.module.css'


export default function Main(props) {
    useEffect(() => {
        const token = localStorage.getItem("Authorization")
        api.post("/api/insert-words",
            api.defaults.headers.authorization = `Bearer ${token}`)
            .then(() => {
                return window.location.replace("/insert-words")
            })
            .catch((error) => {
                console.log("ooops! " + error)
                return window.location.replace("/login");
            })
    }, []);
    return (
        <div className={styles.fadeIn}>
            <Navbar />
            <InsertWords />
        </div>
    )
}
