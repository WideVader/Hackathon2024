import pandas as pd
import pickle
import sys
import json

# Load pipeline (deserialize)
with open('filename.pickle', 'rb') as handle:
    pipeline = pickle.load(handle)

# Define the new data
new_data = pd.json_normalize(json.loads(sys.argv[1]))

# Example preprocessing steps for new_data
new_data['age'] = new_data['age'].astype(str)
new_data['price'] = new_data['price'].astype(str)

# Handle missing values
new_data.fillna('unknown', inplace=True)

# Make predictions on the new data
fraud_probability = pipeline.predict_proba(new_data)[:, 1]
print("Probability of Fraud:", fraud_probability)

# Set a threshold for classifying as fraudulent
threshold = 0.65

# Classify as fraudulent if the probability exceeds the threshold
prediction = "fraud" if fraud_probability > threshold else "not fraud"

# Display the prediction
print("Prediction on new data:", prediction)
