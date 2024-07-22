import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ResultsContainer from "./components/resultsContainer";
import NumbersRange from "./components/numbersRange";
import PickedNumbers from "./components/pickedNumbers";

const App = () => {
  const [data, setData] = useState(null);
  const [portalActive, setPortalActive] = useState(false);
  const [pickedNumbers, setPickedNumbers] = useState([]);
  const numbersRange = Array.from({ length: 39 }, (_, i) => i + 1);
  const pickedStyle = {
    border: "solid thin gray",
    cursor: "default",
    opacity: "0.3",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://loto-proxy.onrender.com/numbers");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const togglePortal = () => {
    setPortalActive(!portalActive);
  };

  const pickNumber = (number) => {
    if (pickedNumbers.length <= 6 && !pickedNumbers.includes(number)) {
      setPickedNumbers((prevPickedNumbers) => [...prevPickedNumbers, number]);
    }
  };

  const removeNumber = (number) => {
    setPickedNumbers((prevPickedNumbers) => prevPickedNumbers.filter((num) => num !== number));
  };

  const checkMatch = useCallback(
    (number) => {
      const numbers = data?.results?.[0]?.numbers || [];
      return numbers.includes(number) ? "span_number matched" : "span_number";
    },
    [data]
  );

  const clearPickedNumbers = () => {
    setPickedNumbers([]);
  };

  return (
    <div className="main_container">
      <ResultsContainer data={data} />
      <div className={portalActive ? "played_numbers active" : "played_numbers"}>
        <div className="check_header" onClick={data ? togglePortal : null}>
          <i className="fas fa-chevron-up"></i>
          <p>check your numbers</p>
        </div>
        <div className="check_body">
          <NumbersRange
            title="choose numbers"
            spantitle="add"
            onClick={pickNumber}
            numbersRange={numbersRange}
            pickedNumbers={pickedNumbers}
            pickedStyle={pickedStyle}
          />
          <PickedNumbers title="picked numbers" spantitle="remove" onClick={removeNumber} pickedNumbers={pickedNumbers} checkMatch={checkMatch} />
          <div className={pickedNumbers.length > 0 ? "clear_button active" : "clear_button"}>
            <i className="fas fa-plus" onClick={clearPickedNumbers} title="clear picked numbers"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
