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
        unique_problems = []
        for submission in submissions:
            uuid = str(submission.problem.contest_id) + str(submission.problem.index)
            if uuid not in unique_problems:
                unique_problems.append(uuid)
        print(handle, len(unique_problems))
    except Exception as exception:
        print("Oops! Error occurred:", exception)

    time.sleep(2)
