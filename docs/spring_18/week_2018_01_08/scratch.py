import sympy

def dipole():
    z, rho, tht, vz, vrh, vtht = sympy.symbols('z rho theta \dot{z} \dot{rho} \dot{theta}', real=True)
    sympy.pprint((z, rho, tht, vz, vrh, vtht))
    pz, prho, ptht = sympy.symbols('p_z p_rho p_theta', real=True)
    M, mu, q, m = sympy.symbols('M mu_0 q m', real=True)
    gam = sympy.symbols('gamma')
    Abs = sympy.symbols('A_theta', real=True)
    pi = sympy.pi
    r = sympy.sqrt(z**2+rho**2)

    Atht = M*mu*rho / (4*pi*r**3)
    # Atht = Abs
    # sympy.pprint(r)
    # sympy.pprint(Atht)
    KE = m*(vz**2+vrh**2+(rho*vtht)**2)/2
    KEh = (pz**2+prho**2)
    PE = q*(rho*vtht)*Atht
    L = KE-PE
    # sympy.pprint(L)
    PEs = (ptht+3*q*rho*Atht/2)*(ptht+q*rho*Atht)/rho**2
    # PEs2 = (
    #     3*q**2*Atht**2/2
    #     +5*
    #     )
    PEs2 = (
        3*q**2*Atht**2*rho**2
        +5*q*ptht*Atht*rho
        +2*ptht**2
        )*rho**(-2)/2
    sympy.pprint(PEs)
    print('take 2')
    sympy.pprint(PEs2)
    # print(sympy.latex(PEs.simplify()))
    print('comparison')
    sympy.pprint((PEs-PEs2).expand().simplify().simplify())
    print('hamiltonian')
    sympy.pprint(KEh+PEs)
    gam_block = M*mu*q/sympy.pi
    print('r deriv')
    # sympy.pprint((KEh+PEs).diff(rho).simplify())
    print(sympy.latex((KEh+PEs).diff(rho).simplify().subs(gam_block, gam)).replace('\\', '\\\\'))
    print('z deriv')
    # sympy.pprint((KEh+PEs).diff(rho).simplify())
    print(sympy.latex((KEh+PEs).diff(z).simplify().subs(gam_block, gam)).replace('\\', '\\\\'))
    print('theta deriv')
    # sympy.pprint((KEh+PEs).diff(rho).simplify())
    print(sympy.latex((KEh+PEs).diff(tht).simplify().subs(gam_block, gam)).replace('\\', '\\\\'))
    return

if __name__=='__main__':
    dipole()
