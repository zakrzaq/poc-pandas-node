import pandas as pd
import json
import sys
import os

data_input = os.path.join("data", "data.csv")

df = pd.read_csv(data_input, sep=";")

df = df.drop(columns="Unnamed: 3", axis=1)
df.columns = ["firstName", "lastName", "title"]
for col in df.columns:
    df[col] = df[col].str.strip()


res = df.to_json(orient="records")
parsed = json.loads(res)
formatted = json.dumps(parsed, indent=4)

print(formatted)
sys.stdout.flush()
