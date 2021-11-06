import cardStyles from '../styles/Card.module.css';

const Card = ({name, desc}) => (
    <div className={cardStyles.cardbase}>
        <div className={cardStyles.cardTitle}>{name}</div>
        <h4 className={cardStyles.cardDescription}>{desc}</h4>
    </div>
)

export default Card;