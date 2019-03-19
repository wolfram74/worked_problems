var problems = [

  {
    location:`NA`,
    description:"Show the state <x|g> minimizes the uncertainty principles ",
    steps:[
    {
      expression: `
      <x|h> =
      \\frac{1}{pi^{1/4} d^{1/2}}
      e^{ikx - x^2/2d^2}
      `,
      explanation: "mathematica work found lower "
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    description:"Calculate the uncertainty for the nth state in the SHO and determine which one saturates the lower bound",
    steps:[
    {
      expression: `
      <n|(\\Delta x)^2|n>
      <n|(\\Delta p)^2|n>
      `,
      explanation: "the uncertainty expression"
    },
    {//eq 2.3.24
      expression: `
      x=(\\frac{\\hbar}{2 m \\omega})^{1/2} (a+a^\\dagger)
      \\\\
      p=i(\\frac{\\hbar m \\omega}{2 })^{1/2} (-a+a^\\dagger)
      `,
      explanation: "the position and momentum operators in terms of raising and lowering operators."
    },
    {//eq 1.4.51
      expression: `
      <n|(\\Delta x)^2|n>
      =
      <n|x^2|n> - <n|x|n>^2
      \\\\
      =
      (\\frac{\\hbar}{2 m \\omega})
      (<n|(a+a^\\dagger)^2|n>
      -
      <n|a+a^\\dagger|n>^2)
      \\\\
      =
      (\\frac{\\hbar}{2 m \\omega})
      (
        <n|a^2|n>
        +<n|(a^\\dagger)^2|n>
        <n|a a^\\dagger|n>
      -
      (
        <n|a|n>
        +
        <n|a^\\dagger|n>
      )
      ^2)
      \\\\
      =
      (\\frac{\\hbar}{2 m \\omega})
      (
        (n^2-1)^{1/2}<n|n-2>
        +(n^2+3n+2)^{1/2}<n|n+2>
        (n+1)<n|n>
      -
      (
        (n)^{1/2}<n|n-1>
        +
        (n+1)^{1/2}<n|n+1>
      )
      ^2)
      \\\\
      =
      (\\frac{\\hbar}{2 m \\omega})
      (
        0
        +0
        (n+1)1
      -
      (
        0
        +
        0
      )
      ^2)
      =\\frac{\\hbar}{2 m \\omega}(n+1)
      `,
      explanation: "our generic uncertainty in x for state n."
    },
    {
      expression: `
      <n|(\\Delta p)^2|n>
      =
      -(\\frac{\\hbar m \\omega}{2 })(
        <n|(-a+a^\\dagger)^2|n>
        -
        <n|-a+a^\\dagger|n>^2
        )
      =
      \\\\
      -(\\frac{\\hbar m \\omega}{2 })(
        <n|(a^2|n>
        +<n|(a^\\dagger)^2|n>
        -<n|aa^\\dagger|n>
        -
        <n|a|n>^2
        +<n|a^\\dagger|n>^2
        )
      =
      \\\\
      -(\\frac{\\hbar m \\omega}{2 })(
        0
        +0
        -<n|aa^\\dagger|n>
        -
        0
        +0
        )
      =\\frac{\\hbar m \\omega}{2 } (n+1)
      `,
      explanation: "The uncertainty in momentum"
    },
    {
      expression: `
      <n|(\\Delta x)^2|n>
      <n|(\\Delta p)^2|n>
      =\\frac{\\hbar^2 }{2^2 } (n+1)\\geq \\frac{\\hbar^2 }{2^2 }
      `,
      explanation: "Our uncertainty is minimized in the ground state, n=0"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    description:"Find the unitary matrices for each of two matrices to diaganolize them",
    steps:[
    {
      expression: `
      A_1=
      \\left[\\begin{matrix}1 & 1 & 0 & -1\\\\1 & 1 & -1 & 0\\\\0 & -1 & 1 & 1\\\\-1 & 0 & 1 & 1\\end{matrix}\\right]
      \\\\
      A_2 =
      \\left[\\begin{matrix}1.0 & 0.5 & -1.0 & 0.5\\\\0.5 & 1.0 & 0.5 & -1.0\\\\-1.0 & 0.5 & 1.0 & 0.5\\\\0.5 & -1.0 & 0.5 & 1.0\\end{matrix}\\right]
      `,
      explanation: "Our starting matrices"
    },
    {
      expression: `
      U^{-1} A_1 U =D
      \\\\
      U=
      \\left[\\begin{matrix}\\frac{1}{4} & - \\frac{1}{4} & - \\frac{1}{4} & \\frac{1}{4}\\\\\\frac{1}{2} & 0 & \\frac{1}{2} & 0\\\\0 & \\frac{1}{2} & 0 & \\frac{1}{2}\\\\- \\frac{1}{4} & - \\frac{1}{4} & \\frac{1}{4} & \\frac{1}{4}\\end{matrix}\\right]
      D=
      \\left[\\begin{matrix}-1 & 0 & 0 & 0\\\\0 & 1 & 0 & 0\\\\0 & 0 & 1 & 0\\\\0 & 0 & 0 & 3\\end{matrix}\\right]
      `,
      explanation: "The diaganolization of A1 with the columns matching up with the eigen values in the diaganol matrix D"
    },
    {
      expression: `
      U^{-1} A_2 U =D
      \\\\
      U=
      \\left[\\begin{matrix}-0.25 & 0.25 & -0.25 & 0.25\\\\0.25 & 0.25 & 0.25 & 0.25\\\\-0.5 & 0 & 0.5 & 0\\\\0 & -0.5 & 0 & 0.5\\end{matrix}\\right]
      D=
      \\left[\\begin{matrix}-1.0 & 0 & 0 & 0\\\\0 & 1.0 & 0 & 0\\\\0 & 0 & 2.0 & 0\\\\0 & 0 & 0 & 2.0\\end{matrix}\\right]
      `,
      explanation: "The diaganolization of A2 with the same structure as the first part."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    description:"Various true false statements",
    steps:[
    {
      expression: `-`,
      explanation: "(T)If $&\\Delta Q&$ of a state for some observable Q is 0, then that state is an eigenstate, True."
    },
    {
      expression: `-`,
      explanation: "(F)There doesn't exist square matrices that produce a scalar multiple of the identity because the trace of a determinant is always 0."
    },
    {
      expression: `
      AB = BA = C
      \\\\
      AB x = y
      \\\\
      Bx = rx
      \\\\
      rAx = Cx = BAx
      `,
      explanation: "(T)Two operators that commute have the same eigen vectors"
    },
    {
      expression: `-`,
      explanation: "(T)The matrix representation of the identity operator is basis independent"
    },
    {
      expression: `-`,
      explanation: "(T) the set of eigenvalues for an operator are basis independent"
    },
    {
      expression: `-`,
      explanation: "(T) basic matrix operations are basis independent"
    },
    {
      expression: `-`,
      explanation: "(F) a unitary and hermitian matrix if simply squared will not necessarily be the identity matrix."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
