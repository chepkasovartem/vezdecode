import discord
from decouple import config
import datetime
import time
import asyncio


def get_integer_weekday(weekday):
    weekdays = [
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресенье'
    ]
    for int_day in range(7):
        if weekdays[int_day] == weekday:
            return int_day

    return -1


def time_has_already_happend(time_string):
    now_date = datetime.datetime.today()
    now_minutes = now_date.hour * 60 + now_date.minute

    compare_minutes = time_string_to_minutes(time_string)

    # print('now_time', now_date.time())
    # print('time_string', time_string)
    #
    # print('now_minutes', now_minutes)
    # print('compare_minutes', compare_minutes)
    if now_minutes == compare_minutes or now_minutes + 1 == compare_minutes:
        return True

    return False


def time_string_to_minutes(time_string):
    compare_hours = int(time_string.split(':')[0])
    compare_minutes = int(time_string.split(':')[1])
    return compare_hours * 60 + compare_minutes


# setup settings

f = open("students.csv", "r")
groups = f.readline().rstrip().split(',')
day_ranges = f.readline().rstrip().split(',')
time_ranges = f.readline().rstrip().split(',')
student_lists_strings = f.readline().rstrip().split('","')
f.close()

# student_at_groups = []
student_lists = {}
for group_i in range(len(student_lists_strings)):
    student_list_string = student_lists_strings[group_i]
    # print(student_list_string)

    student_list = student_list_string.replace('"', '')

    # print(student_list)
    # student_lists.append(student_list.split(','))
    student_lists[group_i] = student_list.split(',')

# print(groups)
# print(day_ranges)
# print(time_ranges)
# print(student_lists)


client = discord.Client()


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))
    print('Now we can work')


@client.event
async def on_voice_state_update(member, before, after):

    student_name = str(member)
    # print('after')
    # print(after)

    if after.channel is None:
        channel_name = ''
    else:
        channel_name = after.channel.name

    print('Channel name', channel_name)
    print(student_lists)

    for group_i in range(len(student_lists)):
        student_list = student_lists[group_i]

        if groups[group_i] != channel_name:
            print('Student entered wrong channel', groups[group_i], channel_name)
            continue

        print('Student is right in', channel_name)
        print(student_list)

        if student_name in student_list:
            timestamp_day = datetime.datetime.today().weekday()
            # print('today is', timestamp_day)

            weekdays_string = day_ranges[group_i]
            day_left = get_integer_weekday(weekdays_string.split(' - ')[0])
            day_right = get_integer_weekday(weekdays_string.split(' - ')[1])
            # print('weekdays_string', weekdays_string)
            # print(day_left)
            # print(day_right)

            if (day_left <= day_right and timestamp_day >= day_left and timestamp_day <= day_right) or (day_left > day_right and (timestamp_day >= day_left or timestamp_day <= day_right)):
                time_range = time_ranges[group_i]

                time_left = time_string_to_minutes(time_range.split(' - ')[0])
                time_right = time_string_to_minutes(time_range.split(' - ')[1])

                time_now = datetime.datetime.today().hour * 60 + datetime.datetime.today().minute

                if time_now >= time_left and time_now <= time_right:

                    # print('group_i', group_i)
                    # print('student_name', student_name)

                    f = open(str(group_i) + "_.txt", "w+")

                    student_lines = map(lambda s: s.replace('\n', ''), f.readlines())

                    if student_name not in student_lines:
                        print('Student', student_name, 'entered', channel_name, 'on time')
                        f.write(student_name)
                    else:
                        print('Student', student_name, 'has already entered', channel_name, 'on time')

                    f.close()

                else:
                    print('Student', student_name, 'entered channel not on time')
            else:
                print('Student', student_name, 'entered channel on the wrong right date')
        else:
            print('Student', student_name, 'is not in the list')

client.run(config('BOT_TOKEN'))
