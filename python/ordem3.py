
######Faca um programa que dado 3 numeros inteiros distintos, 
# imprima em ordem crescente


a = int(input())
b = int(input())
c = int(input())

if (a<b and b<c):
  print(a,b,c)
if (a<c and c<b):
  print(a,c,b)
if (b<a and a<c):
  print(b,a,c)
if (b<c and c<a):
  print(b,c,a)
if (c<a and a<b):
  print(c,a,b)  
if (c<b and b<a):
  print(c,b,a)  
