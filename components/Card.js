import cardStyles from '../styles/Card.module.css';

const Card = () => (
    <div className={cardStyles.cardbase}>
        <div className={cardStyles.cardTitle}>Go Demo!</div>
        <h4 className={cardStyles.cardDescription}>Live demo your project at the end of the hackathon at one of our voice channels!</h4>
    </div>
)

export default Card;