import { useState } from "react";

export function useStringSumCalculator() {
  const [error, setError] = useState("");
  const [sum, setSum] = useState(0);

  const add = (numbers) => {
    if (!numbers) {
      setSum(0);
      return;
    }

    let delimiters = [",", "\n"];
    let negatives = [];

    if (numbers.startsWith("//")) {
      const delimiterSection = numbers
        .replace(/\\n/g, "\n")
        .split("\n")[0]
        .slice(2);
      numbers = numbers
        .replace(/\\n/g, "\n")
        .slice(numbers.replace(/\\n/g, "\n").indexOf("\n") + 1);

      if (delimiterSection.startsWith("[") && delimiterSection.endsWith("]")) {
        delimiters = delimiterSection
          .slice(1, -1)
          .split("][")
          .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      } else {
        delimiters = [delimiterSection];
      }
    }

    const delimiterRegex = new RegExp(delimiters.join("|"));
    const numberArray = numbers
      .split(delimiterRegex)
      .map((num) => parseInt(num, 10));

    let newSum = 0;
    
    for (const num of numberArray) {
      if (isNaN(num)) continue;
      if (num < 0) negatives.push(num);
      if (num <= 1000) newSum += num;
    }

    if (negatives.length > 0) {
      setError(`Negative numbers not allowed: ${negatives.join(", ")}`);
      setSum(null);
      return;
    }

    setError("");
    setSum(newSum);
  };

  return { sum, error, add };
}
