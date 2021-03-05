import React from 'react';
import {
  BiUpArrow,
  BiDownArrow,
  BiLeftArrow,
  BiRightArrow,
} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const HotKeys: React.FC = () => {
  return (
    <div className="hot-keys">
      <NavLink className="btn btn--back" to="/">
        Back
      </NavLink>
      <ul className="hot-keys__list">
        <li className="hot-keys__item">
          <span>U</span>
          <span>Undo move</span>
        </li>
        <li className="hot-keys__item">
          <span>S</span>
          <span>Surrender</span>
        </li>
        <li className="hot-keys__item">
          <span>H</span>
          <span>Hide last move</span>
        </li>
        <li className="hot-keys__item">
          <span>M</span>
          <span>Hide possible moves</span>
        </li>
        <li className="hot-keys__item">
          <span>
            <BiUpArrow />
            <BiDownArrow />
          </span>
          <span>Set music volume</span>
        </li>
        <li className="hot-keys__item">
          <span>
            <BiLeftArrow />
            <BiRightArrow />
          </span>
          <span>Set sound volume</span>
        </li>
      </ul>
    </div>
  );
};

export default HotKeys;
