var problems = [
//donezo
  {
    location:`Problem set 6`,
    description:"treat probability and the energy in the variable particle count case.",
    steps:[
    {
      expression: `
      E_t  = E_s+E_r
      \\\\
      \\frac{E_s}{E_t} = 1-\\frac{E_r}{E_t}
      \\\\
      \\frac{E_s}{E_t} << 1
      \\\\
      N_t  = N_s+N_r
      \\\\
      \\frac{N_s}{N_t} = 1-\\frac{N_r}{N_t}
      \\\\
      \\frac{N_s}{N_t} << 1
      `,
      explanation: "breaking up our region of interest into a small system and a larger reservoir."
    },
    {
      expression: `
      |i> \\rightarrow (E_i, N_i)
      \\\\
      p_i \\propto \\Omega_r(E_t-E_i, N_t-N_i)
      `,
      explanation: "The number of ways that a single state i can manifest in our system is proportional to it's probability, and that number is how many different ways the reservoir can spare the necessary energy and particles."
    },
    {
      expression: `
      k ln(p_i)
      \\propto k ln(\\Omega_r(E-E_i, N-N_i))
      \\approx
      k ln(\\Omega_r(E, N))
      -\\partial_E (kln(\\Omega_r(E, N))) E_i
      -\\partial_N (kln(\\Omega_r(E, N))) N_i
      \\\\
      kln(\\Omega(E,N)) = S
      \\\\
      dU + pdV - \\mu dN= TdS
      \\\\
      ln(p_i) \\propto ln(\\Omega_r(E, N)) -\\frac{1}{kT}E_i + \\frac{\\mu}{kT} N_i
      `,
      explanation: "Using the definition of entropy and to recast how the log of the probability relates to the states energy and chemical potential."
    },
    {
      expression: `
      p_i
      \\propto \\Omega_r(E, N) e^{ -\\beta(E_i - \\mu N_i)}
      \\propto c_0 e^{ -\\beta(E_i - \\mu N_i)}
      \\\\
      1 = \\Sigma_i c_0 e^{ -\\beta(E_i - \\mu N_i)}
      \\\\
      c_0^{-1}= \\Sigma_i e^{ -\\beta(E_i - \\mu N_i)} \\equiv \\mathcal{Z}
      \\\\
      p_i = e^{ -\\beta(E_i - \\mu N_i)}/\\mathcal{Z}
      `,
      explanation: "Exploiting the fact that summing over a probability space has to equal 1 we find the macrocanonical partition function."
    },
    {
      expression: `
      U = \\Sigma_i p_i E_i
      \\\\
      N = \\Sigma_i p_i N_i
      \\\\
      S = -k\\Sigma_i p_i ln(p_i)
      \\\\
      U-\\mu N - TS =
      \\Sigma_i p_i (E_i-\\mu N_i + kT ln(p_i))
      \\\\
      kT ln(p_i) = -\\beta kT (E_i-\\mu N_i) - ln(\\mathcal{Z})
      \\\\
      U-\\mu N - TS =
      \\Sigma_i p_i (E_i-\\mu N_i -\\beta kT (E_i-\\mu N_i) - kT ln(\\mathcal{Z}))
      =\\Sigma_i p_i (- kT ln(\\mathcal{Z}))
      \\\\
      =- kT ln(\\mathcal{Z})\\Sigma_i p_i= - kT ln(\\mathcal{Z})\\equiv \\phi
      `,
      explanation: "A new kind of potential is defined in terms of the macro partition function."
    },
    {
      expression: `
      dU = TdS + \\mu dN - pdV
      \\\\
      U = \\phi +\\mu N + TS \\rightarrow dU = d\\Phi + (TdS + \\mu dN) +  (SdT + Nd\\mu )
      \\\\
      TdS + \\mu dN - pdV = d\\phi + (TdS + \\mu dN) +  (SdT + Nd\\mu )
      \\rightarrow d \\phi = -  SdT - Nd\\mu -pdV
      `,
      explanation: "how infinitesimal changes relate to this new potential, offering a new set of maxwell relations."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
//mostly donezo
  {
    location:`Problem set 6`,
    description:"analyze bosons in a 2-level system",
    steps:[
    {
      expression: `
      |1>_q = |1, 0>_o,
      |2>_q = |0, 1>_o
      \\\\
      |1,1,1>_q = |3, 0>_o
      \\\\
      |2,1,1>_q =
      |1,2,1>_q =
      |1,1,2>_q = |2, 1>_o
      \\\\
      |2,2,1>_q =
      |1,2,2>_q =
      |2,1,2>_q = |1, 2>_o
      \\\\
      |2,2,2>_q = |0, 3>_o
      `,
      explanation: "The possible 1 and 3 particle states."
    },
    {
      expression: `
      N_{1,0}=N_{0,1}=1
      \\\\
      N_{3,0}=N_{0,3}=1
      \\\\
      N_{2,1}=N_{1,2}=3
      \\\\
      N_i=N_{n_1,n_2} = n_1+n_2

      `,
      explanation: "tabulating the number of ways different occupancies can be achieved."
    },
    {
      expression: `
      E_{1,0} = \\epsilon_1 N_1 + \\epsilon_2 N_2 =\\epsilon_1
      \\\\
      E_{0,1} = \\epsilon_2
      \\\\
      E_{3,0} = 3 \\epsilon_1
      \\\\
      E_{2,1} = 2 \\epsilon_1+ 1 \\epsilon_2
      \\\\
      E_{1,2} = 1 \\epsilon_1+ 2 \\epsilon_2
      \\\\
      E_{0,3} = 3 \\epsilon_2
      \\\\
      E_i=E_{n_1,n_2} = n_1\\epsilon_1+n_2\\epsilon_2
      `,
      explanation: "The total energy in the various configurations."
    },
    {
      expression: `
      \\mathcal{Z}
      =
      \\Sigma_i e^{-\\beta(E_i-\\mu N_i)}
      =
      \\Sigma_{k=0}^{\\infty}\\Sigma_{j=0}^{\\infty} e^{
        -\\beta(n_k\\epsilon_1+n_j\\epsilon_2-\\mu(n_k+n_j) )
      }
      \\\\
      =
      \\Sigma_{k=0}^{\\infty}\\Sigma_{j=0}^{\\infty}
      (e^{
              -\\beta(\\epsilon_1 - \\mu)
            })^{n_k}
      (e^{
              -\\beta(\\epsilon_2 - \\mu)
            })^{n_j}
      \\\\
      =
      \\frac{1}{
        1-e^{-\\beta(\\epsilon_1 - \\mu)}
      }
      \\frac{1}{
        1-e^{-\\beta(\\epsilon_2 - \\mu)}
      }

      `,
      //http://functions.wolfram.com/GeneralIdentities/12/ butts?
      explanation: "If $&\\epsilon > \\mu&$ then the sums converge and we have a closed form expression for the partition function."
    },
    {
      expression: `
      \\phi = -kT ln(\\mathcal{Z})
      = kT (
        ln(1-e^{-\\beta(\\epsilon_1 - \\mu)})
        +ln(1-e^{-\\beta(\\epsilon_2 - \\mu)})
      `,
      explanation: "NA"
    },
    {
      expression: `
      p_i = e^{-\\beta(E_i-\\mu(n_1+n_2))}/\\mathcal{Z}
      `,
      explanation: "NA"
    },
    {
      expression: `
      <n_1>
      =
      \\Sigma_{n_k=0}^\\infty\\Sigma_{n_j=0}^\\infty
      n_ke^{-\\beta(
        \\epsilon_1 n_k+\\epsilon_2 n_j+-\\mu(n_k+n_j)
        )}/\\mathcal{Z}
      \\\\
      =
      \\mathcal{Z}^{-1}
      \\Sigma_{n_k=0}^\\infty\\Sigma_{n_j=0}^\\infty
      (-\\beta)^{-1}
      \\partial_{\\epsilon_1}e^{-\\beta(
        \\epsilon_1 n_k+\\epsilon_2 n_j+-\\mu(n_k+n_j)
        )}
      \\\\
      =
      (-\\beta)^{-1}
      \\mathcal{Z}^{-1}
      \\partial_{\\epsilon_1} \\mathcal{Z}
      =
      (-\\beta)^{-1} \\partial_{\\epsilon_1} ln(\\mathcal{Z})
      \\\\
      <n_1> = \\frac{-e^{-\\beta(\\epsilon_1-\\mu)}}{1-e^{-\\beta(\\epsilon_1-\\mu)}}
      \\\\
      <n_2> = \\frac{-e^{-\\beta(\\epsilon_2-\\mu)}}{1-e^{-\\beta(\\epsilon_2-\\mu)}}
      `,
      explanation: "determining the expected occupation of state 1 and 2."
    },
    {
      expression: `<U>
      =
      \\Sigma_{n_k=0}^\\infty\\Sigma_{n_j=0}^\\infty
      (\\epsilon_1 n_k+\\epsilon_2 n_j)e^{-\\beta(
        \\epsilon_1 n_k+\\epsilon_2 n_j+-\\mu(n_k+n_j)
        )}/\\mathcal{Z}
      \\\\
      =
      \\mathcal{Z}^{-1}
      \\Sigma_{n_k=0}^\\infty\\Sigma_{n_j=0}^\\infty
      (\\epsilon_1 n_k+\\epsilon_2 n_j)e^{-\\beta(
        \\epsilon_1 n_k+\\epsilon_2 n_j
        )}
      e^{\\beta\\mu(n_k+n_j)}
      \\\\
      =
      \\mathcal{Z}^{-1}
      (-\\partial_\\beta \\mathcal{Z}|_{\\beta \\mu})
      = -\\partial_\\beta ln(\\mathcal{Z})|_{\\beta \\mu}
      \\\\

      `,
      explanation: "The total energy can be found assuming that the chemical potential varies inversely with temperature."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
//also donezish
  {
    location:`Problem set 6`,
    description:"analyze fermiions in a 2-level system",
    steps:[
    {
      expression: `
      |1>_q = |1, 0>_o,
      |2>_q = |0, 1>_o
      \\\\
      |1,2>_q = |1, 1>_o
      `,
      explanation: "The possible 1 and 3 particle states. Of importance is that for a 2 level system, there are no 3 particle states because of the pauli exclusion principle."
    },
    {
      expression: `
      N_i=N_{n_1,n_2} = n_1+n_2
      `,
      explanation: "tabulating the number of ways different occupancies can be achieved."
    },
    {
      expression: `
      E_i=E_{n_1,n_2} = n_1\\epsilon_1+n_2\\epsilon_2
      `,
      explanation: "The total energy in the various configurations."
    },
    {
      expression: `
      \\mathcal{Z}
      =
      \\Sigma_i e^{-\\beta(E_i-\\mu N_i)}
      =
      \\Sigma_{k=0}^{1}\\Sigma_{j=0}^{1} e^{
        -\\beta(n_k\\epsilon_1+n_j\\epsilon_2-\\mu(n_k+n_j) )
      }
      \\\\
      =
      \\Sigma_{k=0}^{1}\\Sigma_{j=0}^{1}
      (e^{
              -\\beta(\\epsilon_1 - \\mu)
            })^{n_k}
      (e^{
              -\\beta(\\epsilon_2 - \\mu)
            })^{n_j}
      \\\\
      =
      1
      +e^{-\\beta(\\epsilon_1 - \\mu)}
      +e^{-\\beta(\\epsilon_2 - \\mu)}
      +e^{-\\beta(\\epsilon_1+\\epsilon_2 - 2\\mu)}
      =
      (1+e^{-\\beta(\\epsilon_1 - \\mu)})(1+e^{-\\beta(\\epsilon_2 - \\mu)})
      `,
      //http://functions.wolfram.com/GeneralIdentities/12/ butts?
      explanation: "As the infinite sum is now finite, no constraints on energy are needed for convergence."
    },
    {
      expression: `
      \\phi = -kT ln(\\mathcal{Z})
      = -kT ln(
      (1+e^{-\\beta(\\epsilon_1 - \\mu)})
      (1+e^{-\\beta(\\epsilon_2 - \\mu)})
      )
      =
      -kT ln(
      (1+e^{-\\beta(\\epsilon_1 - \\mu)})
      )
      -kT ln(
      (1+e^{-\\beta(\\epsilon_2 - \\mu)})
      )

      `,
      explanation: "NA"
    },
    {
      expression: `
      p_i = e^{-\\beta(E_i-\\mu(n_1+n_2))}/\\mathcal{Z}
      `,
      explanation: "NA"
    },
    {
      expression: `
      <n_1>
      =
      \\Sigma_{n_k=0}^1 \\Sigma_{n_j=0}^1
      n_ke^{-\\beta(
        \\epsilon_1 n_k+\\epsilon_2 n_j+-\\mu(n_k+n_j)
        )}/\\mathcal{Z}
      \\\\
      =
      \\mathcal{Z}^{-1}
      \\Sigma_{n_k=0}^1 \\Sigma_{n_j=0}^1
      (-\\beta)^{-1}
      \\partial_{\\epsilon_1}e^{-\\beta(
        \\epsilon_1 n_k+\\epsilon_2 n_j+-\\mu(n_k+n_j)
        )}
      \\\\
      =
      (-\\beta)^{-1}
      \\mathcal{Z}^{-1}
      \\partial_{\\epsilon_1} \\mathcal{Z}
      =
      (-\\beta)^{-1} \\partial_{\\epsilon_1} ln(\\mathcal{Z})
      \\\\
      <n_1> = \\frac{-e^{-\\beta(\\epsilon_1-\\mu)}}{1+e^{-\\beta(\\epsilon_1-\\mu)}}
      \\\\
      <n_2> = \\frac{-e^{-\\beta(\\epsilon_2-\\mu)}}{1+e^{-\\beta(\\epsilon_2-\\mu)}}
      `,
      explanation: "determining the expected occupation of state 1 and 2."
    },
    {
      expression: `<U>
      =
      \\Sigma_{n_k=0}^1\\Sigma_{n_j=0}^1
      (\\epsilon_1 n_k+\\epsilon_2 n_j)e^{-\\beta(
        \\epsilon_1 n_k+\\epsilon_2 n_j+-\\mu(n_k+n_j)
        )}/\\mathcal{Z}
      \\\\
      =
      \\mathcal{Z}^{-1}
      \\Sigma_{n_k=0}^1\\Sigma_{n_j=0}^1
      (\\epsilon_1 n_k+\\epsilon_2 n_j)e^{-\\beta(
        \\epsilon_1 n_k+\\epsilon_2 n_j
        )}
      e^{\\beta\\mu(n_k+n_j)}
      \\\\
      =
      \\mathcal{Z}^{-1}
      (-\\partial_\\beta \\mathcal{Z}|_{\\beta \\mu})
      = -\\partial_\\beta ln(\\mathcal{Z})|_{\\beta \\mu}
      \\\\

      `,
      explanation: "The total energy can be found assuming that the chemical potential varies inversely with temperature."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`Problem set 6`,
    description:"analyze bosons and fermions in an infinite level system",
    /*
    goals:
      ln Z-
      N
      range of z=mu*beta
      FD mu for T->0
      polarization factor?
      ch12-14 quantum systems
    */
    steps:[
    {
      expression: `
      \\mathcal{Z}_B
      =
      \\Pi_{i=1}^{\\infty}
      \\Sigma_{n_i=0}^\\infty
      e^{-\\beta(\\epsilon_i-\\mu)n_i}
      \\\\
      =
      \\Pi_{i=1}^{\\infty}
      (1-e^{-\\beta(\\epsilon_i-\\mu)})^{-1}
      =
      \\Pi_{i=1}^{\\infty}
      (1-e^{\\beta \\mu}e^{-\\beta\\epsilon_i})^{-1}
      \\\\
      ln(\\mathcal{Z}_B) = -\\Sigma_{i=1}^{\\infty}ln(1-ze^{-\\beta\\epsilon_i})
      \\\\
      \\mathcal{Z}_F
      =
      \\Pi_{i=1}^{\\infty}
      \\Sigma_{n_i=0}^1
      e^{-\\beta(\\epsilon_i-\\mu)n_i}
      \\\\
      =
      \\Pi_{i=1}^{\\infty}
      (1+e^{-\\beta(\\epsilon_i-\\mu)})
      =
      \\Pi_{i=1}^{\\infty}
      (1+e^{\\beta \\mu}e^{-\\beta\\epsilon_i})
      \\\\
      ln(\\mathcal{Z}_F) = \\Sigma_{i=1}^{\\infty}ln(1+ze^{-\\beta\\epsilon_i})

      `,
      explanation: "The partition functions for fermions and bosons."
    },
    {
      expression: `
      -kTln(\\mathcal{Z}) = \\phi
      \\\\
      N = -\\partial_\\mu \\phi
      \\\\
      \\phi_B = \\Sigma_{i=1}^{\\infty}\\beta^{-1}ln(1-e^{\\mu \\beta}e^{-\\beta\\epsilon_i})
      \\\\
      N_B =
      -\\partial_\\mu
      \\Sigma_{i=1}^{\\infty}
      \\beta^{-1}ln(1-e^{\\mu \\beta}e^{-\\beta\\epsilon_i})
      =
      \\Sigma_{i=1}^{\\infty}
      \\beta^{-1}ln(1-e^{\\mu \\beta}e^{-\\beta\\epsilon_i})
      \\\\
      =
      \\Sigma_{i=1}^{\\infty}
      \\frac{1}{e^{-\\mu \\beta}e^{\\beta\\epsilon_i}-1}=
      \\Sigma_{i=1}^{\\infty}
      \\frac{1}{z^{-1}e^{\\beta\\epsilon_i}-1}
      \\\\
      N_F
      =
      \\Sigma_{i=1}^{\\infty}
      \\frac{1}{z^{-1}e^{\\beta\\epsilon_i}+1}
      `,
      explanation: "Finding expressions for the total particles in the system. To Keep N positive finite, in the boson case $&0<Z<e^{\\beta \\epsilon_1}&$ while in the fermion case there is no limit assuming that the energy states go to infinite."
    },
    {
      expression: `
      N_F
      =
      \\Sigma_{i=1}^{\\infty}
      \\frac{1}{z^{-1}e^{\\beta\\epsilon_i}+1}
      =
      \\Sigma_{i=1}^{\\infty}
      \\frac{1}{e^{\\beta(\\epsilon_i-\\mu)}+1}
      \\\\
      T\\rightarrow 0 \\therefore \\beta \\rightarrow \\infty
      \\\\
      \\therefore \\mu \\rightarrow \\epsilon_N
      `,
      explanation: "as temperature approaches 0 the chemical potential will equal Nth energy state to match the fact that the N lowest states will be occupied to minimize system energy."
    },
    {
      expression: `
      \\epsilon = p^2/(2m),
      p = (2 m \\epsilon)^{1/2},
      dp = (\\frac{m}{2\\epsilon})^{1/2} d \\epsilon,
      u = \\beta \\epsilon, d\\epsilon = \\beta^{-1} du
      \\\\
      N_B
      =
      \\Sigma_{i=1}^{\\infty}
      \\frac{1}{z^{-1}e^{\\beta\\epsilon_i}+1}
      \\approx
      \\frac{V}{h^3}\\int
      \\frac{1}{z^{-1}e^{\\beta \\epsilon} -1} 4\\pi p^2 dp
      \\\\
      =
      \\frac{V}{h^3}\\int
        \\frac{1}{z^{-1}e^{\\beta \\epsilon} -1}
        4\\pi 2 m \\epsilon (\\frac{m}{2\\epsilon})^{1/2}
      d \\epsilon
      \\\\
      =
      \\frac{V}{h^3}\\
      4\\pi 2^{1/2} m^{3/2}
      \\int
        \\frac{
          \\epsilon^{1/2}
        }{z^{-1}e^{\\beta \\epsilon} -1}
      d \\epsilon
      \\\\
      =
      \\frac{V}{h^3}\\
      2\\pi 2^{3/2} m^{3/2} \\beta^{-3/2}
      \\int
        \\frac{
          u^{3/2-1}
        }{z^{-1}e^{u} -1}
      d u
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
    location:`Problem set 6`,
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
