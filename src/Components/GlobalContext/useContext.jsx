import { useState, useContext } from 'react';
import { GlobalContext } from './context';

export function GlobalProvider() {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState('bolos');

  return { showModal, setShowModal, active, setActive }
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}