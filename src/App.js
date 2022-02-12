import React, { useState,  } from 'react';

import Address from './components/Users/Address';
import PostalCode from './components/Users/PostalCode';

function App() {
  const [postalCode, setPostalCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  async function submitAddressHandler(address) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://geocodeapi-env.eba-kcymmxph.us-east-2.elasticbeanstalk.com/geocode",
        {
          method: "POST",
          body: JSON.stringify(address),
          headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          }
        }
        
      );
      if (!response.ok) {
        throw new Error("Something went wrong :(");
      }
      setError("");
      const data = await response.json();
      setPostalCode(data["postal_code"]);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setIsLoading(false);
  }

  const clearPostalCode = () => {
    setPostalCode("");
    setIsLoading(false);
    setError("");
  }

  return (
    <div>
      <Address onSubmitAddress={submitAddressHandler} onClear={clearPostalCode} />
      <PostalCode postalCode={postalCode} isLoading={isLoading} errMsg={error}/>
    </div>
  );
}

export default App;