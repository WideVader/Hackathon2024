//branko here you can write cronnjob code

const { initializeApp } = require("firebase-admin");
const functions = require('firebase-functions');

// Initialize Firebase Admin SDK
const firebaseAdminApp = initializeApp();
const db = firebaseAdminApp.firestore(); // Get a Firestore instance

function calculateMedian(values) {
    // First, let's sort the array
    values.sort((a, b) => a - b);
  
    const length = values.length;
    
    // If the length is odd, the median is the middle element
    if (length % 2 === 1) {
      return values[Math.floor(length / 2)];
    } else {
      // If the length is even, the median is the average of the two middle elements
      const midIndex = length / 2;
      return (values[midIndex - 1] + values[midIndex]) / 2;
    }
  }

// Function to calculate median for a specific type of data
function calculateMedianForType(data, type) {
    // Filter data for the given type
    const filteredData = data.filter(item => item.type === type);

    // Extract values for the given type
    const values = filteredData.map(item => item.value);

    // Calculate median for the values
    const median = calculateMedian(values);
    return median;
}

// Cloud Function triggered on database changes
exports.updateMedians = functions.firestore.document('transactions/{transactionId}')
    .onWrite(async (change, context) => {
        try {
            // Get all documents from the 'transactions' collection
            const snapshot = await db.collection('transactions').get();

            // Extract all types present in the data
            const typesSet = new Set();
            snapshot.forEach(doc => {
                const transactionData = doc.data();
                transactionData.forEach(item => {
                    typesSet.add(item.type);
                });
            });
            const types = Array.from(typesSet);

            // Calculate median for each type
            const medians = {};
            types.forEach(type => {
                const typeMedian = calculateMedianForType(snapshot.docs.map(doc => doc.data()), type);
                medians[type] = typeMedian;
            });

            // Update the 'median_collection' with the calculated medians
            const batch = db.batch();
            Object.entries(medians).forEach(([type, median]) => {
                const medianDocRef = db.collection('median_collection').doc(type);
                batch.set(medianDocRef, { median: median });
            });
            await batch.commit();

            return null;
        } catch (error) {
            console.error('Error updating medians:', error);
            return null;
        }
    });