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
def ferm_2_lev():
    e1, e2, beta, mu = sympy.symbols('e1 e2 beta mu', real=True)
    z = sympy.symbols('z', real=True)
    exp = sympy.exp
    # p1 = (1-exp(-beta*(e1-mu)))**-1
    # p2 = (1-exp(-beta*(e2-mu)))**-1
    # p1 = (1+exp(-beta*(e1)+z))
    # p2 = (1+exp(-beta*(e2)+z))
    p1 = (1+exp(-beta*(e1-mu)))
    p2 = (1+exp(-beta*(e2-mu)))
    partition = p1*p2
    sympy.pprint(partition)
    # sympy.pprint(partition.subs(beta*mu, z))
    # sympy.pprint(sympy.log(partition))
    # sympy.pprint(sympy.log(partition).diff(e1))
    sympy.pprint(sympy.log(partition).diff(e1)/beta)
    # sympy.pprint(-sympy.log(partition).diff(beta))

    # sympy.pprint(partition.diff()/beta )

def many_lev_N():
    ei, beta, mu = sympy.symbols('e_i beta mu', real=True)
    z = sympy.symbols('z', real=True)
    exp = sympy.exp
    zi = (1+exp(-beta*(ei-mu)))
    sympy.pprint((sympy.log(zi)/beta).diff(mu))

if __name__ == '__main__':
    # bose_2_lev()
    # ferm_2_lev()
    many_lev_N()
