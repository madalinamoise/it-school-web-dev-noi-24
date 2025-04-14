import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState('posts');
  const [data, setData] = useState([]);
  const [displayElements, setDisplayElements] = useState([]);

  useEffect(() => {
    let url = '';

    if (activeButton === 'posts') {
      url = 'https://jsonplaceholder.typicode.com/posts';
    } else if (activeButton === 'comments') {
      url = 'https://jsonplaceholder.typicode.com/comments';
    } else if (activeButton === 'todos') {
      url = 'https://jsonplaceholder.typicode.com/todos';
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [activeButton]);

  useEffect(() => {
    // Prelucrăm manual doar primele 10 elemente
    const elements = [];

    for (let i = 0; i < 10 && i < data.length; i++) {
      const item = data[i];

      if (activeButton === 'posts') {
        elements.push(
          <li key={i} className="data-item">
            <strong>{item.title}</strong>
          </li>
        );
      } else if (activeButton === 'comments') {
        elements.push(
          <li key={i} className="data-item">
            <span><strong>{item.email}</strong>: {item.body}</span>
          </li>
        );
      } else if (activeButton === 'todos') {
        elements.push(
          <li key={i} className="data-item">
            <span>
              {item.title} {item.completed ? ' ✅ (Completat)' : ' ❌ (Necompletat)'}
            </span>
          </li>
        );
      }
    }

    setDisplayElements(elements);
  }, [data, activeButton]);

  return (
    <div className="app-container">
      <h1>Todos & Company</h1>

      <div className="buttons-container">
        <button
          onClick={() => setActiveButton('posts')}
          className={`button ${activeButton === 'posts' ? 'active' : ''}`}
        >
          Postări
        </button>
        <button
          onClick={() => setActiveButton('comments')}
          className={`button ${activeButton === 'comments' ? 'active' : ''}`}
        >
          Comentarii
        </button>
        <button
          onClick={() => setActiveButton('todos')}
          className={`button ${activeButton === 'todos' ? 'active' : ''}`}
        >
          Todos
        </button>
      </div>

      <div className="data-container">
        {data.length === 0 ? (
          <p>Se încarcă datele...</p>
        ) : (
          <ul className="data-list">
            {displayElements}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;