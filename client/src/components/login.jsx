// This file is currently just a skeleton for a login page.
// It is not being utilized at the moment.
// We would like to eventually implement react router and a third
// party login through the users Google or Facebook account


import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <div className="jumbotron">
      <img src="./images/BattleBreadLogo.png" height="75px" className="logoLogin" align="middle"/>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="What is your name, toaster in chief"/>
          <small id="emailHelp" className="form-text text-muted">Caution. The game is highly addictive</small>
        </div>


        <div className="btn-group btn-group-lg" role="group">
            <button type="button" className="btn btn-secondary"><Link className='btn' to='/game'>Toast a machine</Link></button>
            <button type="button" className="btn btn-secondary"><Link className='btn' to='/chat'>Toast a human</Link></button>
        </div>
      </form>
    </div>


  </div>

);

export default Login;