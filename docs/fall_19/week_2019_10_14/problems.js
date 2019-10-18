var problems = [

  {
    location:`research`,
    description:"specify the geometry for the filled hexagon. Assumes spheres are diameter $&l&$",
    steps:[
    {
      expression: `
      U_{i,j}=
      -\\frac{\\mu_0}{4\\pi}
      \\frac{\\mu_i \\mu_j}{2}
      \\frac{1}{r_{i,j}^3}
      [cos(\\phi_i-\\phi_j)+3cos(\\phi_i+\\phi_j-2\\theta_{i,j})]
      `,
      explanation: "potential energy for two spheres, i, j. Central sphere is index 0 and outter 6 range 1 to 6, counter clockwise starting from the +x axis. See diagram at bottom."
    },
    {
      expression: `
      r_{i,j}=r_{j,i}
      \\\\
      r_{0,i}=l
      \\\\
      r_{i-j\\%6=1,5}=l
      \\\\
      r_{i-j\\%6=2,4}=3^{1/2}l
      \\\\
      r_{i-j\\%6=3}=2l
      `,
      explanation: "the radial terms given our symmetry."
    },
    {
      expression: `
      \\theta_{i,j} \\neq \\theta_{j,i}
      \\\\
      \\theta_{0,i} = 2 i \\pi/6
      \\\\
      |\\theta_{i,j}| + |\\theta_{j,i}| = \\pi
      \\\\
      \\theta_{i,j} =
      \\frac{(1+2i+(j-i)\\%6)\\%12}
      {6}\\pi
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
