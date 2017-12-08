var problems = [

  {
    location:`self posed`,
    description:"Take maxwells equations, suppose spatially inhomogeneous permetivity, permeability and conductivity and derive the wave equation",
    steps:[
    {
      expression: `
      \\nabla \\cdot \\vec D = \\rho_{f}, \\nabla \\cdot \\vec B = 0
      \\\\
      \\nabla \\times \\vec E = -\\partial_t \\vec B,
      \\nabla \\times \\vec H = \\vec J_{f} + \\partial_t \\vec D
      \\\\
      \\vec D = \\epsilon \\vec E,
      \\vec H = \\frac{1}{\\mu} \\vec B,
      \\vec J_f = \\sigma_c \\vec E,
      \\\\
      \\dot \\rho_f+\\nabla \\cdot \\vec J_f = 0
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
    //12.1, 12.2, 12.5, 12.9, 12.15, 12.17
    location:`Riley Mathematical methods 12.1`,
    description:"verify $&\\rho(z)=k+z^2/(4k)&$ minimizes the surface integral $&\\int \\rho^{-1/2}dS&$ subject to boundaries of joining 2 circles of radius a at distances c away from the origin along the z axis.",
    steps:[
    {
      expression: `dS=2\\pi \\rho ((dz)^2+(ds)^2)^{1/2}`,
      explanation: "an expression for the area element approximating it is an infinitesimal slice of cylinder"
    },
    {
      expression: `((dz)^2+(ds)^2)^{1/2} = dz(1+(\\frac{ds}{dz})^2)^{1/2}=dz(1+\\rho'^2)^{1/2}`,//'
      explanation: "pulling the dz element out from the differential element"
    },
    {
      expression: `
        \\int \\rho^{-1/2}dS=\\\\
        \\int \\rho^{-1/2}2\\pi \\rho(1+\\rho'^2)^{1/2}dz=\\\\
        2\\pi \\int \\rho^{1/2}(1+\\rho'^2)^{1/2}dz
      `,
      explanation: "substituting our dz element in for the dS element, we take note that the integrand is constant in z"
    },
    {
      expression: `
        F = \\rho^{1/2}(1+\\rho'^2)^{1/2}\\\\
        F-\\rho' \\partial_{\\rho'} F = \\gamma\\\\
        \\rho^{1/2}(1+\\rho'^2)^{1/2}
        -\\rho' \\frac{\\rho'\\rho^{1/2}}{(1+\\rho'^2)^{1/2}} = \\gamma\\\\
        (1+\\rho'^2)^{1/2}
        -\\frac{\\rho'^2}{(1+\\rho'^2)^{1/2}} = \\gamma\\rho^{-1/2}\\\\
      `,//'
      explanation: "The simplified euler lagrange equation that must be satisfied to find extrema of our surface."
    },
    {
      expression: `\\rho(z)=k+z^2/(4k), \\rho' = z/2k`,//'
      explanation: "the guess we'll be inserting into the euler lagrang equation"
    },
    {
      expression: `
        (1+(z/2k)^2)^{1/2}
        -\\frac{(z/2k)^2}{(1+(z/2k)^2)^{1/2}} = \\gamma(k+z^2/(4k))^{-1/2}\\\\
        (1+z^2/4k^2)^{1/2}
        -\\frac{z^2/4k^2}{(1+z^2/4k^2)^{1/2}} = \\gamma(k+z^2/(4k))^{-1/2}\\\\

      `,
      explanation: "warning sign: the left hand side is asymptotically linear in z while the right hand side is inverse linear in z"
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
