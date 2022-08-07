import { useState } from "react";

export enum KeyBindings {
  LEFT = "a",
  RIGHT = "d",
  JUMP = " ",
}

const input = {
  left: false,
  right: false,
  jump: false,
  interact: false,
};

export const useKeyboardInput = () => {
  const [currentInput, setCurrentInput] = useState({ ...input });

  document.onkeydown = (evt) => {
    const currentKey = evt.key.toLowerCase();

    switch (currentKey) {
      case KeyBindings.LEFT:
        setCurrentInput({
          ...currentInput,
          left: true,
        });
        return;
      case KeyBindings.RIGHT:
        setCurrentInput({
          ...currentInput,
          right: true,
        });
        return;
      case KeyBindings.JUMP:
        setCurrentInput({
          ...currentInput,
          jump: true,
        });
        return;
      default:
        return;
    }
  };

  document.onkeyup = (evt) => {
    const currentKey = evt.key.toLowerCase();

    switch (currentKey) {
      case KeyBindings.LEFT:
        setCurrentInput({
          ...currentInput,
          left: false,
        });
        return;
      case KeyBindings.RIGHT:
        setCurrentInput({
          ...currentInput,
          right: false,
        });
        return;
      case KeyBindings.JUMP:
        setCurrentInput({
          ...currentInput,
          jump: false,
        });
        return;
      default:
        return;
    }
  };

  return currentInput;
};
