import sympy

def perturbed_quants(terms, order):
    ep = sympy.symbols('epsilon', real=True)
    replacements = []
    new_vars = []
    for term in terms:
        raw = str(term)
        expanded = [ raw+'%d'%expand for expand in range(order+1)]
        symbs = sympy.symbols(' '.join(expanded), real=True)
        total = 0
        for ind in range(order+1):
            total += (symbs[ind]*ep**ind)
        replacements.append((term, total))
        new_vars.append(symbs)
    return replacements, new_vars

def main():
    pth, pr, th, r = sympy.symbols('p_theta p_r theta r', real=True)
    alph, m, n, ep = sympy.symbols('alpha m n epsilon', real=True)
    coords = [th, r]
    momenta = [pth, pr]
    sympy.pprint(momenta)
    sympy.pprint(coords)
    ham = (pth**2*r**(-2)+pr**2)/(2*m)+alph*r**n
    sympy.pprint(ham)
    pr_dot = -ham.diff(r)
    sympy.pprint(pr_dot)
    pth0 = sympy.solve(pr_dot, pth)[1]
    perturbing, new_vars = perturbed_quants([r], 2)
    pth0 = pth0.subs(r, new_vars[0][0])
    sympy.pprint(pth0)
    pr_dot1 = pr_dot.subs(pth, pth0).expand().simplify()
    sympy.pprint(pr_dot1)
    # sympy.pprint(pr_dot1.expand().simplify())
    sympy.pprint(perturbing)
    pr_dot2 = pr_dot1.subs(perturbing)
    sympy.pprint(pr_dot2)
    sympy.pprint(pr_dot2.expand().simplify().collect(ep))



if __name__ == '__main__':
    main()
'''
austin shenans
laser tag?
http://www.blazertag.com/
esther's follies?
https://www.esthersfollies.com/
http://www.austincityguide.com/listings/south-congress-avenue-shopping
escape rooms?
AR adventure?
https://www.thearadventureaustin.com/
transcendental brunch
http://moonshinegrill.com/menus/
'''
