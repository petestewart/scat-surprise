import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBirdsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/birbs.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const createBird = (newBird) => axios.post(`${baseUrl}/birbs.json`, newBird);

const updateBird = (birdId, updatedBird) => axios.put(`${baseUrl}/birbs/${birdId}.json`, updatedBird);

const getBird = (birdId) => axios.get(`${baseUrl}/birbs/${birdId}.json`);

const deleteBird = (birdId) => axios.delete(`${baseUrl}/birbs/${birdId}.json`);

export default {
  getBirdsByUid, getBird, createBird, deleteBird, updateBird,
};
