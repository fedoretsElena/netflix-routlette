import React from 'react';
import { Link } from "react-router-dom";

import './Logo.scss';

const Logo = () => {
  return <div className="logo f-size-18"> <Link to="/"><b>netflix</b>roulette</Link></div>
}

export default Logo;