// src/context/useLang.js
import { useContext } from 'react';
import { LanguageContext } from './languageContext';

export const useLang = () => useContext(LanguageContext);