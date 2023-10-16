import { useState } from "react";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";


function App() {

  const [userInput, setUserInput]: any = useState(null);

  const calculateHandler = (userInput: any) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log("yearlyData ==> ", yearlyData);
  }


  return (
    <div>
      <Header />

      <UserInput onCalculate={calculateHandler} />

      {!userInput && <p>No investment calculated yet!!!</p>}

      {userInput && <ResultsTable data={yearlyData} initialInvestment={+userInput['current-savings']}/>}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}


    </div>
  );
}

export default App;
