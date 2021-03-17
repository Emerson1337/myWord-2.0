import styles from '../styles/pages/Home.module.css';

export function About() {

    return (
        <div>
            <div className={styles.fadeIn + ' ' + styles.padding}>
                <div className="container">
                    <div className={styles.text}>
                        <h1 className={"display-3 " + styles.changeDisplay + " " + styles.typeAnimation}>Welcome to My Words!</h1>
                        <span>Aqui você enriquece o seu vocabulário e aprende inglês de graça!</span>
                    </div>
                    <div className={styles.format}>
                        <a href="/login"><button id="login" className={"btn btn-outline-light btn-lg btn-block " + styles.formatButton}>START</button></a>
                    </div>
                </div>
            </div >
        </div >
    );
}