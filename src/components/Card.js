import './Card.css';
function BasicExample2(Props) {
    console.log(Props, "<===prop")
    return (
        <>
            <div className='card'>
                <div className='txt'>
                    <p>{Props.data.Title}
                    </p>
                    </div>
                <div className='image1'>
                    <img src={Props.data.Poster}></img>
                    </div>
            </div>

        </>
    );

}
export default BasicExample2;