var problems = [
//derivations and exercises start pdf 135
// weird stumbling block with angular momentum contribution being attractive
  {
    location:`problem set 4`,
    description:"a particle is moving on a potential $&U(r) = mg\\alpha r^2&$. Consider the equivalent 1D problem. Find the circular orbits and period of perturbations from those circular orbits.",
    steps:[
    {
      expression: `
      T = \\frac{m}{2}(
        \\dot r^2
        + r^2 \\dot{\\theta}^2
        )
      \\\\
      U(r) = mg\\alpha r^2
      `,
      explanation: "Starting with our kinetic and potential terms"
    },
    {
      expression: `
      L = T-U = \\frac{m}{2}(
        \\dot r^2
        + r^2 \\dot{\\theta}^2
        )
      -mg\\alpha r^2
      \\\\
      b = g\\alpha
      \\\\
      L = m[
      \\frac{1}{2}(
        \\dot r^2
        + r^2 \\dot{\\theta}^2
        )
      -b r^2
      ]
      \\\\
      \\partial_{\\dot \\theta} L = m r^2 \\dot{\\theta} = p_{\\theta}
      \\\\
      \\partial_{\\dot \\theta} L = 0 \\rightarrow \\dot p_{\\theta}=0
      `,
      explanation: "Our lagrangian and a readily available constant of motion."
    },
    {
      expression: `
      L =
      \\frac{m}{2}
        \\dot r^2
      + \\frac{p_{\\theta}^2}{2m}r^{-2}
      -mb r^2
      `,
      explanation: "recasting our earlier 2-dimensional problem into a 1 dimensional problem."
    },
    {
      expression: `
      \\partial_r L =
      -2\\frac{p_{\\theta}^2}{2m}r^{-3}
      -2mb r

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
    },]
  },
// goldsten exercise3.11
//an expression for r_0 found
  {
    location:`problem set 4`,
    description:"suppose to particles in mutual circular orbits of period t are stopped, show their collision occurs at time $&t/(4 \\sqrt{2})&$",
    steps:[
    {
      expression: `
      F_m = -m\\gamma r^{-2}
      \\\\
      \\epsilon =0
      \\\\
      \\rightarrow
      r^3 = t^2 \\gamma (4\\pi^2 \\mu)^{-1}
      \\\\
      r = t^{2/3} \\gamma^{1/3} (4\\pi^2 \\mu)^{-1/3} = r_0

      `,
      explanation: "Assuming circular orbits we have radius for a given reduced mass and interaction strength. This is where our particles start and we are interested in how long it takes to go from there to r=0."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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

//goldstein exercise3.13
  {
    location:`problem set 4`,
    description:"Asserting a particle in a circular orbit that travels through the origin of a central force, show that that central force must vary inverse with radius to the fifth. Show also that this orbit has constant energy equal to the potential at infinite. Find it's period and functions for velocities in terms of angle.",
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

// just listed as goldstein 3.7 which means unfindable in my edition
// derivation 3.9 in goldstein
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
    location:`problem set 4`,
    description:"Show that the potential $&V(r) = -kr^{-1}+hr^{-2}&$ is equivalent to the keplerian potential in a rotational reference frame. Show that for bound orbits the rotating frame period is $&\\frac{2\\pi m h }{l^2 \\tau}&$ ",
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
