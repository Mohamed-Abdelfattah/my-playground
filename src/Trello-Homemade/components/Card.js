import { useDrag } from 'react-dnd';
import itemTypes from '../utils/item';
import './Card.css';

// const CardItem = (props) => {
//   return <li className="card">{props.children}</li>;
// };

const Card = (props) => {
  //
  const [{ isDragging }, taskDragRef] = useDrag(() => ({
    type: itemTypes.CARD,
    item: { id: props.data.id },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  // const [{ isDragging }, taskDragRef] = useDrag({
  //   type: itemTypes.CARD,
  //   item: { id: props.data.id },
  //   collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  // });

  return (
    <li className={`card ${isDragging ? 'tilt' : ''}`} ref={taskDragRef}>
      <h3>{props.data.content}</h3>
    </li>
  );
};

export default Card;
