import CalculatorBtn from "./../components/CalculatorBtn";
import { calcBtns } from "../consts";
import { useState } from "react";

const Main = () => {
  const [value, setValue] = useState([]); // Initialize as an empty array
  const [output, setOutput] = useState(""); // Initialize as an empty string

  const handleButtonClick = (label) => {
    if (label === "C") {
      // Clear all input and output
      setValue([]);
      setOutput("");
    } else if (label === "Backspace") {
      // Remove the last character
      setValue((prev) => prev.slice(0, -1));
    } else if (label === "=") {
      try {
        const result = eval(value.join("")); // Calculate the result
        setOutput(result.toString()); // Update the output
        setValue([result.toString()]); // Reset value to the result
      } catch {
        setOutput("Error"); // Handle invalid input
      }
    } else {
      // Append label to the input
      setValue((prev) => [...prev, label]);
    }
  };

  return (
    <main className="w-full h-[94vh] bg-slate-900 text-white flex items-center justify-center">
      <div className="flex w-[60%] flex-col items-center">
        {/* Display Input */}
        <div className="w-full px-4 flex items-start text-2xl bg-gray-800 p-2 rounded">
          <div>{value.join("") || "0"}</div>
        </div>
        {/* Display Output */}
        <div className="mt-4 text-3xl flex">
          <h1>Result:</h1>
          <div className="ml-4">{output}</div>
        </div>
        {/* Calculator Buttons */}
        <div className="w-full grid grid-cols-4 gap-2 p-4">
          {calcBtns.map((btn, index) => (
            <CalculatorBtn
              key={index} // Add a unique key for mapping
              id={btn.id}
              label={btn.label}
              onClick={() => handleButtonClick(btn.label)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
