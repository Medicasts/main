import json
# from pprint import pprint


input_file = 'data.json'
output_file = 'data.json'


with open(input_file, 'r') as data_file:
    data = json.load(data_file)

# pprint(data)

with open(output_file, 'w') as outfile:
    json.dump(data, outfile)

def type_recogniser(file_):
    if file_['humidity']['percent']:
        pass
    elif file_['humidity']['percent']:
        pass
    else:
        pass
    # if file_['date']['local']:
    #     pass
    # elif file_['date']['local']:
    #     pass
    # else:
    #     pass
    file_['cloudiness'] = file_['cloudiness']['type']
    if file_['precipitation']['amount']:
        pass
    elif file_['precipitation']['amount']:
        pass
    else:
        pass
    # if file_['temperature']['air']:
    #     pass
    # elif file_['temperature']['air']:
    #     pass
    # else:
    #     pass
    if 5 <= file_['wind']['speed'] <= 10:
        file_['wind'] = 3
    elif file_['wind']['speed'] > 10:
        file_['wind'] = 4
    else:
        file_['wind'] = 2
