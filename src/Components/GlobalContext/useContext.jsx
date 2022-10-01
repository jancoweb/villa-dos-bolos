import { useState, useContext } from 'react';
import { GlobalContext } from './context';

export function GlobalProvider() {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState('bolos');
  const [itemPage, setItemPage] = useState([]);

  return { showModal, setShowModal, active, setActive, itemPage, setItemPage }
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}