import sympy

def mathjaxify(expr):
    print(returnMathjaxify(expr))
def returnMathjaxify(expr):
    return sympy.latex(expr).replace('\\', '\\\\')

def inner_prod(vec):
    mag = 0
    for ele in vec:
        mag+= ele*sympy.conjugate(ele)
    return mag

def prob2():
    g0,g1,g2,g3 = sympy.symbols('g0 g1 g2 g3', real=True)
    I = sympy.I
    Ham = sympy.Matrix([
        [g0+g3,g1-I*g2],
        [g1+I*g2,g0-g3],
        ])
    sympy.pprint(Ham)
    mathjaxify(Ham)
    poly = Ham.charpoly()
    sympy.pprint(poly)
    sympy.pprint(Ham.eigenvects())

def prob3():
    th, ph, lam = sympy.symbols('theta phi lambda',real=True)
    I = sympy.I
    cos = sympy.cos
    sin = sympy.sin
    exp = sympy.exp
    Sn = sympy.Matrix([
        [cos(th),sin(th)*exp(-I*ph)],
        [sin(th)*exp(I*ph),-cos(th)]
        ])
    sympy.pprint(Sn)
    mathjaxify(Sn)
    sympy.pprint(Sn.eigenvects())
    upVec = Sn.eigenvects()[1][2][0]
    sympy.pprint(Sn.charpoly(lam))
    poly = Sn.charpoly(lam)
    sympy.pprint(poly.factor())
    sympy.pprint(upVec)
    mathjaxify(upVec)
    sympy.pprint(inner_prod(upVec))
    sympy.pprint(inner_prod(upVec).expand())
    sympy.pprint(inner_prod(upVec).expand().simplify())
    mag2 = inner_prod(upVec).expand().simplify()
    mathjaxify(mag2)

    print('normalization')
    normalization = sympy.sqrt(1/mag2).expand().simplify()
    sympy.pprint(normalization)
    # sympy.pprint(normalization.simplify())
    # sympy.pprint(normalization.expand().simplify())
    sympy.pprint((upVec*normalization))
    ortho_norm = (upVec*normalization)
    for term in ortho_norm:
        print('draft')
        sympy.pprint(term)
        print('simpled')
        sympy.pprint(term.expand().simplify())
        mathjaxify(term.expand().simplify())


# prob2()
prob3()
