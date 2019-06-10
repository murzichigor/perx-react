import api from './apiSetup';

const fetchOrgs = userName => api.get(`users/${userName}/orgs`);

export default fetchOrgs;
