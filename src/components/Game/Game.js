// useState: tic tac toe
// http://localhost:3000/isolated/final/04.js

import * as React from 'react';
import { Board } from '../Board/Board';
import styles from './Game.module.css';

export function Game() {
  return (
    <div className={styles.game +" "+ styles["totally-centered"]}>
      <div className={styles["game-board"]}>
        <Board />
      </div>
    </div>
  )
}
