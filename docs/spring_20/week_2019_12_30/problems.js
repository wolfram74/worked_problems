var problems = [

  {
    location:`NA`,
    description:"Some initial particulars about hepta-magnet problem",
    steps:[
    {
      expression: `T = \\frac{1}{2}\\Sigma_i I_i \\dot \\phi_i^2`,
      explanation: "The kinetic energy of the system"
    },
    {
      expression: `
      U=
      \\frac{-U_0}{2}\\Sigma\\Sigma_{i \\neq j}
      (1+(\\alpha-1)\\delta_{0,i})
      \\frac{1}{r_{i,j}^3}
      [cos(\\phi_i-\\phi_j)+3cos(\\phi_i+\\phi_j-2\\theta_{i,j})]
      \\\\
      r_{i,j}^2 = (\\Delta x_{i,j}^2+\\Delta y_{i,j}^2)
      \\\\
      \\theta_{i,j} = \\arctan(\\Delta y_{i,j}/\\Delta x_{i,j})
      \\\\
      \\Delta x_{i,j} = x_i-x_j
      \\\\
      \\Delta y_{i,j} = y_i-y_j
      `,
      explanation: "The potential energy of the system"
    },
    {
      expression: `
      L= T-U
      \\\\
      \\partial_t(\\partial_{\\dot \\phi_i}T)=-
      \\partial_{\\phi_i}T
      `,
      explanation: "Lagrangian and equations of motion"
    },
    {
      expression: `
      \\partial_t(\\partial_{\\dot \\phi_i}T) = I_i \\ddot \\phi_i

      `,
      explanation: "left hand side"
    },
    {
      expression: `
      -\\partial_{\\phi_i}T =
      -(-\\Sigma_{i \\neq j} r_{i,j}^{-3}(
        1+(\\alpha-1)\\delta_{0,i}
        +(\\alpha-1)\\delta_{0,j}
        )[
      sin(\\phi_i-\\phi_j)+3sin(\\phi_i+\\phi_j-2\\theta_{i,j})
      ])
      `,
      explanation: "right hand side"
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
