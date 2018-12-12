import sympy

def mathjaxify(expr):
    print(sympy.latex(expr).replace('\\', '\\\\'))

def poisson(xs, ps, A,B):
    sum1 = 0
    for ind in range(len(xs)):
        sum1 += A.diff(xs[ind])*B.diff(ps[ind])
    sum2 = 0
    for ind in range(len(xs)):
        sum2 -= B.diff(xs[ind])*A.diff(ps[ind])

    return sum1- sum2

def relativistic():
    x, vx, px = sympy.symbols('x v p', real=True,)
    m, c = sympy.symbols('m c', real=True, positive=True)
    lag = -m*c**2*sympy.sqrt(1-vx**2/c**2)
    momen = lag.diff(vx)
    sympy.pprint(lag)
    sympy.pprint(momen)
    v_guess = (c*px)/sympy.sqrt(c**2*m**2+px**2)
    invert = sympy.solve(momen-px, vx)
    print(invert)
    sympy.pprint(v_guess)
    sympy.pprint(invert[1])
    # sympy.pprint((invert[1]-v_guess).expand().simplify())
    hamil = (px*v_guess - lag.subs(vx, v_guess)).expand().simplify()
    sympy.pprint( hamil)
    mathjaxify(hamil)
    xdot = hamil.diff(px)
    sympy.pprint( xdot)
    mathjaxify(xdot)
    sympy.pprint( xdot.diff(px).subs(px,0)*px)


def ham_vec():
    x,y,z, px, py, pz, gam = sympy.symbols('x y z px py pz gamma', real=True)
    h_vec_x = px - gam*(-sympy.sin(sympy.atan(x/y)))
    h_vec_y = py - gam*(sympy.cos(sympy.atan(x/y)))
    h_vec_z = pz
    pos = (x,y,z)
    momen = (px, py, pz)
    mathjaxify(poisson(pos, momen, h_vec_x, h_vec_x))
    sympy.pprint(poisson(pos, momen, h_vec_x, h_vec_x))
    sympy.pprint(poisson(pos, momen, h_vec_x, h_vec_y))
    sympy.pprint(poisson(pos, momen, h_vec_y, h_vec_y))
    sympy.pprint(poisson(pos, momen, h_vec_z, h_vec_z))

def ham_jacobi():
    x,z, pix, piz, t = sympy.symbols('x z pi_x pi_z t', real=True)
    qx,qz= sympy.symbols('q_x q_z', real=True)
    m, g= sympy.symbols('m g', real=True,positive=True)
    E, W, c0 = sympy.symbols('E w c0', real=True)
    princ =pix*x +c0 -E*t+(
        2*m*sympy.sqrt(2*g)*(piz**-1 - z)**(1.5)/(3)
        )
    E_equiv = pix**2/(2*m)+m*g/piz
    W_equiv = 2*m**2*g/piz
    princ = princ.subs(E, E_equiv)
    princ = princ.subs(W, W_equiv)
    gen_func = princ - qx*pix-qz*piz
    sympy.pprint(princ)
    print("simpl")
    sympy.pprint(princ.simplify())
    sympy.pprint(gen_func)
    sympy.pprint(gen_func.diff(z))
    sympy.pprint(gen_func.diff(piz))
    sympy.pprint(princ.diff(piz))

if __name__ == '__main__':
    # ham_vec()
    ham_jacobi()
    # relativistic()
