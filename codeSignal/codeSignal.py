# Add
# Write a function that returns the sum of two numbers
def solution(param1, param2):
    return param1 + param2

# centuryFromYear
# Given a year, return the century it is in. The 1st century spans from year 1 up to & including year 100, 2nd century from year 101
# up to & including year 200, etc.
import math
def solution(year):
    century = math.ceil(year/100)
    return century