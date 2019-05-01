var problems = [
/*
a) enumerate the 2-quark mesons, their eigenvalues
b) consider the quarks charge and what the mesons net charge would be
c) how many observable meson states are there when we include iso spin and regular spin
d) given two sets of mass observations, what are the spins for the two sets and value of A
e) expected number of 3-quark baryons? not as detailed enumeration
~f) find the decay rates for spin 3/2 delS particle
~g)
q/m
mc**2 ~= 330 E6 eV
*/
  {
    location:`part a`,
    description:"how many quark+anti-quark mesons are there",
    steps:[
    {
      expression: `
      |1, 1> = - |u, \\bar d>, J^2= \\hbar^2/2, J_z = \\hbar
      \\\\
      |1, 0> = \\frac{1}{2^{1/2}}(
        |u,\\bar u>
        -
        |d,\\bar d>
        ), J^2= \\hbar^2/2, J_z = 0
      \\\\
      |1, -1> = - |d, \\bar u>, , J^2= \\hbar^2/2, J_z = -\\hbar
      \\\\
      |0, 0> = \\frac{1}{2^{1/2}}(
        |u,\\bar u>
        +
        |d,\\bar d>
        ), J^2= 0, J_z = 0

      `,
      explanation: "by fiat the 4 mesons we care about. For no particular reason we're assuming they have to be quark anti-quark pairs."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
