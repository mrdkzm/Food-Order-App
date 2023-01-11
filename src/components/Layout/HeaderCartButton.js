import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"

import styles from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)

    const [highlightedBtn, setHighlightedBtn] = useState(false)

    const { item } = cartCtx

    useEffect(() => {
        if (item.length > 0) {
            setHighlightedBtn(true)
        }

       const clearFunc = setTimeout(() => {
            setHighlightedBtn(false)
        }, 300)


        return () => {
            clearTimeout(clearFunc)
        }
    }, [item])




    const numberOfCartİtems = item.reduce((currentNumber, item) => {
        return currentNumber + item.amount

    }, 0)


    const btnClasses = `${styles.button} ${highlightedBtn && styles.bump}`

    return (
        <>
            <button className={` ${btnClasses}`} onClick={props.onClick}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={styles.badge}>
                    {numberOfCartİtems}
                </span>
            </button>

        </>
    )
}


export default HeaderCartButton