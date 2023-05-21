import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Card from './components/Card';

const URL = 'https://api.coinstats.app/public/v1/coins';
const FIAT = 'USD';
const numberOfItems = '20';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    handleApi()
  }, [])

  const handleApi = async () => {
      await axios.get(`${URL}?skip=0&limit=${numberOfItems}&currency=${FIAT}`).then(result => {
        // console.log(result.data)
        setCoins(result.data.coins);
        }
      )
    }

  return (
    <>
      <div className='container'>
        <Card coins={coins} />
      </div>
    </>
  )
}

export default App
