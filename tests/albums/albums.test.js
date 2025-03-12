const pactum = require('pactum');
const config = require('../../config/config');

describe('Spotify Albums API Tests', () => {
  it('should fetch an album by ID', async () => {
    const albumId = '4aawyAB9vmqN3uQ7FjRGTy';  // Example album ID
    await pactum.spec()
      .get(`https://api.spotify.com/v1/albums/${albumId}`)
      .withHeaders('Authorization', `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`)
      .expectStatus(200)
      .expectBodyContains('name')
      .expectBodyContains('artists');
  });
});