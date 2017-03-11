f = open('sun_spots.txt', encoding='UTF-8', errors='ignore')
lines = f.readline()
average = {}
for i in range(1868):
    lines = f.readline()
    lines = lines.split(';')
    start = lines[0][4:11]
    if start not in average:
        average[start] = []
    average[start].append(float(lines[1].strip()))
for key in average:
    average[key] = round(sum(average[key]) / len(average[key]), 3)
with open('spotsconst.txt', 'w', encoding='UTF-8') as f:
    for key in average:
        f.write('{0} ; {1}\n'.format(key[1:], average[key]))
