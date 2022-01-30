import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import List from './List';
import './Board.css';
import { listActions } from '../store';
// import Header from './Header';

const Board = (props) => {
  //
  const listsToBeRendered = useSelector((state) => state.listsOrder);
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  const tilt = () => {};

  const dragHandler = (result) => {
    // to update the columns state (order of appearance)
    const { source, destination, draggableId } = result;
    // const destinationList = destination.droppableId;
    // const sourceList = source.droppableId;
    // const destinationIndex = destination.index;
    // const sourceIndex = source.index;

    if (!destination) return;

    if (
      destination.index === source.index &&
      source.droppableId === destination.droppableId
    )
      return;

    dispatch(
      listActions.updateTasksOrder({
        sourceIndex: source.index,
        sourceList: source.droppableId,
        destinationIndex: destination.index,
        destinationList: destination.droppableId,
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
