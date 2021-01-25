var problems = [

  {
    location:`NA`,
    description:"Find the limiting potential energy and dipole moment for the mono-magnet phase of the hepta-magnet system",
    steps:[
    {
      expression: `
      \\vec B = B_0 r^{-3} (
        2cos(\\theta) \\hat r
        + sin(\\theta) \\hat \\theta
        )
      \\\\
      \\hat r = cos(\\theta) \\hat x + sin(\\theta) \\hat y
      \\\\
      \\hat \\theta = -sin(\\theta) \\hat x + cos(\\theta) \\hat y
      `,
      explanation: "magnetic field of dipole in polar coordinates, defined relative to an x-axis that the dipole is pointing along."
    },
    {
      expression: `
      \\hat B \\parallel (
        2cos(\\theta) (cos(\\theta) \\hat x + sin(\\theta) \\hat y)
        + sin(\\theta) (-sin(\\theta) \\hat x + cos(\\theta) \\hat y)
        )
      \\\\
      =
        2cos(\\theta)^2 \\hat x
        2cos(\\theta) sin(\\theta) \\hat y
        - sin(\\theta)^2 \\hat x
        + sin(\\theta) cos(\\theta) \\hat y

      \\\\
      =
        (
          2cos(\\theta)^2
          - sin(\\theta)^2
          )
        \\hat x
        +3cos(\\theta) sin(\\theta) \\hat y
      \\\\
      =
        (
          2- 3 sin(\\theta)^2
          )
        \\hat x
        +\\frac{3}{2}sin(2 \\theta) \\hat y
      `,
      explanation: "the direction B is going in cartesian coordinates at some value $&\\theta&$"
    },
    {
      expression: `
      \\phi = atan(y/x) = asin(y/r) = acos(x/r)
      \\\\
      r^2 = 4 cos(theta)^2 + sin(theta)^2 + 3 sin(theta)^2 - 3 sin(theta)^2
      =
      4-3sin(theta)^2
      \\\\
      r = 2 \\pm \\sqrt 3 sin(\\theta)
      `,
      explanation: "possible expressions along the way for determining phi in terms of theta"
    },
    {
      expression: `
      \\phi(\\theta) = ?
      \\\\
      \\phi( 0) = 0,
      \\phi( \\pi) = 0,
      \\phi( \\pi/2) = \\pi,
      \\\\
      \\phi( \\theta) = -\\phi(-\\theta) = -\\phi(2\\pi-\\theta) = \\phi(\\theta+2\\pi,

      `,
      explanation: "sanity checks"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
