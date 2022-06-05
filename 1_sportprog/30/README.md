Для получения списка попыток (submission) пользователя, мспользуется метод [user.status](https://codeforces.com/apiHelp/methods?f0a28=1#:~:text=rating%3Fhandle%3DFefer_Ivan-,user.status,-%D0%92%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82%20%D0%BF%D0%BE%D0%BF%D1%8B%D1%82%D0%BA%D0%B8%20%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE) 

Для подсчета количества задач, которые пытался решить пользователь, 
считается количество уникальных задач, на которые отправлена хотя бы одна попытка.

Цикл замедленен с помощью time.sleep() для обхода ограничения [1 запрос каждые 2 секунды](https://codeforces.com/apiHelp#:~:text=%D0%97%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B%20%D0%BA%20API%20%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%20%D0%BE%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D1%8F%D1%82%D1%8C%20%D0%BD%D0%B5%20%D1%87%D0%B0%D1%89%D0%B5%2C%20%D1%87%D0%B5%D0%BC%201%20%D1%80%D0%B0%D0%B7%20%D0%B2%20%D0%B4%D0%B2%D0%B5%20%D1%81%D0%B5%D0%BA%D1%83%D0%BD%D0%B4%D1%8B)

Установка библиотек
```
pip3 install -r requirements.txt
```

Сгененировать [ключ API](https://codeforces.com/settings/api), добавить его в .env файл 

Запуск программы
```
python3 main.py
```

На вход подается количество логинов и сами логины (handles) по одному на строку
```
10
DmitriyH
Fefer_Ivan
mrokiriko
chepkasovartem
joparino
J8Q
GlebBondarchuk42
Roman11
FishKOH
Crazy4Frog
```

На выход возвращаются логин и количество решенных задач
```
DmitriyH 1457
Fefer_Ivan 761
mrokiriko 41
chepkasovartem 0
joparino 0
J8Q 0
GlebBondarchuk42 0
Roman11 5
FishKOH 285
Crazy4Frog 0
```