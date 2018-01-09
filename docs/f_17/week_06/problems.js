var problems = [

  {
    location:`Rileys essential mathematical methods, 6.25`,
    description:"Find the green's function for $&\\frac{d^2}{dx^2} - 1&$ with boundary conditions of 0 at 0 and 1.",
    steps:[
    {
      expression: `\\frac{d^2}{dx^2} y - y=0`,
      explanation: "the associated homogeneous equation"
    },
    {
      expression: `y=A e^{ x} + B e^{- x}=C sinh( x) + D cosh( x)`,
      explanation: "general solution to the associated homogeneous equation"
    },
    {
      expression: `
        0=A e^{ 0} + B e^{- 0}
        =A 1 + B 1
        =C sinh( 0) + D cosh( 0)
        =C 0 + D 1
        `,
      explanation: "evaluating the x=0 boundary condition makes it seem like hyperbolic trig functions are the saner decision going forward."
    },
    {
      expression: `
      G(x,z) = \\begin{cases}
        C(z) sinh( x) & x < z \\\\
        E(z) sinh( x) + F(z) cosh( x) & x > z
      \\end{cases}
      `,
      explanation: "would be the general form of the green's function with what we know"
    },
    {
      expression: `
        0
        =E sinh( 1) + F cosh( 1)
        =E \\frac{e^2-1}{2e} + F \\frac{e^2+1}{2e}
      `,
      explanation: "evaluating at the x=1."
    },
    {
      expression: `
      E =
      - F \\frac{e^2+1}{2e}\\frac{2e}{e^2-1}=
      F \\frac{e^2+1}{1-e^2}, F=E\\frac{1-e^2}{e^2+1}`,
      explanation: "expressing F in terms of E"
    },
    {
      expression: `
      G(x,z) = \\begin{cases}
        C(z) sinh( x) & x < z \\\\
        E(z) (sinh( x) + \\frac{1-e^2}{e^2+1} cosh( x)) & x > z
      \\end{cases}
      `,
      explanation: "green's function so far"
    },
    {
      expression: `
      \\partial_xG(x,z) = \\begin{cases}
        C(z) cosh( x) & x < z \\\\
        E(z) (cosh( x) + \\frac{1-e^2}{e^2+1} sinh( x)) & x > z
      \\end{cases}
      `,
      explanation: "NA"
    },
    {
      expression: `
        C(z) sinh( z)
        -E(z) (sinh( z) + \\frac{1-e^2}{e^2+1} cosh( z))=0`,
      explanation: "continuity constraint where the function is continuous at x=z"
    },
    {
      expression: `
      C(z) cosh( z)- E(z) (cosh( z) + \\frac{1-e^2}{e^2+1} sinh( z))=1,
      C(z)- E(z)(1+\\frac{1-e^2}{e^2+1} tanh( z))=\\frac{1}{cosh(z)}
      `,
      explanation: "discontinuity constraint where the 2nd highest derivative jumps by dirac deltas worth at x=z."
    },
    {
      expression: `C(z) =
        E(z) (sinh( z) + \\frac{1-e^2}{e^2+1} cosh( z))
        \\frac{1}{sinh(z)},
        C(z) =E(z) (1+ \\frac{1-e^2}{e^2+1}coth(z))`,
      explanation: "relationship between c(z) and e(z)"
    },
    {
      expression: `
      E(z) (1+ \\frac{1-e^2}{e^2+1}coth(z))- E(z)(1+\\frac{1-e^2}{e^2+1} tanh( z))=\\frac{1}{cosh(z)}
      \\\\
      E(z) \\frac{1-e^2}{e^2+1}(coth(z)-tanh( z))
      =\\frac{1}{cosh(z)}
      \\\\
      E(z)
      =\\frac{e^2+1}{1-e^2}\\frac{1}{cosh(z)(coth(z)-tanh( z))}
      \\\\
      E(z)
      =\\frac{e^2+1}{1-e^2}\\frac{1}{(cosh(z)^2 sinh(z)^{-1}-sinh( z))}
      \\\\
      E(z)
      =\\frac{e^2+1}{1-e^2}\\frac{sinh(z)}{(cosh(z)^2 -sinh( z)^2)}
      `,
      explanation: "An expression for E(z)"
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
    location:`Rileys essential mathematical methods, 6.27`,
    description:`
      given solutions $&y_1&$ and $&y_2&$ to the operator
      $&
      \\frac{\\partial^2}{\\partial x^2}
      +p(x)\\frac{\\partial}{\\partial x}
      +q(x)
      &$ which satisfy boundary conditions of
      $&y_1(0)=0&$ and $&y_2(1)=0&$ show the greens function that satifies the boundary conditions of 0 at 0 and 1 is of the form
      $&
      G(x,z) = \\begin{cases}
        y_1(x)y_2(z)/w(z) & 0< x < z \\\\
        y_1(z)y_2(x)/w(z) &  z<x<1
      \\end{cases}
      &$ where w is the wronkskian, in this case $&y_1(z)y_2'(z)-y_1(z)'y_2(z)&$
      `,
    steps:[
    {
      expression: `y_1(z)y_2(z)/w(z) = y_1(z)y_2(z)/w(z)`,
      explanation: "by inspection this satisfies the continuity boundary condition when x=z"
    },
    {
      expression: `
      G'(x,z) = \\begin{cases}
        y_1'(x)y_2(z)/w(z) & 0< x < z \\\\
        y_1(z)y_2'(x)/w(z) &  z<x<1
      \\end{cases}
      `,//'
      explanation: "the derivative of the greens function"
    },
    {
      expression: `
      y_1(z)y_2'(z)/w(z)-y_1'(z)y_2(z)/w(z)=1=
      \\frac{y_1(z)y_2'(z)-y_1(z)'y_2(z)}{y_1(z)y_2'(z)-y_1(z)'y_2(z)}
      `,
      explanation: "the contraint of the derivative being discontinuous, we see that the expression meets that constraint. With the assumption that $&y_1(0)=0&$ and $&y_2(1)=0&$ all constraints for the green's function are met."
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
