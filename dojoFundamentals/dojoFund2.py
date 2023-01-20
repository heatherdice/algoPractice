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
    return(arr[1])
printAndReturn([9,13])