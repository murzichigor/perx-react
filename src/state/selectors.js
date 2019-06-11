import { createSelector } from 'reselect';
import { reposSelectors } from './repos';
import { orgsSelectors } from './orgs';

/**
 * Returns true if one of state domains is loading
 */
// eslint-disable-next-line import/prefer-default-export
export const combinedLoading = createSelector(
  [
    reposSelectors.isLoading,
    orgsSelectors.isLoading,
  ],
  (reposLoading, orgsLoading) => reposLoading || orgsLoading,
);
