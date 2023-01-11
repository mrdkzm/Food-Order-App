import CartContext from "./cart-context"
import { useReducer } from "react"

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;


        let existingItemIndex = state.item.findIndex(item => item.id === action.item.id)


        let existingItem = state.item[existingItemIndex]
        let updatedItems

        if (existingItem) {
            let updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }

            updatedItems = [...state.item]

            updatedItems[existingItemIndex] = updatedItem
        }
        else {
            updatedItems = state.item.concat(action.item);
        }

        return {
            item: updatedItems,
            totalAmount: updateTotalAmount
        }
    }

    if (action.type === "REMOVE") {

        let existingItemIndex = state.item.findIndex(item => item.id === action.id)


        let existingItem = state.item[existingItemIndex]

        let updatedTotalAmount = state.totalAmount - existingItem.price

        let updatedItems


        if (existingItem.amount === 1) {
            updatedItems = state.item.filter(item => item.id !== action.id)
        }
        else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.item]
            updatedItems[existingItemIndex] = updatedItem

            console.log(updatedItem)
        }


        return { item: updatedItems, totalAmount: updatedTotalAmount }

    }
    return { item: [], totalAmount: 0 }
}


const CartProvider = props => {
    const [cartState, dispatchCartActions] = useReducer(cartReducer, { item: [], totalAmount: 0 })


    const addItemToCartHandler = item => {
        dispatchCartActions({ type: "ADD", item: item })

    }

    const removeItemToCartHandler = id => {
        dispatchCartActions({ type: "REMOVE", id: id })
    }

    const cartContext = {
        item: cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider