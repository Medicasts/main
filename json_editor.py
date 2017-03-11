def jsonstuff():
    import json

    from pprint import pprint

    input_file = 'tester.json'
    output_file = 'data.json'

    with open(input_file, 'r', encoding='UTF-8') as data_file:
        data = json.load(data_file)

    parameters = []
    today = data['date']['local'][5:10]
    with open('SKN.txt', 'r', encoding='UTF-8') as f:
        for iter in range(3):
            line = f.readline()
            while today not in line:
                line = f.readline()
            parameters.append(line[8:].strip())

    def check_woth_const(parameters):
        hum, press, temp = float(parameters[0]), float(parameters[1]), float(parameters[2])
        today_temp = float(data['temperature']['air']['C'])
        today_press = float(data['pressure']['mm_hg_atm'])
        today_hum = float(data['humidity']['percent'])
        temp_dif = (((today_temp - temp) ** 2) / 2) ** 0.5
        hum_dif = (((today_hum - hum) ** 2) / 2) ** 0.5
        press_dif = (((today_press - press) ** 2) / 2) ** 0.5
        if min([temp_dif, hum_dif, press_dif]) > 5:
            return 3
        else:
            return 2

    def check_clouds(clouds):
        if clouds < + 5:
            return 1
        elif clouds >= 8:
            return 3
        else:
            return 2

    def check_humidity(hum):
        if hum >= 45 and hum <= 70:
            return 1
        elif (hum >= 45 and hum <= 35) or (hum >= 75 and hum <= 85):
            return 2
        else:
            return 3

    def check_precip(precip):
        try:
            if precip >= 20:
                return 3
            elif precip <= 6:
                return 1
            else:
                return 2
        except:
            return 1

    def check_wind(wind):
        if wind >= 10:
            return 3
        elif wind >= 3 and wind <= 5:
            return 1
        else:
            return 2

    par_check = {1: 0, 2: 0, 3: 0}
    clouds = data['cloudiness']['type']
    wind = data['wind']['speed']['m_s']
    hum = data['humidity']['percent']
    precip = data['precipitation']['amount']
    par_const = check_woth_const(parameters)
    par_clouds = check_clouds(clouds)
    par_wind = check_wind(wind)
    par_humidity = check_humidity(hum)
    par_precip = check_precip(precip)
    par_check[par_const] += 1
    par_check[par_clouds] += 1
    par_check[par_wind] += 1
    par_check[par_humidity] += 1
    par_check[par_precip] += 1
    if par_check[3] != 0:
        if par_check[2] != 0 or par_check[1] != 0:
            out = 2.5
        else:
            out = 3
    else:
        if par_check[2] == 0:
            out = 1
        elif par_check[1] != 0:
            out = 1.5
        else:
            out = 2
    summ = 0
    for key in par_check:
        summ += par_check[key] * key
    return json.dumps(par_check)


print(jsonstuff())


def get_info(date, ):
    pass
