var problems = [

  {
    location:`self`,
    description:"Describe the conditions for circular orbits of double magnets.",
    steps:[
    {
      expression: `\\frac{d}{dt}(\\phi_t - 2 \\theta) = 0`,
      explanation: "the condition needed for continued no torque on $&p_{\\phi_t}&$ and $&p_\\theta&$"
    },
    {
      expression: `
      20 p_{\\phi_t} - 2\\frac{2 p_{\\theta}}{r^{2}} = 0
      \\\\
      p_{\\phi_t} = \\frac{p_{\\theta}}{5 r^{2}}
      `,
      explanation: "What must be true to satisfy that earlier stability criterion."
    },
    {
      expression: `
      L_t = p_{\\theta}+2p_{\\phi_t}
      = p_{\\theta} + \\frac{2 p_{\\theta}}{5 r^{2}}
      `,
      explanation: "Considering what the total angular momentum would be in this case."
    },
    {
      expression: `
      \\dot p_r = \\frac{2 p_{\\theta}^{2}}{r^{3}} - \\frac{1}{r^{4}}
      \\\\
      p_{\\theta} = \\frac{\\sqrt{2}}{2}(r)^{-1/2}
      \\\\
      p_{\\phi_t} = \\frac{\\sqrt{2}}{10}(r)^{-5/2}
      `,
      explanation: "the circular orbit values for these momenta."
    },
    {
      expression: `
      L_t =
      \\frac{\\sqrt{2}}{2}(r)^{-1/2}
      + \\frac{\\sqrt{2}}{5}(r)^{-5/2}
      \\\\
      H_0 =
      \\frac{1}{6 r^{3}} + \\frac{1}{5 r^{5}}
      `,
      explanation: "Conserved quantities under these circumstances. Numerical simulations indicated that while total energy is positive, if slightly below, the system stays confined. If values slightly above, system blows apart."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    // chap 6 of goldstein on oscillations
    // maybe chap 12 of goldstein on canonical perturbation theory
    location:`self`,
    description:"Describe stability/perturbation frequencies of circular orbits.",
    steps:[
    {
      expression: `
      \\Gamma  = (\\phi_d, \phi_d, \\theta, r, p_{\\phi_d},p_{\\phi_t},p_{\\theta},p_{r},)
      \\\\
      \\Gamma_0
      = (0,0,0,r_0,0,p_{\\phi_t 0},p_{\\theta 0},0)
      = (0,0,0,r_0,0,\\frac{\\sqrt{2}}{10}(r_0)^{-5/2},\\frac{\\sqrt{2}}{2}(r_0)^{-1/2},0)
      `,
      explanation: "Our state vector and a circular equilibrium"
    },
    {
      expression: `
      \\dot \\Gamma_i = 0 \\ or \\ v_i t
      \\\\
      if \\ \\Gamma_0`,
      explanation: "our definition of our equilibrium"
    },
    {
      expression: `
      \\dot q = \\partial_p H
      \\approx
      (\\partial_p H)|_{\\Gamma_0}+
      \\partial_{\\Gamma_i} (\\partial_p H)|_{\\Gamma_0} (\\Gamma_{1i}-\\Gamma_{0i})
      \\\\
      \\dot p = -\\partial_q H
      \\approx
      (-\\partial_q H)|_{\\Gamma_0}+
      \\partial_{\\Gamma_i} (-\\partial_q H)|_{\\Gamma_0} (\\Gamma_{1i}-\\Gamma_{0i})
      `,
      explanation: "taylor expansion of time evolution equations for a point in phase space where "
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
