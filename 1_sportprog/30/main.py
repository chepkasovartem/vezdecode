import codeforces_api
from decouple import config
import time

api_key = config('API_KEY')
secret = config('SECRET')

cf_api = codeforces_api.CodeforcesApi(api_key, secret)  # Authorized access.
anonim_cf_api = codeforces_api.CodeforcesApi()  # Anonymous access.
parser = codeforces_api.CodeforcesParser() # Create parser.

n = int(input())
handles = []

for i in range(n):
    row = input()
    handles.append(row)

for handle in handles:
    try:
        submissions = anonim_cf_api.user_status(handle)
        ok_submissions = 0
        for submission in submissions:
            if submission.verdict == 'OK':
                ok_submissions += 1
        print(handle, ok_submissions)
    except Exception as exception:
        print("Oops! Error occurred:", exception)

    time.sleep(2)
