import random
# Only Keep the Last Few
# Given arr and num X, remove all except the last X elements.
# Return arr (changed and shorter). Ex: given ([2,4,6,8,10],3),
# change array to [6,8,10] and return it.
def onlyKeepLastFew(arr, x): # arr = list, x = int
    while len(arr) > x:
        arr.pop(0)
    return arr

# Math Help
# Given 2 numbers, M & B in the equation Y = MX+B.
# Build function to return X-intercept. (X-intercept is value of X where Y = 0)
def mathHelp(m,b):
    return -b / m

# Poor Kenny
# Out of the last 100 days, there were 10 days with volcanoes, 15 with tsunamis,
# 20 earthquakes, 25 blizzards, and 30 meteors. If these probabilities continue,
# write whatHappensToday() to print a day's outcome.
def whatHappensToday():
    today = random.randrange(1,100) # random num from 1-100
    events = {
        "volcano" : today<=10,
        "tsunami" : today<=25,
        "earthquake" : today<=45,
        "blizzard" : today<=60,
        "meteor" : today<=90
    }
    # now what...? compare today var to vals in dict?
print(whatHappensToday())