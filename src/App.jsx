
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Register from './components/register/Register'

import './index.css'

function App() {


  return (
    <>
<div className='container'>

<a href='/register' > register</a>
<a href='/login' > login</a>
<BrowserRouter>
<Routes>

<Route path='/register' element={<Register/>
}
/>
<Route path='/Login' element={<Login/>
}
/>


</Routes>

</BrowserRouter>
</div>


    </>
  )
}

export default App
