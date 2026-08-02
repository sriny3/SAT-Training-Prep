import { useContext } from 'react';
import { GameificationContext } from '../context/GameificationContext';

export const useGameification = () => {
  const context = useContext(GameificationContext);
  if (!context) {
    throw new Error('useGameification must be used within a GameificationProvider');
  }
  return context;
};
