var problems = [
// described
// marion thorn page 149, 67-68
  {
    location:`NA`,
    description:"Find the 2nd order perturbation for a bead along a paraboloid starting with the 0th and 1st order solutions form notes.",
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
// described
  {
    location:`NA`,
    description:"find the 1st order perturbation for a circular orbit in an inverse square force",
    steps:[
    {
      expression: `
      0 = \\ddot r + r \\omega^2 - \\mu r^{-2}
      \\\\
      0 = L - \\mu r^2 \\omega
      `,
      explanation: "The equations of motion for inverse square laws."
    },
    {
      expression: `
      r = r_0 + \\epsilon r_1(t)
      \\\\
      \\omega = \\omega_0 + \\epsilon \\omega_1(t)
      \\\\
      L = \\mu r_0^2 \\omega_0
      \\\\
      E = \\frac{L}{2 \\mu r_0^2}-\\mu r_0^{-1}
      `,
      explanation: "Recasting the radial coordinate and angular velocity perturbatively and the solutions for circular motion."
    },
    {
      expression: `
      0 = \\epsilon \\ddot r_1 + (r_0+) \\omega^2 - r^{-2}
      \\\\
      \\epsilon \\frac{d^{2}}{d t^{2}}  \\operatorname{r_{1}}{\\left (t \\right )} + \\left(\\epsilon \\omega_{1}{\\left (t \\right )} + \\omega_{0}\\right)^{2} \\left(\\epsilon \\operatorname{r_{1}}{\\left (t \\right )} + r_{0}\\right) - \\frac{1}{\\left(\\epsilon \\operatorname{r_{1}}{\\left (t \\right )} + r_{0}\\right)^{2}}
      =
      \\\\
      \\epsilon^{3} \\omega_{1}^{2}{\\left (t \\right )} \\operatorname{r_{1}}{\\left (t \\right )}
      + \\epsilon^{2} \\left(2 \\omega_{0} \\omega_{1}{\\left (t \\right )} \\operatorname{r_{1}}{\\left (t \\right )} + r_{0} \\omega_{1}^{2}{\\left (t \\right )}\\right)
      + \\epsilon \\left(\\omega_{0}^{2} \\operatorname{r_{1}}{\\left (t \\right )} + 2 \\omega_{0} r_{0} \\omega_{1}{\\left (t \\right )} + \\frac{d^{2}}{d t^{2}}  \\operatorname{r_{1}}{\\left (t \\right )}\\right) + \\omega_{0}^{2} r_{0}
      -r_0^{-2}(1+\\epsilon \\frac{r_1}{r_0})^{-2}
      \\\\
      =
      \\epsilon \\left(\\omega_{0}^{2} \\operatorname{r_{1}}{\\left (t \\right )} + 2 \\omega_{0} r_{0} \\omega_{1}{\\left (t \\right )} + \\frac{d^{2}}{d t^{2}}  \\operatorname{r_{1}}{\\left (t \\right )}\\right) + \\omega_{0}^{2} r_{0}
      -r_0^{-2}(1-2\\epsilon \\frac{r_1}{r_0}) +O(\\epsilon^2)
      `,
      explanation: "Finding the 1st order perturbation in the radial equation after setting the mass term to 1."
    },
    {
      expression: `
      0 = L - r^2 \\omega
      \\\\
      0=L - \\left(\\epsilon \\omega_{1}{\\left (t \\right )} + \\omega_{0}\\right) \\left(\\epsilon \\operatorname{r_{1}}{\\left (t \\right )} + r_{0}\\right)^{2}
      \\\\
      = L - \\epsilon^{3} \\omega_{1}{\\left (t \\right )} \\operatorname{r_{1}}^{2}{\\left (t \\right )} + \\epsilon^{2} \\left(- \\omega_{0} \\operatorname{r_{1}}^{2}{\\left (t \\right )} - 2 r_{0} \\omega_{1}{\\left (t \\right )} \\operatorname{r_{1}}{\\left (t \\right )}\\right) + \\epsilon \\left(- 2 \\omega_{0} r_{0} \\operatorname{r_{1}}{\\left (t \\right )} - r_{0}^{2} \\omega_{1}{\\left (t \\right )}\\right) - \\omega_{0} r_{0}^{2}
      \\\\
      =L + \\epsilon \\left(- 2 \\omega_{0} r_{0} \\operatorname{r_{1}}{\\left (t \\right )} - r_{0}^{2} \\omega_{1}{\\left (t \\right )}\\right) - \\omega_{0} r_{0}^{2} + O(\\epsilon^2)
      \\\\
      \\omega_1 = -2 \\omega_0 r_1 r_0^{-1}
      `,
      explanation: "The angular equation expanded perturbatively and solving for the first order variation in terms of variation in the radial term."
    },
    {
      expression: `
      0=\\omega_0^2r_0-r_0^{-2} \\rightarrow r_0^{-3} = \\omega_0^2
      \\\\
      0=\\ddot r_1
      + \\omega_0^2r_1
      + 2\\omega_0r_0 \\omega_1
      + 2r_1 r_0^{-3}
      \\\\
      0=\\ddot r_1
      + \\omega_0^2r_1
      - 4\\omega_0^2 r_1
      + 2r_1 r_0^{-3}
      \\\\
      0=\\ddot r_1
      + (2r_0^{-3}-3\\omega_0^2)r_1
      \\\\
      0=\\ddot r_1
      -\\omega_0^2r_1
      `,
      explanation: "reducing the radial equation do a simple harmonic oscillator with the same frequency as the original orbit. Dropped a sign somewhere, it seems."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
// described
  {
    location:`problem set 5`,
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

  {
    location:`problem set 5`,
    description:"examine a charged particle moving in a fixed magnetic and electric monopole field",
    steps:[
    {
      expression: `
      \\vec{\\ddot x} =
      \\frac{q}{m}(
        -kr^{-2}\\hat r+b r^{-2}\\vec{\\dot x} \\times \\hat r
        )`,
      explanation: "The vector form of the equations of motion for this system."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
/*
10/12
  hitcher hikers guide published
  first iron lung used
  magellan probe burnt up in venus
*/
