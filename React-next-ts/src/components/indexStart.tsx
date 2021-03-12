import styles from '../styles/pages/Home.module.css';

export function IndexStart() {

    function onoff() {
        document
            .querySelector("#spin")
            .classList
            .add("hide")
    };

    return (
        <div>
            <div className={styles.fadeIn}>
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