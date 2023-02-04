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