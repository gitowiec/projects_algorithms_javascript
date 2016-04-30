# projects_algorithms_javascript
Coding playground of JavaScript

## Question 1
Compute to 100: Given the digits 123456789, build an expression by inserting "+" or "-" anywhere BETWEEN the digits so that it results to 100.
Your answer should return all possible combinations.
Example: 1 + 23 - 4 + 5 + 6 + 78 - 9 = 100

## Question 2
MapReduce: You are provided with a dataset which is an ASCII text file. You are to create a mapreduce program that processes the dataset. The mapper should process each line and produce key-value pairs. The reducer should process the values corresponding to each key. The goal of the program is to find the occurrences of a given word in the text with the mapreduce pattern.

## Question 3
Given a variable length array of integers, partition them such that the even integers precede the odd integers in the array. Your must operate on the array in-place, with a constant amount of extra space. The answer should scale linearly in time with respect to the size of the array.

## Question 4
Design a queuing system. The queue should implement add, view and delete. A viewed message will be invisible to other workers for five seconds unless it is deleted. Messages should be returned in order they were added unless they have been deleted. The add method takes a string as a message and returns a unique id for that message. The view method takes no parameters and returns a hash containing the next message and the unique message id assigned in the add method. The delete method takes the unique message id and returns true if the message was removed within 5 seconds or false if we were too slow. Extra points: Do you see any problems with running this kind of queue in a production envrionment?

## Question 5
Insertion sort. An O(n<sup>2</sup>) sorting algorithm which moves elements one at a time into the correct position. The algorithm consists of inserting one element at a time into the previously sorted part of the array, moving higher ranked elements up as necessary. To start off, the first (or smallest, or any arbitrary) element of the unsorted array is considered to be the sorted part.

## Question 6
Selection sort. This sorting algorithm is a in-place comparison based algorithm in which the list is divided into two parts, sorted part at left end and unsorted part at right end. Initially sorted part is empty and unsorted part is entire list. It has O(n<sup>2</sup>) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.
