import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Moon, Calendar, Users, Star, Video, MessageSquare, Notebook as Robot } from 'lucide-react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.welcomeText}>Welcome, Sarah!</Text>
              <Text style={styles.locationText}>Kathmandu, 7:45 PM</Text>
            </View>
          </View>
        </View>

        {/* Kundali CTA */}
        <View style={styles.kundaliCta}>
          <Text style={styles.kundaliTitle}>Generate Your Kundali Now</Text>
          <Text style={styles.kundaliSubtitle}>
            Discover your celestial path with our detailed birth chart analysis
          </Text>
          <TouchableOpacity style={styles.kundaliButton}>
            <Text style={styles.kundaliButtonText}>Create Kundali</Text>
          </TouchableOpacity>
        </View>

        {/* Daily Rasifal */}
        <View style={styles.rasifal}>
          <View style={styles.rasifalHeader}>
            <Text style={styles.sectionTitle}>Daily Rasifal</Text>
            <TouchableOpacity style={styles.zodiacSelector}>
              <Text style={styles.zodiacText}>Aries</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.rasifalText}>
            Today brings positive energy for career growth. Focus on networking opportunities.
          </Text>
        </View>

        {/* Quick Access Grid */}
        <View style={styles.quickAccessGrid}>
          <TouchableOpacity 
            style={styles.quickAccessItem}
            onPress={() => router.push('/kundali-milan')}>
            <Users size={24} color="#f59e0b" />
            <Text style={styles.quickAccessText}>Kundali Milan</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.quickAccessItem}
            onPress={() => router.push('/panchanga')}>
            <Moon size={24} color="#f59e0b" />
            <Text style={styles.quickAccessText}>Panchanga</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.quickAccessItem}
            onPress={() => router.push('/patro')}>
            <Calendar size={24} color="#f59e0b" />
            <Text style={styles.quickAccessText}>Patro</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Panchanga */}
        <View style={styles.panchangaSection}>
          <Text style={styles.sectionTitle}>Today's Panchanga</Text>
          <View style={styles.panchangaGrid}>
            <View style={styles.panchangaItem}>
              <Text style={styles.panchangaLabel}>Tithi</Text>
              <Text style={styles.panchangaValue}>Shukla Paksha</Text>
            </View>
            <View style={styles.panchangaItem}>
              <Text style={styles.panchangaLabel}>Nakshatra</Text>
              <Text style={styles.panchangaValue}>Rohini</Text>
            </View>
          </View>
        </View>

        {/* Online Astrologers */}
        <View style={styles.astrologersSection}>
          <Text style={[styles.sectionTitle, styles.mb3]}>Online Astrologers</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.astrologersScroll}>
            <View style={styles.astrologerCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop' }}
                style={styles.astrologerAvatar}
              />
              <Text style={styles.astrologerName}>Guru Ji</Text>
              <Text style={styles.astrologerRating}>⭐ 4.9</Text>
            </View>
            <View style={styles.astrologerCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop' }}
                style={styles.astrologerAvatar}
              />
              <Text style={styles.astrologerName}>Pandit Ram</Text>
              <Text style={styles.astrologerRating}>⭐ 4.8</Text>
            </View>
            <View style={styles.astrologerCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop' }}
                style={styles.astrologerAvatar}
              />
              <Text style={styles.astrologerName}>Acharya Ji</Text>
              <Text style={styles.astrologerRating}>⭐ 4.7</Text>
            </View>
          </ScrollView>
        </View>

        {/* Spacer for floating buttons */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Floating Consultation Buttons */}
      <View style={styles.floatingButtonsContainer}>
        <TouchableOpacity style={styles.aiChatButton}>
          <Robot size={24} color="#7c3aed" />
        </TouchableOpacity>
        <View style={styles.consultationButtons}>
          <TouchableOpacity style={styles.videoCallButton}>
            <Video size={20} color="#fff" />
            <Text style={styles.buttonText}>Video Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatButton}>
            <MessageSquare size={20} color="#fff" />
            <Text style={styles.buttonText}>Chat Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1b4b',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  locationText: {
    color: '#9ca3af',
    fontSize: 12,
  },
  kundaliCta: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f59e0b',
    borderRadius: 16,
  },
  kundaliTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  kundaliSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 16,
  },
  kundaliButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignSelf: 'flex-start',
  },
  kundaliButtonText: {
    color: '#f59e0b',
    fontWeight: '600',
  },
  rasifal: {
    margin: 16,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
  },
  rasifalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  zodiacSelector: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  zodiacText: {
    color: '#fff',
    fontSize: 14,
  },
  rasifalText: {
    color: '#9ca3af',
    fontSize: 14,
    lineHeight: 20,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  quickAccessItem: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  quickAccessText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  panchangaSection: {
    padding: 16,
  },
  panchangaGrid: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    gap: 16,
  },
  panchangaItem: {
    flex: 1,
  },
  panchangaLabel: {
    color: '#9ca3af',
    fontSize: 12,
    marginBottom: 4,
  },
  panchangaValue: {
    color: '#fff',
    fontSize: 14,
  },
  astrologersSection: {
    padding: 16,
  },
  mb3: {
    marginBottom: 12,
  },
  astrologersScroll: {
    flexDirection: 'row',
  },
  astrologerCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginRight: 16,
    width: 120,
  },
  astrologerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 8,
  },
  astrologerName: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  astrologerRating: {
    color: '#f59e0b',
    fontSize: 12,
  },
  bottomSpacer: {
    height: 100,
  },
  floatingButtonsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  aiChatButton: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  consultationButtons: {
    gap: 8,
  },
  videoCallButton: {
    backgroundColor: '#f59e0b',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  chatButton: {
    backgroundColor: '#7c3aed',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});