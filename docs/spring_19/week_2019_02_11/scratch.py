import sympy

def mathjaxify(expr):
    print(sympy.latex(expr).replace('\\', '\\\\'))

def inner_prod(vec):
    mag = 0
    for ele in vec:
        mag+= ele*sympy.conjugate(ele)
    return mag

def mat_rep(a1, a2, basis_vecs):
    start = '\\\\left[\\\\begin{matrix}\n'
    body = ''
    for vec1 in basis_vecs:
        row = ''
        for vec2 in basis_vecs:
            row += '<%s||%s><%s||%s>^* &' %(vec1, a1, vec2, a2)
        row += '\\\\\\\\ \n'
        body += row
    end = '\\\\end{matrix}\\\\right]'
    return start +body+end

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
    sympy.pprint(inner_prod(downVec).expand())
    sympy.pprint(inner_prod(downVec).expand().simplify())
    mag2 = inner_prod(downVec).expand().simplify()
    mathjaxify(mag2)

    print('normalization')
    normalization = sympy.sqrt(1/mag2).expand().simplify()
    sympy.pprint(normalization)
    # sympy.pprint(normalization.simplify())
    # sympy.pprint(normalization.expand().simplify())
    sympy.pprint((downVec*normalization))
    ortho_norm = (downVec*normalization)
    for term in ortho_norm:
        print('draft')
        sympy.pprint(term)
        print('simpled')
        sympy.pprint(term.expand().simplify())
        mathjaxify(term.expand().simplify())

def prob5():
    print(mat_rep('+', '+', ('+','-')))
    print(mat_rep('-', '-', ('+','-')))
def prob6():
    print(mat_rep('+', '-', ('+','-')))
    print(mat_rep('-', '+', ('+','-')))

prob4()
# prob5()
# prob6()
