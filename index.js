import 'expo-router/entry';

try {
  require('./app/_layout');
} catch (e) {
  console.warn('Error loading app:', e);
}
