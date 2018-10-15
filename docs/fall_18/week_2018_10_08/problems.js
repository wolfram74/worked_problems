var problems = [
// described
// marion thorn page 149, 67-68
  {
    location:`NA`,
    description:"Find the 2nd order perturbation for a bead along a paraboloid starting with the 0th and 1st order solutions form notes.",
    steps:[
    {
      expression: `
      0=\\ddot r + 2 \\alpha \\lambda r - \\omega^{2} r
      \\\\
      0=\\ddot z + g - \\lambda
      \\\\
      0=L-m \\omega r^{2}
      \\\\
      0=z- \\alpha r^{2}
      `,
      explanation: "The equations of motion for our system."
    },
    {
      expression: `
      r= r_0 + \\epsilon r_1 + \\epsilon^2 r_2
      \\\\
      z= z_0 + \\epsilon z_1 + \\epsilon^2 z_2
      \\\\
      \\omega= \\omega_0 + \\epsilon \\omega_1 + \\epsilon^2 \\omega_2
      \\\\
      \\lambda= \\lambda_0 + \\epsilon \\lambda_1 + \\epsilon^2 \\lambda_2
      `,
      explanation: "assuming our solution has some equilibrium motion and higher order perturbations"
    },
    {
      expression: `
      0= 2 \\alpha \\left(\\epsilon^{2} \\operatorname{\\lambda_{2}}{\\left (t \\right )} + \\epsilon \\operatorname{\\lambda_{1}}{\\left (t \\right )} + \\lambda_{0}\\right) \\left(\\epsilon^{2} \\operatorname{r_{2}}{\\left (t \\right )} + \\epsilon \\operatorname{r_{1}}{\\left (t \\right )} + r_{0}\\right)
      \\\\
      + \\epsilon^{2} \\frac{d^{2}}{d t^{2}}  \\operatorname{r_{2}}{\\left (t \\right )} + \\epsilon \\frac{d^{2}}{d t^{2}}  \\operatorname{r_{1}}{\\left (t \\right )} - \\left(\\epsilon^{2} \\omega_{2}{\\left (t \\right )} + \\epsilon \\omega_{1}{\\left (t \\right )} + \\omega_{0}\\right)^{2} \\left(\\epsilon^{2} \\operatorname{r_{2}}{\\left (t \\right )} + \\epsilon \\operatorname{r_{1}}{\\left (t \\right )} + r_{0}\\right)
      \\\\
      =
      2 \\alpha \\lambda_{0} r_{0} - \\omega_{0}^{2} r_{0}
      \\\\
      + \\epsilon \\left(2 \\alpha \\lambda_{0} \\operatorname{r_{1}}{\\left (t \\right )} + 2 \\alpha r_{0} \\operatorname{\\lambda_{1}}{\\left (t \\right )} - \\omega_{0}^{2} \\operatorname{r_{1}}{\\left (t \\right )} - 2 \\omega_{0} r_{0} \\omega_{1}{\\left (t \\right )} + \\frac{d^{2}}{d t^{2}}  \\operatorname{r_{1}}{\\left (t \\right )}\\right)
      \\\\
      + \\epsilon^{2} \\left(2 \\alpha \\lambda_{0} \\operatorname{r_{2}}{\\left (t \\right )} + 2 \\alpha r_{0} \\operatorname{\\lambda_{2}}{\\left (t \\right )} + 2 \\alpha \\operatorname{\\lambda_{1}}{\\left (t \\right )} \\operatorname{r_{1}}{\\left (t \\right )} - \\omega_{0}^{2} \\operatorname{r_{2}}{\\left (t \\right )} - 2 \\omega_{0} r_{0} \\omega_{2}{\\left (t \\right )} - 2 \\omega_{0} \\omega_{1}{\\left (t \\right )} \\operatorname{r_{1}}{\\left (t \\right )} - r_{0} \\omega_{1}^{2}{\\left (t \\right )} + \\frac{d^{2}}{d t^{2}}  \\operatorname{r_{2}}{\\left (t \\right )}\\right)
      + O(\\epsilon^3)
      `,
      explanation: "we can take the 2nd order term to further refine the variation in r."
    },
    {
      expression: `
      0=- \\epsilon^{2} \\lambda_{2}{\\left (t \\right )} + \\epsilon^{2} \\frac{d^{2}}{d t^{2}}  \\operatorname{z_{2}}{\\left (t \\right )} - \\epsilon \\lambda_{1}{\\left (t \\right )} + \\epsilon \\frac{d^{2}}{d t^{2}}  \\operatorname{z_{1}}{\\left (t \\right )} + g - \\lambda_{0}
      \\\\
      =
      g - \\lambda_{0}
      + \\epsilon \\left(- \\lambda_{1}{\\left (t \\right )} + \\frac{d^{2}}{d t^{2}}  \\operatorname{z_{1}}{\\left (t \\right )}\\right)
      + \\epsilon^{2} \\left(- \\lambda_{2}{\\left (t \\right )} + \\frac{d^{2}}{d t^{2}}  \\operatorname{z_{2}}{\\left (t \\right )}\\right)
      \\\\
      0=- \\alpha \\left(\\epsilon^{2} \\operatorname{r_{2}}{\\left (t \\right )} + \\epsilon \\operatorname{r_{1}}{\\left (t \\right )} + r_{0}\\right)^{2} + \\epsilon^{2} \\operatorname{z_{2}}{\\left (t \\right )} + \\epsilon \\operatorname{z_{1}}{\\left (t \\right )} + z_{0}
      \\\\
      =
      - \\alpha r_{0}^{2} + z_{0}
      + \\epsilon \\left(- 2 \\alpha r_{0} \\operatorname{r_{1}}{\\left (t \\right )} + \\operatorname{z_{1}}{\\left (t \\right )}\\right)
      + \\epsilon^{2} \\left(- 2 \\alpha r_{0} \\operatorname{r_{2}}{\\left (t \\right )} - \\alpha \\operatorname{r_{1}}^{2}{\\left (t \\right )} + \\operatorname{z_{2}}{\\left (t \\right )}\\right)
      + O(\\epsilon^3)
      `,
      explanation: "a similar process for the simpler z and constraint equations"
    },
    {
      expression: `
      0=
      L - m \\left(\\epsilon^{2} \\omega_{2}{\\left (t \\right )} + \\epsilon \\omega_{1}{\\left (t \\right )} + \\omega_{0}\\right) \\left(\\epsilon^{2} \\operatorname{r_{2}}{\\left (t \\right )} + \\epsilon \\operatorname{r_{1}}{\\left (t \\right )} + r_{0}\\right)^{2}
      \\\\
      =
      L - m \\omega_{0} r_{0}^{2}
      \\\\
      + \\epsilon \\left(- 2 m \\omega_{0} r_{0} \\operatorname{r_{1}}{\\left (t \\right )} - m r_{0}^{2} \\omega_{1}{\\left (t \\right )}\\right)
      \\\\
      + \\epsilon^{2} \\left(- 2 m \\omega_{0} r_{0} \\operatorname{r_{2}}{\\left (t \\right )} - m \\omega_{0} \\operatorname{r_{1}}^{2}{\\left (t \\right )} - m r_{0}^{2} \\omega_{2}{\\left (t \\right )} - 2 m r_{0} \\omega_{1}{\\left (t \\right )} \\operatorname{r_{1}}{\\left (t \\right )}\\right)
      + O(\\epsilon^3)
      `,
      explanation: "Producing the equations of motion for angular frequency to 3rd order. In all these expansions we have 0th and first order terms that already reduce to 0."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
      expression: `
      \\mathcal{L}
      = m\\dot r^2 + m r^2\\dot \\theta +kr^{-1}-hr^{-2}
      \\\\
      L = m r^2 \\dot theta
      \\\\
      \\mathcal{L}
      = m\\dot r^2 - (L/m) r^{-2} +kr^{-1}-hr^{-2}
      `,
      explanation: "recasting the equation just in terms of r"
    },
    {
      expression: `
      - (L/m) r^{-2} -hr^{-2} = -(L/m+h)r^{-2}
      \\\\
      L/m+h = L_f/m
      \\\\
      L_f = r^2 \\dot \\theta_f
      \\rightarrow
      (L/m+h)r^{-2} = \\dot \\theta_f  > \\dot \\theta
      \\\\
      \\mathcal{L}
      = m\\dot r^2 - L_f r^{-2} +kr^{-1}
      `,
      explanation: "taking advantage of the similar forms of the imposed potential and the virtual potential imposed by angular momentum, we see for positive perturbations the orbit is always faster than it would have been without."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
      expression: `\\vec D = \\vec r \\times \\vec p - \\frac{qb}{c}\\hat r`,
      explanation: "define a composite vector from the angular momentum and charge"
    },
    {
      expression: `
      \\dot{\\vec {D}}
      =
      \\dot{\\vec r} \\times \\vec p
      +
      \\vec r \\times \\dot{\\vec p}
      - \\frac{qb}{c}\\dot{ \\hat{ r}}
      \\\\
      \\dot{\\vec r} \\times \\vec p =
      \\dot{\\vec r} \\times \\dot{\\vec r}m = 0
      \\\\
      \\vec r \\times \\dot{\\vec p}=
      \\vec r \\times (
        q(\\vec E + \\dot{\\vec r}\\times \\vec B )
        )
      \\\\
      \\vec r \\times q \\vec E
      =
      -qkr^{-2} \\vec r \\times \\hat r = 0
      \\\\
      q \\vec r \\times \\dot{\\vec r}\\times \\vec B
      =
      qbr^{-2} \\vec r \\times \\dot{\\vec r}\\times \\hat r
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
