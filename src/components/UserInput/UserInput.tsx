import { useState } from "react";

const INITIAL_USER_INPUT = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
}

export default function UserInput(props: any) {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);
  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(INITIAL_USER_INPUT);
  };

  const inputChangeHandler = (input: any, value: any) => {
    console.log(input, " - -- - ", value);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value
      }
    })
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event: any) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event: any) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput['yearly-contribution']}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event: any) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput['expected-return']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event: any) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput['duration']}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
