import styles from "./MealItemForm.module.css"
import Input from "../../UI/Input"
import { useRef, useState } from "react"


const MealItemForm = props => {
    const [countValid, setCountValid] = useState(true)
    const inputRef = useRef()
    const submitHandler = (e) => {
        e.preventDefault()
        const enteredValue = inputRef.current.value
        const enteredValueNumber = +enteredValue

        if (enteredValue.trim().length === 0 || enteredValueNumber < 1 || enteredValueNumber > 5) {
            setCountValid(false)
            return;
        }

        props.onAddCart(enteredValueNumber)
    }



    return (
        <form action="" className={styles.form} onSubmit={submitHandler}>
            <Input label="Input"

                ref={inputRef}

                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button className={styles.button}>Add</button>
            {!countValid && <p>Please choose count between of 1-5</p>}
        </form>
    )
}


export default MealItemForm