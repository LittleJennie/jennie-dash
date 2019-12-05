import React from 'react';
import GooglePlaceDropDownListItem from './GooglePlaceDropDownListItem'; 

const GooglePlaceDropDownList = ({ places, completeRestaurantForm }) => {
  return (
    <div>
      {
        places.map(place => <GooglePlaceDropDownListItem place={place} completeRestaurantForm={completeRestaurantForm}/>)
      }
    </div>
  )
};

export default GooglePlaceDropDownList;
