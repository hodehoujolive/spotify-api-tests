const pactum = require('pactum');
const config = require('../config/config');
const axios = require('axios');

before(async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', 
    `grant_type=client_credentials&client_id=${config.clientId}&client_secret=${config.clientSecret}`, 
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  config.accessToken = response.data.access_token;  // Store the access token for later use
});