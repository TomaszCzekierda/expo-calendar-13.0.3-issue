import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ExpoCalendar from 'expo-calendar';

export default function App() {
  const requestPermission = async () => {
    const permission = await ExpoCalendar.requestCalendarPermissionsAsync();
    console.log(permission.granted);
  };

  const getCalendars = async () => {
    let permission = await ExpoCalendar.getCalendarPermissionsAsync();
    if (permission.status !== 'granted') {
      console.log('not granted');
    }
    const calendars = await ExpoCalendar.getCalendarsAsync(ExpoCalendar.EntityTypes.EVENT);
    console.log(calendars);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={requestPermission}>
        <Text>Request Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={getCalendars}>
        <Text>Get Calendars</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  button: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 4,
  },
});
