import styles from "./Card.modules.css"

const Card = props => {
    return(
        <div>
            {props.children}
        </div>
    )
}

export default Card