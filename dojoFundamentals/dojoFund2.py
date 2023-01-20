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
print(countdown(5))

# Print and Return
# Your function will receive an array with two numbers.
# Print the first value, and return the second.
def printAndReturn(arr):
    print(arr[0])
    return arr[1]
print(printAndReturn([9,13]))

# First Plus Length
# Given an array, return the sum of the first value in the array,
# plus the array's length. What happens if the array's first value is not a number,
# but a string or a boolean?
def firstPlusLength(arr):
    return arr[0] + len(arr)
print(firstPlusLength([0,1,2,3,4,5]))
print(firstPlusLength(["happy",9,10])) # error: cannot concatenate str to int
print(firstPlusLength([True,5,9])) # True = 1, so 1+3=4