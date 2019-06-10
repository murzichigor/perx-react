import api from './apiSetup';

const fetchRepos = userName => api.get(`users/${userName}/repos`);

export default fetchRepos;
