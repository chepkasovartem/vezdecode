import sys
input = sys.stdin.readline


def subsum(array, left, right):
    array_sum = 0
    for i in range(left, right+1):
        hour_space = 0
        if array[i] == 0:
            hour_space = 1
        array_sum += array[i] + hour_space
    return array_sum


def count_episodes(array, left, right):
    count = 0
    for i in range(left, right+1):
        if array[i] > 0:
            count += 1
    return count


def setmax(first, second):
    if first > second:
        return first
    return second

# 3 4
# 1 2
# 2 3
# 4 5
# 3 # ответ


(n, x) = (map(int, input().split()))
watch = []
prev_right = -1
for i in range(n):
    (left, right) = (map(int, input().split()))

    hours_to_watch = right - left

    if prev_right == -1:
        watch.append(hours_to_watch)
    else:

        if left - prev_right > 0:
            for j in range(left - prev_right):
                watch.append(0)

        watch.append(hours_to_watch)

    prev_right = right


# watches.append(new_watch)

max_watched_episodes = 0

# x = 4
#
# watches = [
#     [9, 4, 3, 2, 2],
#     [2, 2, 2, 1, 1, 4]
# ]

# x = 6
# watch = [3, 3, 0, 0, 0, 2, 1, 1]
# watch = [1, 0, 1, 0, 0, 2, 1, 1, 1, 1]
# print(watch)

m = len(watch)

watch_sum = 0


left = 0
right = 0

while right < m:
    # print(left, right, watch[left:right+1], ', subsum =', subsum(watch, left, right))

    if subsum(watch, left, right) <= x:
        # episodes = (right - left + 1)
        episodes = count_episodes(watch, left, right)
        # print('this is less than x =', x, ', count_episodes =', count_episodes(watch, left, right))
        max_watched_episodes = setmax(max_watched_episodes, episodes)
        right += 1
    else:
        if right - left > 0:
            left += 1
        else:
            right += 1

print(max_watched_episodes)
