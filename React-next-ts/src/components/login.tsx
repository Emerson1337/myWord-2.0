import { useEffect, useState } from 'react';
import api from '../services/api';
import styles from '../styles/pages/Home.module.css'

export function Login() {

    let [Data, setData] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function sendJson() {
        api.post("/api/login", { email, password }).then((response) => {
            localStorage.setItem("Authorization", response.data.token)
            return window.location.replace("/insert-words");
        })
            .catch((error) => {
                console.log("ooops! " + error)
                return window.location.replace("/login");

            })
    };

    return (
        <div className={styles.fadeIn + " " + styles.centralization}>
            <div className={"container " + styles.containerStart}>
                <div id="loginScreen" className={styles.text + ' ' + styles.loginScreen}>
                    <h1 className="display-3">Faça o seu login!</h1>
                    <span>Se não tem uma conta, crie a sua agora!</span>
                </div>
                <div className={styles.format}>
                    <form>
                        <div className="form-group">
                            <label className="text-light d-flex flex-row h1">Email</label>
                            <input onChange={event => setEmail(event.target.value)} type="email" id="email" className="form-control" aria-describedby="emailHelp"
                                placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label className="text-light d-flex flex-row h1">Password</label>
                            <input onChange={event => setPassword(event.target.value)} type="password" id="password" className="form-control" placeholder="Password" />
                        </div>
                    </form>
                    <div className={styles.buttonsLogin}>
                        <a href="#" onClick={sendJson} className="mr-4"><button id="buttonLogin" className="btn mr-4 btn-outline-light btn-block">
                            Login</button></a>
                        <a href="/register"><button id="buttonRegister" className="btn btn-outline-light btn-lg btn-block">Criar
                                conta</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}