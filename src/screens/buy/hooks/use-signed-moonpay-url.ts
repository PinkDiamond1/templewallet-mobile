import { useEffect, useMemo, useState } from 'react';

import { templeWalletApi } from '../../../api.service';
import { useSelectedAccountSelector } from '../../../store/wallet/wallet-selectors';

const MOONPAY_DOMAIN = 'https://buy.moonpay.com';
const API_KEY = 'pk_live_PrSDks3YtrreqFifd0BsIji7xPXjSGx';
const CURRENCY_CODE = 'xtz';

export const useSignedMoonPayUrl = () => {
  const selectedAccount = useSelectedAccountSelector();
  const defaultUrl = `${MOONPAY_DOMAIN}?apiKey=${API_KEY}&currencyCode=${CURRENCY_CODE}&colorCode=%23ed8936`;

  const [signedMoonPayUrl, setSignedUrl] = useState('');
  const [isMoonPayError, setIsError] = useState(false);

  const isMoonPayDisabled = useMemo(
    () => signedMoonPayUrl === '' || isMoonPayError,
    [signedMoonPayUrl, isMoonPayError]
  );

  const url = `${defaultUrl}&walletAddress=${selectedAccount.publicKeyHash}`;

  useEffect(() => {
    (async () => {
      try {
        const result = await templeWalletApi.get<{ signedUrl: string }>('/moonpay-sign', { params: { url } });
        setSignedUrl(result.data.signedUrl);
      } catch {
        setIsError(true);
      }
    })();
  }, [url]);

  return { signedMoonPayUrl, isMoonPayError, isMoonPayDisabled };
};
