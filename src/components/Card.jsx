import React from 'react'

const Card = (item) => {
    return (
        <div className="card">
            <img src={item.imageUrl} alt="a pic of destination" className="destinationImg" />
            <div className="info">
                <div className="location-and-link">
                    <img src="//www.gstatic.com/images/icons/material/system_gm/1x/place_gm_blue_24dp.png" alt="pointything" />
                    <p className="location">{item.location}</p>
                    <a href={item.googleMapsUrl}><small>View on Google Maps</small></a>                
                </div>
                <h1>{item.title}</h1>
                <p className="date">{item.startDate} - {item.endDate}</p>
                <p>{item.description}</p>
            </div>
            
        </div>
    )
}

export default Card
