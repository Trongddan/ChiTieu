import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Bill from '../page/home/components/bill/bill'
import Chart from '../page/home/components/chart/chart'
import Menu from '../page/home/components/menu/menu'
import Setting from '../page/home/components/setting/setting'
import Home from '../page/home/Home'
import Login from '../page/login/login'
const AppRouter = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Login/>}></Route>
      <Route exact path='/home' element={<Home/>}>
          <Route exact path='chart' element={<Chart/>}/>
          <Route exact path='bill' element={<Bill/>}/>
          <Route exact path='menu' element={<Menu/>}/>
          <Route exact path='setting' element={<Setting/>}/>
      </Route>
    </Routes>
  )
}

export default AppRouter