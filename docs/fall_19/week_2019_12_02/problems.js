var problems = [

  {
    location:`NA`,
    description:"Working out some relations of pertinent quantities on starlink",
    steps:[
    {
      expression: `
      D_S = D_{SB}+D_{SL}+D_{SR}
      \\\\
      D_{SL} = D_L/S_L
      \\\\
      D_{SR} = D_R/N_S
      `,
      explanation: "An estimate of the total cost of a satellite would be it's manufacturing costs $&D_{SB}&$, it's launch costs $&D_{SL}&$ and it's R&D costs $&D_{SR}&$. $&D_{SR}&$ will trend to 0 if the number of satellites continues to grow and the research ends. We could also bundle it into $&D_{SB}&$ by just putting a multiplier in front of it like $&(1+\\beta)D_{SB}&$. The best number we know in this set is $&S_L&$, satellites per launch, which is 60 for a falcon 9"
    },
    {
      expression: `
      C_S = D_S/T_s
      `,
      explanation: "The monthly cost of a satellite then is it's total cost divided by it's expected life in months, which we're told is ~60 or 5 years."
    },
    {
      expression: `\\gamma = C_P*N_{PS}/C_S`,
      explanation: "$&\\gamma&$ is the profit ratio which we'll assume is greater than 1, probably somewhere between 1.2 and 1.6, and it influences the number of customers per satellite $&N_{PS}&$ and $&C_P&$ cost per customer*month or the monthly subscription fee an individual would expect, which if it's to apply pressure to incumbent ISP's likely would have to be lower than those."
    },
    {
      expression: `
      B_P = B_S/N_{PS}
      `,
      explanation: "Finally we have bandwith per person which is the ratio of bandwidth per satellite $&B_S&$ and the customers per satellite."
    },
    {
      expression: `
      \\gamma*C_S/C_P = N_{PS}
      \\\\
      B_P=B_S/(\\gamma*C_S/C_P)
      \\\\
      C_S = D_S/T_s
      \\\\
      B_P=B_S/(\\gamma*(D_S/T_s)/C_P)
      \\\\
      D_S = (1+\\beta)D_{SB}+D_{SL}
      \\\\
      B_P=
      \\frac{B_S}{\\gamma*(((1+\\beta)D_{SB}+D_{SL})/T_s)/C_P}
      \\\\
      B_P=
      \\frac{B_S*C_P*T_s}{\\gamma*((1+\\beta)D_{SB}+D_{SL})}
      \\\\
      B_P=
      \\frac{B_S*C_P*T_s}{\\gamma*((1+\\beta)D_{SB}+\\frac{D_L}{S_L})}
      `,
      explanation: "This is what we would expect the bandwidth per person to be if evenly distributed. You could include a factor for expected peak usage percentage to account for not everyone making use of the network at once."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
