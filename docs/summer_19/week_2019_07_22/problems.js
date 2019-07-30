var problems = [

  {
    location:`self`,
    description:"examining stability for circular orbits in diple system",
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
      \\phi_{d}\\approx
      \\epsilon \\phi_{d1} + \\phi_{d0}
      \\\\
      \\phi_{t}\\approx
      \\epsilon \\phi_{t1} + \\phi_{t0}
      \\\\
      \\theta\\approx
      \\epsilon \\theta_{1} + \\theta_{0}
      \\\\
      r\\approx
      \\epsilon r_{1} + r_{0}
      \\\\
      p_{d}\\approx
      \\epsilon p_{d1} + p_{d0}
      \\\\
      p_{t}\\approx
      \\epsilon p_{t1} + p_{t0}
      \\\\
      p_{\\theta}\\approx
      \\epsilon p_{\\theta1} + p_{\\theta0}
      \\\\
      p_{r}\\approx
      \\epsilon p_{r1} + p_{r0}
      `,
      explanation: "our substitutions going forward"
    },
    {
      expression: `
      \\\\
      \\dot{\\phi_{d}} \\approx 20 \\epsilon p_{d1} + 20 p_{d0}
      \\\\
      \\dot{\\phi_{t}} \\approx 20 \\epsilon p_{t1} + 20 p_{t0}
      \\\\
      \\dot{\\theta} \\approx \\epsilon \\left(- \\frac{4 p_{\\theta0}}{r_{0}^{3}} r_{1} + \\frac{2 p_{\\theta1}}{r_{0}^{2}}\\right) + \\frac{2 p_{\\theta0}}{r_{0}^{2}}
      \\\\
      \\dot{r} \\approx 2 \\epsilon p_{r1} + 2 p_{r0}
      \\\\
      \\dot{p_{\\phi_{d}}} \\approx \\epsilon \\left(- \\frac{\\phi_{d1}}{12 r_{0}^{3}} \\cos{\\left (\\phi_{d0} \\right )} + \\frac{r_{1}}{4 r_{0}^{4}} \\sin{\\left (\\phi_{d0} \\right )}\\right) - \\frac{\\sin{\\left (\\phi_{d0} \\right )}}{12 r_{0}^{3}}
      \\\\
      \\dot{p_{\\phi_{t}}} \\approx \\epsilon \\left(- \\frac{\\phi_{t1}}{4 r_{0}^{3}} \\cos{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )} + \\frac{\\theta_{1}}{2 r_{0}^{3}} \\cos{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )} + \\frac{3 r_{1}}{4 r_{0}^{4}} \\sin{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )}\\right) - \\frac{1}{4 r_{0}^{3}} \\sin{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )}
      \\\\
      \\dot{p_{\\theta}} \\approx \\epsilon \\left(\\frac{\\phi_{t1}}{2 r_{0}^{3}} \\cos{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )} - \\frac{\\theta_{1}}{r_{0}^{3}} \\cos{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )} - \\frac{3 r_{1}}{2 r_{0}^{4}} \\sin{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )}\\right) + \\frac{1}{2 r_{0}^{3}} \\sin{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )}
      \\\\
      \\dot{p_{r}} \\approx \\epsilon \\left(
        - \\frac{6 r_{1}}{r_{0}^{4}} p_{\\theta0}^{2} + \\frac{4 p_{\\theta0}}{r_{0}^{3}} p_{\\theta1}
        + \\frac{\\phi_{d1}}{4 r_{0}^{4}} \\sin{\\left (\\phi_{d0} \\right )}
        + \\frac{3 \\phi_{t1}}{4 r_{0}^{4}} \\sin{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )} - \\frac{3 \\theta_{1}}{2 r_{0}^{4}} \\sin{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )} + \\frac{r_{1}}{r_{0}^{5}} \\cos{\\left (\\phi_{d0} \\right )} + \\frac{3 r_{1}}{r_{0}^{5}} \\cos{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )}\\right)
        \\\\
      + \\frac{2 p_{\\theta0}^{2}}{r_{0}^{3}} - \\frac{\\cos{\\left (\\phi_{d0} \\right )}}{4 r_{0}^{4}} - \\frac{3}{4 r_{0}^{4}} \\cos{\\left (\\phi_{t0} - 2 \\theta_{0} \\right )}
      `,
      explanation: "our new equations of motion to first order in epsilon."
    },
    {
      expression: `
      \\widehat H_1=
      \\left[\\begin{matrix}
      0.0 & 0.0 & 0.0 & 0.0 & 20 & 0.0 & 0.0 & 0.0
      \\\\
      0.0 & 0.0 & 0.0 & 0.0 & 0.0 & 20 & 0.0 & 0.0
      \\\\
      0.0 & 0.0 & 0.0 & - \\frac{2 \\sqrt{2}}{r_{0}^{3}} \\sqrt{\\frac{1}{r_{0}}} & 0.0 & 0.0 & \\frac{2}{r_{0}^{2}} & 0.0
      \\\\
      0.0 & 0.0 & 0.0 & 0.0 & 0.0 & 0.0 & 0.0 & 2
      \\\\
      - \\frac{1}{12 r_{0}^{3}} & 0.0 & 0.0 & 0.0 & 0.0 & 0.0 & 0.0 & 0.0
      \\\\
      0.0 & - \\frac{1}{4 r_{0}^{3}} & \\frac{1}{2 r_{0}^{3}} & 0.0 & 0.0 & 0.0 & 0.0 & 0.0
      \\\\
      0.0 & \\frac{1}{2 r_{0}^{3}} & - \\frac{1}{r_{0}^{3}} & 0.0 & 0.0 & 0.0 & 0.0 & 0.0
      \\\\
      0.0 & 0.0 & 0.0 & \\frac{1}{r_{0}^{5}} & 0.0 & 0.0 & \\frac{2 \\sqrt{2}}{r_{0}^{3}} \\sqrt{\\frac{1}{r_{0}}} & 0.0
      \\end{matrix}\\right]
      \\\\
      \\dot{\\Gamma_1} = \\widehat H_1 \\Gamma_1 = \\omega \\Gamma_1
      `,
      explanation: "A matrix form of the equations, reducing it to an eigenvalue problem."
    },
    {
      expression: `
      \\widehat A (-\\omega^2)\\vec q +
      \\widehat B (i\\omega)\\vec q +
      \\widehat C (-\\omega^2)\\vec q =0

      `,
      explanation: "a different approach focusing on the lagrangian equations would produce 4x4 matrices and may produce more intelligible results."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
