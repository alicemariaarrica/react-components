
import Button from '../components/Button';
import img from '../public/koda.png';

export default function CreateImgCard() {
    return (
        <div className='imgcard'>
            <img src={img} alt="descrizione immagine" />
            <div className="description">
                <h3>My favorite Disney movie</h3>
                <p>Descrizione</p>
                <Button />
            </div>
        </div>
    );
}

