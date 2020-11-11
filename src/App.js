import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/Foodbox';

class App extends Component {
  state = {
    foods
  }
  render() {
    return (
      <div className="App">
        {this.state.foods.map((eachFood, index) => {
          return (
            <FoodBox food={eachFood.name}
              image={eachFood.image}
              calories={eachFood.calories} />
          );
        })}
      </div>
    )
  }
}

export default App;
