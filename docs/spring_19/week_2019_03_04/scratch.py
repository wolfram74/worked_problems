import sympy

def mathjaxify(expr):
    print(returnMathjaxify(expr))
def returnMathjaxify(expr):
    return sympy.latex(expr).replace('\\', '\\\\')

def christoffel_template(et1,eb1,eb2):
    # only valid when metric is diagonal
    chart1 = returnMathjaxify(et1)
    charb1 = returnMathjaxify(eb1)
    charb2 = returnMathjaxify(eb2)
    # dumby1 = '\\\\alpha_{1}'
    dumby1 = chart1
    prefix = '\\\\Gamma^{%s}_{%s %s}=\n'%(chart1, charb1, charb2)
    template =  \
        '\\\\frac{1}{2}' \
        +'g^{'+chart1+dumby1+'}' \
        +'(\n' \
            +'\\\\partial_{%s}'%charb1 \
            +'g_{%s %s}\n'%(charb2, dumby1) \
            +'+\\\\partial_{%s}'%charb2 \
            +'g_{%s %s}\n'%(dumby1,charb1) \
            +'-\\\\partial_{%s}'%dumby1 \
            +'g_{%s %s}\n'%(charb1,charb2) \
        +')'
    return prefix+template

def riemann_template(et1, eb1, eb2, eb3):
    chart1 = returnMathjaxify(et1)
    charb1 = returnMathjaxify(eb1)
    charb2 = returnMathjaxify(eb2)
    charb3 = returnMathjaxify(eb3)
    prefix = 'R^{%s}_{\\\\;\\\\;%s %s %s}' %(chart1, charb1, charb2, charb3)

def symbolic_christoff(metric, coords, indt1, indb1, indb2):
    coeff = 1/(2*metric[indt1][indt1])
    term1 = sympy.diff(metric[indb2][indt1], coords[indb1] )
    term2 = sympy.diff(metric[indt1][indb1], coords[indb2] )
    term3 = sympy.diff(metric[indb1][indb2], coords[indt1] )
    return (coeff*(term1+term2-term3)).simplify()

def symbolic_riemann(metric, coords, indt1, indb1, indb2, indb3):
    chris1 = symbolic_christoff(metric, coords, indt1, indb3, indb1 )
    t1 = sympy.diff(chris1, coords[indb2])
    chris2 = symbolic_christoff(metric, coords, indt1, indb2, indb1 )
    t2 = sympy.diff(chris2, coords[indb3])
    contra1 = 0
    contra2 = 0
    for dumby in range(4):
        contra1 += symbolic_christoff(metric, coords, indt1, indb2, dumby )\
            *symbolic_christoff(metric, coords, dumby, indb3, indb1 )
        contra2 += symbolic_christoff(metric, coords, indt1, dumby, indb3)\
            *symbolic_christoff(metric, coords, dumby, indb2, indb1 )
    return (t1-t2+contra1-contra2).expand().simplify()

def ricci_ten(metric, coords, indb1, indb2):
    contra = 0
    for dumby in range(4):
        contra += symbolic_riemann(metric, coords,
            dumby,indb1, dumby, indb2)
    return (contra).simplify()

def ricci_scalar(metric, coords):
    contra = 0
    for dumby1 in range(4):
        for dumby2 in range(4):
            if not dumby1 == dumby2:
                continue
            contra += ricci_ten(
                metric, coords,
                dumby1, dumby2)/metric[dumby1][dumby2]
    return contra.expand().simplify()

def all_christofs(metric, coords):
    nonzerro =0
    for indt in range(4):
        for indb1 in range(4):
            for indb2 in range(4):
                christoff = symbolic_christoff(metric, coords, indt, indb1, indb2)
                if christoff == 0:
                    continue
                nonzerro+=1
                # sympy.pprint([coords[indt], coords[indb1], coords[indb2]])
                # sympy.pprint(christoff)
                print(christoffel_template(coords[indt], coords[indb1], coords[indb2]))
                print('=')
                print(returnMathjaxify(christoff))
                print('\\\\\\\\ \n')
    print(nonzerro)


def all_riemanns(metric, coords):
    nonzerro =0
    for indt in range(4):
        for indb1 in range(4):
            for indb2 in range(4):
                for indb3 in range(4):
                    riem = symbolic_riemann(metric, coords,
                        indt, indb1, indb2, indb3)
                    if riem == 0:
                        continue
                    nonzerro+=1
                    sympy.pprint([
                        coords[indt], coords[indb1],
                        coords[indb2], coords[indb3]
                        ])
                    sympy.pprint(riem)
                    print('\n')
    print(nonzerro)

def all_ricci_ten(metric, coords):
    nonzerro = 0
    for indb1 in range(4):
        for indb2 in range(4):
            ricci_t = ricci_ten(metric, coords,
                indb1, indb2)
            if not ricci_t == 0:
                nonzerro+=1
                sympy.pprint([
                    coords[indb1], coords[indb2]
                    ])
                sympy.pprint(ricci_t)
                print('\n')
    print(nonzerro)

def prob1():
    t, r, thtp, thte = sympy.symbols('t r theta_p theta_e', real=True)
    A = sympy.Function('A')(r)
    B = sympy.Function('B')(r)
    C = sympy.Function('C')(r)
    exp=sympy.exp
    sin = sympy.sin
    mu, nu, sig, bet = sympy.symbols('mu nu sigma beta', real=True)
    metric = [
        [-exp(2*A),0,0,0],
        [0,exp(2*B),0,0],
        [0,0,exp(2*C),0],
        [0,0,0,sin(thtp)**2*exp(2*C)]
    ]
    coords = [t, r, thtp, thte]
    # print(christoffel_template(r, thtp, t))
    # print(christoffel_template(mu, nu, sig))
    # for elt1 in coords:
    #     for elb1 in coords:
    #         for elb2 in coords:
    #             print(christoffel_template(elt1, elb1, elb2))
    #             print('\\'*4)
    all_christofs(metric, coords)
    # all_riemanns(metric, coords)
    # all_ricci_ten(metric, coords)
    # ricci_s = ricci_scalar(metric, coords)
    # sympy.pprint(ricci_s)

def expand_riemann():
    g1,g2,g3 = sympy.symbols('gamma_1 gamma_2 gamma_3')
    b1,a = sympy.symbols('beta_1 alpha')
    print(christoffel_template(b1, g3, g1))
    print(christoffel_template(b1, g2, g1))
    print(christoffel_template(b1, g2, a))
    print(christoffel_template(a, g3, g1))
    print(christoffel_template(b1, a, g3))
    print(christoffel_template(a, g2, g1))

def expand_ricci_ten():
    g1,g2,g3 = sympy.symbols('gamma_1 gamma_2 gamma_3')
    b1,a = sympy.symbols('beta_1 alpha')
    print(christoffel_template(b1, g2, g1))
    print(christoffel_template(b1, b1, g1))
    print(christoffel_template(b1, b1, a))
    print(christoffel_template(a, g2, g1))
    print(christoffel_template(b1, a, g2))
    print(christoffel_template(a, b1, g1))

prob1()
# expand_riemann()
# expand_ricci_ten()
