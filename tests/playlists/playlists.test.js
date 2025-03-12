const pactum = require('pactum');
const config = require('../../config/config');

describe('Spotify Playlists API Tests', () => {
  it('should fetch a playlist by ID', async () => {
    const playlistId = '3cEYpjA9oz9GiPac4AsH4n';  // Example playlist ID
    await pactum.spec()
      .get(`https://api.spotify.com/v1/playlists/${playlistId}`)
      .withHeaders('Authorization', `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`)
      .expectStatus(200)
      .expectBodyContains('name')
      .expectBodyContains('tracks');
  });
});