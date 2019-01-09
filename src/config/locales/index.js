
import { AsyncStorage } from 'react-native';

import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import locale from 'react-native-locale-detector';

import en from './en-US.json';
import pt from './pt-BR.json';

const STORAGE_KEY = '@APP:languageCode'
 
const languageDetector = {
    init: Function.prototype,
    type: 'languageDetector',
    async: true,
    detect: async (callback) => {
        const saveDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
        const lng = (saveDataJSON) ? saveDataJSON: null;
        const selectLanguage = lng || locale;
        callback(selectLanguage);
    },
    cacheUserLanguage: () => {}
};

i18n.use(languageDetector).use(reactI18nextModule).init({
    fallbackLng: 'pt',
    resources: { pt, en },
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    
    interpolation: {
        escapeValue: false
    }
})

export default i18n
