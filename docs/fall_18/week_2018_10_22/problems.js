var problems = [
  {
  //pdf page182
    location:`Assignment 3.5`,
    description:"Consider the classical N-independent distinguishable SHO with hamiltonian of $&H = \\Sigma_\\nu^N p_\\nu^2/2m + m\\omega^2 q_\\nu^2/2&$",
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
      expression: `
      Z(V,T,1)=\\frac{1}{h}\\int dq dp  e^{-\\beta (
        p^2/2m + m\\omega^2 q^2/2
        )}
      \\\\
      =
      \\frac{1}{h}
      \\int dq  e^{-\\beta
        m\\omega^2 q^2/2
        }
      \\int dp  e^{-\\beta
        p^2/2m
        }
      \\\\
      \\int dx  e^{- a x^2/2
        }=\\sqrt{2 \\pi a^{-1}}
      \\\\
      \\therefore
            \\frac{1}{h}
      \\int dq  e^{-\\beta
        m\\omega^2 q^2/2
        }
      \\int dp  e^{-\\beta
        p^2/2m
        }
      =
      \\sqrt{2 \\pi /(m \\beta \\omega^2)}
      \\sqrt{2 \\pi m/\\beta}
      =
      \\frac{1}{\\hbar}
      (\\beta \\omega)^{-1} = Z(V,T,1)
      \\\\
      \\therefore
      Z(V,T,N)
      = Z(V,T,1)^N
      =
      (\\hbar\\beta \\omega )^{-N}
      \\\\
      F = -KT ln(Z)
      = -KT ln((\\hbar\\beta \\omega )^{-N})
      = NKT ln((\\hbar\\beta \\omega ))
      = -NKT ln(\\frac{KT}{\\hbar \\omega})
      `,
      explanation: "A concise expression for the partition function and free energy."
    },
    {
      expression: `
        S = -\\frac{dF}{dT} = -\\frac{d}{dT} (
          -NKT ln(\\frac{KT}{\\hbar \\omega})
          )
        =NK ln(\\frac{KT}{\\hbar \\omega}) + \\frac{NKT}{T}
        \\\\
        =NK (ln(\\frac{KT}{\\hbar \\omega}) + 1)
        \\\\
        p=-\\frac{dF}{dV} = 0
        \\\\
        \\mu = \\frac{dF}{dN}
        = \\frac{d}{dT}(
          -NKT ln(\\frac{KT}{\\hbar \\omega})
          )
        =-KT ln(\\frac{KT}{\\hbar \\omega}) = \\frac{F}{N}
      `,
      explanation: "Expressions for entropy and chemical potential"
    },
    {
      expression: `
      F=U-TS
      \\\\
      U = F+TS = NK T (ln(\\frac{KT}{\\hbar \\omega}) + 1)
      -NKT ln(\\frac{KT}{\\hbar \\omega})= NK T
      `,
      explanation: "Expression for total energy of the system."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
      \\therefore Z(T,V,N) = (2sinh(\\beta \\hbar \\omega /2))^{-N}
      \\\\
      F = -kT ln(Z) = NkT ln(
        2sinh(\\beta \\hbar \\omega /2)
        )
      `,
      explanation: "Expression for the partition function"
    },
    {
      expression: `
        S = -\\frac{dF}{dT}
        = -\\frac{dF}{d\\beta}\\frac{d\\beta}{dT}
        = \\frac{dF}{d\\beta}\\beta^2
        \\\\
        \\frac{d}{d\\beta}(
          N\\beta^{-1} ln(
        2sinh(\\beta \\hbar \\omega /2)
        )
          ) \\beta^2
        =
        \\\\
        (-N\\beta^{-2} ln(
          2sinh(\\beta \\hbar \\omega /2)
        )
          +N\\hbar \\omega\\beta^{-1}\\frac{1}{2}
        coth(\\beta \\hbar \\omega /2)

          ) \\beta^2
        =
        \\\\
        -Nln(
          2sinh(\\beta \\hbar \\omega /2)
        )
          +N\\hbar \\omega\\beta\\frac{1}{2}
        coth(\\beta \\hbar \\omega /2)
        =
        \\\\
        p=-\\frac{dF}{dV} = 0
        \\\\
        \\mu = \\frac{dF}{dN} =
        \\beta^{-1} ln(
        2sinh(\\beta \\hbar \\omega /2)
        =\\frac{F}{N}
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
