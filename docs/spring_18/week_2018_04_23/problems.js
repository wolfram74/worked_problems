var problems = [

  {
    location:`numerical methods assignment`,
    description:"play around with the keplerian problem",
    steps:[
    {
      expression: `-`,
      explanation: "as can be seen in the appendix, the orbit is quite circular, and inspection of the data in non_adaptive_keplerian_120steps.txt at the end of a year the particle is within 1 part in 10 million of it's starting point, as an AU is ~1.5E8 km that would mean it's within a hundred kilometers of it's starting point."
    },
    {
      expression: `-`,
      explanation: "using the adaptive rk4 with a spot tolerance of 1 part in a thousand the final position is identical out to 5 decimal places, however it was able to accomplish the process in 16*2 steps, so the plot looks rather polygonal."
    },
    {
      expression: `-`,
      explanation: "Plotting the step size as a function of radius you can see at very small radii close to the singularity the step size gets quite small. You can also observe a hysteresis effect coming from the stricter conditions on making step size smaller vs letting step size get bigger in this particular implementation."
    },
    {
      expression: `-`,
      explanation: "projecting the paths for numerous comets a relative error under 2% over various eccentricities and expected periods. Larger eccentricities would likely lead to more problems as the range of forces will grow more and more extreme."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`numerical methods assignment`,
    description:"Observe the sensitivity to initial conditions",
    steps:[
    {
      expression: `-`,
      explanation: "In the appendix is the plot of x vs t for the two different starting conditions. z=20 is on the left, z=20.01 is on the right. The trajectories are qualitatively distinct by t~10."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
