var problems = [

  {
    location:`NA`,
    description:"Is there a set of units such that the coefficient in front of the dipole interaction and moment of inertia can be set to 1, and if so, is it unique? most importantly what is the unit of time?",
    steps:[
    {
      expression: `\\frac{\\mu_0}{4 \\pi} m^2r_{ij}^{-3}
    [\\cos(\\phi_i-\\phi_j)+3\\cos(\\phi_i+\\phi_j-2\\theta_{ij})]`,
      explanation: "expanded out expression 6.35 from griffiths as the interaction energy of two identical strength dipoles"
    },
    {
      expression: `T = \\frac{1}{2}I \\dot{\\phi}^2\\\\ I=2/5 MR^2`,
      explanation: "kinetic energy of a spinning dipoles, preferentially focus on I in general, invoke specific I if necessary."
    },
    {
      expression: `
      [\\frac{\\mu_0}{4 \\pi} m^2r_{ij}^{-3}] = [J]=[Kg L^2 s^{-2}]
      \\\\
      [\\frac{\\mu_0}{4 \\pi} m^2] = [J]=[Kg L^5 s^{-2}]
      \\\\
      [\\mu_0]=[N/A^2]
      \\\\
      [m^2] = [A L^2] = [J T^{-1}]
      \\\\
      [I] = [Kg L^2]
      `,
      explanation: "Some dimensional analysis stuff, L represents meters"
    },
    {
      expression: `\\frac{\\mu_0}{4 \\pi} m^2r_{ij}^{-3} = U_0`,
      explanation: "the basic energy unit"
    },
    {
      expression: `[\\cos(\\phi_i-\\phi_j)+3\\cos(\\phi_i+\\phi_j-2\\theta_{ij})]= F(\\phi_i, \\phi_j)`,
      explanation: "the angular dependent part of the motion. Assume equilibria exist at $&\\vec {\\phi^*}&$"
    },
    {
      expression: `
      I \\delta \\vec{ \\ddot \\phi} 
      + U_0 (\\partial_{\\vec \\phi} F)|_{\\vec \\phi^*} \\delta \\vec \\phi
      =0
      \\\\
      M \\ddot x + k x = 0
      \\\\
      [\\frac{k}{M}] = [\\frac{U_0}{I}]
      \\\\
      T^{-2} = \\frac{\\mu_0 m^2}{4 \\pi I r_{ij}^3}
      \\\\
      T = {\\frac{4 \\pi I r^3}{\\mu_0 m^2}}^{1/2}
      `,
      explanation: "by analogy with the simple harmonic oscillator, time measured in the above listed and unit T and distance measured relative to the space between two adjacent dipoles will allow for the moment of inertia and interaction potential to be 1 or $&\\alpha&$."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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