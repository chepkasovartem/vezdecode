import discord
from decouple import config
import datetime
import time

# import codeforces_api

# n = int(input())

submissions = {
    2: [
        'kir', 'art'
    ]
}

if 1 not in submissions:
    submissions[1] = {}

if 'student_name' not in submissions[1]:
    print('YES')
else:
    print('NO')






