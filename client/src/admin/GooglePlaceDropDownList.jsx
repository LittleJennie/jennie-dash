import React from 'react';
import GooglePlaceDropDownListItem from './GooglePlaceDropDownListItem'; 

const GooglePlaceDropDownList = ({ places, completeRestaurantForm, isGoogle }) => {
  return (
    <div>
      {
        places.map(place => <GooglePlaceDropDownListItem 
            place={place} 
            completeRestaurantForm={completeRestaurantForm}
            isGoogle={isGoogle}
          />
        )
      }
    </div>
  )
};

export default GooglePlaceDropDownList;
