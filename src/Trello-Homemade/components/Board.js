import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import List from './List';
import './Board.css';
import { listActions } from '../store';
// import Header from './Header';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Board = (props) => {
  //
  const listsToBeRendered = useSelector((state) => state.listsOrder);
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  const tilt = () => {};

  const dragHandler = (result) => {
    // to update the columns state (order of appearance)
    const destinationList = result.destination.droppableId;
    const sourceList = result.source.droppableId;
    const destinationIndex = result.destination.index;
    const sourceIndex = result.source.index;

    if (!result.destination) return;

    if (destinationIndex === sourceIndex && sourceList === destinationList)
      return;

    dispatch(
      listActions.updateTasksOrder({
        sourceIndex,
        sourceList,
        destinationIndex,
        destinationList,
      })
    );
  };

  return (
    <div className="container">
      <h2 className="top">this should be a navbbar</h2>
      <h3 className="sidebar">side bar</h3>
      <DragDropContext onDragStart={tilt} onDragEnd={dragHandler}>
        {listsToBeRendered.map((listId, index) => (
          <List
            key={listId}
            data={lists[listId]}
            className="list"
            shouldBeStyledActive={Boolean(index % 2)}
          />
        ))}
      </DragDropContext>
      <h2 className="footer">this should be a footer</h2>
    </div>
  );
};

export default Board;
