import math
def is_prime(n):
    test = 2
    while test**2 < n:
        if n%test ==0:
            return False
        test += 1
    return True

def term(n):
    return float(n**2)/(n**2-1.)

def term2(j, M, N):
    out = (1.-(M-1.-j)/(N-1.-2*j))
    # print(j, M, N, out)
    return out

def pair_prob(M,N):
    not_p = 1.
    # print(M, N)
    if M > N/2.:
        return 1.
    for j in range(M):
        not_p *= term2(j, M, N)
    return 1.-not_p

def prime_products():
    prod = term(2)*term(3)
    terms = 2
    power = 2
    pisq = math.pi**2
    for n in range(5, 100000):
        if is_prime(n):
            prod*= term(n)
            terms+=1
        if terms == 2**power:
            print(terms, prod, prod/pisq, prod/pisq -1./6)
            power+=1
    print(terms, prod, prod/pisq, prod/pisq -1./6 )

def sub_graph():
    for n in  range(5,500):
        for m in range(1, n):
            prob = pair_prob(m, n)
            if prob > .5:
                # print(n,m)
                # print('%.3f' % (float(m)/n), prob)
                print(n, '%.3f' % (float(m)/n), prob)
                print('')
                break

            # print(n, m)

sub_graph()
