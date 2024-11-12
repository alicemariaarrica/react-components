import Button from '..components/Button';
import img from ../ public / koda.png

export default function createButton() {

    return (

        <div className='imgcard'>

            <img src={img} />



            <div className="description">

                <h3>Titolo del post</h3>

                <p>Descrizione lorem ipsum etc</p>






                <Button />


            </div>

            )
}
