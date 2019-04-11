var problems = [

  {
    location:`NA`,
    description:"some stuff with the metric",
    steps:[
    {
      expression: `
      g^{-1} = det(g^{\\mu \\nu}),
      g = det(g_{\\mu \\nu})
      \\\\
      \\Gamma^\\mu_{\\mu \\nu}
      =
      \\frac{1}{2}g^{\\mu\\alpha_{1}}(
        \\partial_{\\mu}g_{\\nu \\alpha_{1}}
        +\\partial_{\\nu}g_{\\alpha_{1} \\mu}
        -\\partial_{\\alpha_{1}}g_{\\mu \\nu}
        )
      =
      (-g)^{-1/2}
      \\partial_\\nu (-g)^{1/2}
      `,
      explanation: "NA"
    },
    {
      expression: `-`,
      explanation: "NA"
    },
    {
      expression: `
      \\nabla_{\\alpha_1} P^{\\alpha_2 \\alpha_3}
      =
      \\partial_{\\alpha_1} P^{\\alpha_2 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_2}
      P^{\\alpha_5 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
      P^{\\alpha_2 \\alpha_4}
      \\\\
      \\nabla_{\\alpha_1} P^{\\alpha_1 \\alpha_3}
      =
      \\partial_{\\alpha_1} P^{\\alpha_1 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_1}
      P^{\\alpha_5 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
      P^{\\alpha_1 \\alpha_4}
      \\\\

      \\nabla_{\\alpha_1} P^{\\alpha_1 \\alpha_3}
      =
      \\partial_{\\alpha_1} P^{\\alpha_1 \\alpha_3}
      +
      (-g)^{-1/2}
      \\partial_{\\alpha_5} (-g)^{1/2}

      P^{\\alpha_5 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
      P^{\\alpha_1 \\alpha_4}
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
    description:"Doing E&M in GR",//eq 7.107, 109
    steps:[
    {
      expression: `
      T_{\\mu \\nu} =
      \\frac{1}{4\\pi} (
        F_{\\mu \\alpha_1}
        F_{\\nu}^{\\;\\alpha_1}
        -\\frac{1}{4}
        g_{\\mu \\nu}
        F_{\\alpha_1 \\alpha_2}
        F^{\\alpha_1 \\alpha_2}
        )
      \\\\
      g^{\\mu \\nu} \\nabla_{\\mu} F_{\\nu \\sigma}=0
      \\\\
      \\nabla_{[\\mu} F_{\\nu \\rho]}=0
      `,
      explanation: "The minkowski metric is now replaced with the more general metric and the maxwell equation is impacted by the inverse metric, the bianchi identity is not directly effected."
    },
    {
      expression: `
      S =
      \\frac{1}{16\\pi G}
      \\int d^4x (-g)^{1/2}R
      -
      \\frac{1}{4}
      \\int d^4x (-g)^{1/2}
      F_{\\alpha_1 \\alpha_2}
      F^{\\alpha_1 \\alpha_2}
      \\\\
      F_{\\alpha_1 \\alpha_2} = 2\\nabla_{[\\alpha_1}A_{\\alpha_2]}
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
]
