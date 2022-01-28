import { Draggable } from 'react-beautiful-dnd';
import './Card.css';

const Card = (props) => {
  //
  return (
    <Draggable draggableId={props.data.id} index={props.index}>
      {(provided) => (
        <li
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3>{props.data.content}</h3>
        </li>
      )}
    </Draggable>
  );
};

export default Card;
