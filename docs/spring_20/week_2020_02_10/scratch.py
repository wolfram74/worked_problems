import sympy

def bifurcation1():
    x= sympy.symbols('x', real=True)
    sig = sympy.symbols('sigma', real=True, positive=True)
    U = x**2+((sig*sympy.sqrt(2*sympy.pi))**-1)*sympy.exp(-x**2/sig**2)
    sympy.pprint(U)
    force = -U.diff(x)
    sympy.pprint(force)
    # sympy.pprint(force.collect(x))
    # other_term = force.collect(x)/x
    # sympy.pprint(other_term)
    dxForce = force.diff(x)
    sympy.pprint(dxForce)
    # dsdxforce = dxForce.diff(sig)
    # sympy.pprint(dsdxforce)
    crit_sig = sympy.solve(dxForce.subs(x,0), sig)[0]
    sympy.pprint(crit_sig)
    sympy.pprint(crit_sig.evalf())

bifurcation1()
