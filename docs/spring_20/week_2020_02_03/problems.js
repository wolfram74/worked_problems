var problems = [

  {
    location:`self`,
    description:"a method for determining spectrum values",
    steps:[
    {
      expression: `
      \\ddot \\phi_i = f_i(\\vec \\phi)
      \\\\
      \\vec \\phi^*\\equiv f_i(\\vec{\\phi^*}) = 0
      `,
      explanation: "accelerations and asserting an equilibrium exists"
    },
    {
      expression: `
      f_i(\\vec \\phi)
      \\approx
      \\Sigma_j \\partial_{\\phi_j}f_i|_{\\phi^*}(
        \\phi_j-\\phi_j^*
        )
      `,
      explanation: "first order term"
    },
    {
      expression: `
      \\delta \\phi_i \\equiv \\phi_i-\\phi_i^*
      \\\\
      \\delta \\ddot{\\phi_i} =
      \\Sigma_j \\partial_{\\phi_j}f_i|_{\\phi^*} \\delta \\phi_j
      `,
      explanation: "equations of motion for the perturbation"
    },
    {
      expression: `
      \\delta \\vec{\\phi} = \\vec a e^{-i\\omega t}
      \\rightarrow
      \\delta \\vec{ \\ddot{\\phi}} = -\\omega^2 \\delta \\vec{\\phi}
      \\\\
      -\\omega^2 \\delta \\vec{\\phi}=
      \\widehat L \\delta \\vec{\\phi}
      \\\\
      L_{i,j} = \\partial_{\\phi_j} F_i|_{\\vec{\\phi^*}}
      `,
      explanation: "This means calculating the eigenvalues of L will give us the negative values of the eigen frequencies squared, if any of the eigenvalues are positive, it will denote an unstable mode."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
