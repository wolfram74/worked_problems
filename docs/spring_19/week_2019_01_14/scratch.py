import sympy
import numpy

cos = sympy.cos
sin = sympy.sin
cosh = sympy.cosh
sinh = sympy.sinh

def mathjaxify(expr):
    print(sympy.latex(expr).replace('\\', '\\\\'))

def prob1():
    ph, th = sympy.symbols('phi theta', real=True)
    L23 = sympy.Matrix([
        [1,0,0,0],
        [0,1,0,0],
        [0,0,cos(th),sin(th)],
        [0,0,-sin(th),cos(th)]
    ])
    l23 = sympy.Matrix([
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,1],
        [0,0,-1,0]
    ])
    L02 = sympy.Matrix([
        [cosh(ph),0,sinh(ph),0],
        [0,1,0,0],
        [sinh(ph),0,cosh(ph),0],
        [0,0,0,1],
    ])
    l02 = sympy.Matrix([
        [0,0,1,0],
        [0,0,0,0],
        [1,0,0,0],
        [0,0,0,0],
    ])
    eta = sympy.Matrix([
        [-1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1]
    ])
    # sympy.pprint(L23.det())
    # sympy.pprint(L02.det())
    # mathjaxify(L02.det())
    # sympy.pprint(L23.transpose()*eta*L23)
    # mathjaxify(L23.transpose()*eta*L23)
    # sympy.pprint(L02.transpose()*eta*L02)
    # mathjaxify(L02.transpose()*eta*L02)
    prob2c(l23,l02, eta)

def prob2c(l23,l02,eta):
    mathjaxify(l23)
    mathjaxify(l02)
    sympy.pprint(l23.transpose()*eta+eta*l23)
    sympy.pprint(l02.transpose()*eta+eta*l02)


def prob2():
    T = sympy.Matrix([
        [2,0,1,-1],
        [1,0,-3,2],
        [-1,1,0,0],
        [2,1,-1,2]
        ])
    V = sympy.Matrix([1, -2, 0, 2])
    eta = sympy.Matrix([
        [-1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1],
        ])
    sympy.pprint(T*eta)
    mathjaxify(T*eta)
    sympy.pprint(eta*T)
    mathjaxify(eta*T)
    T_low = eta*T*eta
    sympy.pprint(T_low)
    sympy.pprint(T_low-T_low.transpose())
    sympy.pprint((T_low-T_low.transpose())/2)
    mathjaxify((T_low-T_low.transpose())/2)


if __name__ =='__main__':
    # prob1()
    prob2()

'''
    # sympy.pprint(T)
    # mathjaxify(eta)
    # mathjaxify(T)
    # mathjaxify(T.transpose())
    # sympy.pprint(T+T.transpose())
    # sympy.pprint(T*eta)
    # sympy.pprint(T*eta-eta*T)
    # sympy.pprint(T*eta-eta*T.transpose())
    # a_T = numpy.array([
    #     [2,0,1,-1],
    #     [1,0,-3,2],
    #     [-1,1,0,0],
    #     [2,1,-1,2]
    #     ])
    # a_eta = numpy.array([
    #     [-1,0,0,0],
    #     [0,1,0,0],
    #     [0,0,1,0],
    #     [0,0,0,1],
    #     ])
    # res = numpy.einsum('ab,bc->ac', a_T, a_eta)
    # print(a_T)
    # print(res)
    # print(res-a_T)

'''
