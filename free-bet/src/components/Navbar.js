import React from "react";
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate();

  return(<div className="navbar">
    <div className="site-logo"
      onClick={() => navigate("/")}
    >Free<b>Bet</b></div>
    <button class="bet-button slip" onClick={() => navigate("/slip")}>Slip</button>
  </div>)
}