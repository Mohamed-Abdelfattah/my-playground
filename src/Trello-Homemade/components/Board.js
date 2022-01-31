import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import './Board.css';
import { listActions } from '../store';
// import Header from './Header';

const Board = (props) => {
  //
  const listsToBeRendered = useSelector((state) => state.listsOrder);
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="top">this should be a navbbar</h2>
      <h3 className="sidebar">side bar</h3>

      {listsToBeRendered.map((listId, index) => (
        <List
          key={listId}
          data={lists[listId]}
          className="list"
          shouldBeStyledActive={Boolean(index % 2)}
        />
      ))}

      <h2 className="footer">this should be a footer</h2>
    </div>
  );
};

export default Board;
