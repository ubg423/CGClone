// CrazyGames integration. The SDK controls actual ad availability.
window.WAVE_FLIP_CONFIG = {
  adsEnabled: true,
  // 'auto': evenly paced frames on any screen (every refresh up to ~100 Hz, every 2nd/3rd above).
  // A number caps the frame rate instead; 0 draws on every refresh.
  fpsCap: 'auto',
  // Keep the leaderboard hidden until it is ready for launch.
  leaderboardEnabled: false,
  // Paste the 32-byte base64 Encryption Key from the Developer Portal when enabled.
  leaderboardKey: ''
};
