/**
 * Detect language changes using custom hook.
 *
 * Hook will be initialized when app renders, and will be listening for changes until app closes.
 *
 * Returns variable which indicates whether localization has been configured.
 */

import { useState, useEffect } from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import { translations } from '_data';

export const useLocalization = () => {
  const [localizationLoaded, setLocalizationLoaded] = useState(false);

  useEffect(() => {
    i18n.translations = translations;
    i18n.fallbacks = true;
    i18n.defaultLocale = 'en';

    const handleLocalizationChange = () => {
      const locale = RNLocalize.getLocales()[0].languageCode;
      i18n.locale = locale;
    };

    /*
     * On iOS, app will restart when language is changed, and change event will not be called.
     * Due to that, we need to call it manually when app is launched.
     */
    handleLocalizationChange();

    setLocalizationLoaded(true);
    RNLocalize.addEventListener('change', handleLocalizationChange);

    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);

  return { localizationLoaded };
};
