import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import Card from './Card';
import './List.css';

const List = (props) => {
  //
  const taskData = useSelector((state) => state.tasks);

  return (
    <section
      className={`content ${
        props.shouldBeStyledActive ? 'active' : 'finished'
      }`}
    >
      <header>
        <h2>{props.data.title || 'List name'}</h2>
      </header>
      <Droppable droppableId={props.data.id}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {props.data.taskIds.length > 0 &&
              props.data.taskIds.map((taskId, index) => (
                <Card key={taskId} data={taskData[taskId]} index={index} />
              ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </section>
  );
};

export default List;
