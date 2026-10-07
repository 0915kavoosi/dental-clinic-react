import "./Main.css";
import canalTreatment from '../assets/images/Root-canal-treatment.jpeg'; //Root canal treatment
import DentalVeneers from '../assets/images/Dental-Veneers.jpeg'; //Laminate
import DentalExamination from '../assets/images/Dental-examination.jpeg'; //Dental examination
import DentalScaling from '../assets/images/Dental-scaling.jpeg';  //Dental scaling //Dental-scaling.jpeg

function Main() {
    return (
        <main>
            <div className="Services-box">
                <h2>Dental Services</h2>
                <div className="Services">
                    <section className="service-card">
                        <article>
                            <h3>Root canal treatment</h3>
                            <p>Root canal treatment and tooth preservation...</p>
                            <img src={canalTreatment} />
                        </article>
                    </section>
                    <section className="service-card">
                        <article>
                            <h3>Laminate</h3>
                            <p>Aesthetics and correction of tooth appearance</p>
                            <img src={DentalVeneers} />
                        </article>
                    </section>
                    <section className="service-card">
                        <h3>Dental examination</h3>
                        <p>Examination and assessment of the condition of the teeth...</p>
                        <img src={DentalExamination} />
                    </section>
                    <section className="service-card">
                        <h3>Dental scaling</h3>
                        <p>Removing tartar and plaque, and helping to maintain the health and beauty of your smile...</p>
                        <img src={DentalScaling} />
                    </section>

                </div>

            </div>
        </main>

    )

}

export default Main;