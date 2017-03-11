import os

hhh = 1990
for hh in range(1990, 2016):
    info = {}
    filename = 'radiation.csv'
    # f = open(os.getcwd() + ('\\daily_WIND_' + str(hh) + '\\') + filename, encoding='UTF-8', errors='ignore')
    f = open('radiation.csv', encoding='UTF-8', errors='ignore')
    lines = []
    lines = f.readline()
    data = []

    while 'Date;' not in lines:
        lines = f.readline()
    print(1)
    while lines:
        data.append(f.readline())
        lines = f.readline()
    print(1)
    for line in data[:-1]:
        line = line.split(';')
        date = line[0]
        # if date not in info:
        #    info[date] = []
        info[date] = float(line[1])

    #for key in info:
    #    info[key] = round(sum(info[key]) / len(info[key]), 3)
    print(hh)
    f.close()

with open('radiation.txt', 'w', encoding='UTF-8') as f:
    for key in info:
        f.write('{0} ; {1}\n'.format(key, info[key]))
