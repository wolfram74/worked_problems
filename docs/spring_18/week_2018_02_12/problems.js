// candidate chen problems
// 4.1 is kind of interesting pg81
// 4.2 relaxing an assumption about plasma freq calculation pg 86
// 4.4 determining the dielectric
// 4.6 rederiving electron wave with collisions pg 94
// 4.8 relaxing in-plane constraint electrostatic waves with B pg108
var problems = [
  {
    location:`chen 1984 problem 4.1`,
    description:"given a relationship between a density perturbation and potential perturbation $&\\frac{n_1}{n_0}=\\frac{e\\phi_1}{KT_e}\\frac{\\omega_p + ia}{\\omega+ia}&$ find an expression for the phase shift between potential and density, and if $&\\omega_p > \\omega&$ does the potential lag or lead density.",
    steps:[
    {
      expression: `\\phi_1 = \\alpha n_1 e^{i\\delta}`,
      explanation: "expressing phi in terms of density and a phase shift."
    },
    {
      expression: `
      \\phi_1 = \\alpha n_1 e^{i\\delta}
      =
      \\frac{1}{n_0}\\frac{KT_e}{e}n_1\\frac{\\omega+ia}{\\omega_p + ia}
      `,
      explanation: "isolating phi to one side"
    },
    {
      expression: `
      \\frac{\\omega+ia}{\\omega_p + ia}
      =
      \\frac{\\omega+ia}{\\omega_p + ia}\\frac{\\omega_p - ia}{\\omega_p - ia}
      =
      \\frac{(\\omega+ia)(\\omega_p-ia)}{\\omega_p^2 - a^2}
      =
      \\frac{a^2+ia \\omega_p + \\omega\\omega_p-\\omega ia}{\\omega_p^2 - a^2}
      =
      \\frac{1}{\\omega_p^2 - a^2}(a^2+ \\omega\\omega_p +ia (\\omega_p -\\omega) )
      =\\frac{1}{\\omega_p^2 - a^2}  Z
      `,
      explanation: "Isolating the complex portion of the expression in 2"
    },
    {
      expression: `
      Z=x+iy=re^{i\\delta}=a^2+ \\omega\\omega_p +ia (\\omega_p -\\omega)
      \\\\
      \\delta = atan(\\frac{y}{x}) = atan(\\frac{a(\\omega_p -\\omega)}{a^2+ \\omega\\omega_p})
      `,
      explanation: "An expression for the phase shift in terms of known parametes."
    },
    {
      expression: `
      \\omega_p > \\omega \\rightarrow (\\omega_p -\\omega) > 0 \\rightarrow \\delta > 0
      `,
      explanation: "as the phase shift is positive, potential leads density in this circumstance."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
