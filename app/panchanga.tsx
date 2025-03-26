import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Sun, Moon } from 'lucide-react-native';

// Add this interface for type safety
interface PanchangData {
  location: string;
  date: string;
  sunrise: string;
  sunset: string;
  tithi: string;
  nakshatra: string;
  yoga: string;
  karana: string;
  secondKarana: string;
  paksha: string;
  weekday: string;
  amantaMonth: string;
  purnimantMonth: string;
  moonRashi: string;
  sunRashi: string;
  dayNumber: string;
  shakaSamvat: string;
  vikramSamvat: string;
}

export default function Panchanga() {
  const navigation = useNavigation();

  // This would come from your backend
  const panchangData: PanchangData = {
    location: "काठमाडौं, नेपाल",
    date: "सोमबार, चैत्र ११, २०८०",
    sunrise: "०६:०३",
    sunset: "१८:१७",
    tithi: "दशमी - ०५:२०, चैत्र १२ सम्म",
    nakshatra: "उत्तराषाढा - ०४:४२, चैत्र १२ सम्म",
    yoga: "परिघ - १७:०० सम्म",
    karana: "वणिज - १७:४२ सम्म",
    secondKarana: "विष्टि - ०५:२०, चैत्र १२ सम्म",
    paksha: "कृष्ण पक्ष",
    weekday: "सोमबार",
    amantaMonth: "फाल्गुन",
    purnimantMonth: "चैत्र",
    moonRashi: "धनु - १०:४० सम्म",
    sunRashi: "मीन",
    dayNumber: "११",
    shakaSamvat: "१९४६ कौलव",
    vikramSamvat: "२०८१ विकृत"
  };

  const InfoRow = ({ label, value }: { label: string, value: string }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#1A237E', '#311B92']} style={styles.container}>
      <Image
        source={{ uri: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/ace5ef5a97-362402b7868e2adb7acc.png' }}
        style={styles.backgroundImage}
      />
      <ScrollView style={styles.content}>
        <View style={styles.panchangContainer}>
          <View style={styles.headerCard}>
            <Text style={styles.locationText}>{panchangData.location}</Text>
            <Text style={styles.dateText}>{panchangData.date}</Text>
          </View>

          <View style={styles.sunCard}>
            <View style={styles.sunInfo}>
              <Sun size={24} color="#FF6F00" />
              <InfoRow label="सूर्योदय:" value={panchangData.sunrise} />
            </View>
            <View style={styles.sunInfo}>
              <Moon size={24} color="#FFB74D" />
              <InfoRow label="सूर्यास्त:" value={panchangData.sunset} />
            </View>
          </View>

          <View style={styles.mainCard}>
            <InfoRow label="तिथि:" value={panchangData.tithi} />
            <InfoRow label="नक्षत्र:" value={panchangData.nakshatra} />
            <InfoRow label="योग:" value={panchangData.yoga} />
          </View>

          <View style={styles.karanaCard}>
            <InfoRow label="करण:" value={panchangData.karana} />
            <InfoRow label="द्वितीय करण:" value={panchangData.secondKarana} />
          </View>

          <View style={styles.detailsCard}>
            <InfoRow label="पक्ष:" value={panchangData.paksha} />
            <InfoRow label="बार:" value={panchangData.weekday} />
            <InfoRow label="अमान्त महिना:" value={panchangData.amantaMonth} />
            <InfoRow label="पूर्णिमान्त महिना:" value={panchangData.purnimantMonth} />
          </View>

          <View style={styles.rashiCard}>
            <InfoRow label="चन्द्र राशि:" value={panchangData.moonRashi} />
            <InfoRow label="सूर्य राशि:" value={panchangData.sunRashi} />
          </View>

          <View style={styles.samvatCard}>
            <InfoRow label="प्रतिपदा/गते:" value={panchangData.dayNumber} />
            <InfoRow label="शक सम्वत्:" value={panchangData.shakaSamvat} />
            <InfoRow label="विक्रम सम्वत्:" value={panchangData.vikramSamvat} />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.05,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  panchangContainer: {
    gap: 16,
  },
  headerCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  locationText: {
    fontSize: 24,
    color: '#1A237E',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dateText: {
    fontSize: 18,
    color: '#311B92',
  },
  sunCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 4,
  },
  sunInfo: {
    alignItems: 'center',
    gap: 8,
  },
  mainCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    elevation: 4,
  },
  karanaCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    elevation: 4,
  },
  detailsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    elevation: 4,
  },
  rashiCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    elevation: 4,
  },
  samvatCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    color: '#1A237E',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#D32F2F',
    fontWeight: '500',
  },
});