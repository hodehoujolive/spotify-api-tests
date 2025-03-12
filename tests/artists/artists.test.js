const pactum = require('pactum');
const config = require('../../config/config');

describe('Spotify Artists API Tests', () => {
  it('should fetch an artist by ID', async () => {
    const artistId = '4Z8W4fKeB5YxbusRsdQVPb';  // Example artist ID
    await pactum.spec()
      .get(`https://api.spotify.com/v1/artists/${artistId}`)
      .withHeaders('Authorization', `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`)
      .expectStatus(200)
      .expectBodyContains('name')
      .expectBodyContains('genres');
  });
});