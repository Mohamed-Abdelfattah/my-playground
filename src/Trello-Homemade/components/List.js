import { useSelector } from 'react-redux';
import DroppingWrapper from '../utils/DroppingWrapper';
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
      <DroppingWrapper>
        <ul>
          {props.data.taskIds.length > 0 &&
            props.data.taskIds.map((taskId, index) => (
              <Card key={taskId} data={taskData[taskId]} index={index} />
            ))}
        </ul>
      </DroppingWrapper>
    </section>
  );
};

export default List;
