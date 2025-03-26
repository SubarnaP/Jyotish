import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Star, Calendar, Moon, Sun } from 'lucide-react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Homepage() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      {/* Mandala Background Overlay */}
      <Image
        source={{ uri: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/ace5ef5a97-362402b7868e2adb7acc.png' }}
        style={styles.backgroundImage}
      />

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            <Star size={24} color="#FFD700" style={styles.titleIcon} />
            Jyotish App
          </Text>
        </View>

        {/* Navigation Buttons */}
        <View style={styles.buttonGrid}>
          <TouchableOpacity 
            style={styles.navButton}
            onPress={() => router.push('/panchanga')}>
            <Star size={24} color="#FFD700" />
            <Text style={styles.buttonText}>पञ्चाङ्ग</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.navButton}
            onPress={() => router.push('/calendar')}>
            <Calendar size={24} color="#FFD700" />
            <Text style={styles.buttonText}>पात्रो</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.navButton}
            onPress={() => router.push('/horoscope')}>
            <Moon size={24} color="#FFD700" />
            <Text style={styles.buttonText}>राशिफल</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.navButton}
            onPress={() => router.push('/muhurta')}>
            <Sun size={24} color="#FFD700" />
            <Text style={styles.buttonText}>मुहूर्त</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A237E',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginVertical: 24,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    marginRight: 8,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
    padding: 16,
  },
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    width: '45%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
  },
});