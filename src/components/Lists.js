import React, { useState } from 'react';
import ListItem from './ListItem';

function Lists({ del, done, todos }) {
  if (todos.length <= 0) {
    return (
      <div className="empty-list">
        <p>There's nothing to do</p>
      </div>
    );
  }
  return (
    <div className="lists">
      {todos &&
        todos.map((todo) => {
          return (
            <ListItem
              id={todo.id}
              key={todo.id}
              delHandler={del}
              doneHandler={done}
              title={todo.title}
              done={todo.done}
            />
          );
        })}
    </div>
  );
}

export default Lists;
