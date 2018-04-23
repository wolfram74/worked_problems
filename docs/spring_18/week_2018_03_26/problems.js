var problems = [

  {
    location:`chen 1984 5-16`,
    description:"Use the single fluid MHD equation of motion and the mass continuity equation to calculate the phase velocity of an ion acoustic wave in an unmagnetized, uniform plasma with $&T_e>>T_i&$",
    steps:[
    {
      expression: `
      \\rho \\approx n(M+m)
      \\\\
      \\vec v \\approx \\frac{M \\vec v_i + m \\vec v_e}{m+M}
      \\\\
      \\vec j \\approx ne (\\vec v_i - \\vec v_e)
      `,
      explanation: "equations 5.78-80 describing the density, fluid velocity and current for a single fluid MHD model."
    },
    {
      expression: `
      \\rho \\partial_t \\vec v = \\vec j \\times \\vec B - \\nabla p + \\rho \\vec g
      \\\\
      \\vec E + \\vec v \\times \\vec B = \\eta \\vec j
      \\\\
      \\partial_t \\rho + \\nabla \\cdot (\\rho \\vec v) = 0
      \\\\
      \\partial_t \\sigma + \\nabla \\cdot (\\rho \\vec j) = 0
      `,
      explanation: "equation 5.85 single fluid MHD for momentum conservation, equation 5.91 expanded ohm's law, equation 5.92-93 mass and charge conservation"//pg 185
    },
    {
      expression: `
      B_0=0
      \\\\
      \\nabla \\rho_0=0, \\nabla \\tau=0  \\rightarrow \\nabla p=\\gamma \\tau \\nabla \\rho_1`,
      explanation: "Our starting assumptions of unmagnetized and homogeneous plasma" //dispersion relation for ion acoustic wave is 4.41 on pg 96 independent of density, just mass and temperature
    },
    {
      expression: `
      (\\rho_0+\\rho_1) \\partial_t (\\vec v_0+\\vec v_1) =
      (\\vec j_0+\\vec j_1) \\times \\vec B_1
      - \\gamma \\tau \\nabla \\rho_1 + (\\rho_0+\\rho_1) \\vec g
      \\approx
      \\rho_0 \\partial_t \\vec v_0
      +\\rho_0 \\partial_t \\vec v_1
      +\\rho_1 \\partial_t \\vec v_0
      =
      \\vec j_0 \\times \\vec B_1
      - \\gamma \\tau \\nabla \\rho_1 + (\\rho_0+\\rho_1) \\vec g

      \\\\
      (\\vec E_0+\\vec E_1) + (\\vec v_0+\\vec v_1) \\times \\vec B_1
      = \\eta (\\vec j_0+\\vec j_1)
      \\approx
      \\vec E_0+\\vec E_1 + \\vec v_0\\times \\vec B_1
      = \\eta \\vec j_0+ \\eta \\vec j_1

      \\\\
      \\partial_t (\\rho_0+\\rho_1) + \\nabla \\cdot (
        (\\rho_0+\\rho_1) (\\vec v_0+\\vec v_1)) = 0
      \\approx
      \\partial_t \\rho_0+ \\partial_t \\rho_1
      + \\nabla \\cdot (
        \\rho_0 \\vec v_0+\\rho_1 \\vec v_0 +\\rho_0\\vec v_1)
      \\\\
      \\partial_t (\\sigma_0+\\sigma_1) + \\nabla \\cdot ((\\rho_0+\\rho_1) (\\vec j_0+\\vec j_1)) = 0
      \\approx
      \\partial_t \\sigma_0+ \\partial_t \\sigma_1
      + \\nabla \\cdot (
        \\rho_0 \\vec v_0+\\rho_1 \\vec j_0 +\\rho_0\\vec j_1)

      `,
      explanation: "assuming the system is expressible as some equilibrium with a periodic perturbative quantity"
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
    location:`Chen 1984 5-17`,
    description:"Calculate the resistive damping of alfven waves  by deriving the dispersion relation from single fluid equations 5-85 and 5-91 and maxwell's equations 4-72 and 4-77. linearizing and neglecting gravity, displacement currents and pressure gradients. Verify the dispersion relation is $&\\frac{\\omega^2}{k^2} = c^2 \\epsilon_0(\\frac{B_0^2}{\\rho_0}-i\\omega \\eta)&$ and find the imaginary component of k with real frequency and small $&\\eta&$",
    steps:[
    {
      expression: `
      \\rho \\partial_t \\vec v = \\vec j \\times \\vec B - \\nabla p + \\rho \\vec g
      \\\\
      \\vec E + \\vec v \\times \\vec B = \\eta \\vec j
      \\\\
      \\nabla \\times \\vec E =  -\\partial_t \\vec B
      \\\\
      \\nabla \\times \\vec B =  (\\vec J + \\epsilon_0 \\partial_t \\vec E) \\mu_0
      `,
      explanation: "continuity of momentum and current as well as dynamical maxwell's equations"
    },
    {
      expression: `
      \\rho (-i\\omega) \\vec v = \\vec j \\times \\vec B - (i \\vec k) p + \\rho \\vec g
      \\\\
      \\vec E + \\vec v \\times \\vec B = \\eta \\vec j
      \\\\
      (i \\vec k) \\times \\vec E =  -(-i\\omega) \\vec B
      \\\\
      (i \\vec k) \\times \\vec B =  (\\vec J + \\epsilon_0 (-i\\omega) \\vec E) \\mu_0
      `,
      explanation: "Assuming wave like solutions"
    },
    {
      expression: `
      \\frac{k}{\\omega} \\hat k \\times \\vec E =   \\vec B
      \\rightarrow
      \\\\
      \\vec E + \\vec v \\times (\\frac{k}{\\omega} \\hat k \\times \\vec E) = \\eta \\vec j
      \\\\
      \\vec E + \\frac{k}{\\omega} \\vec v \\times ( \\hat k \\times \\vec E) = \\eta \\vec j
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
