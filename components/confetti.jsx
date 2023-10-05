import React, { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 9999,
};

export default function Confetti() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        angle: 70,
        origin: { x: 0, y: 1 },
        particleCount: Math.floor(650 * particleRatio),
      });
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        angle: 110,
        origin: { x: 1, y: 1 },
        particleCount: Math.floor(650 * particleRatio),
      });
  }, []);

  // const fire = useCallback(() => {}, [makeShot]);

  useEffect(() => {
    // if the date is greater or equal to 2023-10-06T00:00:00.000Z
    // then fire confetti
    // const date = new Date();
    // const currentDate = date.toISOString();
    // const eventDate = '2023-10-05T00:00:00.000Z';
    // get fired once from session storage
    if (sessionStorage.getItem('fired')) return;
      setTimeout(function () {
        makeShot(0.25, {
          spread: 60,
          startVelocity: 80,
          decay: 0.9,
          ticks: 450,
          gravity: 0.7,
        });
      }, 1000);
    sessionStorage.setItem('fired', true);
  }, [makeShot]);

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
