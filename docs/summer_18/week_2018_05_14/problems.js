var problems = [

  {
    location:`hazeltine problem 2.1`,
    description:"given $&x=cos(\\zeta \\frac{(\\psi^2-1)^{1/2}}{\\psi-cos(\\theta)})&$, $&y=sin(\\zeta \\frac{(\\psi^2-1)^{1/2}}{\\psi-cos(\\theta)})&$, $&z=\\frac{sin(\\theta)}{\\psi-cos(\\theta)}&$ with $&\\psi&$ going from 1 to infinity, show that constant $&\\psi&$ defines axisymetric tori with circular poloidal cross section, compute the metric tensor $&g_{ij}&$ and the jacobian J",
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    location:`hazeltine problem 2.3`,
    description:"Compute the ordinary, covariant and contravariant components of the vector field $&\\vec A = \\hat z&$ in cylindrical and primitive toroidal coordinates",
    steps:[
    {
      expression: `\\vec A = \\Sigma A_i \\hat e_i`,
      explanation: "equation 2.8 from hazeltine, the ordinary components of a vector field A"
    },
    {
      expression: `\\vec A = A_i \\nabla \\xi^i`,
      explanation: "equation 2.9 the covariant representation of a vector field"
    },
    {
      expression: `\\vec A = \\Sigma \\vec A \\cdot \\nabla \\xi^i`,
      explanation: "eq 2.13 the contravariant representation of a vector field"
    },
    {
      expression: `
      \\xi^1 = R=(x^2+y^2)^{1/2}
      \\\\
      \\xi^2 = \\theta = atan(y/x)
      \\\\
      \\xi^3 = Z= z`,
      explanation: "Cylindrical coordinates from equation 2.2, phi replaced with theta"
    },
    {
      expression: `
      \\tau^1 = r_0 =
      ((R-R_0)^2+Z^2)^{1/2} =
      (R^2-2RR_0 + R_0^2+Z^2)^{1/2} =
      (r^2-2RR_0 + R_0^2)^{1/2} =
      \\\\
      (x^2+y^2+z^2-2R_0(x^2+y^2)^{1/2} + R_0^2)^{1/2}
      \\\\
      \\tau^2 = \\theta_p
      = atan(\\frac{Z}{R-R_0})
      = atan(\\frac{z}{(x^2+y^2)^{1/2}-R_0})
      \\\\
      \\tau^3 = \\theta_t = -\\theta= -atan(y/x)
      `,
      explanation: "primitive toroidal coordinates as layed out in equation 2.3, with p and t to denote poloidal and toroidal angles. Uses cylindrical coordinates for compactness"
    },
    {
      expression: `
      \\partial_z r_0 = z r_0^{-1}
      \\\\
      \\partial_z \\theta_p = \\frac{- R_{0} + R}{z^{2} + \\left(R_{0} - R\\right)^{2}}
      = (R-R_0) r_0^{-2}
      \\\\
      \\partial_z \\theta_t = 0
      `,
      explanation: "partial derivatives with respect to z, the only component in the vector field of interest"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    location:`hazeltine 2.4`,
    description:"compute the curl of $&\\vec A  = r_0 \\nabla \\zeta_0&$",
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },
  {
    location:`hazeltine 2.5`,
    description:"given an action of $&\\int \\frac{e}{c}\\vec A \\cdot dx - e\\phi dt&$ show the symplectic form is the antisymmetric matrix $&\\epsilon_{ijk} B^k/(jc)&$ and that the equations of motion give ExB drift",
    steps:[
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },
  {
    location:`hazeltine 2.6`,
    description:"explore the motion of a particle in an imposed magnetic field $&\\vec B = x \\hat z&$, make note of the differences with and shortcomings of the guiding center equations",
    steps:[
    {
      expression: `
      \\vec p = m\\vec v + \\frac{e}{c} \\vec A
      \\\\
      H = \\frac{1}{2m}(\\vec p  - \\frac{e}{c} \\vec A)^2 +e \\phi
      `,
      explanation: "The conjugate momentum and Hamiltonian for a charged particle in E&M fields, referenced from equations 2.47 and 2.48."
    },
    {
      expression: `
      \\vec B = x \\hat z = \\nabla \\times \\vec A
      \\\\
      \\vec A = \\frac{x^2}{2} \\hat y
      \\\\
      \\vec p = mv_x \\hat x +(mv_y+\\frac{e}{2c}x^2)\\hat y + mv_z \\hat z
      `,
      explanation: "a valid vector potential and resulting momentum"
    },
    {
      expression: `
      \\dot{ \\vec x} = \\partial_{\\vec p} H =
      \\\\
      \\partial_{\\vec p} (\\frac{1}{2m}( p^2  - \\frac{e}{c} \\vec A \\cdot \\vec p + \\frac{e^2}{c^2} A^2))=
      \\\\
      \\frac{1}{2m}(\\partial_{\\vec p} ( p^2)
             - \\frac{e}{c}\\partial_{\\vec p}( \\vec A \\cdot \\vec p)
             + \\frac{e^2}{c^2}\\partial_{\\vec p}( A^2))=
      \\\\
      \\frac{1}{m}(\\vec p
             - \\frac{e}{c}\\vec A
             + 0)
      \\\\
      \\dot{ \\vec p} = -\\partial_{\\vec x} H =
      \\\\
      -\\partial_{\\vec x}(\\frac{1}{2m}( p^2  - \\frac{e}{c} \\vec A \\cdot \\vec p + \\frac{e^2}{c^2} A^2))=
      \\\\
      -\\frac{1}{2m}( \\partial_{\\vec x} p^2
        - \\partial_{\\vec x}(\\frac{e}{c} \\vec A \\cdot \\vec p )
        + \\frac{e^2}{c^2} \\partial_{\\vec x}A^2)=
      \\\\
      -\\frac{1}{2m}( \\partial_{\\vec x} p^2
        - \\partial_{\\vec x}(\\frac{e}{c} \\vec A \\cdot \\vec p )
        + \\frac{e^2}{c^2} \\partial_{\\vec x}A^2)=
      `,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },
]
