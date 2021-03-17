import { useState } from 'react'
import styles from '../styles/pages/Home.module.css'
import api from '../services/api'

export function Register() {


    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function sendJson() {
        if (name && username && email && password) {
            if (password.length >= 8) {
                api.post("/api/signup", { name, username, email, password }).then((response) => {
                    return window.location.replace("/login");
                })
                    .catch((error) => {
                        window.location.replace("/register");
                        return console.log("ooops! " + error)
                    })
            } else {
                alert("Senha muito curta! Lembre-se, ela precisa ser maior que 8 dígitos.")
            }

        } else {
            alert("Dados inválidos!")
        }
    };



    return (
        <div className={styles.fadeIn + " " + styles.paddingRegister}>
            <div className={"container " + styles.containerStart}>
                <div id="loginScreen" className={styles.text + ' ' + styles.loginScreen}>
                    <h1 className="display-3">Cadastre-se!</h1>
                    <span>Preencha as informações ao lado e crie a sua conta!</span>
                </div>
                <div className={styles.formatLogin}>
                    <form>
                        <div className="form-group">
                            <label className="text-light d-flex flex-row h1">Name</label>
                            <input type="text" name="name" onChange={event => setName(event.target.value)} className="form-control" aria-describedby="nameHelp"
                                placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label className="text-light d-flex flex-row h1">Username</label>
                            <input type="text" name="username" className="form-control" aria-describedby="usernameHelp"
                                onChange={event => setUsername(event.target.value)} placeholder="Enter your username" required />
                        </div>
                        <div className="form-group">
                            <label className="text-light d-flex flex-row h1">Email</label>
                            <input type="email" name="email" className="form-control" aria-describedby="emailHelp"
                                onChange={event => setEmail(event.target.value)} placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label className="text-light d-flex flex-row h1">Password</label>
                            <input type="password" pattern=".{8,}" title="8 characters minimum" onChange={event => setPassword(event.target.value)} name="password" className="form-control" placeholder="Password" required />
                        </div>
                    </form>
                    <div id="buttonsLogin">
                        <a href="#" ><button
                            onClick={sendJson} className="btn btn-outline-light btn-lg btn-block">Criar
                                conta</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}