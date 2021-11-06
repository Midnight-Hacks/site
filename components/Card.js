import cardStyles from '../styles/Card.module.css';

const Card = ({name, desc, points}) => (
    <div className={cardStyles.cardbase}>
        <div className={cardStyles.cardTitle}>{name}</div>
        <h4 className={cardStyles.cardDescription}>{desc}</h4>
        <h3>Points worth: {points}</h3>
    </div>
)

export default Card;