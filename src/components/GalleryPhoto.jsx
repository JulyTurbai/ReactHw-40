
const GalleryPhoto = ({ status, valGallery, setValGallery, getGallery, gallery }) => {
    
    return (
        <div className="dogs-gallery">
            <h2>Dogs gallery</h2>

            <input className="num-inp" 
            onChange={(e) => setValGallery(e.target.value)}
            type="number" />
            <button className='gallery-btn' onClick={() => getGallery()}>Show dogs</button>
            
            {
                status && valGallery <= 50 ?
                <div className="gallery-photo">
                {
                    gallery.map((image, index) => {return <img key={ index + 1 }src={ image } alt="" />})
                }
                </div> :
                <p className="info">Not correct number (can be not more 50..)</p>
            }
                
        </div>
    );
};


export default GalleryPhoto;