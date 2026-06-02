f = open("./python files/this.txt","w")
f.write("This is going good for now... \t twinkle twinkle little star")
f.close()

f = open("./python files/this.txt","r")
text = f.read()

if(text == "twinkle"):
    print("present")
else:
    print("Not present")

print(text)
f.close()