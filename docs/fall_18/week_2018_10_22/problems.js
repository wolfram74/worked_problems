var problems = [
  {
  //pdf page182
    location:`Assignment 3.5`,
    description:"Consider the classical N-independent distinguishable SHO with hamiltonian of $&H = \\Sigma_\\nu^N p_\\nu^2/2m + m\\omega q_\\nu^2/2&$",
    steps:[
    {
      expression: `
      Z(V,T,N) =
      \\frac{1}{h^{N}}
      \\int d^{N}q d^{N}p e^{-\\beta H}
      \\\\
      =
      \\frac{1}{h^{N}}
      \\int d^{N}q d^{N}p e^{-\\beta \\Sigma_\\nu H_\\nu}
      \\\\
      =
      \\frac{1}{h^{N}}
      \\int d^{N}q d^{N}p \\Pi_\\nu e^{-\\beta H_\\nu}
      \\\\
      =
      \\Pi_\\nu
        \\frac{1}{h}\\int dq_\\nu dp_\\nu  e^{-\\beta H_\\nu}
      = Z(V,T,1)^N
      `,
      explanation: "Recasting the N independent partition function in terms of the single partitiion function"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`Assignment 3.5`,
    description:"Consider N-independent distinguishable quantum SHO with energy of $&E = \\Sigma_i^N \\epsilon(n_i) = \\Sigma_i^N \\hbar \\omega n + \\epsilon_0&$",
    steps:[
    {
      expression: `
      Z(T,V,N)=\\Sigma_{E=0}^{\\infty} e^{-\\beta E}
      \\\\
      =
      \\Sigma_{n_1=0}^\\infty ... \\Sigma_{n_N=0}^\\infty e^{-\\beta(\\Sigma_1^N n_i \\hbar \\omega + N\\epsilon_0)}
      =
      \\Pi_{n_i}^N e^{-\\beta(\\Sigma_{\\nu}^\\infty n_\\nu \\hbar \\omega +\\epsilon_0)}
      \\\\
      =Z(T,V,1)^N
      `,
      explanation: "Showing the relation between N distinguishable systems and a single system."
    },
    {
      expression: `
      Z(T,V,1)
      =  e^{-\\beta \\epsilon_0}\\Sigma_{n=0}^\\infty e^{-\\beta n\\hbar \\omega }
      =  e^{-\\beta \\epsilon_0}\\Sigma_{n=0}^\\infty (e^{-\\beta \\hbar \\omega })^{n}
      \\\\
      =e^{-\\beta \\epsilon_0} \\frac{1}{1-e^{-\\beta \\hbar \\omega }}
      =e^{-\\beta \\hbar\\omega/2} \\frac{1}{1-e^{-\\beta \\hbar \\omega }}
      \\frac{e^{\\beta \\hbar\\omega/2}}{e^{\\beta \\hbar\\omega/2}}
      \\\\
      =\\frac{1}{e^{\\beta \\hbar \\omega /2}-e^{-\\beta \\hbar \\omega /2}}
      =(2sinh(\\beta \\hbar \\omega /2))^{-1}
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
    location:`Assignment 3.5`,
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
