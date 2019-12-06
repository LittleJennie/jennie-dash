import React from 'react';
import moment from 'moment';
import helperFunctions from '../helperfunctions';
import GooglePlaceDropDownList from './GooglePlaceDropDownList';

class CreateOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: '',
      date: moment(),
      time: moment().format('LT'),
      GooglePlaceList: [],
      yelpList: '',
      yelp: '',
    }

    this.updateTime = this.updateTime.bind(this);
    this.updateRestaurant = this.updateRestaurant.bind(this);
    this.completeRestaurantForm = this.completeRestaurantForm.bind(this);
  }

  updateTime(e) {
    const input = e.target.value;
    // need to manipulate time format here
    this.setState({ time: input });
  }

  updateRestaurant(e) {
    e.preventDefault();
    const input = e.target.value;
    this.setState({ restaurant: input },  async () => {
      const GooglePlaceList = await helperFunctions.fetchGooglePlace(this.state.restaurant);

      try {
        console.log(GooglePlaceList)
        this.setState({ GooglePlaceList });
      } catch (err) {
        console.log(err);
      }
    });
  }

  completeRestaurantForm(e, selectedFull, selectedName) {
    e.preventDefault();
    this.setState({ 
      restaurant: selectedFull,
      GooglePlaceList: [],
      yelp: selectedName,
    }, async () => {
      const yelpList = await helperFunctions.fetchYelpBusinesses(this.state.yelp);

      try {
        console.log(yelpList)
        this.setState({ yelpList });
      } catch (err) {
        console.log(err);
      }
    });
  }

  selectYelp(e, selection) {
    e.preventDefault();
    this.setState({
      yelp: selection,
      yelpList: [],
    });
  }

  render() {
    const {
      restaurant,
      date,
      time,
      GooglePlaceList,
      yelpList,
    } = this.state;

    return(
      <div>
        <form>
          <div>
            <span>{`Date: ${date.format('MMMM Do YYYY')}`}</span>
          </div>
          <div>
            <span>{`Time: `}</span>
            {/* Time should be a drop down menue */}
            <input 
              name="time" 
              value={time}
              onSelect={this.updateForm}
            />
          </div>
          <div>
            <span>{`Restaurant: `}</span>
            {/* idealy this should be connect to Gmap auto fill based on restaurant name */}
            <input 
              name="restaurant" 
              value={restaurant}
              onChange={this.updateRestaurant}
            />
            {
              GooglePlaceList.length === 0 ? 
              false :
              (
                <GooglePlaceDropDownList 
                  places={GooglePlaceList}
                  completeRestaurantForm={this.completeRestaurantForm}
                />
              )
            }
          </div>
          {
            yelpList.length === 0 ?
            false :
            (
              <GooglePlaceDropDownList 
                places={yelpList}
                completeRestaurantForm={this.selectYelp}
              />
            )
          }
        </form>
      </div>
    )
  }
};

export default CreateOrder;
