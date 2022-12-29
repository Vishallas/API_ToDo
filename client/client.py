import requests,json

n1 = int(input("Enter the number : ").strip())
n2 = int(input("Enter the number : ").strip())

sum = requests.get(f'https://ShyVioletredCores.vishal88147.repl.co/add?n1={n1}&n2={n2}').json()

print(f"The sum is {sum['sum']}.") 