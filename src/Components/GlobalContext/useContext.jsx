import { useState, useContext } from 'react';
import { GlobalContext } from './context';

export function GlobalProvider() {
  const [showModal, setShowModal] = useState(false);

  return { showModal, setShowModal }
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}