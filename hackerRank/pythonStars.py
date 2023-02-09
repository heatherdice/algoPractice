# Write a function 
# wWrite a function for determining whether or not a year is a leap year.
# A year is a leap year if:
# - the year can be evenly divided by 4 unless
# - the year can be evenly divided by 100 it is NOT a leap year unless
# - the year is also evenly divisible by 400
# return True if year is a leap year, return False if year is not a leap year
def is_leap(year):
    leap = (year %4 == 0 and year %100 != 0) or year %400 == 0
    return leap
# setting conditions to variable, then returning variable, will return True if year meets conditions automatically

# Lists
# Initialize your list & read in the value of n followed by n lines of commands, where each command will be of these 7
# types: insert, print, remove, append, sort, pop, reverse. Iterate through each command in order & perform the 
# corresponding operation on your list.
# N = int(input())
# my_list = []
# for num in range(N):
#     num = list(input().split())
#     if num[0] == 'insert':
#         my_list.insert(int(num[1]),int(num[2]))
#     elif num[0] == 'print':
#         print(my_list)
#     elif num[0] == 'remove':
#         my_list.remove(int(num[1]))
#     elif num[0] == 'append':
#         my_list.append(int(num[1]))
#     elif num[0] == 'sort':
#         my_list.sort()
#     elif num[0] == 'pop':
#         my_list.pop()
#     elif num[0] == 'reverse':
#         my_list.reverse()

# List Comprehensions
# Given 3 ints (x,y,&z) representing dimensions of cuboid along with int n. Print list of all possible coords given by 
# (i,j,k) on a 3D grid where the sum of i+j+k != n. 0<=i<=x; 0<=j<=y; 0<=k<=z. Use list comprehensions rather than 
# loops. Ex: x=1, y=1, z=2, n=3; Print arr of elements that do not sum to n=3: [[0,0,0],[0,0,1],[0,0,2],[0,1,0],[0,1,1],
# [1,0,0],[1,0,1],[1,1,0],[1,1,2]]


# Find the Runner-Up Score
# Given n scores, store them in a list & find the score of the runner-up.
def runner_up_score(A):
    sorted_list = list(A).copy()
    sorted_list.sort()
    sorted_list.reverse()
    x = 0
    while x < len(sorted_list)-1:
        if sorted_list[x] == sorted_list[x+1]:
            sorted_list.pop(x)
        else: x+=1

# Tuples
# Given an int, n, & n space-separated ints, create a tuple, t, of those n ints. Then compute & print result of hash(t).
# Note: hash() is a built-in, and does not need to be imported.
# n = int(input())
def tuple_hash(n):
    list_placeholder = []
    for num in range(1,n+1):
        list_placeholder.append(num)
        print("CURRENT LIST:", list_placeholder)
    t = tuple(list_placeholder)
    print("TUPLE:", t)
    print(hash(t))
tuple_hash(2) # doesn't work on HackerRank, unsure why
