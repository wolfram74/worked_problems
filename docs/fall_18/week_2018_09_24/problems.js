var problems = [
// https://en.wikipedia.org/wiki/September_28
// 01889/09/28, meter defined by GCWM
//derivations and exercises start pdf 135
// weird stumbling block with angular momentum contribution being attractive
  {
    location:`problem set 4`,
    description:"a particle is moving on a potential $&U(r) = m g z= mg\\alpha r^2&$. Consider the equivalent 1D problem. Find the circular orbits and period of perturbations from those circular orbits.",
    steps:[
    {
      expression: `
      T = \\frac{m}{2}(
        \\dot r^2
        + r^2 \\dot{\\theta}^2
        +\\dot z^2
        )
      = \\frac{m}{2}(
        \\dot r^2
        + r^2 \\dot{\\theta}^2
        +(2\\alpha r \\dot r)^2
        )
      \\\\
      U(r) = mg\\alpha r^2
      `,
      explanation: "Starting with our kinetic and potential terms"
    },
    {
      expression: `
      L = T-U = \\frac{m}{2}(
        (1+4\\alpha^2 r^2)\\dot r^2
        + r^2 \\dot{\\theta}^2
        )
      -mg\\alpha r^2
      \\\\
      L = m[
      \\frac{1}{2}(
        (1+4\\alpha^2 r^2)\\dot r^2
        + r^2 \\dot{\\theta}^2
        )
      -mg\\alpha r^2
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
        (1+4\\alpha^2 r^2)\\dot r^2
      + \\frac{p_{\\theta}^2}{2m}r^{-2}
      -mg\\alpha r^2
      `,
      explanation: "recasting our earlier 2-dimensional problem into a 1 dimensional problem."
    },
    {
      expression: `
      \\partial_r L =
      4m\\alpha^2 r\\dot r^2
      +\\frac{p_{\\theta}^2}{m}r^{-3}
      -2m g \\alpha r
      \\\\
      \\partial_{\\dot r} L =
      m(1+4\\alpha^2 r^2)\\dot r
      \\rightarrow
      \\partial_r L =
      m(1+4\\alpha^2 r^2)\\ddot r
      +
      8 m \\alpha^2 r \\dot r^2
      \\\\
      m(1+4\\alpha^2 r^2)\\ddot r
      =
      -4m\\alpha^2 r\\dot r^2
      +\\frac{p_{\\theta}^2}{m}r^{-3}
      -2m g \\alpha r

      `,
      explanation: "we find an equation of motion implying an effective mass that is position dependent and a velocity dependent force."
    },
    {
      expression: `
      m(1+4\\alpha^2 r^2)\\ddot r
      =
      -4m\\alpha^2 r\\dot r^2
      +\\frac{p_{\\theta}^2}{m}r^{-3}
      -2m g \\alpha r
      \\\\
      \\ddot r = \\dot r =0 \\rightarrow
      \\\\
      0=\\frac{p_{\\theta}^2}{m}r^{-3}
      -2m g \\alpha r
      \\\\
      2m g \\alpha r^4=\\frac{p_{\\theta}^2}{m}
      \\\\
      r^4=\\frac{p_{\\theta}^2}{2 g \\alpha m^2}
      \\\\
      r_0=(\\frac{p_{\\theta}^2}{2 g \\alpha m^2})^{1/4}
      `,
      explanation: "an equilibrium orbit will have no radial acceleration or velocity, leaving us with only the potential well and angular momentum terms competing for equilibrium. What we get passes the smell test of large angular momentum leading to large orbits, and larger gravity or mass or steeper well leading to smaller orbits."
    },
    {
      expression: `
      \\ddot r
      =
      \\frac{
        -4m\\alpha^2 r\\dot r^2
        +\\frac{p_{\\theta}^2}{m}r^{-3}
        -2m g \\alpha r
      }{
        m(1+4\\alpha^2 r^2)
      }
      \\approx \\partial_r \\ddot r |_{r_0} r =
      \\\\

      `,//+\\partial_{\\dot r} \\ddot r |_{r_0} \\dot r
      explanation: "a taylor expansion for the acceleration of r around the equilibrium should produce a force approximating a SHO, and extensive computer algebra get's the sign right, it is an ugly beast and does not seem plausible."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
      expression: `
      \\Delta t = \\int_{r_0}^{r_0+\\Delta r} \\frac{dr}{\\dot r(r)}
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
    },]
  },

//goldstein exercise3.13
  {
    location:`problem set 4`,
    description:"Asserting a particle in a circular orbit that travels through the origin of a central force, show that that central force must vary inverse with radius to the fifth. Show also that this orbit has constant energy equal to the potential at infinite. Find it's period and functions for velocities in terms of angle.",
    steps:[
    {
      expression: `
      y = r_0sin(\\theta)
      \\\\
      x = r_0+r_0 cos(\\theta)
      \\\\
      r^2 = y^2+x^2
      =
      r_0^2sin(\\theta)^2
      +r_0^2+r_0^2 cos(\\theta)^2+2r_0^2cos(\\theta)
      \\\\
      =2r_0^2+2r_0^2cos(\\theta) = 2 r_0^2(1+cos(\\theta))
      `,
      explanation: "an expression for distance from the origin for a point on the circular path that goes through the origin counter."
    },
    {
      expression: `
      \\frac{l}{r^2}\\partial_{\\theta}(
        \\frac{l}{mr^2}
        \\partial_{\\theta} r
        )-\\frac{l^2}{mr^3} = f(r) = -\\partial_r V(r) = n \\alpha r^{n-1}
      `,
      explanation: "Taking advantage of a differential equation in goldstein (3.33) and assuming our potential is a scalar times some power of radius."
    },
    {
      expression: `
      \\frac{l}{r^2}\\partial_{\\theta}(
        \\frac{l}{mr^2}
        \\partial_{\\theta} r
        )
      =
      \\frac{
        -l r (sin(\\theta)^2+2cos(\\theta)+2)
      }{
        4 m r^4 (cos(\\theta)+1)^2
      }
      `,
      explanation: "Some computer aided algebra gets us to here"
    },
    {
      expression: `
      (sin(\\theta)^2+2cos(\\theta)+2)
      = 3+2cos(\\theta) -cos(\\theta)^2
      =(cos(\\theta)+1)(-cos(\\theta)+3)
      \\rightarrow
      \\\\
      \\frac{l}{r^2}\\partial_{\\theta}(
        \\frac{l}{mr^2}
        \\partial_{\\theta} r
        )
      =
      \\frac{
        -l (3-cos(\\theta))
      }{
        4 m r^3 (cos(\\theta)+1)
      }
      =
      \\frac{
        -l 2 r_0^2 (3-cos(\\theta))
      }{
        4 m r^5
      }
      =
      \\frac{
        -l 2 r_0^2 (4-\\frac{r^2}{2r_0^2})
      }{
        4 m r^5
      }

      `,
      explanation: ""
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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

  // {
  //   location:`problem set 4`,
  //   description:"Show that the potential $&V(r) = -kr^{-1}+hr^{-2}&$ is equivalent to the keplerian potential in a rotational reference frame. Show that for bound orbits the rotating frame period is $&\\frac{2\\pi m h }{l^2 \\tau}&$ ",
  //   steps:[
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },
  //   {
  //     expression: `NA`,
  //     explanation: "NA"
  //   },]
  // },

]
