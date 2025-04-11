import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaticExample from './card_dtl';
function BasicExample2(Props) {
    console.log(Props, "<===prop")
    return (
    <>
     <div className='card' onClick={StaticExample()}>
                <div className='image1'>
                    <img src={Props.data.Poster}></img>
                </div>
                <div className='txt'>
                    <p>{Props.data.Title}
                    </p>
                </div>
            </div>
    </>
           
    );

}
export default BasicExample2;