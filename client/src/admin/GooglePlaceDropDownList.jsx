import React from 'react';
import GooglePlaceDropDownListItem from './GooglePlaceDropDownListItem'; 

const GooglePlaceDropDownList = ({ places }) => {
  return (
    <div>
      {
        places.map(place => <GooglePlaceDropDownListItem place={place} />)
      }
    </div>
  )
};

export default GooglePlaceDropDownList;
