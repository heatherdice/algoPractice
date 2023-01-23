# Biggie Size
# Given an arr, write a function that changes all positive nums in arr to "big."
# Ex: makeItBig([-1,3,5,-5]) returns [-1,'big','big',-5]
def biggieSize(arr):
    for num in range(len(arr)): # avoids index out of range err by ensuring any elements accessed in list are w/in index range
        if arr[num] > 0:
            arr[num] = "big"
    return arr

# Print Low, Return High
# Create a function that takes an arr of nums.
# Function should print lowest val in arr and return highest val in arr.
def prntLowReturnHigh(arr):
    arr.sort()
    print(arr[0])
    return arr[-1]

# Print One, Return Another
# Build a function that takes an arr of nums.
# Function should print the second-to-last val in arr,
# and return first odd val in arr.
def prntOneReturnAnother(arr):
    print(arr[-2])
    for num in range(len(arr)):
        if arr[num] %2 != 0:
            return arr[num]
