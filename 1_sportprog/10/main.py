import sys
input = sys.stdin.readline


def subsum(array, left, right):
    array_sum = 0
    for i in range(left, right+1):
        array_sum += array[i]
    return array_sum


def setmax(first, second):
    if first > second:
        return first
    return second


(n, x) = (map(int, input().split()))
watches = []
prev_right = -1
new_watch = []
for i in range(n):
    (left, right) = (map(int, input().split()))
    # print('left', left, 'right', right, prev_right)

    hours_to_watch = right - left

    if prev_right + 1 == left or prev_right == -1:
        new_watch.append(hours_to_watch)
        prev_right = right
    else:
        watches.append(new_watch)
        new_watch = [hours_to_watch]
        prev_right = -1

watches.append(new_watch)
# print(watches)


# x = 10
# watches = [
#     [9, 5, 2],
#     [7]
# ]

max_watched_episodes = 0

for watch in watches:
    # print('watch', watch)
    m = len(watch)

    watch_sum = 0

    left = 0
    for right in range(0, m):
        # print('subsum(watch, left, right)')
        # print(watch, left, right)
        # print(subsum(watch, left, right))
        if subsum(watch, left, right) <= x:
            episodes = (right - left + 1)
            max_watched_episodes = setmax(max_watched_episodes, episodes)
        else:
            left += 1
            right -= 1

print(max_watched_episodes)
