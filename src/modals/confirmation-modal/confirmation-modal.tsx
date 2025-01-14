import { RouteProp, useRoute } from '@react-navigation/core';
import React, { FC } from 'react';

import { DataPlaceholder } from '../../components/data-placeholder/data-placeholder';
import { ModalStatusBar } from '../../components/modal-status-bar/modal-status-bar';
import { ScreenContainer } from '../../components/screen-container/screen-container';
import { ConfirmationTypeEnum } from '../../interfaces/confirm-payload/confirmation-type.enum';
import { ModalsEnum, ModalsParamList } from '../../navigator/enums/modals.enum';
import { usePageAnalytic } from '../../utils/analytics/use-analytics.hook';
import { DAppOperationsConfirmation } from './d-app-operations-confirmation/d-app-operations-confirmation';
import { InternalOperationsConfirmation } from './internal-operations-confirmation/internal-operations-confirmation';

export const ConfirmationModal: FC = () => (
  <>
    <ModalStatusBar />
    <ConfirmationModalContent />
  </>
);

const ConfirmationModalContent: FC = () => {
  const params = useRoute<RouteProp<ModalsParamList, ModalsEnum.Confirmation>>().params;

  usePageAnalytic(ModalsEnum.AddToken);

  switch (params.type) {
    case ConfirmationTypeEnum.InternalOperations:
      return <InternalOperationsConfirmation opParams={params.opParams} />;
    case ConfirmationTypeEnum.DAppOperations:
      return <DAppOperationsConfirmation loading={params.loading} message={params.message} />;
    default:
      return (
        <ScreenContainer isFullScreenMode={true}>
          <DataPlaceholder text="This kind of operations isn't supported yet." />
        </ScreenContainer>
      );
  }
};
