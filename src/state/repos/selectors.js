import { createSelector } from 'reselect';
import { mainCollectionName, stateDomainName } from './vars';

export const getAllReposSel = state =>
  state[stateDomainName][mainCollectionName];

export const getReposOrder = state => state[stateDomainName].order;

export const getCurrentReposSel = createSelector(
  [getAllReposSel, getReposOrder],
  (repos, ids) => ids.map(id => repos[id]),
);

export const isLoading = state => state[stateDomainName].loading;

export const getNextPage = state => state[stateDomainName].nextPage;
