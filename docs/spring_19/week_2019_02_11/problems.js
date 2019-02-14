var problems = [

  {
    location:`NA`,
    description:"take two states expressed in orthogonal bases and determine their ket sum and their bra sum.",
    steps:[
    {
      expression: `
      |\\psi_1>=
      4i|\\phi_1> - 12i |\\phi_2>
      |\\phi_1> - 6i |\\phi_2>
      \\\\
      |\\psi_2>=
      4i|\\phi_1> - 12i |\\phi_2>
      |\\phi_1> - 6i |\\phi_2>
      `,
      explanation: "initial vectors"
    },
    {
      expression: `
      |\\psi_1> + |\\psi_2>
      =
      4i|\\phi_1> - 12i |\\phi_2>
      +|\\phi_1> - 6i |\\phi_2>
      \\\\
      =(1+4i) |\\phi_1> - 18i |\\phi_2>
      `,
      explanation: "the ket sum"
    },
    {
      expression: `
      <\\psi_1| + <\\psi_2|
      =
      -4i<\\phi_1| + 12i <\\phi_2|
      +<\\phi_1| + 6i <\\phi_2|
      \\\\
      =(1-4i) <\\phi_1| + 18i <\\phi_2|
      `,
      explanation: "the bra sum."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    description:"given two states expressed in an orthonormal basis, find their scalar product.",
    steps:[
    {
      expression: `
      |\\psi_1>=6i|\\phi_1> - 3i |\\phi_2>
      \\\\
      |\\psi_2>= -2 |\\phi_1> - 4i |\\phi_2>
      `,
      explanation: "our initial vectors"
    },
    {
      expression: `
      <\\psi_1||\\psi_2>
      =
      (-6i<\\phi_1| + 3i <\\phi_2|)(-2 |\\phi_1> - 4i |\\phi_2>)
      \\\\
      =
      12i + 12 -24i*0 -6i*0=12(1+i)

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
    description:"calculate the alternate scalar product and compare it with the complex conjugate of the prior.",
    steps:[
    {
      expression: `
      <\\psi_2||\\psi_1>
      =
      (-2 <\\phi_1| + 4i <\\phi_2|)(6i|\\phi_1> - 3i |\\phi_2>)
      \\\\
      =
      -12i +12 +0 +0 = 12(1-i) = <\\psi_1||\\psi_2>^*
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
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    location:`NA`,
    description:"Find the down eigen state for the general spin direction in the Z basis. ",
    steps:[
    {
      expression: `
      S_n =
      \\hbar 2^{-1}
      \\left[\\begin{matrix}\\cos{\\left (\\theta \\right )} & e^{- i \\phi} \\sin{\\left (\\theta \\right )}\\\\e^{i \\phi} \\sin{\\left (\\theta \\right )} & - \\cos{\\left (\\theta \\right )}\\end{matrix}\\right]
      `,
      explanation: "the general spin operator"
    },
    {
      expression: `
      \\lambda^{2} - 1
      `,
      explanation: "the characteristic polynomial for just the operator, obviously has eigen values as 1 and -1. We want the state associated with -1"
    },
    {
      expression: `
      |e->
      =\\left[\\begin{matrix}- \\frac{e^{- i \\phi} \\sin{\\left (\\theta \\right )}}{\\cos{\\left (\\theta \\right )} + 1}\\\\1\\end{matrix}\\right]
      \\\\
      <e-||e-> =
      1 + \\frac{\\sin^{2}{\\left (\\theta \\right )}}{\\left(\\cos{\\left (\\theta \\right )} + 1\\right)^{2}}
      `,
      explanation: "The unormalized eigen vector and it's inner product"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    // sakurai 1.3.11 pdf 39 is relevant
    // sakurai 1.3.31 pdf 39 is relevant
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
