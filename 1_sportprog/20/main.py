def read():
  return list(map(lambda x: int(x), input().split(' ')))

def add_coins_to_store(coin):
  if c[i] not in store:
    store[c[i]] = a[i]
  else:
    store[c[i]] = store[c[i]] + a[i]

def get_max_coin_cost():
  for j in range(1000, 0, -1):
    if j in store and store[j] != 0:
      return j

n = int(input())

a = read()
b = read()
c = read()

store = dict()
coins = 0
income = 0

for i in range(0, n, 1):

  add_coins_to_store(c[i])

  coins = coins + a[i]

  while True:

    if coins == 0 or b[i] <= 0:
      break

    max_key = get_max_coin_cost()

    store[max_key] = store[max_key] - b[i]

    if store[max_key] <= 0:
      income = income + max_key * (b[i] + store[max_key])
      coins = coins - (b[i] + store[max_key])
      b[i] = -store[max_key]
      store[max_key] = 0
    else:
      income = income + max_key * b[i]
      coins = coins - b[i]
      break

print(income)