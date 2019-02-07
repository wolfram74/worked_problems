var problems = [

  {
    location:`NA`,
    description:"consider the electro-magnetic potential as a set of functions $&A_\\mu&$ and the electro-magnetic field $&F_{\\mu \\nu} = 2(\\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu)&$",
    steps:[
    {
      expression: `
      A_\\mu' = A_\\mu+\\partial_\\mu \\alpha
      \\\\
      F_{\\mu \\nu}' =
      2(\\partial_\\mu A_\\nu' - \\partial_\\nu A_\\mu')
      = 2(
        \\partial_\\mu (A_\\nu+\\partial_\\nu \\alpha)
        - \\partial_\\nu (A_\\mu+\\partial_\\mu \\alpha))
      \\\\
      = 2(
        \\partial_\\mu A_\\nu
        +\\partial_\\mu \\partial_\\nu \\alpha
        - \\partial_\\nu A_\\mu
        - \\partial_\\nu \\partial_\\mu \\alpha)
      \\\\
      = 2(
        \\partial_\\mu A_\\nu
        - \\partial_\\nu A_\\mu
        +\\partial_\\mu \\partial_\\nu \\alpha
        - \\partial_\\nu \\partial_\\mu \\alpha
        )=F_{\\mu \\nu}+0
      \\\\
      `,
      explanation: "The electro-magnetic field is unchanged by the this transformation."
    },
    {
      expression: `
      \\epsilon_{ijk} = \\pm 1 (even/odd \\ permutations)
      \\\\
      \\epsilon_{imn}\\epsilon^{jmn}=f(i,j,m,n)
      \\\\
      i=m, i=n, j=m, j=n \\rightarrow f= 0
      \\\\
      i \\neq j \\rightarrow i = (n||m) \\ ||\\  j = (n||m) \\rightarrow f=0
      \\\\
      i = j \\rightarrow f= 1-1+1 =1
      \\\\
      \\therefore \\epsilon_{imn}\\epsilon^{jmn} = \\delta^{j}_i
      `,
      explanation: "pairs of levi civita tensors can compact to delta functions."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    description:"suppose two tensors $&T^{\\mu \\nu}&$ and $&S^{\\mu}_{\\ \\nu}&$ show the following quantities are tensors of the indicated rank",
    steps:[
    {
      expression: `
      A^{\\mu \\nu}
      =
      \\phi T^{\\mu \\nu}
      +\\psi \\eta^{\\alpha \\nu} S^{\\mu}_{\\ \\alpha}`,
      explanation: "NA"
    },
    {
      expression: `
      B^{\\mu \\nu \\rho}_{\\ \\ \\ \\ \\ \\sigma}
      =T^{\\mu \\nu} S^{\\rho}_{\\ \\sigma}
      `,
      explanation: "NA"
    },
    {
      expression: `
      C^{\\mu \\nu}=
      B^{\\mu  \\rho \\nu}_{\\ \\ \\ \\ \\ \\rho}
      =T^{\\mu \\rho} S^{\\nu}_{\\ \\rho}

      `,
      explanation: "NA"
    },
    {
      expression: `
      \\nabla_{\\mu} T^{\\nu \\rho}
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
]
