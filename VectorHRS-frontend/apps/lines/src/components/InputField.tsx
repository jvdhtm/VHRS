import React from 'react';
import '../styles/style.scss';
import { FiPlus } from 'react-icons/fi';
import { Priorities } from '../types';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setPriority: React.Dispatch<React.SetStateAction<Priorities>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({
  todo,
  setTodo,
  setPriority,
  handleAdd,
}) => {
  return (
    <div className='u-container -m1'>
      <form className='add-form' onSubmit={handleAdd}>
        <select
          className='priorityselect'
          defaultValue='low'
          onChange={(e) => setPriority(e.target.value as Priorities)}
        >
          <option disabled value='low'>
            Select priority
          </option>
          <option value='high'>High</option>
          <option value='medium'>Medium</option>
          <option value='low'>Low</option>
        </select>
        <input
          className='contentinput'
          type='text'
          placeholder='Add a task'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className='submitbtn'>
          <FiPlus />
        </button>
      </form>
    </div>
  );
};

export default InputField;
