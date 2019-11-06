def check_number(n):
    a1 = (n-3)%3 == 0
    b1 = (n-6)%4 == 0
    c1 = (n-10)%5 == 0
    return a1 and b1 and c1

def show_run(n):
    a1 = (n-3)/3
    b1 = (n-6)/4
    c1 = (n-10)/5
    print(n, a1, b1, c1)

for num in range(000,1000):
    if check_number(num):
        show_run(num)
