import api from './apiSetup';

const fetchOrgs = (userName, page) =>
  api.get(`users/${userName}/orgs`, {
    params: {
      page,
    },
  });

export default fetchOrgs;
