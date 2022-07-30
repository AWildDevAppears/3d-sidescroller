import { useState } from "react";

export enum KeyBindings {
  UP = "w",
  DOWN = "s",
  LEFT = "a",
  RIGHT = "d",
}

export enum Directions {
  UP,
  DOWN,
  LEFT,
  RIGHT,
  IDLE,
}

export const useKeyboardInput = () => {
      const [currentDirection, setCurrentDirection] = useState(Directions.IDLE);

  document.onkeydown = (evt) => {
    const currentKey = evt.key.toLowerCase();

    switch (currentKey) {
      case KeyBindings.UP:
        setCurrentDirection(Directions.UP);
        return;
      case KeyBindings.LEFT:
        setCurrentDirection(Directions.LEFT);
        return;
      case KeyBindings.DOWN:
        setCurrentDirection(Directions.DOWN);
        return;
      case KeyBindings.RIGHT:
        setCurrentDirection(Directions.RIGHT);
        return;
      default:
        return;
    }
  };

  document.onkeyup = (evt) => {
    const currentKey = evt.key.toLowerCase();

    switch (currentKey) {
      case KeyBindings.UP:
      case KeyBindings.LEFT:
      case KeyBindings.DOWN:
      case KeyBindings.RIGHT:
        setCurrentDirection(Directions.IDLE);
        return;
      default:
        return;
    }
  };

  return currentDirection;
}