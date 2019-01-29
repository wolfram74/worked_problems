var problems = [
//donezo
  {
    location:`NA`,
    description:"derive the time independent schrodinger equation from the time  dependent variant",
    steps:[
    {
      expression: `
      i \\hbar \\partial_t \\Psi(x,t)
      =
      (
        -\\frac{\\hbar^2}{2m}\\partial_x^2
        +V(x,t)
        )\\Psi(x,t)
      `,
      explanation: "The time dependent schrodinger equation."
    },
    {
      expression: `
      \\Psi(x,t) = \\psi(x) \\phi(t)
      `,
      explanation: "Assuming the wave function can be seperated into a time dependent and independent portion."
    },
    {
      expression: `
      i \\hbar \\partial_t \\Psi(x,t)
      =
      (
        -\\frac{\\hbar^2}{2m}\\partial_x^2
        +V(x,t)
        )\\Psi(x,t)
      \\rightarrow
      \\\\
      i \\hbar (\\partial_t \\phi) \\psi
      =
      V(x,t)\\psi \\phi
        -(\\frac{\\hbar^2}{2m}\\partial_x^2 \\psi)\\phi
      \\\\
      i \\hbar (\\partial_t \\phi) \\psi \\frac{1}{\\phi \\psi}
      =
      V(x,t)\\psi \\phi \\frac{1}{\\phi \\psi}
      -
      (\\frac{\\hbar^2}{2m}\\partial_x^2 \\psi)\\phi \\frac{1}{\\phi \\psi}
      \\\\
      i \\hbar (\\partial_t \\phi)  \\frac{1}{\\phi }
      =
      V(x,t)
      -
      (\\frac{\\hbar^2}{2m}\\partial_x^2 \\psi) \\frac{1}{ \\psi}
      `,
      explanation: "If the potential doesn't vary in time then the left hand side and right hand side are functions in different variables that are equal to each other, necessitating they are both constant"
    },
    {
      expression: `
      E
      =
      V(x)
      -
      (\\frac{\\hbar^2}{2m}\\partial_x^2 \\psi) \\frac{1}{ \\psi}
      \\\\
      E\\psi
      =
      V(x) \\psi
      -
      (\\frac{\\hbar^2}{2m}\\partial_x^2 \\psi)
      \\\\
      E\\psi
      =
      (V(x)
             -
             \\frac{\\hbar^2}{2m}\\partial_x^2 )\\psi
      `,
      explanation: "The time independent schrodinger equation"
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
    location:`NA`,
    description:"Show the schrodinger equation implies the norm is constant",
    steps:[
    {
      expression: `
      \\int
      \\Psi \\Psi^*
      dx= I
      \\\\
      \\frac{d}{dt}
      \\int
      \\Psi \\Psi^*
      dx= \\dot I
      `,
      explanation: "The norm of the the wave function and it's time derivative"
    },
    {
      expression: `
      \\dot I
      =
      \\int
      \\frac{d}{dt}(\\Psi \\Psi^*)
      dx
      =
      \\int
      \\dot \\Psi \\Psi^*
      + \\Psi \\dot \\Psi^*
      dx
      `,
      explanation: "bringing the time derivative inside the integral as the integral is over space."
    },
    {
      expression: `
      \\dot \\Psi
      =
      (
        \\frac{i\\hbar}{2m}
        \\partial_x^2
        -V\\frac{i}{\\hbar}
        )\\Psi
      \\\\
      \\dot \\Psi ^*
      =
      (
        -\\frac{i\\hbar}{2m}
        \\partial_x^2
        +V\\frac{i}{\\hbar}
        )\\Psi^*
      `,
      explanation: "taking advantage of the schrodinger equation."
    },
    {
      expression: `
      \\dot I
      =
      \\int
      (
        \\frac{i\\hbar}{2m}
        \\partial_x^2
        -\\frac{i}{\\hbar}V
        )\\Psi
      \\Psi^*
      +
      \\Psi
      (
        -\\frac{i\\hbar}{2m}
        \\partial_x^2
        +\\frac{i}{\\hbar}V
        )\\Psi^*
      dx
      \\\\
      =
      \\int
      \\Psi^*
      (
        \\frac{i\\hbar}{2m}
        \\partial_x^2
        -\\frac{i}{\\hbar}V
        )\\Psi
      +
      \\Psi
      (
        -\\frac{i\\hbar}{2m}
        \\partial_x^2
        +\\frac{i}{\\hbar}V
        )\\Psi^*
      dx
      \\\\
      =
      \\int
      \\Psi^*
      (
        -\\frac{i}{\\hbar}V
        )\\Psi
      +
      \\Psi
      (
        +\\frac{i}{\\hbar}V
        )\\Psi^*
      dx
      +
      \\int
      \\Psi^*
      (
        \\frac{i\\hbar}{2m}
        \\partial_x^2
        )\\Psi
      +
      \\Psi
      (
        -\\frac{i\\hbar}{2m}
        \\partial_x^2
        )\\Psi^*
      dx
      \\\\
      =
      0
      +
      \\int
      \\Psi^*
      (
        \\frac{i\\hbar}{2m}
        \\partial_x^2
        )\\Psi
      +
      \\Psi
      (
        -\\frac{i\\hbar}{2m}
        \\partial_x^2
        )\\Psi^*
      dx
      `,
      explanation: "We see the potential term drops out."
    },
    {
      expression: `
      \\int
      \\Psi^*
      (
        \\frac{i\\hbar}{2m}
        \\partial_x^2
        )\\Psi
      dx
      =
      \\frac{i\\hbar}{2m}
      \\int
      \\Psi^*
      \\partial_x^2
      \\Psi
      dx
      \\\\
      =
      \\frac{i\\hbar}{2m}
      (
        \\Psi^*
        \\partial_x
        \\Psi
        |_{\\infty}
        -
        \\int
        \\partial_x
        \\Psi^*
        \\partial_x
        \\Psi
        dx
      )
      \\\\
      =
      \\frac{i\\hbar}{2m}
      (
        0
        -
        \\int
        \\partial_x
        \\Psi^*
        \\partial_x
        \\Psi
        dx
      )
      \\\\
      \\int
      \\Psi
      (
        -\\frac{i\\hbar}{2m}
        \\partial_x^2
        )\\Psi^*
      dx
      =
      -\\frac{i\\hbar}{2m}
      \\int
      \\Psi
      (
        \\partial_x^2
        )\\Psi^*
      dx
      \\\\
      =
      -\\frac{i\\hbar}{2m}
      (-1)
      \\int
      \\partial_x
      \\Psi
      \\partial_x
      \\Psi^*
      dx
      \\\\
      \\dot I = 0
      `,
      explanation: "The norm doesn't change over time."
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
//donezo
  {
    location:`NA`,
    description:"Verify the position operator in momentum space",
    steps:[
    {
      expression: `
      [\\hat x, \\hat p]
      =
      \\hat x \\hat p \\psi
      -
      \\hat p \\hat x \\psi
      \\equiv i \\hbar
      `,
      explanation: "The commutator for position and momentum is often taken as an axiom for quantum mechanics."
    },
    {
      expression: `
      \\hat p = p
      \\\\
      \\hat x = i \\hbar \\partial_p
      `,
      explanation: "how the momentum operator is defined in momentum space and a guess for what the position operator would be."
    },
    {
      expression: `
      \\hat x \\hat p \\psi
      -
      \\hat p \\hat x \\psi
      =
      i \\hbar \\partial_p (p \\psi)
      -
      p (i \\hbar \\partial_p) \\psi
      =
      \\\\
      i \\hbar \\psi
      +
      i \\hbar p (\\partial_p  \\psi)
      -
      i \\hbar  p (\\partial_p \\psi)
      = i \\hbar \\psi \\rightarrow [\\hat x, \\hat p] = i\\hbar
      \\\\
      \\therefore \\hat x = i \\hbar \\partial_p
      `,
      explanation: "verifying our guess for the position operator."
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
//donezo
  {
    location:`NA`,
    description:"Show that a function satisfies the schrodinger equation for a hydrogen atom",
    steps:[
    {
      expression: `
      \\psi(r, \\theta_p, \\theta_e)
      = c_0[1-r sin(\\theta_p/2)^2]e^{-r/2}
      \\\\
      =c_0[1-\\frac{r}{2} (1-cos(\\theta_p))]e^{-r/2}
      `,
      explanation: "Our test function"
    },
    {
      expression: `
      E \\psi
      =
      U \\psi
      -
      \\frac{\\hbar^2}{2m}
      \\frac{1}{r^2 }[
        \\partial_r (r^2 \\partial_r \\psi)
        +
        \\frac{1}{sin(\\theta_p)}\\partial_{\\theta_p}(
          sin(\\theta_p)\\partial_{\\theta_p}\\psi
          )
        +
        \\frac{1}{sin(\\theta_p)^2}\\partial_{\\theta_e}^2\\psi
      ]
      \\\\
      U = -qr^{-1}
      `,
      explanation: "The time independent schrodinger equation with the derivatives cast in spherical coordinates and roughly the form of potential for a hydrogen atom."
    },
    {
      expression: `
      \\partial_{\\theta_e}^2\\psi = 0
      \\\\
      r^2\\partial_r \\psi
      =
      \\frac{c r^{2}}{4} \\left(- r \\cos{\\left (\\theta_{p} \\right )} + r + 2 \\cos{\\left (\\theta_{p} \\right )} - 4\\right) e^{- \\frac{r}{2}}
      \\\\
      T_r = sin(\\theta_p)\\partial_r(r^2\\partial_r \\psi)
      =
      \\frac{c r}{8} \\left(r^{2} \\cos{\\left (\\theta_{p} \\right )} - r^{2} - 8 r \\cos{\\left (\\theta_{p} \\right )} + 10 r + 8 \\cos{\\left (\\theta_{p} \\right )} - 16\\right) e^{- \\frac{r}{2}}
      \\\\
      sin(\\theta_p)
      \\partial_{\\theta_p} \\psi
      =
      - \\frac{c r}{2} e^{- \\frac{r}{2}} \\sin^{2}{\\left (\\theta_{p} \\right )}
      \\\\
      T_{\\theta_p}
      =
      \\partial_{\\theta_p}(sin(\\theta_p)
            \\partial_{\\theta_p} \\psi)
      =
      - c r e^{- \\frac{r}{2}} \\cos{\\left (\\theta_{p} \\right )}
      \\\\
      T_{tot} = \\frac{\\hbar^2}{2m}r^{-2}(T_r+T_{\\theta_p})
      =
      \\frac{c \\hbar^{2} e^{- \\frac{r}{2}}}{16 m r} \\left(r^{2} \\cos{\\left (\\theta_{p} \\right )} - r^{2} - 8 r \\cos{\\left (\\theta_{p} \\right )} + 10 r - 16\\right)
            `,
      explanation: "The kinetic energy like term in the schrodinger equation"
    },
    {
      expression: `
      RHS = U\\psi - T_{tot}
      =
      \\frac{c e^{- \\frac{r}{2}}}{16 m r} \\left(\\hbar^{2} r \\left(- r \\cos{\\left (\\theta_{p} \\right )} + r + 8 \\cos{\\left (\\theta_{p} \\right )} - 10\\right) + 16 \\hbar^{2} + 8 m q r \\left(- \\cos{\\left (\\theta_{p} \\right )} + 1\\right) - 16 m q\\right)
      \\\\
      RHS/\\psi = \\frac{1}{m r} \\left(- \\frac{\\hbar^{2} r}{8} + \\hbar^{2} - m q\\right)

      `,
      explanation: "for $&RHS/\\psi&$ to equal a constant and thus satisfy the schrodinger equation, then $&mq=\\hbar^2&$ and the energy of our system is $&-\\frac{1}{4}\\frac{\\hbar^2}{2m}&$"
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
