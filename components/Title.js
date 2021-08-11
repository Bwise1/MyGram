import styles from './Title.module.css'

const Title = () =>{
    return(
        <div className={styles.title}>
            <h1>MyGram</h1>
            <h2>Your Pictures</h2>
            <p>Hello there, just pin your pictures</p>
        </div>
    )
}

export default Title