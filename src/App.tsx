import React, { FC, ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss';
import ToDoTask from './Components/ToDoTask/ToDoTask';
import { RootState } from './redux/store';
import { Task } from './redux/tasksSlice';
import { setTodoList } from './redux/tasksSlice';
const App: FC = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState<string>('');
  const [deadLine, setDeadLine] = useState<number>(0);
  const todoList = useSelector((state: RootState) => state.tasks);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.target.name === 'task' ? setTask(e.target.value) : setDeadLine(Number(e.target.value));
  };
  const addTask = (): void => {
    const id = todoList.length + 1;
    const done = false;
    const newTask: Task = {
      task,
      deadLine,
      id,
      done,
    };
    dispatch(setTodoList([newTask]));
    setTask('');
    setDeadLine(0);
  };
  const addTaskOnClick = (): void => {
    if (task === '') {
      alert('Enter the task name');
    } else if (deadLine === 0) {
      alert('Enter deadline ');
    } else addTask();
  };

  return (
    <div className={styles.todo}>
      <div className={styles.header}>
        <div className={styles.container}>
          <input
            type="text"
            placeholder="Enter the task"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline"
            name="deadline"
            value={deadLine}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTaskOnClick}>Add Task</button>
      </div>
      <div className={styles.list}>
        {todoList.map((obj) => {
          return <ToDoTask key={obj.id} {...obj} />;
        })}
      </div>
    </div>
  );
};

export default App;
