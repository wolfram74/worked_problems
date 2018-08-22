import sympy

def spot_check():
    a,b,c = sympy.symbols('a b c', real=True)
    exp1 = a*(1/(b+c)**2 + 1/(b-c)**2)-1
    exp2 = (b-c)**2-2*a*(b+c)
    # sympy.pprint(exp1.expand().simplify())
    # sympy.pprint(exp2.expand().simplify())
    sympy.pprint(exp1)
    sympy.pprint(exp2)
    sympy.pprint(exp1-exp2)
    print( sympy.simplify((exp1-exp2)) ==0)

def spot_check2():
    a,b,c = sympy.symbols('a b c', real=True)
    exp1 = a*(1/b+1/c)-1
    exp2 = c*b-a*b-a*c
    diff = exp1 - exp2
    # sympy.pprint(exp1.expand().simplify())
    # sympy.pprint(exp2.expand().simplify())
    sympy.pprint(exp1)
    sympy.pprint(exp2)
    print( diff.expand().simplify())
    print( diff.expand().simplify() ==0)
if __name__ =='__main__':
    # spot_check()
    spot_check2()
