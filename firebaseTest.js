import { realtimeDb } from "./firebaseConfig.js"; // Adjust the path if needed
import { ref, set, get } from "firebase/database";

// Function to write test data
async function writeTestData() {
  const testRef = ref(realtimeDb, "testNode");
  await set(testRef, {
    message: "Firebase Realtime Database connection successful!",
    timestamp: new Date().toISOString(),
  });
  console.log("✅ Test data written successfully.");
}

// Function to read test data
async function readTestData() {
  const testRef = ref(realtimeDb, "testNode");
  const snapshot = await get(testRef);
  if (snapshot.exists()) {
    console.log("📌 Read from Firebase:", snapshot.val());
  } else {
    console.log("❌ No data found.");
  }
}

// Run test functions
writeTestData().then(() => readTestData());
