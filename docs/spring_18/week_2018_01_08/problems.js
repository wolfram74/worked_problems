var problems = [

  {
    location:`Current events`,
    description:"come to some conclusions about the dragon on a dipole magnet in a uniform plasma flow.",
    steps:[
    {
      expression: `
        n=n_e=n_i
        \\\\
        \\vec v=v_e=v_i=v_0\\hat z
        \\rightarrow
        \\vec J = 0`,
      explanation: "some assumptions about the nature of the plasma flow, that is is homogeneous and single speed. "
    },
    {
      expression: `\\vec A = A_{\\theta_e} =
      M \\frac{\\mu_0 }{4\\pi}\\frac{sin(\\theta_p)}{r^2}
      `,
      explanation: "equation 3.7.22 from gurnett and bhattacharjee (G+B) describing the vector potential of a dipole. the subscripts on thetas denote equatorial angle and polar angle respectively."
    },
    {
      expression: `
      z = cos(\\theta_p) r, \\rho = sin(\\theta_p)r, \\theta = \\theta_e
      \\rightarrow
      \\\\
      \\vec A
      = A_\\theta
      = M \\frac{\\mu_0 }{4\\pi}\\frac{sin(\\theta_p)}{r^2}
      = M \\frac{\\mu_0 }{4\\pi}\\frac{\\rho}{r^3}
      \\\\
      = M \\frac{\\mu_0 }{4\\pi}\\frac{\\rho}{(z^2+\\rho^2)^{3/2}}
      `,
      explanation: "Recasting the potential in cylindrical coordinates"
    },
    {
      expression: `
      L= KE-PE =
      \\\\
      \\frac{1}{2}m(\\dot z ^2 + \\dot \\rho ^2 + \\rho ^2 \\dot \\theta^2)
      -q\\rho \\dot \\theta A_\\theta
      `,
      explanation: "Lagrangian for this system"
    },
    {
      expression: `
      \\partial_{\\dot e_i} L= p_{e_i}
      \\\\
      \\partial_{\\dot z} L= p_{z} = m \\dot z
      \\\\
      \\partial_{\\dot \\rho} L= p_{\\rho} = m \\dot \\rho
      \\\\
      \\partial_{\\dot \\theta} L= p_{\\theta} =
      m \\rho ^2 \\dot \\theta - q \\rho A_\\theta
      `,
      explanation: "Finding the conjugate momenta for our coordinate system"
    },
    {
      expression: `
      \\dot z
      = p_{z}/m
      \\\\
      \\dot \\rho
      = p_{\\rho}/m
      \\\\
      \\dot \\theta
      = (p_{\\theta}+q \\rho A_\\theta)\\frac{1}{m\\rho^2}
      = \\frac{p_{\\theta}+q \\rho A_\\theta}{m\\rho^2}
      \\\\
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
    },]
  },

  {
    location:`own notion`,
    description:"Convert a vector field from polar coordinates to cylindrical",
    steps:[
    {
      expression: `
        \\vec V =
        V_{\\rho} \\hat \\rho
        +V_{z} \\hat z
        +V_{\\theta} \\hat \\theta
        \\\\
        =V_{r} \\hat r
        +V_{\\theta_p} \\hat \\theta_p
        +V_{\\theta_e} \\hat \\theta_e
        \\\\
        =
        V_{x} \\hat x
        +V_{y} \\hat y
        +V_{z} \\hat z
        `,
      explanation: "A vector field can be expressed equivalently in any orthonormal coordinate system"
    },
    {
      expression: `
      V_x
      =
      \\vec V \\cdot \\hat x
      =
      V_{r} \\hat r \\cdot \\hat x
      +V_{\\theta_p} \\hat \\theta_p \\cdot \\hat x
      +V_{\\theta_e} \\hat \\theta_e \\cdot \\hat x
      \\\\
      =
      V_{r}
      (
        f_{xr}(r, \\theta_p, \\theta_p)\\hat x+
        f_{yr}(r, \\theta_p, \\theta_p)\\hat y+
        f_{zr}(r, \\theta_p, \\theta_p)\\hat z
      )
      \\cdot \\hat x
      \\\\
      +V_{\\theta_p}
      (
        f_{x\\theta_p}(r, \\theta_p, \\theta_p)\\hat x+
        f_{y\\theta_p}(r, \\theta_p, \\theta_p)\\hat y+
        f_{z\\theta_p}(r, \\theta_p, \\theta_p)\\hat z
      )
      \\cdot \\hat x
      \\\\
      +V_{\\theta_e}
      (
        f_{x\\theta_e}(r, \\theta_p, \\theta_p)\\hat x+
        f_{y\\theta_e}(r, \\theta_p, \\theta_p)\\hat y+
        f_{z\\theta_e}(r, \\theta_p, \\theta_p)\\hat z
      )
      \\cdot \\hat x
      `,
      explanation: "determining a vector component in cartesian components from spherical. Expressions for decomposing the source unit vectors in terms of the target unit vectors are needed."
    },
    {
      expression: `
      \\begin{bmatrix}
        \\hat z \\\\
        \\hat \\rho \\\\
        \\hat  \\theta
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        cos(\\theta_p)
        & -sin(\\theta_p)
        & 0
        \\\\
        sin(\\theta_p)
        & cos(\\theta_p)
        & 0
        \\\\
        0
        & 0
        & 1
      \\end{bmatrix}
      \\begin{bmatrix}
        \\hat r \\\\
        \\hat \\theta_{p} \\\\
        \\hat \\theta_{e}
      \\end{bmatrix}
      \\\\
      \\begin{bmatrix}
        \\hat r \\\\
        \\hat \\theta_{p} \\\\
        \\hat \\theta_{e}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        cos(\\theta_p)
        & sin(\\theta_p)
        & 0
        \\\\
        -sin(\\theta_p)
        & cos(\\theta_p)
        & 0
        \\\\
        0
        & 0
        & 1
      \\end{bmatrix}
      \\begin{bmatrix}
        \\hat z \\\\
        \\hat \\rho \\\\
        \\hat  \\theta
      \\end{bmatrix}
      `,
      explanation: "A transformation from spherical unit vectors to cylindrical, that it is obviously unitary supports the notion that it preserves orthonormality."
    },
    {
      expression: `\\vec V =
        V_{r} \\hat r
        +V_{\\theta_p} \\hat \\theta_p
        +V_{\\theta_e} \\hat \\theta_e
        =
        \\\\
        V_{r} (cos(\\theta_p ) \\hat z + sin(\\theta_p ) \\hat \\rho )
        +V_{\\theta_p} (-sin(\\theta_p ) \\hat z + cos(\\theta_p ) \\hat \\rho )
        +V_{\\theta_e} (1 \\hat \\theta)
        =
        \\\\
      `,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `
      V_{z}
      = V_{r}cos(\\theta_p)-V_{\\theta_p}sin(\\theta_p)
      \\\\
      V_{x}
      = (V_{r}sin(\\theta_p)+V_{\\theta_p}cos(\\theta_p))cos(\\theta_e)
      -V_{\\theta_e}sin(\\theta_e)
      \\\\
      V_{y}
      = -(V_{r}sin(\\theta_p)+V_{\\theta_p}cos(\\theta_p))sin(\\theta_e)
      +V_{\\theta_e}cos(\\theta_e)
      `,
      explanation: "A spherical vector field recast in cartesian coordinates"
    },
    {
      expression: `
      \\begin{bmatrix}
        \\rho \\\\
        \\theta \\\\
        z
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        r sin(\\theta_{p}) \\\\
        \\theta_{e} \\\\
        r cos(\\theta_{p})
      \\end{bmatrix}
      ,
      \\begin{bmatrix}
        r \\\\
        \\theta_{\\theta_p} \\\\
        \\theta_{\\theta_e}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        (\\rho^2+z^2)^{1/2} \\\\
        atan(z/\\rho) \\\\
        \\theta
      \\end{bmatrix}

      `,
      explanation: "Expressions for cylindrical coordinates in terms of spherical"
    },
    {
      expression: `
      \\begin{bmatrix}
        \\hat \\rho \\\\
        \\hat  \\theta \\\\
        \\hat z
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        \\partial_{ r } \\rho
        & \\partial_{ \\theta_{p} } \\rho
        & \\partial_{ \\theta_{e} } \\rho
        \\\\
        \\partial_{ r } \\theta
        & \\partial_{ \\theta_{p} } \\theta
        & \\partial_{ \\theta_{e} } \\theta
        \\\\
        \\partial_{ r } z
        & \\partial_{ \\theta_{p} } z
        & \\partial_{ \\theta_{e} } z
      \\end{bmatrix}
      \\begin{bmatrix}
        \\hat r \\\\
        \\hat \\theta_{p} \\\\
        \\hat \\theta_{e}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        sin(\\theta_{p})
        & r cos(\\theta_{p})
        & 0
        \\\\
        0
        & 0
        & 1
        \\\\
        cos(\\theta_{p})
        & -r sin(\\theta_{p})
        & 0
      \\end{bmatrix}
      \\begin{bmatrix}
        \\hat r \\\\
        \\hat \\theta_{p} \\\\
        \\hat \\theta_{e}
      \\end{bmatrix}
      `,
      explanation: "A transformation from spherical unit vectors to cylindrical, the jacobian of which is simply r, as appropriate for cylindrical coordinates"
    },
    {
      expression: `
      \\begin{bmatrix}
        V_\\rho \\\\
        V_\\theta \\\\
        V_z
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        sin(\\theta_{p})
        & r cos(\\theta_{p})
        & 0
        \\\\
        0
        & 0
        & 1
        \\\\
        cos(\\theta_{p})
        & -r sin(\\theta_{p})
        & 0
      \\end{bmatrix}
      \\begin{bmatrix}
        V_r \\\\
        V_{\\theta_{p}} \\\\
        V_{\\theta_{e}}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        sin(\\theta_{p})V_r
        +r cos(\\theta_{p})V_{\\theta_{p}}
        +0 V_{\\theta_{e}}
        \\\\
        V_{\\theta_{p}}
        \\\\
        V_{\\theta_{e}}
      \\end{bmatrix}
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
    },]
  },

  {
    location:`NA`,
    description:"NA",
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
]
