var problems = [
/*
christoffel symbol defined in terms of a metric: 3.21
riemann tensor defined: 3.67, in terms of christoffel symbols
ricci tensor: 3.90
ricci scalar defined: 3.92
lie derivative 5.33 might be useful
commutator defined: carrol 5.26
ds^2 =
  -e^{2A}dt^2
  +e^{2B}dr^2
  +e^{2C}(d\\theta_p^2+sin(\\theta_p)^2d\\theta_e^2)
*/
  {
    location:`NA`,
    description:"given a line element, do a whole bunch of stuff",
    steps:[
    {
      expression: `
      ds^2 =
      g_{\\mu \\nu}dx^\\mu dx^\\nu
      =
      -e^{2A}dt^2+e^{2B}dr^2+e^{2C}(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)
      \\\\
      g_{t t} = -e^{2A},
      g_{r r} = e^{2B},
      g_{\\theta_p \\theta_p} = e^{2C},
      g_{\\theta_e \\theta_e} = e^{2C} sin(\\theta_p)^2
      \\\\
      else, 0
      \\\\
      g_{\\mu \\alpha}g^{\\alpha \\nu} = \\delta^\\nu_\\mu \\therefore
      \\\\
      g^{t t} = -e^{-2A},
      g^{r r} = e^{-2B},
      g^{\\theta_p \\theta_p} = e^{-2C},
      g^{\\theta_e \\theta_e} = e^{-2C} csc(\\theta_p)^2
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\Gamma^\\mu_{\\nu \\sigma}
      =
      \\frac{1}{2}g^{\\mu\\alpha_{1}}(
        \\partial_{\\nu}g_{\\sigma \\alpha_{1}}
        +\\partial_{\\sigma}g_{\\alpha_{1} \\nu}
        -\\partial_{\\alpha_{1}}g_{\\nu \\sigma}
        )
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
