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

# checkPalindrome
# Given the string, check if it is a palindrome.
def solution(inputString):
    reversed_string = inputString[::-1] # slice statement: start at end of string, end at pos 0, move w/ step -1
    return reversed_string == inputString

# adjacentElementsProduct
# Given an arr of ints, find pair of adjacent elements w/ largest product & return that product.
def solution(inputArray):
    product_list = []
    for i in range(len(inputArray)-1):
        product = inputArray[i]*inputArray[i+1]
        product_list.append(product)
    product_list.sort()
    return product_list[-1]

# shapeArea
# Find the area of a polygon for a given n.
# Ex: a 1-interesting polygon is just a square with a side of length 1.
# An n-interesting polygon is obtained by taking the n - 1-interesting polygon
# and appending 1-interesting polygons to its rim, side by side. (See CodeSignal
# for example images.)
def solution(n):
    result = 1
    if n == 1:
        return result
    i = 0
    while i < n:
        result += (i*4)
        i+=1
    return result

# Make Array Consecutive 2
# Arrange given list from smallest to largest. Insert missing numbers to get a list of numbers which each increment by 1.
# Return how many numbers needed to be added to the list to accomplish this.
def solution(statues):
    statues.sort()
    count = 0
    i = 0
    while i < len(statues)-1:
        if statues[i+1] != statues[i]+1:
            statues.insert(i+1,statues[i]+1)
            count+=1
        i+=1
    return count
