import faqStyles from '../styles/FAQ.module.css';

const FAQ = () => {
    return (
        <section className={faqStyles.background}>
            <br id="faq"/>
            <br /> <br /> 
            <span className={faqStyles.title}>FAQ</span>
            <div className={faqStyles.questions}>
                <div className={faqStyles.quesDiv}>
                    <div className={faqStyles.quesCard}>
                        <span className={faqStyles.text}>what is a hackathon?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>A hackathon is an event where students come together to build and share something from scratch. You and a group of people will brainstorm an idea, and bring it to life during the event!</span>
                    </div>
                </div>

                <div className={faqStyles.quesDiv}>
                    <div className={faqStyles.quesCard}>
                        <span className={faqStyles.text}>who can join?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>Midnight Hacks is open to everyone!</span>
                    </div>
                </div>


                <div className={faqStyles.quesDiv}>
                    <div className={faqStyles.quesCard}>
                        <span className={faqStyles.text}>do i need to know how to code?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>Nope! This event was specifically designed for beginners to get into coding. We plan to have several workshops and mentors to help you get started and create something neat over the course of the hackathon!</span>
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
                        <span className={faqStyles.text}>where will the event be hosted?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>The event will be virtual this year!</span>
                    </div>
                </div>

                <div className={faqStyles.quesDiv}>
                    <div className={faqStyles.quesCard}>
                        <span className={faqStyles.text}>do i need a team?</span>
                    </div>
                    <div className={faqStyles.quesDesc}>
                        <span className={faqStyles.subtext}>Nope! You can go solo, or participate in a team of up to 4 members.</span>
                    </div>
                </div>
            </div>
        </section>  
    );
}

export default FAQ;