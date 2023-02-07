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
def solution4(inputArray):
    product_list = []
    for i in range(len(inputArray)-1):
        product = inputArray[i]*inputArray[i+1]
        product_list.append(product)
    product_list.sort()
    return product_list[-1]

