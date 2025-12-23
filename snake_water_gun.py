import random

list = ["🐍", "💧" , "🔫"]
pc = random.randint(0,2)

pc_choice = list[pc]
user = int(input("Enter a choice out of the three : \n"
           "1. Snake\n" 
           "2. water\n" 
           "3. gun\n"))

print("Your choice : ",list[user-1])
print("pc's choice : ",pc_choice)

if(list[user-1] == pc_choice):
    print("The game has been tied..")
elif((list[user-1] == "🐍" and pc_choice == "💧") or (list[user-1] == "💧" and pc_choice == "🔫") or (list[user-1] == "🔫" and pc_choice == "🐍")):
    print("The user has won!!")
else:
    print("user has lost!!")


