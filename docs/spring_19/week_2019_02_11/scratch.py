import sympy

def mathjaxify(expr):
    print(sympy.latex(expr).replace('\\', '\\\\'))

def inner_prod(vec):
    mag = 0
    for ele in vec:
        mag+= ele*sympy.conjugate(ele)
    return mag

def prob4():
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
    downVec = Sn.eigenvects()[0][2][0]
    sympy.pprint(Sn.charpoly(lam))
    poly = Sn.charpoly(lam)
    sympy.pprint(poly.factor())
    sympy.pprint(downVec)
    mathjaxify(downVec)
    sympy.pprint(inner_prod(downVec))
    mathjaxify(inner_prod(downVec))
    normalization = 1/inner_prod(downVec)
    sympy.pprint((downVec*normalization))
    ortho_norm = (downVec*normalization)
    for term in ortho_norm:
        print('draft')
        sympy.pprint(term)
        print('simpled')
        sympy.pprint(term.expand().simplify())


prob4()
