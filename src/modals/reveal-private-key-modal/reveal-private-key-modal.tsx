import { RouteProp, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';

import { AccountFormDropdown } from '../../components/account-dropdown/account-form-dropdown';
import { Disclaimer } from '../../components/disclaimer/disclaimer';
import { Divider } from '../../components/divider/divider';
import { Label } from '../../components/label/label';
import { ModalStatusBar } from '../../components/modal-status-bar/modal-status-bar';
import { ScreenContainer } from '../../components/screen-container/screen-container';
import { emptyFn } from '../../config/general';
import { ModalsEnum, ModalsParamList } from '../../navigator/enums/modals.enum';
import { useAccountsListSelector } from '../../store/wallet/wallet-selectors';
import { formatSize } from '../../styles/format-size';
import { usePageAnalytic } from '../../utils/analytics/use-analytics.hook';
import {
  RevealPrivateKeyModalFormValues,
  revealPrivateKeyModalValidationSchema
} from './reveal-private-key-modal.form';
import { RevealPrivateKeyView } from './reveal-private-key-view/reveal-private-key-view';

export const RevealPrivateKeyModal = () => {
  const account = useRoute<RouteProp<ModalsParamList, ModalsEnum.RevealPrivateKey>>().params.account;

  const accounts = useAccountsListSelector();

  const RevealPrivateKeyModalInitialValues: RevealPrivateKeyModalFormValues = { account };

  usePageAnalytic(ModalsEnum.RevealPrivateKey);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={RevealPrivateKeyModalInitialValues}
      validationSchema={revealPrivateKeyModalValidationSchema}
      onSubmit={emptyFn}
    >
      {({ values }) => (
        <ScreenContainer>
          <ModalStatusBar />
          <Label
            label="Account"
            description="If you want to reveal a private key from another account - you should select it in the top-right dropdown."
          />
          <AccountFormDropdown name="account" list={accounts} />
          <Label label="Private Key" description="Current account key. Keep it in secret." />
          <RevealPrivateKeyView publicKeyHash={values.account.publicKeyHash} />
          <Divider size={formatSize(16)} />
          <Disclaimer
            title="Attention!"
            texts={['DO NOT share this set of chars with anyone!', 'It can be used to steal your current account.']}
          />
        </ScreenContainer>
      )}
    </Formik>
  );
};
