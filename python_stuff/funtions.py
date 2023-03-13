

#Vreate function 
def sayhello(name = "Sam" ):
    print('hello '+ name )

sayhello("Alex")



# Return Value 
def getSum(num1,num2):
    total = num1 + num2
    return total

numSum = getSum(2,3)
print(numSum)



def addOneToNum(num):
    num += 1            #This num is inside the scope
    return num

num = 5                     #This num is ot in the function (outside scope)
new_num = addOneToNum(num)
print(new_num)




#lambda function 
getsum = lambda num1, num2, : num1 + num2
print(getsum(9,2))


addOneToNum = lambda num : num + 1
print(addOneToNum(3))
