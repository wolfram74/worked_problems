def l1_calc():
    Ms = 2.*10**30
    Mm = 6.4*10**23
    l1 = (Mm/(3*Ms))**(1./3)
    print(l1)
    print(1/l1)

def g_normer():
    bigG = 6.67*10**-11 #L^3 kg^-1 s^-2
    # bigG CGS *100^3*1000^-1 -> 10^-8
    # normL === R_M/1000
    # normT === T_M/1000
    # normG normL^3*normM^-1*normT^-2=1
    # normM/kg = normL^3*normT^-2?
    RM =2.3*10**11 #m
    TM = 5.9*10**7 #s
    normL = 1000./RM
    normT = 1000./TM
    normM = (normL**3/normT**2)*bigG
    print(normM, 'kg per')
    print(1/normM, 'per kg')



if __name__=='__main__':
    # l1_calc()
    g_normer()
'''
0–14   =31255995+ 29919938)
15–24   =22213952+ 21137826)
25–54   =64528673+ 64334499)
55–64   =20357880+ 21821976)
65  =22678235+ 28376817)
'''
0–14
15–24
25–54
55–64
65
