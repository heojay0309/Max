import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, router } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, StyleSheet, View, Pressable } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };

    if (loaded) {
      setTimeout(hideSplashScreen, 3000);
    }

    return () => {
      if (!loaded) hideSplashScreen();
    };
  }, [loaded]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {loaded && <RootLayoutNav />}
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
          headerTintColor: '#EDECE6',
          headerTransparent: true,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="daily"
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                <View style={styles.backBox}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={37}
                    color="white"
                  />
                </View>
              </Pressable>
            ),
            headerRight: () => (
              <View style={styles.accountBox}>
                <MaterialCommunityIcons
                  name="account"
                  size={37}
                  color="white"
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="greatday"
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                <View style={styles.backBox}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={37}
                    color="white"
                  />
                </View>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="good"
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                <View style={styles.backBox}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={37}
                    color="white"
                  />
                </View>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="fine"
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                <View style={styles.backBox}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={37}
                    color="white"
                  />
                </View>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="bad"
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                <View style={styles.backBox}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={37}
                    color="white"
                  />
                </View>
              </Pressable>
            ),
          }}
        />

        <Stack.Screen name="score" />

        <Stack.Screen
          name="physical"
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerLeft: () => (
              <Pressable onPress={() => router.push('daily')}>
                <View style={styles.backBox}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={37}
                    color="white"
                  />
                </View>
              </Pressable>
            ),
            headerRight: () => (
              <View style={styles.accountBox}>
                <MaterialCommunityIcons
                  name="account"
                  size={37}
                  color="white"
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="mental"
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                <View style={styles.backBox}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={37}
                    color="white"
                  />
                </View>
              </Pressable>
            ),
            headerRight: () => (
              <View style={styles.accountBox}>
                <MaterialCommunityIcons
                  name="account"
                  size={37}
                  color="white"
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="financial"
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                <View style={styles.backBox}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={37}
                    color="white"
                  />
                </View>
              </Pressable>
            ),
            headerRight: () => (
              <View style={styles.accountBox}>
                <MaterialCommunityIcons
                  name="account"
                  size={37}
                  color="white"
                />
              </View>
            ),
          }}
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDECE6',
  },
  backBox: {
    backgroundColor: '#BCCDC0',
    borderRadius: 20,
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountBox: {
    backgroundColor: '#D1CBC1',
    borderRadius: 15,
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
