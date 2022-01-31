import React from 'react';
import { Link } from 'react-router-dom';
import Board from './components/Board';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TrelloPage = () => {
  //

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Trello homemade</h1>
        <Link to="/">Home</Link>
        <Board />
      </div>
    </DndProvider>
  );
};

export default TrelloPage;
