import { createSelector } from 'reselect';
import { mainCollectionName, stateDomainName } from './vars';

export const getAllOrgsSel = state => state[stateDomainName][mainCollectionName];

export const getOrgsOrder = state => state[stateDomainName].order;

export const getCurrentOrgsSel = createSelector(
  [getAllOrgsSel, getOrgsOrder],
  (orgs, ids) => ids.map(id => orgs[id]),
);

export const isLoading = state => state[stateDomainName].loading;
export const isLoadingMore = state => state[stateDomainName].loadingMore;

export const getNextPage = state => state[stateDomainName].nextPage;
