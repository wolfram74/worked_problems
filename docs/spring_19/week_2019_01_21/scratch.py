import sympy

def mathjaxify(expr):
    print(sympy.latex(expr).replace('\\', '\\\\'))

def prob4():
    sin = sympy.sin
    cos = sympy.cos
    r, pol, eq = sympy.symbols('r theta_p theta_e', real=True)
    q, m, hb, c, E = sympy.symbols('q m hbar c E', positive=True)
    U = -q/r
    # psi = c*(1-r*sin(pol/2)**2)*sympy.exp(-r/2)
    psi = c*(1-r*(1-cos(pol))/2)*sympy.exp(-r/2)
    psi = psi.expand().simplify()
    # sympy.pprint(psi.diff(pol))
    # mathjaxify(psi.diff(pol))
    tr = ((r**2*psi.diff(r)).diff(r))
    tpol = (
        sin(pol)*psi.diff(pol)
        ).diff(pol)/sin(pol)
    tKE = hb**2*(tr+tpol)/(r**2*2*m)

    # sympy.pprint(tKE)
    # sympy.pprint(tKE.expand())
    # print('bop')
    # sympy.pprint(tKE.expand().simplify())
    # sympy.pprint(psi.diff(pol))
    sympy.pprint(psi)
    r1 = (r**2*psi.diff(r)).simplify()
    print('r1')
    sympy.pprint(r1)
    mathjaxify(r1)
    tr2 = r1.diff(r).simplify()
    print('tr2')
    sympy.pprint(tr2)
    mathjaxify(tr2)
    pol1 = (psi.diff(pol)*sin(pol)).simplify()
    print('pol1')
    sympy.pprint(pol1.simplify())
    mathjaxify(pol1)
    tpol2 = (pol1.diff(pol)/sin(pol)).simplify()
    print('tpol')
    sympy.pprint(tpol2)
    mathjaxify(tpol2)
    tsum = (tr2+tpol2).simplify()
    sympy.pprint(tsum)
    sympy.pprint(tsum/(r**2))
    t_fin = hb**2*tsum/(r**2*2*m).simplify()
    print('t_fin')
    mathjaxify(t_fin)
    rhs = U*psi-t_fin
    print('rhs')
    sympy.pprint(rhs.expand())
    sympy.pprint(rhs.expand().simplify())
    mathjaxify(rhs.expand().simplify())
    guess = rhs.expand().simplify()/psi
    print('dividing by psi')
    sympy.pprint(guess)
    sympy.pprint(guess.expand().simplify())
    mathjaxify(guess.expand().simplify())
    # trial = rhs.expand().simplify()
    # result = trial-E*psi
    # sympy.pprint(result )
    # sympy.pprint(result.expand().simplify() )
    # sympy.pprint((result.expand().simplify()/psi).expand().simplify() )


if __name__=='__main__':
    prob4()
