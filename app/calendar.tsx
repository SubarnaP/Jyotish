import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function Calendar() {
  const router = useRouter();
  const [currentMonth, setCurrentMonth] = useState(0); // 0-11 for months
  const [currentYear, setCurrentYear] = useState(2081); // Starting Nepali year

  const nepaliMonths = ['बैशाख', 'जेठ', 'असार', 'श्रावण', 'भदौ', 'असोज', 
                       'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फाल्गुन', 'चैत्र'];
  
  const englishMonths = ['Apr-May', 'May-Jun', 'Jun-Jul', 'Jul-Aug', 'Aug-Sep', 
                         'Sep-Oct', 'Oct-Nov', 'Nov-Dec', 'Dec-Jan', 'Jan-Feb', 
                         'Feb-Mar', 'Mar-Apr'];

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const calendarData = {
    nepaliYear: currentYear.toString(),
    nepaliMonth: nepaliMonths[currentMonth],
    englishMonthYear: englishMonths[currentMonth] + ' ' + currentYear,
  };

  const weekDays = ['आ', 'सो', 'मं', 'बु', 'बि', 'शु', 'श'];

  // Calendar data for the month
  const daysData = [
    { np: '३१', en: '13' },
    { np: '', en: '' },
    { np: '', en: '' },
    { np: '', en: '' },
    { np: '', en: '' },
    { np: '१', en: '14' },
    { np: '२', en: '15' },
    // Add remaining days as needed
  ];

  type DayCellProps = {
    npDate: string;
    enDate: string;
    isWeekend?: boolean;
  };

  const DayCell: React.FC<DayCellProps> = ({ npDate, enDate, isWeekend = false }) => (
    <View style={styles.dayCell}>
      <Text style={[styles.npDate, isWeekend && styles.weekendText]}>
        {npDate}
      </Text>
      {enDate && <Text style={styles.enDate}>{enDate}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={handlePreviousMonth}>
              <Text style={styles.arrowText}>◄</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>
              {calendarData.nepaliYear} {calendarData.nepaliMonth}
            </Text>
            <TouchableOpacity onPress={handleNextMonth}>
              <Text style={styles.arrowText}>►</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subHeaderText}>
            {calendarData.englishMonthYear}
          </Text>
        </View>

        {/* Week day headers */}
        <View style={styles.weekDayRow}>
          {weekDays.map((day, i) => (
            <View key={i} style={styles.weekDayCell}>
              <Text style={[styles.weekDayText, i === 6 && styles.weekendText]}>
                {day}
              </Text>
            </View>
          ))}
        </View>

        {/* Calendar grid */}
        <View style={styles.calendarGrid}>
          {[0, 1, 2, 3, 4].map((week) => (
            <View key={`week-${week}`} style={styles.weekRow}>
              {[0, 1, 2, 3, 4, 5, 6].map((day) => {
                const index = week * 7 + day;
                const isWeekend = day === 6;
                return (
                  <DayCell
                    key={`day-${week}-${day}`}
                    npDate={daysData[index]?.np || ''}
                    enDate={daysData[index]?.en || ''}
                    isWeekend={isWeekend}
                  />
                );
              })}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E6E6E6',
    borderRadius: 4,
    overflow: 'hidden',
  },
  headerRow: {
    backgroundColor: '#E6E6E6',
    padding: 8,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 13,
    color: '#515151',
  },
  subHeaderText: {
    fontSize: 12,
    color: '#515151',
    textAlign: 'center',
    marginTop: 4,
  },
  arrowText: {
    color: '#959595',
    fontSize: 12,
  },
  weekDayRow: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  calendarGrid: {
    flexDirection: 'column',
  },
  weekDayCell: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekDayText: {
    color: '#539BEC',
    fontSize: 12,
  },
  weekRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  dayCell: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#E6E6E6',
    backgroundColor: '#FFFFFF',
  },
  npDate: {
    fontSize: 12,
    color: '#515151',
  },
  enDate: {
    fontSize: 10,
    color: '#7DBBEE',
    marginTop: 2,
  },
  weekendText: {
    color: '#FF4D00',
  },
  todayCell: {
    backgroundColor: '#EEEEEE',
  },
});
