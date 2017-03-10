import json
# from pprint import pprint


input_file = 'data.json'
output_file = 'data.json'


with open(input_file, 'r') as data_file:
    data = json.load(data_file)

# pprint(data)

with open(output_file, 'w') as outfile:
    json.dump(data, outfile)
