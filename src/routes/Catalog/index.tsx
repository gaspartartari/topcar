import CardCar from '../../components/CardCar';
import CardComment from '../../components/CardComment';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.css';

export default function Catalog() {
    return (
        <>
            <Header />
            <main className='tc-main-catalog'>

                <section id='tc-catalog-section'>

                    <div className='tc-catalog-card-car-container'>
                        <h2>Venha nos visitar</h2>
                        <CardCar />
                        <CardCar />
                    </div>
                </section>

                <section id='tc-comments-section'>

                    <div className='tc-catalog-card-comments-container'>
                        <h2>O que estão dizendo</h2>
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );

}