var problems = [

  {
    location:`self devised`,
    description:"estimate a natural frequency for particle in a collection of particles with an interaction potential $&u_0e^{-|\\vec r_i - \\vec r_j|^2/l^2}&$ at an average density n in two dimensions",
    steps:[
    {
      expression: `
      U(\\vec r_0) =
      \\Sigma_{n=1}^\\infty u_0e^{-|\\vec r_0 - \\vec r_n|^2/l^2}
      `,
      explanation: "total potential for one particle"
    },
    {
      expression: `
      \\vec r_0 = 0
      \\\\
      n(\\vec r) = \\Sigma \\delta(\\vec r - \\vec r_i) \\approx n = \\frac{N}{l^2}
      \\\\
      dA = rdrd\\theta
      \\\\
      \\rightarrow
      \\\\
      U(r)=r n u_0 e^{\\frac{-(r-l)^2}{l^2}}
      `,
      explanation: "an approximation of the potential for a particle we inspect asserting the other particles are stationary. more valid for large r than for r~l."
    },
    {
      expression: `U(r)\\approx
      0
      + \\frac{n u_{0}}{e} \\frac{r}{1!}
      + \\frac{4 n u_{0}}{e l}\\frac{r^2}{2!} + O(r^3)
      `,
      explanation: "A taylor expansion at the origin. Concern that the origin is not actually an equilibrium. Suspect approximate potential energy function is not valid because of dimensional analysis"
    },
    {
      expression: `U(r)=
      r^2 n u_0 e^{\\frac{-(r-l)^2}{l^2}}
      \\approx
      0+0+\\frac{2 n}{e} u_{0}\\frac{r^2}{2!} + O(r^3)
      `,
      explanation: "Throwing an extra r into the approximation for dimensions sake gets a harmonic potential near the origin."
    },
    {
      expression: `
      U_{sho}(x)=\\frac{k}{2}x^2 \\rightarrow \\omega_0^2 = \\frac{k}{m}
      \\\\
      U_{\\approx}(r)=
      \\frac{2 n}{e} u_{0}\\frac{r^2}{2!}=
      \\frac{ n}{e} u_{0}r^2=
      \\frac{1}{2} \\frac{ 2n}{e} u_{0} r^2
      \\rightarrow \\omega_0^2 = \\frac{2nu_0}{em}
      \\\\
      N=1 \\rightarrow \\omega_0^2 = \\frac{2u_0}{em l^2}
      `,
      explanation: "arguments in favor of legitimacy for this result: 1) tighter packed particles vibrate at higher frequency 2) larger repulsion leads to higher vibrational frequency -- Arguments against: assumes the repulsion is isotropic at origin, which it clearly isn't. Neglects other masses moving, so likely on the high side."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
