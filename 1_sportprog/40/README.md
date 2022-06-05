Если при запуске встречается ошибка SSL дискорда, решение описано в https://github.com/Rapptz/discord.py/issues/423

Установка библиотек
```
pip3 install -r requirements.txt
```

Копируем .env-example в .env, заполняем его [токеном Дискорд бота](https://www.writebots.com/discord-bot-token/)

Запуск процесс менеджера Дискорд бота
```
python3 discord.py
```

Запуск процесса менеджера окончания уроков
```
python3 lesson.py
```
Дискорд бот кладет в файл урока никнеймы учеников кто был на занятии.
По окончанию уроков, имена записываются в logs.txt.