function Entry(props) {
    const {img, title, country, googleMapsLink, dates, text} = props.entry;

    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={img.src}
                    alt={img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="./public/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{country}</span>
                <a href={googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{title}</h2>
                <p className="trip-dates">{dates}</p>
                <p className="entry-text">{text}</p>
            </div>
            
        </article>
    );
}

export default Entry;