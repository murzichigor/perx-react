import { createSelector } from 'reselect';
import { mainCollectionName, stateDomainName } from './vars';

export const getAllOrgsSel = state => state[stateDomainName][mainCollectionName];

export const getOrgsOrder = state => state[stateDomainName].order;

export const getCurrentOrgsSel = createSelector(
  [getAllOrgsSel, getOrgsOrder],
  (orgs, ids) => ids.map(id => orgs[id]),
);
