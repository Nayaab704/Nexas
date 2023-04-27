#Sending ARRAY output to JS

import numpy as np
import pandas as pd
import sys
import json
import ast

#input from JS
index1 = ast.literal_eval(sys.argv[1])

df=pd.read_csv('sample.csv')
#import sklearn
from sklearn.preprocessing import MinMaxScaler
min_max_scaler = MinMaxScaler()
df2 = min_max_scaler.fit_transform(df)

from sklearn.cluster import KMeans
from sklearn import neighbors
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler

model = neighbors.NearestNeighbors(n_neighbors=11, algorithm='ball_tree')
model.fit(df2)
dist, idlist = model.kneighbors(df2)

def UserRecommender(user_name):
    user_list_name = []
    user_id = df[df['idusers']==user_name].index
    user_id = user_id[0]

    for newid in idlist[user_id]:
        user_list_name.append(df.loc[newid].idusers)
    return user_list_name

our_user = 155
matches = UserRecommender(index1[0])[1:]

from array import array

data_to_pass_back = array("i", matches)

print(json.dumps(data_to_pass_back.tolist()))
#print(json.dumps(dummy))
sys.stdout.flush()