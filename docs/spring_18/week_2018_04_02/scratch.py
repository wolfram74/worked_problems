import sympy

def taylor_expand():
    r, u0, n, l = sympy.symbols('r u_0 n l', real=True, positive=True)
    U_func = r**2*n*u0*sympy.exp(-(r-l)**2/l**2)
    sympy.pprint(U_func)
    U_func_dr = U_func.diff(r)
    sympy.pprint(U_func_dr)
    equi_r = sympy.solve(U_func_dr, r)
    print('equilibrium distances ')
    sympy.pprint(equi_r)
    # sympy.pprint(sympy.solve(U_func_dr, r)[0])
    # sympy.pprint(U_func_dr.subs(r,equi_r).simplify())
    print(sympy.latex(U_func.subs(r,0)))
    print(sympy.latex(U_func_dr.subs(r,0)))
    print(sympy.latex(U_func_dr.diff(r).subs(r,0)))

if __name__ == '__main__':
    taylor_expand()
