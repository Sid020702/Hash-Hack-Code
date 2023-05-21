import './App.css';
import AllRoutes from './AllRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllfestivals } from './actions/festivals';
function App() {
  const dispatch = useDispatch()
  const date = new Date();
  const month = date.getMonth()
  const year = date.getFullYear()

  useEffect(() => {
    dispatch(fetchAllfestivals(month, year))
  })
  return (
    <div className='App'>
      <Router>
        <AllRoutes />
      </Router>
    </div>
  )
}
export default App;
