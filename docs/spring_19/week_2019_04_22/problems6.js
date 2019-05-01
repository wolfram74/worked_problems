problems.push(
  {
    //https://en.wikipedia.org/wiki/Table_of_Clebsch%E2%80%93Gordan_coefficients
    location:`part f`,
    description:"a j=3/2 particle decays quickly into lower j particles. Find the clebsch-gordan coefficients, and the associated decay rates.",
    steps:[
    {
      expression: `
      1|1,1>|1/2, 1/2>
      \\\\
      (1/3)^{1/2}|1,1>|1/2, -1/2>
      \\\\
      (2/3)^{1/2}|1,0>|1/2, 1/2>

      `,
      explanation: "based on the table linked to at the bottom"
    },
    {
      expression: `
      \\Gamma = \\Gamma_0 |C|^2
      \\\\
      \\Gamma(|1,1>|1/2, 1/2>) = \\Gamma_0
      \\\\
      \\Gamma(|1,1>|1/2, -1/2>) = \\Gamma_0/3
      \\\\
      \\Gamma(|1,0>|1/2, 1/2>) = 2\\Gamma_0/3
      `,
      explanation: "Decay rates indicating the $&J_z=3/2&$ particle decays at the same rate as the $&J_z=1/2&$, despite only having one decay path."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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


	)
