var problems = [

  {
    location:`self`,
    description:"Suppose a function $&f(x,y)&$ is positive finite everywhere which can be broken up into parts $&g(x,y)&$ and $&h(x,y)&$ and g has N-fold symmetry. What metrics exist for determining how much g is? what methods exist for finding g?",
    steps:[
    {
      expression: `
      \\vec r = x \\hat x+y \\hat y
      \\\\
      \\widehat R(\\theta) =
      \\left[\\begin{matrix}
        cos(\\theta) & sin(\\theta)
        \\\\
        -sin(\\theta) & cos(\\theta)
      \\end{matrix}\\right]
      \\\\
      \\vec r_\\theta = \\widehat R(\\theta) \\vec r
      `,
      explanation: "rotating a point around the z-axis like normal"
    },
    {
      expression: `
      \\int\\int f(\\vec r) dx dy = I_f
      `,
      explanation: "our normalization term."
    },
    {
      expression: `
      \\int\\int [f(\\vec r)-f(\\vec r_{2\\pi/N})]^2 dx dy = 0
      `,
      explanation: "A true observation if f=g"
    },
    {
      expression: `
      I_f^{-1} \\int\\int [f(\\vec r)-f(\\vec r_{2\\pi/N})]^2 dx dy << 1
      `,
      explanation: "A true observation if $&I_h << I_g&$."
    },
    {
      expression: `
      \\int\\int [f(\\vec r)-f(\\vec r_{2\\pi/N})]^2 dx dy
      =?
      \\int\\int [f(\\vec r)-f(\\vec r_{4\\pi/N})]^2 dx dy
      `,
      explanation: "Something I suspect to be true"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
