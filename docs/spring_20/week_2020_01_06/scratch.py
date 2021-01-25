import sympy

def lens_pressure():
    # mars-sun orbit ~ 228E6 km ~ 67E3 R_M
    # mars radius ~ 3.4 E3 km
    y, rf, s, L = sympy.symbols('y r_f s L', postive=True)
    influx = y/sympy.sqrt(y**2+s**2)
    outflux = rf/sympy.sqrt(rf**2+s**2)
    distance = (y**2+s**2)
    integrand = (influx-outflux)*(distance**-2)
    sympy.pprint(integrand)
    # tote_pressure = sympy.integrate(integrand, (s, 0, 2**.5))
    # sympy.pprint( tote_pressure)
    app_int = integrand.series(s, n=4).removeO()
    sympy.pprint(app_int)
    # app_pressure = sympy.integrate(app_int, (s, 0, 2**.5))
    # sympy.pprint( app_pressure)
    numer_int = integrand.subs([(y,66700),(rf, 319)])
    sympy.pprint(numer_int)
    expan_s = numer_int.series(s, n=5).removeO()
    sympy.pprint(expan_s)
    # numer_pressure = sympy.integrate(numer_int, (s, 0, 2**.5))
    # sympy.pprint( numer_pressure)
    numer_pressure = sympy.integrate(expan_s, (s, 0, 2**.5))
    sympy.pprint( numer_pressure)

def L_expand_in_RF():
    y, rf, s, L = sympy.symbols('y r_f s L', postive=True)
    L_exact = sympy.sqrt(2)*y/(sympy.sqrt(rf**2+y**2))
    sympy.pprint(L_exact)
    approx_L = sympy.series(L_exact, rf)
    sympy.pprint(approx_L)

lens_pressure()
# L_expand_in_RF()
# #
# Dissertation Research
# Dissertation    Logan Main Campus   PHYS    7970    018 1 TO 15 13422   Boyd Edwards (Primary
