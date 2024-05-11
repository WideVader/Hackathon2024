import json
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
import pickle

# Load JSON data
with open('./database.json', 'r') as f:
    data = json.load(f)

# Convert JSON data to pandas DataFrames
transactions_df = pd.json_normalize(data["transactions"])
users_df = pd.json_normalize(data["users"])

# Merge transaction and user data based on common attributes like 'user_id' or 'location'
merged_df = pd.merge(transactions_df, users_df, left_on='user_id', right_on='id', how='inner')

features = ["age", "price", "t_currency", "issuer", "product", "gender", "currency", "segment"]
target = 'fraud'

# Prepare the feature matrix (X) and target vector (y)
X = merged_df[features]
y = merged_df[target]

# Convert numerical columns to strings
X['age'] = X['age'].astype(str)
X['price'] = X['price'].astype(str)

# One-hot encode categorical variables
categorical_cols = ["age", "price", "t_currency", "issuer", "product", "gender", "currency", "segment"]
X_categorical = X[categorical_cols]

encoder = OneHotEncoder(categories='auto', handle_unknown='ignore')
X_encoded = encoder.fit_transform(X_categorical)

# Create a pipeline with encoder and model
pipeline = Pipeline([
    ('encoder', encoder),
    ('clf', LogisticRegression(random_state=0, max_iter=1000))
])

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the pipeline
pipeline.fit(X_train, y_train)

# Make predictions on the test set
predictions = pipeline.predict(X_test)

# Calculate the accuracy of the model
accuracy = accuracy_score(y_test, predictions)
print("Accuracy:", accuracy)

# Store the pipeline (serialize)
with open('filename.pickle', 'wb') as file:
    pickle.dump(pipeline, file, protocol=pickle.HIGHEST_PROTOCOL)
