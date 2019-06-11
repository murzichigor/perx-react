import { stateDomainName } from './vars';

// eslint-disable-next-line import/prefer-default-export
export const getErrorMessage = state => state[stateDomainName].error;
