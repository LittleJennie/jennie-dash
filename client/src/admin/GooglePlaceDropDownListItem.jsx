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
      <div onClick={e => {completeRestaurantForm(e, place.name, place.url, place.coordinates.latitude, place.coordinates.longitude)}}>
        <div>
          {place.name}
        </div>
        <div>
          <img src={place.image_url} alt={`${place.name} thumbnail image`} height="60" width="60" />
        </div>
      </div>
    )
  );
};

export default GooglePlaceDropDownListItem;
