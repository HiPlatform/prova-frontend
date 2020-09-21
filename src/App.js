import React, { useState, useEffect } from 'react';

import TreeList from './components/TreeList/TreeList'

import api from './services/api'

import './App.scss';
import 'antd/dist/antd.css';

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get('/data')
      .then((res) => {
        setData(Object.values(res.data))
      })
      .catch(err => console.log('Error -->', err))
  }, [])

  return (
    <div className="app">
      <TreeList data={data} first />
    </div>
  )
}

export default App;
