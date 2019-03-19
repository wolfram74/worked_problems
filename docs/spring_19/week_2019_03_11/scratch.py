import sympy

def mathjaxify(expr):
    print(returnMathjaxify(expr))
def returnMathjaxify(expr):
    return sympy.latex(expr).replace('\\', '\\\\')


def prob1():
    pass

def prob3():
    A1 = sympy.Matrix([
        [1,1,0,-1],
        [1,1,-1,0],
        [0,-1,1,1],
        [-1,0,1,1]
        ])
    A2 = sympy.Matrix([
        [2.,    1., -2., 1.],
        [1.,    2., 1.,  -2.],
        [-2.,    1., 2.,  1.],
        [1.,    -2., 1.,  2.],
        ])/2
    # print(returnMathjaxify(A1))
    # print(returnMathjaxify(A2))
    eigen_diaganols(A1)
    eigen_diaganols(A2)

def eigen_diaganols(mat_in):
    U_mat, D_mat = mat_in.diagonalize()
    # vectors = mat_in.eigenvects()
    # sympy.pprint(vectors)
    # matrix_parts =[]
    # for val_set in vectors:
    #     for vec in val_set[2]:
    #         matrix_parts.append(vec)
    # print(matrix_parts)
    # U_mat = sympy.Matrix(matrix_parts)
    sympy.pprint(U_mat)
    sympy.pprint(D_mat)
    print(returnMathjaxify(U_mat.inv()))
    print(returnMathjaxify(D_mat))
    # print('compare')
    # sympy.pprint(mat_in)
    # sympy.pprint(U_mat*(D_mat*U_mat.inv()))

prob3()
