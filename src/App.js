import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${count}`)
      .then((response) => {
        setData(response?.data?.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);

  const ButtonLoadMore = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setLoading(true);
    setCount(count + 1);
  };

  const ButtonLink = () => {
    window.location.href = "https://github.com/muharjunn/Techinical-test2";
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="NavBar">
          <div className="NavBar-left">
            <span>Rick and Morty</span>
          </div>
          <div className="NavBar-right">
            <button>Characters</button>
            <button>Locations</button>
            <button>Episodes</button>
          </div>
        </nav>
      </header>
      <div className="App-content">
        {data.map((item) => (
          <div className="Item-content" key={item.id}>
            <img alt="avatar" src={item?.image} />
            <div className="Text-area">
              <p>{item?.name}</p>
              <p>{item?.species}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <button className="button" onClick={ButtonLoadMore} disabled={loading}>
          {loading ? "Loading ..." : "Load More"}
        </button>
        <div className="Text-area">
          <p>Muhammad Arjun Wijanarko</p>
          <p>Muharjunn@gmail.com</p>
        </div>
        <button className="button-Link" onClick={ButtonLink}>
          Link Github
        </button>
      </footer>
    </div>
  );
}

export default App;
