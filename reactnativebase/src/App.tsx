import React from 'react';
import {CustomText} from './components/CustomText';
import {useTranslation} from 'react-i18next';

import {initTranslationFramework} from './utils/InitTranslationFramework';

initTranslationFramework();

const styles = {};

const App = () => {
  const {t} = useTranslation();

  return (
    <>
      <CustomText style={{marginTop: 80}}>{t('test')}</CustomText>
    </>
  );
};

export default App;
