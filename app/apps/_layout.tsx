import { Stack } from "expo-router";

export default function AppsLayout(){
    return (
        <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="[id]" />
      </Stack>
    )
}
