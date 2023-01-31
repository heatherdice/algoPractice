# Only Keep the Last Few
# Given arr and num X, remove all except the last X elements.
# Return arr (changed and shorter). Ex: given ([2,4,6,8,10],3),
# change array to [6,8,10] and return it.
def onlyKeepLastFew(arr, x): # arr = list, x = int
    arrayLength = len(arr)
    while arrayLength > x:
        arr.pop(0)
        arrayLength-=1
    return arr
