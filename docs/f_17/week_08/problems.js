var problems = [

  {
    location:`E&M lecture described in class`,
    description:"Supposing a function jumping from -1 to 1 at the origin. Describe it in terms of legendre polynomials",
    steps:[
    {
      expression: `F(x) = \\Sigma A_l P_l(x)`,
      explanation: "any function can be decomposed in terms of legendre polynomials"
    },
    {
      expression: `\\int_{-1}^{1}P_l P_{l'} dx = \\frac{2}{2l+1}\\delta_{ll'}
      `,
      explanation: "orthogonality relationship for legendre polynomials"
    },
    {
      expression: `A_l =
      \\frac{2l+1}{2}
      \\int_{-1}^{1}Fp_l dx
      `,
      explanation: "Making use of the orthogonality relationship to find associated coefficients"
    },
    {
      expression: `P_l = \\partial_x(P_{l+1}-P_{l-1})\\frac{1}{2l+1}`,
      explanation: "A relationship derived from how the legendre polynomials are defined"
    },
    {
      expression: `
      A_l =
      \\frac{1}{2}
      \\int_{-1}^{1}F(P_{l+1}'-P_{l-1}') dx
      `,
      explanation: "substituting in the derivatives for the actual legendre term"
    },
    {
      expression: `
      2A_l =
      \\int_{-1}^{1}FP_{l+1}' dx
      -\\int_{-1}^{1}FP_{l-1}' dx
      `,
      explanation: "a sum of terms in an integral can be split up and done separately"
    },
    {
      expression: `
      2A_l =
      FP_{l+1}|_{-1}^1 - \\int_{-1}^{1}F'P_{l+1} dx
      -FP_{l-1}|_{-1}^1 + \\int_{-1}^{1}F'P_{l-1} dx
      `,
      explanation: "making use of integration of parts"
    },
    {
      expression: `F=2H(x)-1, F'=2\\delta(x)`,//'
      explanation: "Where H is the heaviside function"
    },
    {
      expression: `
      FP_{l+1}|_{-1}^1 =
      (2H(x)-1)P_{l+1}(x)|_{-1}^1 =
      (2H(1)-1)P_{l+1}(1)-(2H(-1)-1)P_{l+1}(-1) =
      (2-1)P_{l+1}(1)-(0-1)P_{l+1}(-1) =
      P_{l+1}(1)+P_{l+1}(-1)
      `,
      explanation: "substituting in our specific function for the general result for boundaries"
    },
    {
      expression: `
      \\int_{-1}^{1}F'P_{l+1} dx =
      2\\int_{-1}^{1}\\delta(x)P_{l+1} dx = 2P_{l+1}(0)
      `,//'
      explanation: "substituting in our specific function for the integral portion"
    },
    {
      expression: `
      2A_l =
      [P_{l+1}(1)+P_{l+1}(-1) - 2P_{l+1}(0)]
      -[P_{l-1}(1)-P_{l-1}(-1) + 2P_{l-1}(0)]
      `,
      explanation: "extending results for $&P_{l+1}&$ to $&P_{l-1}&$ and substituting back into step 7"
    },
    {
      expression: `P_l(1)=1, P_l(-1)=(-1)^l`,
      explanation: "A useful identity regarding legendre polynomials on the boundaries of where they are defined"
    },
    {
      expression: `
      2A_l =
      [1+(-1)^{l+1} - 2P_{l+1}(0)]
      -1-(-1)^{l-1} + 2P_{l-1}(0)]
      `,
      explanation: "substituting identity 12 into our expression"
    },
    {
      expression: `(-1)^{l+1}=(-1)^{l-1}(-1)^2 = (-1)^{l-1}`,
      explanation: "a handy feature of -1"
    },
    {
      expression: `A_l = P_{l-1}(0) - P_{l+1}(0)`,
      explanation: "an expression for general $&A_l&$"
    },
    {
      expression: `P_l(0)=\\frac{(-1)^{l/2}}{4^{l/2}}\\frac{l!}{((l/2)!)^2}`,
      explanation: "convenient property of legendre polynomials when l is even, otherwise 0"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    ]
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
