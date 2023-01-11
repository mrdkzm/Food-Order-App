import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.item.length > 0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)

    }



    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    const cartItems = cartCtx.item.map((item, index) => <CartItem
        key={index}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)} />)
    return (


        <Modal onClose={props.onCloseCart}>

            <ul className={styles['cart-items']}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>

            </div>
            <div className={styles.actions}>
                <button onClick={props.onCloseCart} className={styles['button--alt']}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>

    )
}

export default Cart