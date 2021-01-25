problems.push(
  {
    location:`part e`,
    description:"how many ways can we combine 3 gen 1 quarks?",
    steps:[
    {
      expression: `4^3=64`,
      explanation: "a naive counting of the permutations of 3 quarks."
    },
    {
      expression: `\\frac{(4+3-1)!}{3!(6-3)!}=\\frac{6*5*4}{3*2}=20`,
      explanation: "choosing 3 quarks from the set of 4 allowing repetition. In that set would include a baryon comprised of 3 up quarks which would have a net charge of 2e."
    },
    {
      expression: `
      uuu, ddd, ddu, uud
      \\\\
      4*2=8
      `,
      explanation: "cursory searching suggests baryons are strictly matter or anti-matter contrary to their mesonic siblings. Which would reduce us to 8 baryons and anti-baryons."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
