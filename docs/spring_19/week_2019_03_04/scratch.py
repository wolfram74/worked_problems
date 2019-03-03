import sympy

def mathjaxify(expr):
    print(returnMathjaxify(expr))
def returnMathjaxify(expr):
    return sympy.latex(expr).replace('\\', '\\\\')

def christoffel_template(et1,eb1,eb2):
    chart1 = returnMathjaxify(et1)
    charb1 = returnMathjaxify(eb1)
    charb2 = returnMathjaxify(eb2)
    dumby1 = '\\\\alpha_{1}'
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

def prob1():
    t, r, thtp, thte = sympy.symbols('t r theta_p theta_e', real=True)
    mu, nu, sig, bet = sympy.symbols('mu nu sigma beta', real=True)
    coords = [t, r, thtp, thte]
    # print(christoffel_template(r, thtp, t))
    # print(christoffel_template(mu, nu, sig))
    for elt1 in coords:
        for elb1 in coords:
            for elb2 in coords:
                print(christoffel_template(elt1, elb1, elb2))
                print('\\'*4)

prob1()
