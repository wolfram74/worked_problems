import sympy

def lc_f():
    r1,r2,r3,va,vb =sympy.symbols('r1 r2 r3 va vb',real=True)
    i1,i2,i3 =sympy.symbols('i1 i2 i3',real=True)
    a_mat = sympy.Matrix([
        [1,-1,-1],
        [r1,0,r3],
        [0,r2,r3]
        ])
    i_vals = sympy.Matrix([[i1],[i2],[i3]])
    b_vals = sympy.Matrix([[0],[va],[vb]])
    soln = sympy.solve(a_mat*i_vals-b_vals,(i1,i2,i3))
    sympy.pprint(soln)

if __name__ == '__main__':
    lc_f()
