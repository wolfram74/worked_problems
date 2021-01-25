import sympy

def prob3():
    x, p = sympy.symbols('x p', real=True)
    for pow_x in range(-3, 4):
        for pow_p in range(-3, 4):
            pi = -x**pow_x*p**pow_p
            brack = (
                2*x*p**3*pi.diff(p)
                -3*x**2*p**2*pi.diff(x)
                )
            print(pi, brack)

if __name__ == '__main__':
    prob3()
