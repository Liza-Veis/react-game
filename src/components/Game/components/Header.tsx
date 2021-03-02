import React from 'react';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <header className="game__header">
      <button className="btn" onClick={handleClick} type="button">
        Surrender
      </button>
    </header>
  );
};

export default Header;
