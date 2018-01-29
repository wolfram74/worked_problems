import sympy

def dipole():
    z, rho, tht, vz, vrh, vtht = sympy.symbols('z rho theta \dot{z} \dot{rho} \dot{theta}', real=True)
    sympy.pprint((z, rho, tht, vz, vrh, vtht))
    pz, prho, ptht = sympy.symbols('p_z p_rho p_theta', real=True)
    M, mu, q, m = sympy.symbols('M mu_0 q m', real=True)
    Abs = sympy.symbols('A_theta', real=True)
    pi = sympy.pi
    r = sympy.sqrt(z**2+rho**2)

    # Atht = M*mu*rho / (4*pi*r**3)
    Atht = Abs
    # sympy.pprint(r)
    # sympy.pprint(Atht)
    KE = m*(vz**2+vrh**2+(rho*vtht)**2)/2
    PE = q*(rho*vtht)*Atht
    L = KE-PE
    # sympy.pprint(L)
    PEs = (ptht+3*q*rho*Atht/2)*(ptht+q*rho*Atht)/rho**2
    # PEs2 = (
    #     3*q**2*Atht**2/2
    #     +5*
    #     )
    PEs2 = (
        (3./2)*q**2*Atht**2*rho**2
        +(5./2)*q*ptht*Atht*rho
        +ptht**2
        )*rho**(-2)
    sympy.pprint(PEs)
    print('take 2')
    sympy.pprint(PEs2)
    sympy.pprint(PEs.simplify())
    sympy.pprint((PEs.simplify()).expand())
    # print(sympy.latex(PEs.simplify()))
    print('comparison')
    sympy.pprint((PEs-PEs2).expand().simplify().simplify())
    return

if __name__=='__main__':
    dipole()
