import React from 'react';
import ReactDOM from 'react-dom/client';

// import AddToDoButton from './AddToDo';
// import AddToDoForm from './AddToDoForm';
import Welcome from '../src/welcome';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* <AddToDoButton/> */}
      {/* <AddToDoForm/> */}
      <Welcome />
    </React.StrictMode>,
  )