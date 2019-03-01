import sympy

def mathjaxify(expr):
    print(returnMathjaxify(expr))
def returnMathjaxify(expr):
    return sympy.latex(expr).replace('\\', '\\\\')

def christoffel_template(et1,eb1,eb2):
    chart1 = returnMathjaxify(et1)
    charb1 = returnMathjaxify(eb1)
    charb2 = returnMathjaxify(eb2)
    print(chart1)
    dumby1 = '\\\\alpha_{1}'
    template =  \
        '\\\\frac{1}{2}' \
        +'g^{'+chart1+dumby1+'}' \
        +'(' \
            +'\\\\partial_{%s}'%charb1 \
            +'g_{%s %s}'%(charb2, dumby1) \
            +'+\\\\partial_{%s}'%charb2 \
            +'g_{%s %s}'%(dumby1,charb1) \
            +'-\\\\partial_{%s}'%dumby1 \
            +'g_{%s %s}'%(charb1,charb2) \
        +')'
    return template

def prob1():
    t, r, thtp, thte = sympy.symbols('t r theta_p theta_e', real=True)
    print(christoffel_template(r, thtp, thtp))

prob1()
