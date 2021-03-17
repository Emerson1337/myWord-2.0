import { useEffect, useState } from 'react';
import api from '../services/api';
import styles from '../styles/pages/Home.module.css'
import stylesWords from '../styles/pages/Wordlist.module.css'
import React from 'react'

export function InsertWords() {
    const [portugueseWord, setPortugueseWord] = useState('');
    const [englishWord, setEnglishWord] = useState('');

    function sendJsonWords() {
        if (portugueseWord && englishWord) {
            const userJWT = localStorage.getItem('Authorization');
            api.post("/api/insert-words", { portugueseWord, englishWord, userJWT })
                .then((response) => {
                    response
                    setEnglishWord('')
                    setPortugueseWord('')
                })
                .catch((error) => {
                    console.log("ooops! " + error)
                    //return window.location.replace("/insert-words");
                })

        } else {
            alert("Escreva palavras nos campos abaixo!")
        }
    };

    return (
        <div>
            <section className={styles.interacao}>

                <div className="container">
                    <div className={styles.textInsertWords}>
                        <h1 className={"display-2 " + styles.changeDisplay}>Para começar,</h1>
                        <span> preencha os campos abaixo de acordo com os respectivos títulos. Em seguida
                        clique em adicionar. Você também poderá listar todas as palavras do nosso banco de dados.
                        </span>
                    </div>
                    <div className={styles.format}>

                        <div className="row d-flex justify-content-between">

                            <div className={stylesWords.inputFormat + "d-flex col-md-6"}>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className={styles.coloracao + " input-group-text"}>Inglês</span>
                                    </div>
                                    <input id="english" name="english" onChange={event => setEnglishWord(event.target.value.toUpperCase())} className="text-uppercase input-format form-control" type="text" placeholder="Ex: cool" />
                                </div>
                            </div>

                            <div className="d-flex col-md-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className={styles.coloracao + " input-group-text"}>Português</span>
                                    </div>
                                    <input name="portuguese" onChange={event => setPortugueseWord(event.target.value.toUpperCase())} className="text-uppercase form-control input-format" type="text" placeholder="Ex: legal" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.styleButtons}>
                    <div className={styles.buttons}>
                        <a onClick={sendJsonWords}><button className="btn btn-success btn-lg btn-block">Adicionar</button></a>
                        <a href="/wordlist"><button className="btn btn-outline-light btn-lg btn-block">Consultar banca</button></a>
                    </div>
                </div>
            </section>
        </div>
    )
}