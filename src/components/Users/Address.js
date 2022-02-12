import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Address.module.css';

const Address = (props) => {
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredState, setEnteredState] = useState("");
  const [error, setError] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredCity.length === 0 || enteredState.length === 0
      || enteredStreet.length === 0 || enteredNumber.length === 0) {
        setError(true);
        return;
      }
    setError(false);
    props.onSubmitAddress(
      {
        city: enteredCity,
        state: enteredState,
        street: enteredStreet,
        number: enteredNumber
      });
  };

  const streetChangeHandler = (event) => {
    let x1 = event.target.value.length !== 0;
    let x2 = enteredCity.length !== 0;
    let x3 = enteredNumber.length !== 0;
    let x4 = enteredState.length !== 0;
    setIsShown(x1 || x2 || x3 || x4);
    setEnteredStreet(event.target.value);
  };

  const cityChangeHandler = (event) => {
    let x1 = event.target.value.length !== 0;
    let x2 = enteredStreet.length !== 0;
    let x3 = enteredNumber.length !== 0;
    let x4 = enteredState.length !== 0;
    setIsShown(x1 || x2 || x3 || x4);
    setEnteredCity(event.target.value);
  };

  const stateChangeHandler = (event) => {
    let x1 = event.target.value.length !== 0;
    let x2 = enteredCity.length !== 0;
    let x3 = enteredNumber.length !== 0;
    let x4 = enteredStreet.length !== 0;
    setIsShown(x1 || x2 || x3 || x4);
    setEnteredState(event.target.value);
  };

  const numberChangeHandler = (event) => {
    let x1 = event.target.value.length !== 0;
    let x2 = enteredCity.length !== 0;
    let x3 = enteredStreet.length !== 0;
    let x4 = enteredState.length !== 0;
    setIsShown(x1 || x2 || x3 || x4);
    setEnteredNumber(event.target.value);
  };

  const clearHandler = (event) => {
    setIsShown(false);
    setEnteredCity("");
    setEnteredNumber("");
    setEnteredState("");
    setEnteredStreet("");
    props.onClear();
  }
  return (
    <Card className={classes.input}>
      <form>
        <h2>Address</h2>
        {error && <h6>You must fill all fields!</h6>}
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          value={enteredStreet}
          onChange={streetChangeHandler}
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="number"
          value={enteredNumber}
          min={1}
          onChange={numberChangeHandler}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={enteredCity}
          onChange={cityChangeHandler}
        />
        <label htmlFor="state">State</label>
        <input
          id="state"
          type="text"
          value={enteredState}
          onChange={stateChangeHandler}
        />
        <Button type="submit" onClick={submitHandler}>Get Postal Code</Button>
        {isShown && <Button type="button" onClick={clearHandler}>Clear</Button>}
      </form>
    </Card>
  );
};

export default Address;
