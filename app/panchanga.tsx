import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Sun, Moon, Star, Calendar, ChevronDown } from 'lucide-react-native';

export default function Panchanga() {
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
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}>
            <ArrowLeft size={24} color="#FFD700" />
          </TouchableOpacity>
          <Text style={styles.title}>
            <Star size={24} color="#FFD700" style={styles.titleIcon} />
            Nepali Panchang
          </Text>
          <View style={{ width: 32 }} />
        </View>

        {/* Date Selector */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.dateSelector}>
            <View style={styles.dateSelectorContent}>
              <Calendar size={20} color="#FFD700" />
              <Text style={styles.goldText}>Choose Date</Text>
              <ChevronDown size={20} color="#FFD700" style={styles.chevron} />
            </View>
          </View>
          <Text style={styles.dateRangeText}>Data available from 2018 AD</Text>
        </TouchableOpacity>

        {/* Current Date Display */}
        <View style={styles.card}>
          <Text style={styles.nepaliDate}>वि.सं२०८१ चैत्र २ शनिवार</Text>
          <Text style={styles.englishDate}>ईसवी 2025 Mar 15, Saturday</Text>
        </View>

        {/* Sun Moon Timings */}
        <View style={styles.card}>
          <View style={styles.timingsGrid}>
            <View style={styles.timingItem}>
              <Sun size={20} color="#FFD700" />
              <Text style={styles.timingText}>सूर्य: 6:16 | 18:12</Text>
            </View>
            <View style={styles.timingItem}>
              <Moon size={20} color="#FFD700" />
              <Text style={styles.timingText}>चन्द्र: 7:18 PM | 6:43 AM</Text>
            </View>
          </View>
        </View>

        {/* Tithi & Nakshatra */}
        <View style={styles.card}>
          <Text style={styles.goldText}>प्रतिपदा upto 14:51:21</Text>
          <View style={styles.divider} />
          <Text style={styles.goldText}>उत्तरफाल्गुनी upto 9:11:16</Text>
        </View>

        {/* Additional Details Grid */}
        <View style={styles.detailsGrid}>
          <View style={styles.gridItem}>
            <View style={styles.detailRow}>
              <Moon size={20} color="#FFD700" />
              <Text style={styles.whiteText}>पक्ष: चैत्र कृष्ण पक्ष</Text>
            </View>
          </View>
          <View style={styles.gridItem}>
            <View style={styles.detailRow}>
              <Star size={20} color="#FFD700" />
              <Text style={styles.whiteText}>चन्द्र राशि: कन्या</Text>
            </View>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.whiteText}>दिनमान: 11hr 56min</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.whiteText}>ऋतु: वसन्त</Text>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    marginRight: 8,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  dateSelector: {
    marginBottom: 8,
  },
  dateSelectorContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldText: {
    color: '#FFD700',
    marginLeft: 8,
  },
  chevron: {
    marginLeft: 'auto',
  },
  dateRangeText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
  },
  nepaliDate: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  englishDate: {
    color: '#9ca3af',
  },
  timingsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timingText: {
    color: '#fff',
  },
  divider: {
    height: 16,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  gridItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    width: '47%',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  whiteText: {
    color: '#fff',
  },
});