import { useEffect, useState } from 'react'
import stylesWords from '../styles/pages/Wordlist.module.css'
import api from '../services/api'

export function Wordlist() {

    const [words, setWords] = useState('')


    useEffect(() => {
        var token = localStorage.getItem("Authorization")
        api.post("/api/wordslist", api.defaults.headers.authorization = `Bearer ${token}`)
            .then((response) => {
                var wordlist = ((response.data.words).map(function (word, indice) {
                    return <div className={stylesWords.borderBottom}>
                        <ul className={stylesWords.allWords}>
                            <li key={word.id}><a id={"portugues" + indice} className={stylesWords.translateWords} target="_blank" href={`https://www.google.com/search?q=o que significa ${word.portugueseWord}`}>{word.portugueseWord}</a></li>
                            <li key={word.id_user}><a id={"english" + indice} className={stylesWords.translateWords} target="_blank" href={`https://www.google.com/search?q=what's mean ${word.englishWord}`}>{word.englishWord}</a></li>
                        </ul>
                        <a onClick={() => deleteWord(String(indice))} href="">Excluir</a>
                        <hr />
                    </div>;
                }));
                setWords(wordlist)
            })
            .catch((error) => {
                window.location.replace("/insert-words")
                return console.log("ooops! " + error);
            })
    }, []);


    function teste() {
        console.log("foi")
    }
    function deleteWord(indice: String) {
        console.log("portuguese" + indice)
        const portugueseWord = document.getElementById("portugues" + indice).innerHTML;
        const englishWord = document.getElementById("english" + indice).innerHTML;
        const token = localStorage.getItem("Authorization");

        api.post("/api/remove-words", { portugueseWord, englishWord, token })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log("Oops! Something is wrong: " + error)
            })
    }



    return (
        <div className={stylesWords.centralization + " " + stylesWords.padding}>
            <div className={stylesWords.title}>
                <h1 className={stylesWords.h1Style}>
                    Português
                </h1>
                <h1 className={stylesWords.h1Style}>
                    Inglês
                </h1>
            </div>
            <div id="listWordsJSX" className={stylesWords.listWordsJSX}>
                {words}
            </div>
        </div>
    )
}