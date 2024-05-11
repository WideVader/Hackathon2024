import json
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load JSON data
with open('./database.json', 'r') as f:
    data = json.load(f)

# Convert JSON data to pandas DataFrames
companies_df = pd.DataFrame(data['companies'])
users_df = pd.DataFrame(data['users'])
transactions_df = pd.DataFrame(data['transactions'])
print(transactions_df)

companies_df=companies_df.rename(columns={'name':'issuer'})
companies_df.issuer=companies_df.issuer.astype(str)
transactions_df.issuer=transactions_df.issuer.astype(str)

companies_df.issuer=companies_df.issuer.str.encode("utf-8")
transactions_df.issuer=transactions_df.issuer.str.encode("utf-8")

# Merge transaction and user data based on common attributes like 'user_id' or 'location'
merged_df1 = pd.merge(transactions_df, companies_df, on='issuer', how='outer')

merged_df = pd.merge(merged_df1, users_df, left_on='user_id', right_on='id', how='outer')
# Select relevant features and target variable

features = ['t_location','c_location','location', 'price', 't_currency', 'currency','c_currency', 'weather', 'category_x', 'issuer', 'product', 'user_id', 'name', 'gender', 'age', 'hobbies', 'currency', 'segment']
target = 'fraud'  # Assuming 'fraud' is your target variable indicating whether a transaction is fraudulent or not

# Prepare the feature matrix (X) and target vector (y)
X = merged_df[features]
y = merged_df[target]

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, train_size=0.8,random_state=42)

# Initialize and train the logistic regression model
clf = LogisticRegression(random_state=0, max_iter=1000)
clf.fit(X_train, y_train)

# Make predictions on the test set
predictions = clf.predict(X_test)

# Calculate the accuracy of the model
accuracy = accuracy_score(y_test, predictions)
print("Accuracy:", accuracy)




# from sklearn.datasets import load_iris
# from sklearn.linear_model import LogisticRegression
# X, y = load_iris(return_X_y=True)
# clf = LogisticRegression(random_state=0, solver='lbfgs', max_iter=10000).fit(X, y)
# predictions=clf.predict(X[:2, :])
# print("Predictions:", predictions)
# probabilities=clf.predict_proba(X[:2, :])
# print("Probabilities:", probabilities)
# accuracy=clf.score(X, y)
# print("Accuracy:", accuracy)
