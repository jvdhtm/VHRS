import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import '../styles/style.scss';
import TodoItem from './TodoItem';
import { Todo } from '../types';

interface Props {
  todos: Todo[];
  setTodos: (s: Todo[]) => void;
  inProgressTodos: Todo[];
  setInProgressTodos: (s: Todo[]) => void;
  completedTodos: Todo[];
  setCompletedTodos: (s: Todo[]) => void;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  inProgressTodos,
  setInProgressTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className='kanban'>
      <div className='column'>
        <h3>Inbox</h3>
        <Droppable droppableId='inbox-column'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <ul className='todo-list -inbox'>
                {todos.length === 0 ? (
                  <p className='placeholder'>There are no tasks yet</p>
                ) : (
                  todos.map((todo, index) => (
                    <TodoItem
                      index={index}
                      todo={todo}
                      key={todo.id}
                      todos={todos}
                      setTodos={setTodos}
                      inbox={todos}
                      completed={completedTodos}
                      setInbox={setTodos}
                      setCompleted={setCompletedTodos}
                    />
                  ))
                )}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </div>
      <div className='column'>
        <h3>In Progress</h3>
        <Droppable droppableId='inprogress-column'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <ul className='todo-list -inprogress'>
                {inProgressTodos.length === 0 ? (
                  <p className='placeholder'>There are no tasks yet</p>
                ) : (
                  inProgressTodos.map((todo, index) => (
                    <TodoItem
                      index={index}
                      todo={todo}
                      key={todo.id}
                      todos={inProgressTodos}
                      setTodos={setInProgressTodos}
                      inbox={todos}
                      completed={completedTodos}
                      setInbox={setTodos}
                      setCompleted={setCompletedTodos}
                    />
                  ))
                )}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </div>
      <div className='column'>
        <h3>Completed</h3>
        <Droppable droppableId='completed-column'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <ul className='todo-list -completed'>
                {completedTodos.length === 0 ? (
                  <p className='placeholder'>There are no tasks yet</p>
                ) : (
                  completedTodos.map((todo, index) => (
                    <TodoItem
                      index={index}
                      todo={todo}
                      key={todo.id}
                      todos={completedTodos}
                      setTodos={setCompletedTodos}
                      inbox={todos}
                      completed={completedTodos}
                      setInbox={setTodos}
                      setCompleted={setCompletedTodos}
                    />
                  ))
                )}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default TodoList;
