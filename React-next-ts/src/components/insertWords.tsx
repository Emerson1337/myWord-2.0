import { useEffect, useState } from 'react';
import api from '../services/api';
import styles from '../styles/pages/Home.module.css'
import React from 'react'

export function InsertWords() {

    useEffect(() => {
        const token = localStorage.getItem("Authorization")
        api.post("/api/insert-words", api.defaults.headers.authorization = `Bearer ${token}`)
            .catch((error) => {
                console.log("ooops! " + error)
                return window.location.replace("/login");
            })
    })

    return (
        <div className={styles.fadeIn + " " + styles.centralization}>
            logado
        </div>
    )
}