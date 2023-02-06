# Hello World
# Read a full line of input from stdin & save it to dynamically typed var.
# Print string literal saying "Hello World" to stdout.
# Write line of code that prints content of dynamically typed var to stdout.
# input_string = input('Welcome to 30 Days of Code!')
# print('Hello, World.')
# print(input_string)

# Data Types
# Vars i, d, & s are already declared & initialized for you. You must:
# - declare 3 vars: one of type int, on of type double, & one of type str
# - read 3 lines of input from stdin & initialize your 3 vars
# - use the + operator to print sum of i+your int on a new line, print sum of d+double, concatenate s w/ your str.
# i = 4
# d = 4.0
# s = 'HackerRank'
# i2 = int(input())
# d2 = float(input())
# s2 = str(input())
# print(i+i2)
# print(d+d2)
# print(s+s2)

# Operators
# given the meal $, tip %, & tax % for a meal, find & print the meal's total cost. Round the result to the nearest int.
def solve(meal_cost, tip_percent, tax_percent):
    total_cost = (meal_cost + ((meal_cost/100) * tip_percent) + ((meal_cost/100) * tax_percent))
    return round(total_cost)
print(solve(12.00, 20, 8))