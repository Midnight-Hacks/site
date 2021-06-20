import faqStyles from '../styles/FAQ.module.css';

const FAQ = () => {
    return (
        <section className={faqStyles.background} id="faq">
            <br /> <br />
            <span className={faqStyles.title}>FAQ</span>
            <div className={faqStyles.questions}>

            </div>
        </section>  
    );
}

export default FAQ;