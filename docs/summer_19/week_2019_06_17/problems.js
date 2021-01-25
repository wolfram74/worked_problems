var problems = [

  {
    location:`self given`,
    description:"Research proposal dipole umbrella stability:",
    steps:[
    {
      expression: `
      F_r =
      G(\\frac{M_m}{(r_m-r)^2} - \\frac{M_s}{r^2})
      +r\\Omega^2
      +r \\Omega \\dot \\theta
      `,
      explanation: "The radial force equation including two point sources of gravity (the sun and mars) in a rotating reference frame. This equation has 3 points along $&\\theta=0&$ where all the forces cancel, they are 3 of the 5 lagrange points. L1 is between 0 and rm. Green et al. have done analysis on atmospheric evolution of mars (reference below) if a large dipole field was placed at L1. The hope being that an engineering project at L1 would have fewer complications than one across the entire surface of the planet. One difficulty is that the $&\\theta=0&$ lagrange points are all unstable."
    },
    {
      expression: `
      A(\\mu) \\geq A_{mars}
      \\\\
      F_{drag} \\approx \\gamma n(t) v(t)^2 A(\\mu)
      `,
      explanation: "As the dipole is interacting with the solar wind in a position specifically chosen such that the other forces are 0, this drag necessarily is non-trivial. If flow density (n) and flow velocity (v) some new unstable equilibrium could be calculated slightly nearer the sun. The solar wind is infamously dynamic and as such some control mechanism must be considered with that in mind. As a literally planetary scale piece of infrastructure with arbitrary service life time whatever equipment is in place must be able to station keep with a consideration to minimize refueling."
    },
    {
      expression: `A(|<\\mu>|) \\propto (|<\\mu>|)^{2/3}`,
      explanation: "Simplifying the cross sectional area the dipole would experience drag over we could control the strength of the dipole moment. Haugen et al. have recently shown that a pair of spherical dipoles in contact with each other free to rotate would have an oscillatory mode where the strength of the total dipole ranges from twice the magnitude one dipole ($&\\phi_d=0&$) to 0 ($&\\phi_d=\\pi&$). This mode could be driven or suppressed with on board fly wheels powered by solar panels conceivably indefinitely."
    },
    {
      expression: `
      F_r =
      G(\\frac{M_m}{(r_m-r)^2} - \\frac{M_s}{r^2})
      +r\\Omega^2
      +r \\Omega \\dot \\theta
      +F_{drag}
      `,
      explanation: "We propose to examine this new equation and the matching angular one for any strategies that might permit the dipole to maintain a position within some finite distance of a chosen point."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`self given`,
    description:"Research proposal double dipole driving and orbits",
    steps:[
    {
      expression: `
      H_{base} =
      T+U=
      \\frac{1}{2}\\left (
      2 p_r^2
      +2 \\frac{p_\\theta^2}{r^2}
      +10 p_{\\phi_1}^2
      +10 p_{\\phi_2}^2
            \\right )
            \\\\
      -
      \\frac{1}{12}
      \\frac{1}{r^3}[
              \\cos(\\phi_1-\\phi_2)
              +3\\cos(\\phi_1+\\phi_2 -2\\theta)
          ]
      \\\\
      H_{base}^*
      =
      \\frac{1}{2}\\left (
      2 p_r^2
      +2 \\frac{p_\\theta^2}{r^2}
      +20 p_{\\phi_d}^2
      +20 p_{\\phi_t}^2
            \\right )
            \\\\
      -
      \\frac{1}{12}
      \\frac{1}{r^3}[
              \\cos(\\phi_d)
              +3\\cos(\\phi_t -2\\theta)
          ]
      `,
      explanation: "The hamiltonian derived by Haugen et al. in a previous work. On it's own, it permits examination of circular orbits with r>1 and perturbation analysis can be used to quantify how unstable they are."
    },
    {
      expression: `
      \\vec B \\cdot \\vec \\mu = U
      \\\\
      H_{perturbed} =
      H_{base}
      + B(cos(\\theta_B - \\phi_1)+cos(\\theta_B - \\phi_2))
      =
      \\\\
      H_{base}
      + B(
        cos((\\theta_B - \\phi_1)/2+(\\theta_B - \\phi_2)/2)
        cos((\\theta_B - \\phi_2)/2-(\\theta_B - \\phi_1)/2)
        )
      =
      \\\\
      H_{base}
      + B(
        cos(\\theta_B  - \\phi_t/2)
        cos(\\phi_d/2)
        )
      `,
      explanation: "a first stab at adjusting the hamiltonian with a uniform magnetic field encompassing both dipoles. Making $&\\theta_B&$ a time varying function would be one approach at attempting to drive the system. Using this driving and possibly introducing a drag term might be an interesting system to examine for conditions that drive enough energy into the system to permanently drive apart the system."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
