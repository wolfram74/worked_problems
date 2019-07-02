var problems = [

  {
    location:`NA`,
    description:"examining stabile orbits for diple system",
    steps:[
    {
      expression: `
      10 p_{d}^{2} + p_{r}^{2} + 10 p_{t}^{2} + \\frac{p_{\\theta}^{2}}{r^{2}}
      - \\frac{1}{12 r^{3}} \\left(
        \\cos{\\left (\\phi_{d} \\right )}
        + 3 \\cos{\\left (\\phi_{t} - 2 \\theta \\right )}
        \\right)
      `,
      explanation: "starting hamiltonian for identical magnetized spheres"
    },
    {
      expression: `
      \\dot{p_{\\phi_{d}}} =
      - \\frac{\\sin{\\left (\\phi_{d} \\right )}}{12 r^{3}}
      \\\\
      \\dot{\\phi_{d}} =
      20 p_{\\phi_d}
      \\\\
      \\dot{p_{\\phi_{t}}} =
      - \\frac{1}{4 r^{3}} \\sin{\\left (\\phi_{t} - 2 \\theta \\right )}
      \\\\
      \\dot{\\phi_{t}} =
      20 p_{\\phi_t}
      \\\\
      \\dot{p_{\\theta}} =
      \\frac{1}{2 r^{3}} \\sin{\\left (\\phi_{t} - 2 \\theta \\right )}
      \\\\
      \\dot{\\theta} =
      \\frac{2 p_{\\theta}}{r^{2}}
      \\\\
      \\dot{p_{r}} =
      \\frac{2 p_{\\theta}^{2}}{r^{3}} - \\frac{1}{4 r^{4}} \\left(\\cos{\\left (\\phi_{d} \\right )} + 3 \\cos{\\left (\\phi_{t} - 2 \\theta \\right )}\\right)
      \\\\
      \\dot{r} =
      2 p_{r}
      \\\\
      \\\\
      L_t = 2p_{\\phi_t}+p_{\\theta}
      `,
      explanation: "the resulting hamiltonian equations of motion and a constant of that motion"
    },
    {
      expression: `
      \\dot{p_{\\phi_{d}}} = 0 \\rightarrow
      \\phi_{d} = n \\pi
      \\\\
      \\dot{p_{\\phi_{d}}} = \\dot{p_{\\theta}} = 0 \\rightarrow
      \\phi_{t} - 2 \\theta = m \\pi
      \\\\
      \\dot{p_{r}} = 0
      \\\\
      \\rightarrow
      \\\\
      \\frac{2 p_{\\theta}^{2}}{r^{3}} =
      \\frac{1}{4 r^{4}} \\left(
        \\cos{\\left (\\phi_{d} \\right )} + 3 \\cos{\\left (\\phi_{t} - 2 \\theta \\right )}
        \\right)
      \\\\
      p_{\\theta}^{2}=
      \\frac{1}{8 r} \\left(
        \\cos{\\left ( n \\pi \\right )} + 3 \\cos{\\left (m \\pi \\right )}
        \\right) = \\frac{1}{r}(\\frac{1}{2}_{0,0}, \\frac{1}{4}_{1,0})
      `,
      explanation: "the initial angles defining a case where the momenta might stay constant. only two possible configurations exist as the square of a momenta must be positive."
    },
    {
      expression: `
      p_{\\phi_{d}0} = p_{r0} = 0
      \\\\
      p_{\\theta 0}^{2} = (\\frac{1}{2r}, \\frac{1}{4r})
      \\\\
      \\frac{2 p_{\\theta}}{r^{2}} = \\dot{\\theta}
      \\\\
      p_{\\theta} =
      \\dot{\\theta} r^2/2 =
      ((\\frac{1}{2r})^{1/2}, (\\frac{1}{4r})^{1/2})
      \\\\
      \\dot{\\theta} = (2^{1/2}, 1)r^{-5/2}
      \\\\
      \\dot{\\phi_{t}} - 2\\dot{\\theta} = 0 \\rightarrow
      \\\\
      \\dot{\\phi_{t}}
      = 2\\dot{\\theta}
      = 2(2^{1/2}, 1)r^{-5/2}
      \\\\
      \\dot{\\phi_{t}} =
      20 p_{\\phi_t} \\rightarrow
      p_{\\phi_t0} = (2^{1/2}, 1)r^{-5/2}/10
      `,
      explanation: "the necessary initial momentas"
    },
    {
      expression: `
      L_t = 2p_{\\phi_t}+p_{\\theta}
      =
      (2^{1/2}, 1)r^{-5/2}/5
      +
      (1, (\\frac{1}{2})^{1/2})(\\frac{1}{2r})^{1/2}
      \\\\
      =(1+2^{1/2}, 2^{-1/2}+1)((2r)^{-1/2} + \\frac{r^{-5/2}}{5})
      `,
      explanation: "Examining what the total angular momentum will be for circular orbits, it will have the same sign as p theta up until a point and then have the opposite sign."
    },
    {
      expression: `
      H =
      0 + 0 + \\frac{3\\pm 1}{20}r^3
      + \\frac{1}{3 \\mp 1}\\frac{1}{r^{3}}
      - \\frac{1}{12 r^{3}} \\left(
        3
        \\pm 1
        \\right)
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
