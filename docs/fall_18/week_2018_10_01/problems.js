var problems = [

//pdf 137 has discussion of phase space of 1 SHo
  {
    location:`NA`,
    description:"considering 1D SHOs, find the phase space volume, number of microsatates, entropy and equation of state.",
    steps:[
    {
      expression: `
      \\omega(E,V,N) = \\int_{H<E}dq^n dp^n
      \\\\
      H = \\frac{1}{2}\\Sigma^N_i (\\frac{1}{m}p_i^2 + m \\omega_n^2 q_i^2)
      `,
      explanation: "An expression for the phase space volume given a certain energy E. An the energy associated with a point in phase space."
    },
    {
      expression: `
      q^* = (m\\omega_n)^{1/2} q, p^* = (m\\omega_n)^{-1/2} p
      \\\\
      dqdp = dq^*dp^*
      `,
      explanation: "a change of variable that preserves integration volume."
    },
    {
      expression: `
      H=
      \\frac{1}{2}\\Sigma^N_i (\\omega_n (p_i^*)^2 + \\omega_n (q_i^*)^2)
      \\\\
      =
      \\frac{\\omega_n}{2}\\Sigma^N_i ((p_i^*)^2+(q_i^*)^2)
      `,
      explanation: "Recasting the hamiltonian in terms of these new coordinates we see that for a given energy we are interested in the points on a 2N sphere with radius $&\\sqrt{2E/\\omega_n}&$"
    },
    {
      expression: `
      \\omega(E,V,N)
      = V(\\sqrt{2E/\\omega_n})_{2N}
      = \\frac{\\pi^{N}}{N!} (2E/\\omega_n)^{N}
      \\\\
      \\Sigma = \\omega_n/h^N = (N!)^{-1} (\\frac{2E \\pi}{h \\omega_n})^{N}
      `,
      explanation: "The volume of a sphere in higher space."
    },
    {
      expression: `
      S(E,V,N) = k ln(\\Omega) \\approx k ln(\\Sigma)
      \\\\
      S \\approx k ln(\\frac{\\pi^{N}}{N!} (\\frac{2E}{h \\omega_n})^{N})
      \\\\
      =
      k ln((N!)^{-1} (\\frac{2E \\pi}{h \\omega_n})^{N})
      =k(N ln(\\frac{2E \\pi}{h \\omega_n}) - ln(N!))
      \\\\
      \\approx
      k(N ln(\\frac{2E \\pi}{h \\omega_n}) +N- Nln(N))
      \\\\
      =kN(1 + ln(\\frac{2E \\pi}{h \\omega_n}) - ln(N)) \\approx S
      `,
      explanation: "taking advantage of stirlings approximation we turn the quantity of microstates into an entropy."
    },
    {
      expression: `
      \\frac{dS}{dE} = T^{-1}
      \\\\
      = \\frac{d}{dE}(kN(1 + ln(E) + ln(\\frac{2\\pi}{h \\omega_n}) - ln(N))) = kNE^{-1}
      \\rightarrow E = kNT
      \\\\
      \\frac{dS}{dV} = pT^{-1} = 0 \\rightarrow p = 0
      `,
      explanation: "Using the energy relations to turn knowledge about the entropy into other physical properties. Of note, since our potential has no recognition of physical volume, there's no pressure term."
    },
    {
      expression: `
      \\frac{dS}{dN} = -\\mu T^{-1}
      \\\\
      =
      k(1 + ln(\\frac{2E \\pi}{h \\omega_n}) - ln(N))
      -k
      =k ln(\\frac{2E \\pi}{h \\omega_nN})
      \\\\
      \\mu = -kT ln(\\frac{2E \\pi}{h \\omega_nN})
      `,
      explanation: "Also finding the chemical potential."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
//pdf 147 has discussion of enumerating quantum states
  {
    location:`NA`,
    description:"Examining the quantum harmonic oscillator for similar properties.",
    steps:[
    {
      expression: `
      H = \\Sigma^N \\epsilon(n_i) = N\\epsilon_0 +  \\Sigma^N \\hbar \\omega n_i
      \\\\
      \\frac{H-N\\epsilon_0}{\\hbar \\omega} = \\Sigma^N_i n_i
      `,
      explanation: "The energy states for the QHO and rearranging to generate a simple sum. As N and E get larger, we can approximate this sum as an integral for the volume of an N-d simplex which will tell us the quantity of states under the energy E,"
    },
    {
      expression: `
      V_n = (\\frac{E-N\\epsilon_0}{\\hbar \\omega})^N (N!)^{-1} = \\Sigma(E,V,N)
      `,
      explanation: "Volume of a simplex and quantity of states."
    },
    {
      expression: `
      S = kln(\\Omega) \\approx kln(\\Sigma)=
      kNln(\\frac{E-N\\epsilon_0}{\\hbar \\omega})-ln(N!)
      \\\\
      \\approx
      kNln(\\frac{E-N\\epsilon_0}{\\hbar \\omega})-Nln(N)+N
      =
      kN(ln(\\frac{E-N\\epsilon_0}{\\hbar \\omega})-ln(N)+1)\\approx S(E,V,N)
      `,
      explanation: "Going from enumeration of states to entropy"
    },
    {
      expression: `
      \\frac{dS}{dE} = T^{-1}
      \\\\
      = \\frac{d}{dE}(
        N(ln(\\frac{E-N\\epsilon_0}{\\hbar \\omega})-ln(N)+1)
        ) = kN(E-N\\epsilon_0)^{-1}
      \\rightarrow E = kNT+N\\epsilon_0
      \\\\
      \\frac{dS}{dV} = pT^{-1} = 0 \\rightarrow p = 0
      `,
      explanation: "Using energy considerations we have values for pressure and energy which agree with the classical values upto a constant to account for the ground state energy"
    },
    {
      expression: `
      \\frac{dS}{dN} = -\\mu T^{-1}
      \\\\
      =
      \\frac{d}{dN}(
        kN(ln(\\frac{E-N\\epsilon_0}{\\hbar \\omega})-ln(N)+1)
        )
      =
      k(ln(\\frac{E-N\\epsilon_0}{\\hbar \\omega})-ln(N)+1)
      -k
      \\\\
      =kln(\\frac{E-N\\epsilon_0}{ N \\hbar \\omega})
      \\\\
      \\mu = -k T ln(\\frac{E-N\\epsilon_0}{ N \\hbar \\omega})
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
