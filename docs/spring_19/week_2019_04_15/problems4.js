problems.push(
  //2c, ~2d
  {
    location:`NA`,
    description:"assumed form of wave and consequences",
    steps:[
    {
      expression: `
      \\phi(r, t, \\theta)
      =r^{-1/2} f(r) e^{-i \\omega t} e^{i m \\theta}
      =r^{-1/2} f(r) h(t, \\theta)
      `,
      explanation: "starting with an assumed periodicity in time and angle."
    },
    {
      expression: `
      r_*(r)
      \\; S.T. \\;
      dr_* =
      \\frac{L^2}{r^2-ML^2}
      dr
      `,
      explanation: "a tortoise radial coordinate"
    },
    {
      expression: `
      r^{-2}\\partial_{\\theta}^2 \\phi(r, t, \\theta)
      =
      r^{-2}\\partial_{\\theta}^2
      (r^{-1/2} f(r) e^{-i \\omega t} e^{i m \\theta})
      \\\\
      =
      r^{-2} (i m)^2
      (r^{-1/2} f(r) e^{-i \\omega t} e^{i m \\theta})
      \\\\
      =
      -r^{-2} m^2
      \\phi

      `,
      explanation: "The angular portion of the PDE"
    },
    {
      expression: `
      \\frac{L^2}{ML^2-r^2}
      \\partial_{t}^2 \\phi(r, t, \\theta)
      =
      \\frac{L^2}{ML^2-r^2}
      \\partial_{t}^2
      (r^{-1/2} f(r) e^{-i \\omega t} e^{i m \\theta})
      \\\\
      =
      \\frac{L^2}{ML^2-r^2}
      (-i \\omega)^2
      (r^{-1/2} f(r) e^{-i \\omega t} e^{i m \\theta})
      =
      -\\frac{L^2\\omega^2}{ML^2-r^2}
      \\phi
      `,
      explanation: "the time portion of the PDE"
    },
    {
      expression: `
      \\frac{1}{L^2r}
      \\partial_r[
        (r^3-LMr)\\partial_r \\phi
      ]
      =
      \\frac{1}{L^2r}(
        \\partial_r
        (r^3-LMr)
        (\\partial_r \\phi)
        +
        (r^3-LMr)\\partial_r^2 \\phi
        )
      =
      \\\\
      \\frac{1}{L^2r}[
        (3r^2-LM)
        (\\partial_r \\phi)
        +
        (r^3-LMr)\\partial_r^2 \\phi
        ]
      \\\\
      \\partial_r \\phi
      =
      (r^{-1/2} \\partial_r f-
      \\frac{1}{2}r^{-3/2}f)h
      \\\\
      \\partial_r \\partial_r \\phi
      =
      \\partial_r
      (
        r^{-1/2} \\partial_r f
        -
        \\frac{1}{2}r^{-3/2}f
      )h
      =
      (
        -\\frac{1}{2}r^{-3/2} \\partial_r f
        +
        r^{-1/2} \\partial_r^2 f
        +
        \\frac{3}{4}r^{-5/2}f
        -
        \\frac{1}{2}r^{-3/2} \\partial_r f
      )h
      \\\\
      =
      (
        r^{-1/2} \\partial_r^2 f
        -
        r^{-3/2} \\partial_r f
        +
        \\frac{3}{4}r^{-5/2}f
      )h
      \\\\
      \\frac{d f}{dr}
      = \\frac{d r_*}{dr}\\frac{d f}{dr_*}
      = \\frac{L^2}{r^2-ML^2}\\frac{d f}{dr_*}
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
      expression: `
      a =
      1 - \\frac{i \\omega }{2 M^{1/2}}
      + \\frac{i m}{2 M^{1/2}}
      \\\\
      b =
      1 - \\frac{i \\omega}{2 M^{1/2}}
      - \\frac{i m}{2 M^{1/2}}
      \\\\
      c =
      1 - \\frac{i \\omega}{2 M^{1/2}}
      \\\\
      -(a+b+1)
      =
      -(
      1 - \\frac{i \\omega }{2 M^{1/2}}
      + \\frac{i m}{2 M^{1/2}}
      1 - \\frac{i \\omega}{2 M^{1/2}}
      - \\frac{i m}{2 M^{1/2}}
      +1
        )
      =
      -(
        3
        -\\frac{i \\omega }{M^{1/2}}
        +0
        )
      =(
        \\frac{i \\omega }{M^{1/2}}
        -3
        )
      \\\\
      ab =
      (
        1 - \\frac{i \\omega }{2 M^{1/2}}
            + \\frac{i m}{2 M^{1/2}}
            )
      (
        1 - \\frac{i \\omega}{2 M^{1/2}}
        - \\frac{i m}{2 M^{1/2}}
        )
      =
      \\frac{m^{2}}{4 M} - \\frac{\\omega^{2}}{4 M} - \\frac{i \\omega}{M^{1/2}} + 1
      \\\\
      =
      \\frac{1}{4 M}(
        m^{2} - \\omega^{2} - i 4 \\omega M^{1/2}
        + 4 M
        )
      \\\\
      - \\omega^{2}
      - i 4 \\omega M^{1/2}
      + 4 M
      =
      4M
      -(
        \\omega
        +i 2 M^{1/2}
      )^2
      -4M=
      -(
        \\omega
        +i 2 M^{1/2}
      )^2
      `,//https://en.wikipedia.org/wiki/Completing_the_square
      explanation: "NA"
    },]
  },
	)
