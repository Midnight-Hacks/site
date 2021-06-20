import faqStyles from '../styles/FAQ.module.css';

const FAQ = () => {
    return (
        <section className={faqStyles.background} id="faq">
            <br /> <br />
            <span className={faqStyles.title}>FAQ</span>
            <div className={faqStyles.questions}>
                <div className={faqStyles.quesDiv}>
                    <div className={faqStyles.quesCard}>
                        <span className={faqStyles.text}>what is a hackathon?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>Coming soon!</span>
                    </div>
                </div>

                <div className={faqStyles.quesDiv}>
                    <div className={faqStyles.quesCard}>
                        <span className={faqStyles.text}>who can join?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>Coming soon!</span>
                    </div>
                </div>


                <div className={faqStyles.quesDiv}>
                    <div className={faqStyles.quesCard}>
                        <span className={faqStyles.text}>do i need to know how to code?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>Nope! This event was specifically designed for beginners to get into coding.</span>
                    </div>
                </div>

                <div className={faqStyles.quesDiv}>
                    <div className={faqStyles.quesCard}>
                        <span className={faqStyles.text}>is it free?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>Yes! The event is completely free.</span>
                    </div>
                </div>

                <div className={faqStyles.quesDiv}>
                    <div className={faqStyles.quesCard}>
                        <span className={faqStyles.text}>who can join?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>Coming soon!</span>
                    </div>
                </div>

                <div className={faqStyles.quesDiv}>
                    <div className={faqStyles.quesCard}>
                        <span className={faqStyles.text}>who can join?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>Coming soon!</span>
                    </div>
                </div>
            </div>
        </section>  
    );
}

export default FAQ;