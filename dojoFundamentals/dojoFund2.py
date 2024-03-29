# Countdown
# Create a function that accepts a number as an input.
# Return a new array that counts down by one, from the number
# (as array's "zeroeth" element) down to 0 (as the last element).
def countdown(int):
    arr = []
    while int >= 0:
        arr.append(int)
        int -= 1
    return arr

# Print and Return
# Your function will receive an array with two numbers.
# Print the first value, and return the second.
def prntAndReturn(arr): # because 'print' is a function in Python already, must abbreviate to avoid errors
    print(arr[0])
    return arr[1]

# First Plus Length
# Given an array, return the sum of the first value in the array,
# plus the array's length. What happens if the array's first value is not a number,
# but a string or a boolean?
def firstPlusLength(arr):
    return arr[0] + len(arr)
# if arr[0] == str, error: cannot concatenate str to int
# if arr[0] == boolean, True = 1; False = 0

# Values Greater than Second
# For [1,3,5,7,9,13], print values that are greater than its 2nd value.
# Return how many values this is.
oddArr = [1,3,5,7,9,13]
def greaterThanSecond(oddArr):
    result = 0
    for x in oddArr:
        if x > oddArr[1]:
            print(x)
            x += 1
            result += 1
    return result

# This Length, That Value
# Given two numbers, return array of length num1 with each value num2.
# Print "Jinx!" if they are the same.
def thisLenThatVal(num1,num2):
    arr = []
    if num1 == num2:
        return "Jinx!"
    else:
        for num in range(num1): # num1 is int (non-iterable), must make it a range
            arr.append(num2)
        return arr

# Fit the First Value
# Given an array, if value at [0] is greater than arr.length, print "Too big!"
# If value at [0] is less than arr.length, print "Too small."
# Otherwise, print "Just right!"
def fitFirstVal(arr):
    if arr[0] > len(arr):
        print("Too big!")
    elif arr[0] < len(arr):
        print("Too small!")
    else:
        print("Just right.")

# Fahrenheit to Celsius
# Create a function that accepts a number of degrees in F and returns the equivalent temp in C.
# F = (9/5 * C) + 32.
def fahrenheitToCelsius(fDegrees):
    print((fDegrees - 32) * 5/9)

# Celsius to Fahrenheit
# Create a function that accepts a number of degrees in C and returns the equivalent temp in F.
# C = F * 1.8 + 32
def celsiusToFahrenheit(cDegrees):
    print(cDegrees * 1.8 + 32)