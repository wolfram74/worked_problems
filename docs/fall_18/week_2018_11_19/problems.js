var problems = [

  {
    location:`midterm`,
    description:"find the corresponding maxwell relation for $&\\partial_V \\mu|_{T,N}&$",
    steps:[
    {
      expression: `
      dF = \\mu dN -SdT-pdV
      `,
      explanation: "Free energy differential"
    },
    {
      expression: `
      \\partial_N F = \\mu
      \\\\
      \\partial_V \\partial N F = \\partial_N \\partial_V F
      \\\\
      \\partial_V F = -p
      \\\\
      \\partial_V \\mu = -\\partial_N p
      `,
      explanation: "how chemical potential and pressure relate."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`midterm`,
    description:"derive the probability relation $&p_i = \\frac{e^{-\\beta E_i}}{Z}&$",
    steps:[
    {
      expression: `
      E_t  = E_s+E_r
      \\\\
      \\frac{E_s}{E_t} = 1-\\frac{E_r}{E_t}
      \\\\
      \\frac{E_s}{E_t} << 1
      `,
      explanation: "conservation of energy and assuming the system is small relative to the reservoir"
    },
    {
      expression: `
      \\Omega(E) = \\Omega_R(E_r) + \\Omega_S(E_s)
      \\\\
      p_i \\propto \\Omega_S(E_i) \\propto \\Omega_R(E_r) = \\Omega_R(E_t-E_s)
      `,
      explanation: "as the total energy never changes the number of configurations of the total system is also constant. And the likelihood of an energy state is linearly proportional to the number of ways that state can be expressed."
    },
    {
      expression: `
      k ln(p_i)
      \\propto kln(\\Omega_R(E_t-E_s))
      \\approx kln(\\Omega_R(E)) - \\partial_E (k ln(\\Omega_R(E)))E_i
      \\\\
      \\partial_E (k ln(\\Omega_R(E))) =
      \\partial_E S = T^{-1}
      \\\\
      k ln(p_i) \\propto kln(\\Omega_R(E)) - T^{-1}E_i
      \\\\
      p_i \\propto e^{ln(\\Omega_R(E))}e^{-(kT)^{-1}E_i}
      \\\\
      p_i \\propto c_0 e^{-(kT)^{-1}E_i}
      `,
      explanation: "Taking advantage of the thermodynamic identity that results from the Taylor expansion we have a proportionality of the probability."
    },
    {
      expression: `
      \\Sigma_i p_i = 1
      = \\Sigma_i (c_0 e^{-(kT)^{-1}E_i}) / \\Sigma_j (c_0 e^{-(kT)^{-1}E_j})
      \\\\
      \\Sigma_i (e^{-(kT)^{-1}E_i}) = Z
      \\\\
      p_i = e^{-(kT)^{-1}E_i}/Z
      `,
      explanation: "Normalizing our probabilities so they add up to one."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`self`,
    description:"some comparison of other results from pollack and stump",
    steps:[
    {
      expression: `
      \\omega_{0\\beta}^2 = \\frac{\\mu_0 \\mu^2}{4 \\pi I r^3}
      \\\\
      =
      \\frac{3\\mu_0 \\mu^2}{2 \\pi I L_0^4}
      \\frac{L_0}{6  I }
      \\\\
      =
      F_0
      \\frac{10 }{  m_1 L_0^2 }
      \\frac{L_0}{ 6 }
      =

      \\frac{F_0 }{  m_1 L_0 }
      \\frac{10 }{ 6 }
      =
      \\frac{5 }{ 3 }
      \\frac{1}{  T_0^2 } = \\omega_{0\\beta}^2=\\omega_s
      \\\\
      \\omega_{0\\alpha}^2 = 3\\omega_s^2 = \\frac{5}{7}\\omega_o^2
      `,
      explanation: "in the dimensionless unit system and spherical moment of inertia assumed, the spinning mode agrees, and we see that by preventing orbital motion a chunk of restoring force is missing."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
