import styles from '../styles/pages/Home.module.css';
import stylesAbout from '../styles/pages/About.module.css'
export function About() {

    return (
        <div>
            <div className={styles.fadeIn}>
                <div className="container">
                    <section className={stylesAbout.content}>
                        <div className={stylesAbout.justFix}>
                            <span className={stylesAbout.createdBy}>Produzido por:</span>
                            <a href="https://www.github.com/Emerson1337" target="_blank">
                                <img className={stylesAbout.imgMe} src="https://www.github.com/Emerson1337.png" />
                            </a>
                        </div>
                        <div className={stylesAbout.title}>
                            <span className={stylesAbout.author}>
                                Emerson Lucena
                            </span>
                            <p>
                                Web developer
                                <br />
                                19 Years
                            </p>
                        </div>
                    </section>


                    <section className={stylesAbout.paragraph}>
                        <p>
                            O objetivo deste WebSite é te ajudar a anotar palavras e suas traduções em inglês.<br /> <br />
                            Você percebeu que este site possui uma mesclagem de linguagens entre português e inglês?<br />
                            Se sim, é intencional. Se não, significa que você está bem habituado com o inglês e sabe o significado
                            das palavras sem muito esforço, parabéns!
                        </p>
                    </section>

                </div>
            </div >
        </div >
    );
}