import sympy

def mathjaxify(expr):
    print(returnMathjaxify(expr))
def returnMathjaxify(expr):
    return sympy.latex(expr).replace('\\', '\\\\')


def prob2d():
    w, m, M = sympy.symbols('omega m M')
    I = sympy.I
    a = (1-
        I*w/(2*M**.5)
        +
        I*m/(2*M**.5)
        )
    b = (1-
    I*w/(2*M**.5)
    -
    I*m/(2*M**.5)
    )
    sympy.pprint(a)
    mathjaxify((a*b).expand())
    t1 = 1-I*4*w*M**(.5)-w**2
    t2 = -(-1+4*M+(w+I*2*M**(.5))**2)
    sympy.pprint((t1-t2).expand().simplify())
    # sympy.pprint((t2).expand().simplify())
    # sympy.pprint((t1).expand().simplify())

def prob2c():
    sqrt = sympy.sqrt
    r, L, M, f0, f1, f2 = sympy.symbols('r L M f0 f1 f2',real=True)
    f = sympy.Function('f')(r)
    drf = (f1/r**.5- f0/(2*r**1.5))
    sympy.pprint(drf)
    ddrf = (
        3*f0/(4*r**2.5)
        -f1/r**1.5
        +f2/r**.5
        )
    sympy.pprint(ddrf)
    term = (
        (3*r**2-L*M)*drf
        + (r**3-L*M*r)*ddrf
        )
    sympy.pprint(term)
    sympy.pprint(term.expand())
    sympy.pprint(term.expand().simplify())
    newterm = term.expand().simplify()*sqrt(r)
    sympy.pprint(newterm)
    sympy.pprint(newterm.expand().simplify())
    sympy.pprint(newterm.simplify())
    sympy.pprint(newterm.simplify().collect(f2, f0))

def prob2c2():
    r, L, M, f0, f1, f2 = sympy.symbols('r L M f0 f1 f2',real=True)
    m, w = sympy.symbols('m omega',real=True)
    f = sympy.Function('f')(r)
    radial = f/r**.5
    sympy.pprint(radial)
    factor = (r**3-L**2*M*r)
    term = (
        factor*(radial.diff(r))
        ).diff(r)*r**.5
    sympy.pprint(term)
    simpledTerm = term.expand().simplify()
    sympy.pprint( simpledTerm )
    sympy.pprint( simpledTerm.collect(f) )
    f_coeff = (
        -m**2/r**2
        -L**2*w**2/(M*L**2-r**2)
        -L**2*M/(4*r)
        -3*r/4
        )
    iso_factor = -(M*L**2-r**2)/L**2
    sympy.pprint(f_coeff)
    tweaked_coeff = f_coeff*iso_factor
    sympy.pprint(tweaked_coeff)
    sympy.pprint(-(tweaked_coeff.expand().simplify()-w**2))

def prob2b():
    r, L, M = sympy.symbols('r L M', real=True, positive=True)
    g_tt = -(r**2/L**2-M)
    g_rr = (r**2/L**2-M)**(-1)
    g_thth = r**2
    det = g_thth*g_rr*g_tt
    sympy.pprint(det)
    sympy.pprint(det.expand().simplify())


prob2b()
# prob2c()
# prob2c2()
# prob2d()
