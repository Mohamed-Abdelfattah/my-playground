import React from 'react';
import { Link } from 'react-router-dom';
import Board from './components/Board';

const TrelloPage = () => {
  //

  return (
    <div>
      <h1>Trello homemade</h1>
      <Link to="/">Home</Link>
      <Board />
    </div>
  );
};

export default TrelloPage;
