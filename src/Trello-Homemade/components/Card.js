import { Draggable } from 'react-beautiful-dnd';
import './Card.css';

const addTiltToStyleWhileDragging = (alreadyExistingStyle, ShouldAddTilt) => {
  const newStyle = {
    ...alreadyExistingStyle,
    transform: `${alreadyExistingStyle.transform} ${
      ShouldAddTilt ? 'rotate(3deg)' : ''
    }`,
  };

  return newStyle;
};

const CardItem = (props) => {
  //

  return (
    <li
      // className="card"
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      // style={
      //   props.isItBeenDragged
      //     ? addTiltToStyleWhileDragging(
      //         props.provided.draggableProps.style,
      //         props.isItBeenDragged
      //       )
      //     : props.provided.dragHandleProps.style
      // }
      className={`card ${props.isItBeenDragged ? 'tilt' : ''}`}
    >
      {props.children}
    </li>
  );
};

const Card = (props) => {
  //

  return (
    <Draggable draggableId={props.data.id} index={props.index}>
      {(provided, snapshot) => (
        <CardItem
          provided={provided}
          isItBeenDragged={snapshot.isDragging}
          // ref={provided.innerRef}
          // {...provided.draggableProps}
          // {...provided.dragHandleProps}
        >
          <h3>{props.data.content}</h3>
        </CardItem>
      )}
    </Draggable>
  );
};

export default Card;
