import React from 'react';

const GooglePlaceDropDownListItem = ({ place, completeRestaurantForm, isGoogle }) => {
  return (
    isGoogle === 'true' ?
    (
      <div onClick={e => {completeRestaurantForm(e, place.description, place.structured_formatting.main_text)}}>
        {place.description}
      </div>
    ) :
    (
      <div onClick={e => {completeRestaurantForm(e, place.description, place.structured_formatting.main_text)}}>
        <div>
          {place.name}
        </div>
        <div>
          {place.url}
        </div>
      </div>      
    )
  );
};

export default GooglePlaceDropDownListItem;
