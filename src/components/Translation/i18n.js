import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Es from '../../portfolioData/es.json';
import En from '../../portfolioData/en.json';

i18n.use(initReactI18next).init({
    fallbackLng: 'es',
    lng: 'es',
    resources: {
        en:{
            translations: En
        },
        es: {
            translations: Es
        } 
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'es'];

export default i18n;