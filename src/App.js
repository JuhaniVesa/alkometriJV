import './App.css';
import { useState } from 'react';

function App() {
  const [weight,setWeight] = useState()
  const [bottle,setBottle] = useState()
  const [time,setTime] = useState(1)
  const [gender,setGender] = useState('male')
  const [result,setResult] = useState(0)

  const calculate = () => {
    let litres = bottle * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let lgrams = grams - (burning * time)
    let drunk = 0
    if (gender === 'male') {
      drunk = lgrams / (weight * 0.7)
    } else {
      drunk = lgrams / (weight * 0.6)
    }
    setResult(drunk)
    console.log('Weight:', weight);
    console.log('Bottle:', bottle);
    console.log('Time:', time);
  }

  const numbers = new Array(24).fill(null).map((_,i) => i+1)

  return (
    <div id='container'>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input type='number' value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Bottles</label>
        <select value={bottle} onChange={e => setBottle(e.target.value)}>
          {
            numbers.map(bottle =>(
              <option value={bottle}>{bottle} pulloa</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Time</label>
        <select value={time} onChange={e => setTime(e.target.value)}>
          {
            numbers.map(time =>(
              <option value={time}>{time} tuntia</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div id='result'>
        <output>{result.toFixed(2)}</output>
      </div>
      <div>
        <button type='button' onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
}

export default App;
