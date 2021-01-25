problems.push(
  {
    //2a, 2b
    location:`NA`,
    description:"scalar waves",
    steps:[
    {
      expression: `
      \\partial_\\mu \\partial^\\mu \\phi - \\mu^2 \\phi =0
      \\rightarrow
      \\nabla_\\mu \\nabla^\\mu \\phi - \\mu^2 \\phi =0
      `,
      explanation: "make sure the derivatives properly account for the curvature of space."
    },
    {
      expression: `
      \\nabla_\\mu P^{\\mu \\nu} =
      (-g)^{-1/2}
      \\partial_{\\mu}(
        (-g)^{1/2}
        P^{\\mu \\nu}
        )
      +
      \\Gamma_{\\mu \\alpha_1}^{\\nu \\alpha_1}
      `,
      explanation: "an identity for the covariant divergence (hw4.1c)"
    },
    {
      expression: `
      (-g)^{1/2} = r
      `,
      explanation: "The square root of the determinant of our metric"
    },
    {
      expression: `
      \\partial^{\\mu} \\phi = g^{\\mu \\nu} \\partial_\\nu \\phi
      `,
      explanation: "NA"
    },
    {
      expression: `
      (-g)^{-1/2}
      \\partial_\\mu (
        (-g)^{1/2}
        g^{\\mu \\nu}
        \\partial_\\nu \\phi
        )
      -\\mu^2 \\phi = 0
      \\\\
      (r)^{-1}
      [
        \\partial_r (
          r
          g^{r r}
          \\partial_r \\phi
          )
        +
        \\partial_t (
          r
          g^{t t}
          \\partial_t \\phi
          )
        +
        \\partial_\\theta (
          r
          g^{\\theta \\theta}
          \\partial_\\theta \\phi
          )
      ]
      -\\mu^2 \\phi = 0
      `,
      explanation: "the simple expansion of the KG equation"
    },
    {
      expression: `
      (r)^{-1}
      [
        \\partial_r (
          r
          g^{r r}
          \\partial_r \\phi
          )
        +
          r
          g^{t t}
        \\partial_t (
          \\partial_t \\phi
          )
        +
          r
          g^{\\theta \\theta}
        \\partial_\\theta (
          \\partial_\\theta \\phi
          )
      ]
      -\\mu^2 \\phi = 0
      \\\\
      (r)^{-1}
      [
        \\frac{1}{L^2}
        \\partial_r (
          r
          (r^2- ML^2)
          \\partial_r \\phi
          )
        -
        \\frac{rL^2}{r^2-ML^2}
        \\partial_t^2
        \\phi
        +
          r^{-1}
        \\partial_\\theta^2 \\phi
      ]
      -\\mu^2 \\phi = 0
      \\\\
      (r)^{-1}
      [
        \\frac{1}{L^2}
        \\partial_r (
          r
          (r^2- ML^2)
          \\partial_r \\phi
          )
        -
        \\frac{rL^2}{r^2-ML^2}
        \\partial_t^2
        \\phi
        +
          r^{-1}
        \\partial_\\theta^2 \\phi
      ]
      -\\mu^2 \\phi = 0
      `,
      explanation: "carrying out some of the substitutions given our specific metric."
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
      \\frac{1}{L^2r}
      \\partial_r[
        (r^3-LMr)\\partial_r \\phi
      ]
      +
      \\frac{L^2}{ML^2-r^2}
      \\partial_t^2
      \\phi
      +
      \\frac{1}{r^2}
      \\partial_{\\theta}^2
      \\phi
      -\\mu^2 \\phi = 0
      `,
      explanation: "an expanded out KG equation given the BTZ metric"
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
	)
