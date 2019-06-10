import { stateDomainName, mainCollectionName } from './vars';

export const getAllReposSel = state => state[stateDomainName][mainCollectionName];

export const getReposOrder = state => state[stateDomainName].order;

export const getCurrentReposSel = state => state[stateDomainName].order
  .map(id => state[stateDomainName][mainCollectionName][id]);
