import api from './apiSetup';

const fetchRepos = (userName, page) =>
  api.get(`users/${userName}/repos`, {
    params: {
      page,
    },
  });

export default fetchRepos;
