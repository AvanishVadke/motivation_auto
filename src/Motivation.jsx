import { useState, useEffect } from "react";
import axios from "axios";

function Motivation() {
  const [msg, setMsg] = useState("");
  const [aut, setAut] = useState("");

  const fetchQuote = () => {
    let url = "https://quotes-api-self.vercel.app/quote";
    axios
      .get(url)
      .then((res) => {
        setMsg(res.data.quote);
        setAut(res.data.author);
      })
      .catch((err) => {
        setMsg("Issue: " + err);
      });
  };

  useEffect(() => {
    fetchQuote(); 
    setInterval(fetchQuote, 5000);
  }, []);

  return (
    <>
      <center>
        <h1>Motivation App</h1>
        <h2>{msg}</h2>
        <h2>{aut}</h2>
      </center>
    </>
  );
}

export default Motivation;
