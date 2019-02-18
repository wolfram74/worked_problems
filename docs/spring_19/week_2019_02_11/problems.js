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
      \\\\
      =
      \\frac{2}{\\cos{\\left (\\theta \\right )} + 1}
      `,
      explanation: "The unormalized eigen vector and it's inner product"
    },
    {
      expression: `
      |n->= \\frac{1}{(<e-||e->)^{1/2}} |e->
      =
      \\left[\\begin{matrix}
      - \\frac{\\sqrt{2} e^{- i \\phi} \\sin{\\left (\\theta \\right )}}{2 \\sqrt{\\cos{\\left (\\theta \\right )} + 1}}
      \\\\
      \\frac{1}{2} \\sqrt{2 \\cos{\\left (\\theta \\right )} + 2}
      \\end{matrix}\\right]
      =
      \\frac{\\sqrt{\\cos{\\left (\\theta \\right )} + 1}}{2^{1/2}}
      \\left[\\begin{matrix}
      - \\frac{e^{- i \\phi} \\sin{\\left (\\theta \\right )}}{\\cos{\\left (\\theta \\right )} + 1}
      \\\\
       1
      \\end{matrix}\\right]
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
    // sakurai 1.3.11 pdf 39 is relevant
    // sakurai 1.3.31 pdf 42 is relevant
    description:"Give the matrix representation of the identity matrix",
    steps:[
    {
      expression: `
      \\widehat 1 =|+><+|+|-><-|
      \\\\
      =
      \\left[\\begin{matrix}
      <+||+><+||+>^* &<+||+><-||+>^* &\\\\
      <-||+><+||+>^* &<-||+><-||+>^* &\\\\
      \\end{matrix}\\right]
      +
      \\left[\\begin{matrix}
      <+||-><+||->^* &<+||-><-||->^* &\\\\
      <-||-><+||->^* &<-||-><-||->^* &\\\\
      \\end{matrix}\\right]
      \\\\
      =
      \\left[\\begin{matrix}
      1*1 &1*0 &\\\\
      0*1 &0*0 &\\\\
      \\end{matrix}\\right]
      +
      \\left[\\begin{matrix}
      0*0 &0*1 &\\\\
      1*0 &1*1 &\\\\
      \\end{matrix}\\right]
      =
      \\left[\\begin{matrix}
      1 &0 &\\\\
      0 &1 &\\\\
      \\end{matrix}\\right]
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
    description:"consider the raising and lowering operator in expressed in terms of the z basis",
    steps:[
    {
      expression: `
      S+ =h|+><-|=
      \\\\
      h
      \\left[\\begin{matrix}
      <+||+><+||->^* &<+||+><-||->^* &\\\\
      <-||+><+||->^* &<-||+><-||->^* &\\\\
      \\end{matrix}\\right]
      \\\\
      =
      h
      \\left[\\begin{matrix}
      1*0 &1*1 &\\\\
      0*0 &0*1 &\\\\
      \\end{matrix}\\right]
      \\\\
      =
      h
      \\left[\\begin{matrix}
      0 &1 &\\\\
      0 &0 &\\\\
      \\end{matrix}\\right]

      `,
      explanation: "NA"
    },
    {
      expression: `
      S-
      =
      h
      \\left[\\begin{matrix}
      <+||-><+||+>^* &<+||-><-||+>^* &\\\\
      <-||-><+||+>^* &<-||-><-||+>^* &\\\\
      \\end{matrix}\\right]
      \\\\
      =
      h
      \\left[\\begin{matrix}
      0*1 &0*0 &\\\\
      1*1 &1*0 &\\\\
      \\end{matrix}\\right]

      \\\\
      =
      h
      \\left[\\begin{matrix}
      0 &0 &\\\\
      1 &0 &\\\\
      \\end{matrix}\\right]

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

]
