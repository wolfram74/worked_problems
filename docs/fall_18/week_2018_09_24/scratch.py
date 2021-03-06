import sympy


def prob1():
    m, a, l, g, r, vr = sympy.symbols(' m alpha l g r vr ')

    rddot = (l**2*m**-1*r**-3-r*(2*m*g*a+4*m*a**2*vr**2))/(m*(1+4*a**2*r**2))
    r04 = (l**2/(2*g*a*(m**2)))
    r02 = sympy.sqrt(r04)
    sympy.pprint(rddot)
    sympy.pprint(r04)
    sympy.pprint(rddot.diff(r).expand().simplify())
    taylor = rddot.diff(r).subs([(r**4, r04), (vr, 0)])
    sympy.pprint(taylor)
    taylor = taylor.subs(r**4, r04).expand().simplify()
    sympy.pprint(taylor)
    taylor = taylor.subs(r**4, r04).expand().simplify()
    sympy.pprint(taylor)
    sympy.pprint(sympy.sqrt(r04))
    taylor = taylor.subs(r**2, r02).expand().simplify()
    sympy.pprint(taylor)
    print(sympy.latex(taylor))

def prob3():
    r0, tht, m, l, r = sympy.symbols('r0 theta m l r')
    rp = sympy.sqrt(2*r0**2*(1+sympy.cos(tht)))
    diff1 = rp.diff(tht)
    sympy.pprint(diff1)
    sympy.pprint(diff1*l*(m*r**2)**(-1))
    print('midway')
    mid_term = (diff1*(m*r**2)**(-1)).subs(r, rp)
    sympy.pprint(mid_term)
    print('---')
    diff2 = (mid_term).diff(tht)
    sympy.pprint(diff2)
    sympy.pprint(diff2*r**(-2))
    term1 = diff2*r**(-2)*l
    sympy.pprint(term1.subs(r, rp).expand().simplify())

def rotator():
    a1, a2, a3, a4 = sympy.symbols('a1 a2 a3 a4')
    b1, b2, b3, b4 = sympy.symbols('b1 b2 b3 b4')
    c1, c2, c3, c4 = sympy.symbols('c1 c2 c3 c4')
    d1, d2, d3, d4 = sympy.symbols('d1 d2 d3 d4')
    i_block = sympy.Matrix([
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
        ])
    # testor = sympy.Matrix([
    #     [0,1,0,0],
    #     [1,0,0,0],
    #     [0,0,0,1],
    #     [0,0,1,0]
    #     ])
    testor = sympy.Matrix([
        [0,1,0,0],
        [0,0,1,0],
        [1,0,0,0],
        [0,0,0,1]
        ])
    probe = sympy.Matrix([
        [a1, a2, a3, a4],
        [b1, b2, b3, b4],
        [c1, c2, c3, c4],
        [d1, d2, d3, d4]
        ])

    result = i_block*probe
    sympy.pprint(result)

# prob3()
rotator()
