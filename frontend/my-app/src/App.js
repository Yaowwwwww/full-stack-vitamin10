import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    try {
      const response = await fetch("https://full-stack-vitamin10.onrender.com/quote");
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Quote of the Day</h1>
      <button
        onClick={getQuote}
        style={{
          padding: "10px 20px",
          fontSize: "20px",
          cursor: "pointer",
          marginTop: "30px",
        }}
      >
        Get Quote
      </button>
      <p style={{ marginTop: "50px", fontSize: "24px" }}>{quote}</p>
    </div>
  );
}

export default App;