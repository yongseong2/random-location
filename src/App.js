import './App.css';
import { useState } from 'react';
import { sample } from 'lodash';

function App() {
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState([
    "정릉",
    "서울대입구역",
    "왕십리역",
    "방이역",
    "양재역",
  ]);
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState(false);

  function addLocations(e) {
    e.preventDefault();
    if (location === '') {
      alert('빈칸은 안돼요');
      return;
    }
    const copyLocations = [...locations];
    copyLocations.push(location);
    setLocations(copyLocations);
    setLocation('');
  }

  function inputChange(e) {
    const inputValue = e.target.value;
    setLocation(inputValue);
  }

  function choice() {
    const element = sample(locations, 1);
    setSelected(element);
    setShow(true);
  }

  function deleteLocation(idx) {
    const copyLocations = [...locations]
    copyLocations.splice(idx, 1)
    setLocations(copyLocations)
  }
  
  function backMain() {
    setShow(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        {show === false ? (
          <div>
            <h1>내일 어디서 만날까?</h1>
            <form onSubmit={addLocations}>
              <input
                className='input'
                value={location}
                onChange={inputChange}
                type="text"
              />
              <button className='btn btn-secondary' type='submit'>추가하기</button>
            </form>
            {locations.map((location, idx) => {
              return (
                <div key={idx} className='d-flex'>
                  <div className='box'>
                    {location}
                  </div>
                  <button onClick={(idx) => deleteLocation(idx)} className='btn btn-danger'>삭제</button>
                </div>
              );
            })}
            <button className='btn btn-primary' onClick={choice}>
              추첨
            </button>
          </div>
        ) : null}
        {show ?
          <>
            <p>제발 샤로수길</p>
            <h1>"{selected}"</h1>
            <button onClick={backMain} className='btn btn-primary'>다시하기</button>
          </>
          : null}
      </header>
    </div>
  );
}

export default App;
