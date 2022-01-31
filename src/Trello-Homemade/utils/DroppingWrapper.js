import React from 'react';
import { useDrop } from 'react-dnd';
import itemTypes from './item';

const DroppingWrapper = (props) => {
  //
  const [{ isOver }, dropTargetRef] = useDrop({
    accept: itemTypes.CARD,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      //   style={isOver ? { backgroundColor: 'lightgreen' } : {}}
      className={isOver ? 'isOver' : ''}
      ref={dropTargetRef}
    >
      {props.children}
    </div>
  );
};

export default DroppingWrapper;
