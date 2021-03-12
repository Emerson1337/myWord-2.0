import styles from '../styles/pages/Home.module.css'

export function Register() {
    return (
        <div className={styles.fadeIn + " " + styles.centralization}>
            <div className={"container " + styles.containerStart}>
                <div id="loginScreen" className={styles.text + ' ' + styles.loginScreen}>
                    <h1 className="display-3">Cadastre-se!</h1>
                    <span>Preencha as informações ao lado e crie a sua conta!</span>
                </div>
                <div className={styles.format}>
                    <form>
                        <div className="form-group">
                            <label className="text-light d-flex flex-row h1">Name</label>
                            <input type="text" name="name" className="form-control" aria-describedby="nameHelp"
                                placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label className="text-light d-flex flex-row h1">Username</label>
                            <input type="text" name="username" className="form-control" aria-describedby="usernameHelp"
                                placeholder="Enter your username" required />
                        </div>
                        <div className="form-group">
                            <label className="text-light d-flex flex-row h1">Email</label>
                            <input type="email" name="email" className="form-control" aria-describedby="emailHelp"
                                placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label className="text-light d-flex flex-row h1">Password</label>
                            <input type="password" name="password" className="form-control" placeholder="Password" required />
                        </div>
                    </form>
                    <div id="buttonsLogin">
                        <a href="#" ><button
                            className="btn btn-outline-light btn-lg btn-block">Criar
                                conta</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}