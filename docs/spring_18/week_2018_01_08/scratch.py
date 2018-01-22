import sympy

def dipole():
    z, rho, tht, vz, vrh, vtht = sympy.symbols('z rho theta \dot{z} \dot{rho} \dot{theta}', real=True)
    sympy.pprint((z, rho, tht, vz, vrh, vtht))
    pz, prho, ptht = sympy.symbols('p_z p_rho p_theta', real=True)
    M, mu, q, m = sympy.symbols('M mu_0 q m', real=True)
    pi = sympy.pi
    r = sympy.sqrt(z**2+rho**2)

    Atht = M*mu*rho / (4*pi*r**3)
    # sympy.pprint(r)
    # sympy.pprint(Atht)
    KE = m*(vz**2+vrh**2+(rho*vtht)**2)/2
    PE = q*(rho*vtht)*Atht
    L = KE-PE
    # sympy.pprint(L)
    PEs = (ptht+3*q*rho*Atht/2)*(ptht+q*rho*Atht)/rho**2
    sympy.pprint(PEs)
    sympy.pprint(PEs.simplify())
    sympy.pprint((PEs.simplify()*rho**2).expand())
    print(sympy.latex(PEs.simplify())**2)
    return

if __name__=='__main__':
    dipole()
