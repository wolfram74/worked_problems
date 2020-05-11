var problems = [
/*
Hundhausen, A. J. 1972. Coronal Expansion and the Solar Wind. Springer-Verlag: New
York, p. 17.
http://www.astronomy.ohio-state.edu/~ryden/ast825/ch11.pdf

--- use this model for solar wind velocity
https://farside.ph.utexas.edu/teaching/plasma/lectures1/node67.html

https://en.wikipedia.org/wiki/Lagrangian_point#L1
for L1

*/
  {
    location:`riffing off Dr. James Green's magnetic parasol proposal`, //'
    description:"How bad is the instability of the magnetic parasol and what can be done to mitigate it?",
    steps:[
    {
      expression: `
      \\vec F_t = \\vec F_g+\\vec F_d+\\vec F_{ce}+\\vec F_{co}
      \\\\
      \\vec F_g = -GM_S M_P r^{-2} \\hat r - GM_M M_P r_m^{-2} \\hat r_m
      \\\\
      \\vec F_d = \\rho(r) u_w(r)^2 A \\hat r
      \\\\
      \\vec F_{ce} = M_P \\Omega^2 r \\hat r
      \\\\
      \\vec F_{co} = 2M_P \\vec{\\dot r} \\times \\vec \\Omega
      `,
      explanation: "the total forces in the rotating reference frame, gravitational, drag from the solar wind, centrifugal and Coriolis. Motion is considered limited to the plane of the ecliptic and the orbit of mars as rotational.$&r_m&$ denoting the vector from mars to the parasol"
    },
    {
      expression: `
      M_S \\approx 2E30 \\ kg
      \\\\
      M_M \\approx 6.4 E23 \\ kg
      \\\\
      M_P \\approx ?
      \\\\
      R_M \\approx 2.3 E11 \\ m
      \\\\
      T_M \\approx 5.9 E7 \\ s
      \\\\
      R_{L_1}
      \\approx R_M- R_M \\left( \\frac{M_M}{3M_S} \\right)^{1/3}
      \\approx (1-\\frac{1}{210})R_M
      \\\\
      u_w \\approx 2 u_c (\\ln(\\frac{r}{r_c}))^{1/2}
      \\\\
      \\rho_w = I r^{-2} u_w^{-1}
      \\\\
      `,
      explanation: "Solar, Martian and parasol masses, orbital radius and period of mars, distance of Martian L1 from Sun, velocity of Solar wind, density of Solar wind. Solar wind based around parker isothermal model. The realism short comings of the parker model are acknowledged but some spatially dependent model was desired."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
