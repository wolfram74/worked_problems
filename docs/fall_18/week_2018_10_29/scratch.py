import sympy

def bose_2_lev():
    e1, e2, beta, mu = sympy.symbols('e1 e2 beta mu', real=True)
    z = sympy.symbols('z', real=True)
    exp = sympy.exp
    # p1 = (1-exp(-beta*(e1-mu)))**-1
    # p2 = (1-exp(-beta*(e2-mu)))**-1
    p1 = (1-exp(-beta*(e1)+z))**-1
    p2 = (1-exp(-beta*(e2)+z))**-1
    partition = p1*p2
    sympy.pprint(partition)
    # sympy.pprint(partition.subs(beta*mu, z))
    sympy.pprint(sympy.log(partition))
    # sympy.pprint(sympy.log(partition).diff(e1))
    # sympy.pprint(sympy.log(partition).diff(e1)/beta)
    sympy.pprint(-sympy.log(partition).diff(beta))

    # sympy.pprint(partition.diff()/beta )

if __name__ == '__main__':
    bose_2_lev()
