const express = require('express');
const axios = require('axios');
const mockBadBunnySongs = require('../mockSongs');
const router = express.Router();

let spotifyAccessToken = null;
let tokenExpiryTime = null;

// Use real Spotify if true, mock data if false (change when Spotify is back)
const USE_REAL_SPOTIFY = process.env.USE_REAL_SPOTIFY === 'true';

async function getSpotifyAccessToken() {
  try {
    // Check if token is still valid
    if (spotifyAccessToken && tokenExpiryTime && Date.now() < tokenExpiryTime) {
      return spotifyAccessToken;
    }

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    spotifyAccessToken = response.data.access_token;
    tokenExpiryTime = Date.now() + (response.data.expires_in * 1000);
    return spotifyAccessToken;
  } catch (error) {
    console.error('Error getting Spotify access token:', error.message);
    throw error;
  }
}

// Search for songs - uses mock data or real Spotify
router.get('/search', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter required' });
    }

    // Use mock data if Spotify is down
    if (!USE_REAL_SPOTIFY) {
      const searchQuery = query.toLowerCase();
      const songs = mockBadBunnySongs.filter(song => 
        song.name.toLowerCase().includes(searchQuery) ||
        song.artist.toLowerCase().includes(searchQuery) ||
        song.album.toLowerCase().includes(searchQuery)
      );
      return res.json({ songs: songs.slice(0, 20) });
    }

    // Use real Spotify API
    const token = await getSpotifyAccessToken();
    const response = await axios.get('https://api.spotify.com/v1/search', {
      params: {
        q: query,
        type: 'track',
        limit: 20,
        market: 'US'
      },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const songs = response.data.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0]?.name || 'Unknown',
      album: track.album.name,
      albumCover: track.album.images[0]?.url || '',
      uri: track.uri,
      releaseDate: track.album.release_date
    }));

    res.json({ songs });
  } catch (error) {
    console.error('Error searching Spotify:', error.message);
    // Fallback to mock data if Spotify API fails
    const query = req.query.q.toLowerCase();
    const songs = mockBadBunnySongs.filter(song => 
      song.name.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
    );
    res.json({ songs: songs.slice(0, 20) });
  }
});

// Get Bad Bunny songs (preloading common setlist songs)
router.get('/bad-bunny-songs', async (req, res) => {
  try {
    // Use mock data if Spotify is down
    if (!USE_REAL_SPOTIFY) {
      return res.json({ songs: mockBadBunnySongs });
    }

    const token = await getSpotifyAccessToken();
    
    // Get Bad Bunny's most popular tracks
    const response = await axios.get('https://api.spotify.com/v1/artists/4q3ewBCX7kk7QVsU06iWkB/top-tracks', {
      params: {
        market: 'US'
      },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const songs = response.data.tracks.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0]?.name || 'Unknown',
      album: track.album.name,
      albumCover: track.album.images[0]?.url || '',
      uri: track.uri,
      releaseDate: track.album.release_date
    }));

    res.json({ songs });
  } catch (error) {
    console.error('Error fetching Bad Bunny songs:', error.message);
    // Fallback to mock data
    res.json({ songs: mockBadBunnySongs });
  }
});

module.exports = router;
