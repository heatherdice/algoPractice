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
print(greaterThanSecond(oddArr))