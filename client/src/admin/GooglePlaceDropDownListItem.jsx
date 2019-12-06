import React from 'react';

const GooglePlaceDropDownListItem = ({ place, completeRestaurantForm}) => {
  return (
    <div onClick={e => {completeRestaurantForm(e, place.description, place.structured_formatting.main_text)}}>
      {place.description}
    </div>
  );
};

export default GooglePlaceDropDownListItem;
