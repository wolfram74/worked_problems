/*
chen 2nd ed 1984
ch1:
  5 shielding distance for a grid
  7 plug and chug for lambda D
  9 plug and chug
  10 derive potential around conductor
ch2:
  3 plug and chug to find necessary E for particular EXB drift
  7 derive ExB drift for electron beam
  8 calculate some properties of radiation belt
  10 quick plug and chug for larmour radius
  11 loss cone fraction calculation
  13 references problem 12 on page 35
    calculate escape time for a squeezing magnetic bottle
*/
var problems = [

  {
    location:`chen 2nd edition 1-5`,
    description:"Supposing an infinite conducting screen where the particles are are in a boltzmann distribution $&n_j=n_0 exp(\\frac{-q_j \\phi}{\\tau_j})&$, find the shielding rate that the potential decays at.",
    steps:[
    {
      expression: `\\nabla^2\\phi = \\frac{\\rho}{\\epsilon_0}`,
      explanation: "poisson's equation for electric potential"
    },
    {
      expression: `\\rho = q(n_i-n_e) = q n_0 (exp(\\frac{-q \\phi}{\\tau_i}) - exp(\\frac{+q \\phi}{\\tau_e}))`,
      explanation: "Using our assumptions about equilibrium to recast charge density in terms of potential"
    },
    {
      expression: `
      \\rho =
      q n_0 (
        \\Sigma_n (\\frac{-q \\phi}{\\tau_i})^n\\frac{1}{n!}
        - \\Sigma_n (\\frac{q \\phi}{\\tau_e})^n\\frac{1}{n!}
        )
      \\approx
      q n_0 (
        \\frac{-q \\phi}{\\tau_i}
        + \\frac{-q \\phi}{\\tau_e}
        )
      =
      -q^2 n_0 (
        \\frac{1}{\\tau_i}
        + \\frac{1}{\\tau_e}
        )\\phi
      `,
      explanation: "Taylor expanding charge density. The approximation holds if the potential energy terms are small compared to the kinetic energy terms"
    },
    {
      expression: `
      \\partial_x^2\\phi
      =
      -
      \\frac{q^2 n_0}{\\epsilon_0} (
        \\frac{1}{\\tau_i}
        + \\frac{1}{\\tau_e}
        )\\phi
      \\\\
      \\partial_x^2\\phi
      +
      \\frac{q^2 n_0}{\\epsilon_0} (
        \\frac{1}{\\tau_i}
        + \\frac{1}{\\tau_e}
        )\\phi
      =0
      `,
      explanation: "some goof in sign as this implies oscillating solutions, not decaying ones."
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
    location:`chen 1984 problem 2-7 page 26`,
    description:"A beam of electrons with a density of 1E14 per cubic meter radius of 1cm from along a uniform B field of 2T in the direction designated as z+, find E field at the surface and corresponding EXB drift",
    steps:[
    {
      expression: `
      \\nabla \\cdot \\vec E = \\frac{\\rho}{\\epsilon_0}
      \\int_S dR^2 \\vec E \\cdot \\hat n  = \\int_V dR^3 \\frac{\\rho}{\\epsilon_0}
      `,
      explanation: "Gauss's law in integral form."
    },
    {
      expression: `\\vec E = 0 \\hat z + E(r) \\hat r + 0 \\hat \\theta`,
      explanation: "An assumption about what the E field will look like as a result of the geometry of the charge distribution"
    },
    {
      expression: `
      r \\le a
      \\rightarrow E*2\\pi r z = \\frac{\\rho}{\\epsilon_0} \\pi r^2 z
      \\rightarrow E(r) = \\frac{\\rho}{2 \\epsilon_0}r
      `,
      explanation: "An expression for the electric field intensity in terms of r out to r=a"
    },
    {
      expression: `
      \\hat r \\times \\hat \\theta = \\hat z
      \\rightarrow
      \\hat z \\times \\hat r = \\hat \\theta
      \\rightarrow
      \\hat r \\times \\hat z = -\\hat \\theta
      \\\\
      \\vec E \\times \\vec B = E_rB_z (\\hat r \\times \\hat z)
      =
      \\frac{\\rho B_0}{2 \\epsilon_0}r (-\\hat \\theta)
      \\\\
      \\vec V_d = \\frac{\\vec E \\times \\vec B}{|B^2|}
      =\\frac{-\\rho }{2 \\epsilon_0 B_0}r \\hat \\theta
      =\\frac{-(-q*n) }{2 \\epsilon_0 B_0}r \\hat \\theta
      =\\frac{qna }{2 \\epsilon_0 B_0} \\hat \\theta
      \\approx 4.5E3 \\hat \\theta`,
      explanation: "calculated drift velocity for the beam."
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
    location:`chen 1984 p2-11 page 35`,
    description:"a plasma with an isotropic velocity distribution and no collisions is confined by a magnetic mirror with $&R_m=4&$, find what fractions of particles are confined.",
    steps:[
    {
      expression: `f_v(v_x,v_y,v_z)=f_v(v_r)`,
      explanation: "A working definition of an isotropic velocity distribution"
    },
    {
      expression: `sin(\\alpha)^2=\\frac{1}{R_m}`,
      explanation: "an expression for the angle of the loss cone. If a particles velocity points along the highlighted by the loss cone it will escape."
    },
    {
      expression: `
      \\int_{0,0}^{\\pi, 2\\pi} d\\theta_p d\\theta_e sin(\\theta_p)=4\\pi
      \\\\
      \\frac{1}{4\\pi}\\int_{\\alpha,0}^{\\pi-\\alpha, 2\\pi} d\\theta_p d\\theta_e sin(\\theta_p)=n_{confined}
      \\\\
      \\frac{1}{2\\pi}\\int_{\\alpha,0}^{\\pi/2, 2\\pi} d\\theta_p d\\theta_e sin(\\theta_p)=n_{confined}
      \\\\
      \\frac{1}{2\\pi}\\int_{0,0}^{\\alpha, 2\\pi} d\\theta_p d\\theta_e sin(\\theta_p)=n_{escaped}
      `,
      explanation: "a few expressions for normalized quantties indicating what fraction lie within or without the loss cone"
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
