import random
import json

data = {1: []}
page_num = 1

for num in range(1, 21):
  data[page_num].append({"imageUrl": f"/imgs/cat{num}.jpeg", 
                         "name": f"cat{num}", 
                         "health": random.randint(1, 100), 
                         "damage": random.randint(1, 100), 
                         "defense": random.randint(1, 100)})
  
  data[page_num].append({"imageUrl": f"/imgs/dog{num}.jpeg", 
                         "name": f"dog{num}", 
                         "health": random.randint(1, 100),
                         "damage": random.randint(1, 100),
                         "defense": random.randint(1, 100)})
  
  if num % 10 == 0:
    page_num += 1
    data[page_num] = []

with open("./data.json", "w") as outfile:
  json.dump(data, outfile)