import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Cat from './components/Cat';
import { NAP, EAT, PLAY, actionEat, actionPlay, actionNap } from './actions';
import ActionButton from './components/ActionButton';

function App() {
  const { activity } = useSelector((state) => state.activity);
  const dispatch = useDispatch();
  const handleClick = (action) => {
    if (action === NAP) {
      dispatch(actionNap());
    } else if (action === EAT) {
      dispatch(actionEat());
    } else {
      dispatch(actionPlay());
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Cat activity={activity} />
        {[NAP, EAT, PLAY].map((each) => (
          <ActionButton tag={each} handleClick={() => handleClick(each)} />
        ))}
      </header>
    </div>
  );
}

export default App;
