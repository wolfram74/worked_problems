import sympy
from sympy.physics.mechanics import dynamicsymbols
# dynamicSymbols = sympy.physics.vector.dynamicsymbols
pprint = sympy.pprint
vprint = sympy.physics.vector.printing.vprint

def mathjaxify(expr):
    print(sympy.latex(expr).replace('\\', '\\\\'))

def perturber(expr, sub_vals, ep):
    pprint(expr)
    subbed = expr.subs(sub_vals)
    pprint(subbed)
    mathjaxify(subbed)
    pprint(subbed.expand().collect(ep))
    perturbed = subbed.expand().collect(ep).subs([(ep**n, 0) for n in range(3, 7)])
    pprint(perturbed)
    mathjaxify(perturbed)

def prob1():
    a, az, r, z, w, lam, alpha, m, g = sympy.symbols('a a_z r z omega lambda alpha m g')
    r_0, z_0, w_0, lam_0, ep, t, L = sympy.symbols('r0 z0 omega_0 lambda_0 epsilon t L')
    r_1,z_1, w_1, lam_1 = dynamicsymbols('r1 z1 omega_1 lambda_1')
    r_2,z_2, w_2, lam_2 = dynamicsymbols('r2 z2 omega_2 lambda_2')
    r_eq = a - r*w**2+2*lam*alpha*r
    z_eq = az + g - lam
    ang_eq =L- m*r**2*w
    lam_eq = z-alpha*r**2
    # mathjaxify(r_eq)
    # mathjaxify(z_eq)
    # mathjaxify(ang_eq)
    # mathjaxify(lam_eq)
    r_var = r_0+ep*r_1+ep**2*r_2
    z_var = z_0+ep*z_1+ep**2*z_2
    w_var = w_0+ep*w_1+ep**2*w_2
    lam_var = lam_0+ep*lam_1+ep**2*lam_2
    sub_vals = [
        (r, r_var),
        (a, r_var.diff(t).diff(t)),
        (z, z_var),
        (az, z_var.diff(t).diff(t)),
        (w, w_var),
        (lam, lam_var),
        ]
    # perturber(r_eq, sub_vals, ep)
    # perturber(z_eq, sub_vals, ep)
    perturber(ang_eq, sub_vals, ep)
    # perturber(lam_eq, sub_vals, ep)
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
    prob1()
