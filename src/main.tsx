import { createRoot } from 'react-dom/client';
import './index.css';
import { students } from './data.ts';

const markup = (
  <ul>
    {students.map(student => {
      return (
        <li key={student.id}>
          <p>Ім'я студента: {student.name}</p>
          <p>Вік студента: {student.age}</p>
          <p>Курс навчання: {student.course}</p>
          <img src={student.avatar} alt="avatar" />
          {student.isOnline ? <p>Online</p> : <p>Offline</p>}
        </li>
      );
    })}
  </ul>
);

createRoot(document.getElementById('root') as HTMLDivElement).render(markup);
