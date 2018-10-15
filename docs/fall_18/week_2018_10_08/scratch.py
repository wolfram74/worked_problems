import sympy
from sympy.physics.mechanics import dynamicsymbols
# dynamicSymbols = sympy.physics.vector.dynamicsymbols
pprint = sympy.pprint
vprint = sympy.physics.vector.printing.vprint

def mathjaxify(expr):
    print(sympy.latex(expr).replace('\\', '\\\\'))

def prob1():

    return

def prob2():
    # r1, tht1 = dynamicSymbols('r1 tht1')
    a, v, r, w, t = sympy.symbols('a v r omega t')
    r0, ep, L, mu, w0 = sympy.symbols('r0 epsilon L mu omega0', real=True)
    r1, w1 = dynamicsymbols('r1 omega_1')
    # r0, r1, ep, L, mu = sympy.symbols('r0 r1 epsilon L mu', real=True)
    # vr1, ar1 = sympy.symbols('dot{r1} dd_r1')
    radial = a+r*w**2-r**(-2)
    angular = L-r**2*w
    pprint( radial)
    perturbed_r = radial.subs([
        (r, r0+ep*r1),
        (a, (ep*r1.diff().diff())),
        (w, w0+ep*w1)
            ])
    pprint( perturbed_r )
    print(sympy.latex(perturbed_r))
    pprint( perturbed_r.expand().collect(ep) )
    print( sympy.latex(perturbed_r.expand().collect(ep)).replace('\\', '\\\\') )
    first_order = perturbed_r.expand().collect(ep).subs([(ep**3, 0), (ep**2, 0)])
    pprint( first_order )
    pprint( angular)
    mathjaxify( angular.subs([
        (r, r0+ep*r1),
        (w, w0+ep*w1)
            ]))
    mathjaxify( angular.subs([
        (r, r0+ep*r1),
        (w, w0+ep*w1)
            ]).expand().collect(ep))
    perturbed_omeg = angular.subs([
        (r, r0+ep*r1),
        (w, w0+ep*w1)
            ]).expand().collect(ep).subs([(ep**3, 0), (ep**2, 0)])
    pprint(perturbed_omeg)
    mathjaxify(perturbed_omeg)
    return

def prob3():

    return

def prob4():

    return

if __name__=='__main__':
    prob2()
