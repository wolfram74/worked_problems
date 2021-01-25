var problems = [

  {
    location:`NA`,
    description:"examing contact criterion for the double magnet oscillator in the orbital mode",
    steps:[
    {
      expression: `T_{\\phi_t, \\theta} =
      \\frac{1}{2}(2p_{\\theta}^2+20 p_{\\phi_t}^2)
      \\\\
      U_{\\phi_t, \\theta} =
      -\\frac{1}{12}(1+3cos(\\phi_t - 2\\theta))
      \\\\
      \\dot p_r|_{r=1} =
      2p_{\\theta}^2
      - \\frac{1}{4}(1+3cos(\\phi_t - 2\\theta)) < 0
      `,
      explanation: "energy and force constraint"
    },
    {
      expression: `
      L_t =
      P_\\theta + 2P_{\\phi_t}
      \\\\
      P_{\\phi_t}^2=
      (L_t^2 + P_\\theta^2 - 2L_t P_\\theta)/4
      \\\\
      T =
      \\frac{1}{2}(
        2p_{\\theta}^2
        +5 (L_t^2 + P_\\theta^2 - 2L_t P_\\theta)
        )
      \\\\
      T =
      \\frac{1}{2}(
        7p_{\\theta}^2
        +5 L_t^2  - 2L_t P_\\theta
        )
      \\\\
      L_t=0
      \\rightarrow
      \\frac{2}{7}T = p_{\\theta}^2
      `,
      explanation: "kinetic energy in terms of orbital and total momentum"
    },
    {
      expression: `
      \\dot P_{r0} =
      2p_{\\theta}^2
      - \\frac{1}{4}(1+3) <0
      \\\\
      2p_{\\theta}^2
      < 1
      \\\\
      p_{\\theta}^2
      < 1/2
      \\\\
      T
      < 7/4

      `,
      explanation: "how large kinetic energy in the orbital mode can be and maintain contact at the bottom of the potential."
    },
    {
      expression: `
      \\dot p_{rm} =
      0
      - \\frac{1}{4}(1+3cos(\\phi_t - 2\\theta)) < 0
      \\\\
      (1+3cos(\\phi_t - 2\\theta)) > 0
      \\\\
      3cos(\\phi_t - 2\\theta) > -1
      \\\\
      \\phi_t - 2\\theta > arcos(-1/3) \\approx 1.91
      \\\\
      - 7 \\theta > \\approx 1.91
      \\\\
      \\theta > \\approx -1.91/7
      `,
      explanation: "using equation 35 to determine what angle contact would be lost. A taylor expansion could be taken at this point to confirm that it approaches 0 more slowly than the centripetal portion as cosine is not extremal at the relevant angle."
    },
    {
      expression: `
      \\Delta U = 4/12= T_i = 1/3
      \\\\
      \\frac{2}{7}\\frac{1}{3}
      = p_{\\theta}^2
      \\\\
      \\frac{2}{21}
      = p_{\\theta}^2

      `,
      explanation: "the maximum kinetic energy that keeps the repulsive region forbidden, much lower than the 7/4's permitted near the bottom of the well. Also implies that if contact is lost, it enters a scattering trajectory?"
    },
    {
      expression: `
      T=1/2
      \\\\
      p_{\\theta}^2 = 1/7
      \\\\
      p_{\\theta} \\approx .378
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
