import React, { useEffect } from 'react';
import { Navbar } from '../../components/navbar';
import { Wordlist } from '../../components/wordslist';
import api from '../../services/api';
import styles from '../../styles/pages/Home.module.css'

export default function Main(props) {

    useEffect(() => {
        api.post("/api/wordslist")
            .then((response) => {
            })
            .catch((error) => {
                //window.location.replace("/insert-words")
                return console.log("ooops! " + error);
            })
    }, [])

    return (
        <div className={styles.fadeIn}>
            <Navbar />
            <Wordlist />
        </div>
    )
}
