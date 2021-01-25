import math
pi = math.pi

def theta_ij(i,j):
    return ((1+2*i+(j-i)%6)%12)/6.


for i in range(0,7):

    xi = math.cos((i-1)*pi/3)
    yi = math.sin((i-1)*pi/3)
    if i == 0:
        xi,yi = 0,0
    for j in range(0,7):
        xj = math.cos((j-1)*pi/3)
        yj = math.sin((j-1)*pi/3)
        if j == 0:
            xj,yj = 0,0
        if not i==j:
            delx = xj-xi
            dely = yj-yi
            thtij = (math.atan2(dely,delx)/pi) % (2)
            # print((i,j), "%03fpi"%thtij, " %03f,%03f" %(delx, dely))
            print((i,j), "%03fpi"%thtij, " %03f" %theta_ij(i,j))
            # print((j,i), math.atan2(-dely,-delx)/pi)
            # print((xi, yi), (xj, yj))

