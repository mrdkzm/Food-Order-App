import styles from "./Header.module.css"

import mealsImage from "../../assets/img/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"

const Header = props => {
    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImage} alt="" />
            </div>
        </>
    )
}


export default Header