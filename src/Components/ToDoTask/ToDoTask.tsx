import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeTask, setDone, Task } from '../../redux/tasksSlice';
import styles from './ToDoTask.module.scss';
const ToDoTask: FC<Task> = ({ task, deadLine, id }) => {
  const dispatch = useDispatch();
  const onClickRemove = () => {
    dispatch(removeTask(id));
  };
  const setDoneOnClick = (): void => {
    dispatch(setDone(id));
  };
  const todoList = useSelector((state: RootState) => state.tasks);
  useEffect(() => {
    const taskList = JSON.stringify(todoList);
    localStorage.setItem('tasks', taskList);
  }, [todoList]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox}>
        <input id={`task-${id}`} type="checkbox" onClick={setDoneOnClick} />
        <label htmlFor={`task-${id}`}>
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
      </div>
      <div className={styles.list}>
        <li>
          <span>{task}</span>
          <span>{`Дней осталось : ${deadLine}`}</span>
        </li>
      </div>
      <div className={styles.delete}>
        <svg
          onClick={onClickRemove}
          fill="#000000"
          height="800px"
          width="800px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 489.425 489.425">
          <g>
            <g>
              <path
                d="M122.825,394.663c17.8,19.4,43.2,30.6,69.5,30.6h216.9c44.2,0,80.2-36,80.2-80.2v-200.7c0-44.2-36-80.2-80.2-80.2h-216.9
			c-26.4,0-51.7,11.1-69.5,30.6l-111.8,121.7c-14.7,16.1-14.7,40.3,0,56.4L122.825,394.663z M29.125,233.063l111.8-121.8
			c13.2-14.4,32-22.6,51.5-22.6h216.9c30.7,0,55.7,25,55.7,55.7v200.6c0,30.7-25,55.7-55.7,55.7h-217c-19.5,0-38.3-8.2-51.5-22.6
			l-111.7-121.8C23.025,249.663,23.025,239.663,29.125,233.063z"
              />
              <path
                d="M225.425,309.763c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l47.8-47.8l47.8,47.8c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6
			c4.8-4.8,4.8-12.5,0-17.3l-47.9-47.8l47.8-47.8c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-47.8,47.8l-47.8-47.8
			c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l47.8,47.8l-47.8,47.8C220.725,297.263,220.725,304.962,225.425,309.763z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ToDoTask;
