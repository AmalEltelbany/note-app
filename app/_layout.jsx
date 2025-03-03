import { Stack } from "expo-router";

const RootLayout = () => {
 return(
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8B5CF6', // Softer and elegant purple
          },
          headerTintColor: '#FFFFFF', // White for better contrast
          headerTitleStyle: {
            fontSize: 22, // Slightly bigger for emphasis
            fontWeight: 'bold',
          },
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: '#FAF5FF', // Very Light Lavender for a balanced soft look
          },
        }}
      >
        <Stack.Screen name='index'  options={{  title: 'Home',  headerTitleAlign: "center",  }} />
        <Stack.Screen name='notes' options={{ headerTitle: 'Notes',headerTitleAlign: "center", }} />
      </Stack>
 )
};

export default RootLayout;