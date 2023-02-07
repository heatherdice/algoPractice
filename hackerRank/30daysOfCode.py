# Day 0: Hello World
# Read a full line of input from stdin & save it to dynamically typed var.
# Print string literal saying "Hello World" to stdout.
# Write line of code that prints content of dynamically typed var to stdout.
# input_string = input('Welcome to 30 Days of Code!')
# print('Hello, World.')
# print(input_string)

# Day 1: Data Types
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

# Day 2: Operators
# given the meal $, tip %, & tax % for a meal, find & print the meal's total cost. Round the result to the nearest int.
# def solve(meal_cost, tip_percent, tax_percent):
#     total_cost = (meal_cost + ((meal_cost/100) * tip_percent) + ((meal_cost/100) * tax_percent))
#     return round(total_cost)

# Day 3: Intro to Conditional Statements
# Given an int, n, perform the following conditional statements:
# if n is odd, print Weird
# if n is even & in the inclusive range of 2 to 5, print Not Weird
# if n is even & in the inclusive range of 6 to 20, print Weird
# if n is even & greater than 20, print Not Weird
# def weird_or_not(N):
#     if N %2 != 0: print("Weird")
#     if N %2 == 0 and N in range(2,6): print("Not Weird")
#     if N %2 == 0 and N in range(6,21): print("Weird")
#     if N %2 == 0 and N > 20: print("Not Weird")

# Day 4: Class vs. Instance
# Write a Person class with an instance variable, age, & a constructor that takes int initialAge, as a parameter
# Constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative
# If negative argument is passed as initialAge, constructor should set age to 0 & print "age is not valid, setting age to 0"
# In addition, write the following instance methods:
# yearPasses() should increase the age variable by 1
# amIOld() should perform the following conditional actions:
# if age < 13, print "you are young"
# if age >= 13 & age < 18, print "you are a teenager"
# otherwise, print "you are old"
# class Person:
#     def __init__(self, initialAge):
#         if initialAge < 0:
#             self.initialAge = 0
#             print("Age is not valid, setting age to 0.")
#         else:
#             self.initialAge = initialAge

#     def display_info(self): # not a HackerRank required method, but for de-bugging
#         for info in vars(self).values():
#             print(info)
#         return self

#     def yearPasses(self):
#         self.initialAge += 1
#         return self
        
#     def amIOld(self):
#         if self.initialAge < 13: print("You are young.")
#         elif self.initialAge >= 13 and self.initialAge < 18: print("You are a teenager.")
#         else: print("You are old.")
#         return self
# John = Person(20)
# John.display_info().yearPasses().amIOld()

# Day 5: Loops
# Given an int, n, print its 1st 10 multiples. Each multiple n*i where 1<=i<=10 should be printed on a new line
# in the form n*i=result
def multiples(n):
    i = 1
    while i <= 10:
        result = n * i
        print(f"{n} x {i} = {result}")
        i+=1

# Day 6: Let's Review
# Given a string s, of length n that is indexed from 0 to n-1, print its even-indexed & odd-indexed characters as 2 space-separated
# strings on a single line.
def string_indexes(s):
    even_string = ""
    odd_string = ""
    for i in range(len(s)):
        if i %2 == 0:
            even_string+=s[i]
            i+=1
        else: 
            odd_string+=s[i]
            i+=1
    print(f"{even_string} {odd_string}")
# above function gives us the answer we want, but isn't accepted by HR because inputs are different