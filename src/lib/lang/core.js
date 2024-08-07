import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import LANG from '../../lang/index.js';
import { LANG_DEFAULT } from './constant.ts';


i18n.use(initReactI18next).init({
    resourse: LANG,
    fallbacking: LANG_DEFAULT,
    interpolation: {
        escapeValue: false
    }
});

export {i18n};