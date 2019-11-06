var problems = [

  {
    location:`research`,
    description:"produce a more tractable potential energy function",
    steps:[
    {
      expression: `
      U_{i,j}=
      -\\frac{\\mu_0}{4\\pi}
      \\frac{\\mu_i \\mu_j}{2}
      \\frac{1}{r_{i,j}^3}
      [cos(\\phi_i-\\phi_j)+3cos(\\phi_i+\\phi_j-2\\theta_{i,j})]
      `,
      explanation: "one of the components for the energy function."
    },
    {
      expression: `
      cos(\\phi_i-\\phi_j)
      = cos(\\phi_i)cos(\\phi_j)
      +sin(\\phi_i)sin(\\phi_j)
      \\\\
      cos(\\phi_i+\\phi_j-2\\theta_{i,j})
      = cos(\\phi_i+\\phi_j)cos(2\\theta_{i,j})
      +sin(\\phi_i+\\phi_j)sin(2\\theta_{i,j})
      \\\\
      = [
        cos(\\phi_i)cos(\\phi_j)
        -sin(\\phi_i)sin(\\phi_j)
      ]cos(2\\theta_{i,j})
      \\\\
      +[
        sin(\\phi_i)
        cos(\\phi_j)
        +
        cos(\\phi_i)
        sin(\\phi_j)
      ]sin(2\\theta_{i,j})
      `,
      explanation: "expanding the trig function portion"
    },
    {
      expression: `
      cos(\\phi_k) = x_k,sin(\\phi_k) = y_k,
      \\  iff \\
      x_k^2+y_k^2=1
      `,
      explanation: "a possible substitution if a constraint is observed"
    },
    {
      expression: `
      U_{i,j}=
      -\\frac{\\mu_0}{4\\pi}
      \\frac{\\mu_i \\mu_j}{2}
      \\frac{1}{r_{i,j}^3}
      [
      [
        x_i x_j
        -y_i
        y_j
      ]cos(2\\theta_{i,j})
      +[
        y_i
        x_j
        +
        x_i
        y_j
      ]sin(2\\theta_{i,j})
      ]
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
