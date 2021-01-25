var problems = [

  {
    location:`problem set 1`,
    description:"Show heat flows from hot to cold between two systems in thermal contact at different temperatures, suppose system A is hotter than system B",
    steps:[
    {
      expression: `
      dU_a+dU_b=0
      \\\\
      dS_a+dS_b \\ge 0
      `,
      explanation: "Conservation of energy in a closed system, and the 2nd law of thermodynamics that total change in entropy can't be 0."
    },
    {
      expression: `dU_i=T_i dS_i`,
      explanation: "holding other terms constant, the change in energy."
    },
    {
      expression: `
      T_a dS_a+T_b dS_b = \\delta Q_a+\\delta Q_b=0
      \\\\
      \\delta Q_b=-\\delta Q_a
      \\\\
      \\frac{\\delta Q_a}{T_a}+\\frac{\\delta Q_b}{T_b}
      = \\frac{\\delta Q_a}{T_a}-\\frac{\\delta Q_a}{T_b}
      = \\delta Q_a (\\frac{1}{T_a}-\\frac{1}{T_b}) \\ge 0
      \\\\
      (\\frac{1}{T_a}-\\frac{1}{T_b}) \\lt 0 \\rightarrow \\delta Q_a \\le 0
      `,
      explanation: "in processes that observe the 2nd law result in heat flow from A to B"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`Problem set 1`,
    description:"Starting with conservation of energy and ideal gas law, find $&\\mu&$ as a function of temperature and pressure.",
    steps:[
    {
      expression: `
      dU = TdS-pdV + \\mu dN
      \\\\
      pV = NkT
      \\\\
      U = \\frac{3}{2}NkT
      `,
      explanation: "starting equations"
    },
    {
      expression: `
      dS = dU/T + pdV/T - \\mu dN
      \\\\
      \\frac{dU}{dT} = \\frac{3}{2}Nk
      \\\\
      dU = \\frac{3}{2}Nk dT
      \\\\
      \\frac{p}{T} = Nk/V
      \\\\
      \\rightarrow
      \\\\
      dS = \\frac{3Nk}{2T}dT + \\frac{Nk}{V}dV
      \\\\
      S-S_0
      = 3/2Nk ln(\\frac{T}{T_0})+ Nk ln(\\frac{V}{V_0})
      = Nk ln((\\frac{T}{T_0})^{3/2})+ Nk ln(\\frac{V}{V_0})
      \\\\
      = Nk ln((\\frac{T}{T_0})^{3/2}\\frac{V}{V_0})
      `,
      explanation: "Finding S as a function of V and T"
    },
    {
      expression: `
      S
      = Nk ln((\\frac{T}{T_0})^{3/2}\\frac{V}{V_0})+S_0
      \\\\
      = Nk (ln((\\frac{T}{T_0})^{3/2}\\frac{V}{V_0})+\\frac{S_0}{Nk})
      \\\\
      \\frac{V}{V_0} = \\frac{T}{T_0}\\frac{p_0}{p}
      \\\\
      (\\frac{T}{T_0})^{3/2}\\frac{V}{V_0} = (\\frac{T}{T_0})^{5/2}\\frac{p_0}{p}
      \\\\
      S=
      Nk(\\alpha_0 + ln[(\\frac{T}{T_0})^{5/2}\\frac{p_0}{p}])
      `,
      explanation: "Finding S as a function of T and p"
    },
    {
      expression: `
      0=SdT-Vdp+Nd\\mu
      \\\\
      d\\mu = \\frac{V}{N}dp - \\frac{S}{N}dT
      \\\\
      \\frac{V}{N} = \\frac{kT}{p}
      \\\\
      \\frac{S}{N} = k(\\alpha_0 + ln[(\\frac{T}{T_0})^{5/2}\\frac{p_0}{p}])
      \\\\
      d\\mu = \\frac{kT}{p}dp
      - k(\\alpha_0 + ln[(\\frac{T}{T_0})^{5/2}\\frac{p_0}{p}])dT
      \\\\
      \\int_{T_0}^T k(\\alpha_0 + ln[(\\frac{T'}{T_0})^{5/2}\\frac{p_0}{p}])dT
      =
      k(\\alpha_0+ln(\\frac{p_0}{p}))(T-T_0)
      +\\frac{5}{2}k(Tln(\\frac{T}{T_0})-T +T_0)
      \\\\
      \\mu - \\mu_0 = k(\\frac{5}{2}-\\alpha_0)(T +T_0)-kTln[(\\frac{T}{T_0})^{5/2}\\frac{p_0}{p}]
      `,
      explanation: "an expression for the chemical potential in terms of temperature and pressure"//'
    },
    {
      expression: `

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
    location:`Problem set 1`,
    description:"plot the carnot cycle in T-S space and calculate the change in heat along the hot and cold curves. Plot featured below",
    steps:[
    {
      expression: `
      \\Delta Q_h = T_h(S_2-S_1)=T_h(Nkln(\\frac{V_2}{V_1}))
      \\\\
      \\Delta Q_c = T_c(S_1-S_2)=T_c(Nkln(\\frac{V_4}{V_3}))
      `,
      explanation: "alternative approach given the entropy change between two points found earlier concurs on heat exchange derived from work conservation."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
