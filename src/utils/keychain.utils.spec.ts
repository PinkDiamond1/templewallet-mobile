import { biometryKeychainOptions, getKeychainOptions } from './keychain.utils';

const mockBiometryKeychainOptions = {
  service: 'com.madfish.temple-wallet/biometry-protected-app-password',
  accessControl: 'BiometryCurrentSet',
  authenticationType: 'AuthenticationWithBiometrics',
  accessible: 'AccessibleWhenPasscodeSetThisDeviceOnly'
};

describe('getKeychainOptions', () => {
  it('should return object if we passing non-empty string', () => {
    expect(getKeychainOptions('test')).toEqual({
      service: 'com.madfish.temple-wallet/test',
      accessible: mockBiometryKeychainOptions.accessible
    });
  });

  it('should return object if we passing empty string', () => {
    expect(getKeychainOptions('')).toEqual({
      service: 'com.madfish.temple-wallet/',
      accessible: mockBiometryKeychainOptions.accessible
    });
  });
});

describe('biometryKeychainOptions', () => {
  it('should return keychain options object with hardcoded password storage key', () => {
    expect(biometryKeychainOptions).toEqual(mockBiometryKeychainOptions);
  });
});
