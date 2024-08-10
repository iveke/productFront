import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { LANG_DEFAULT } from './constant.ts';
import { LANG } from '../../lang/index.js';


i18n.use(initReactI18next).init({
    resourse: LANG,
    fallbacking: LANG_DEFAULT,
    interpolation: {
        escapeValue: false
    }
});

export {i18n};