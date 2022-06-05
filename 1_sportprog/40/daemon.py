import discord
from decouple import config
import datetime
import time
import asyncio
import shutil


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


async def looper():
    while True:
        print('Lesson process has started')

        for i in range(len(groups)):

            group_i = groups[i]
            day_range = day_ranges[i]
            time_range = time_ranges[i]

            days = day_range.split(' - ')
            left_day = get_integer_weekday(days[0])
            right_day = get_integer_weekday(days[1])

            times = time_range.split(' - ')
            left_time = times[0]
            right_time = times[1]

            if time_has_already_happend(right_time):
                try:
                    shutil.copyfile(str(i)+"_.txt", 'logs.txt')
                    f = open(str(i)+"_.txt", "r+")
                    f.truncate()
                    f.close()
                except Exception:
                    print('Error occured')
                print('Lesson ' + group_i + ' has ended, students were added to logs.txt')

        time.sleep(60)


async def main():

    # print('Starting')
    future = asyncio.ensure_future(looper())

    # print('Waiting for a few seconds')
    # await asyncio.sleep(4)
    #
    # print('Cancelling')
    # future.cancel()
    #
    # print('Waiting again for a few seconds')
    # await asyncio.sleep(2)

    # print('Done')


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())
