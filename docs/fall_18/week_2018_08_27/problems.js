var problems = [

  {
    location:`self`,
    description:"examine double free dipole at limits to see how it compares with fixed central dipole",
    steps:[
    {
      expression: `
      H_{free}=\\frac{1}{2} (
        \\frac{p_r^2}{m_r}+ \\frac{p_\\theta^2}{m_r r^2})
      + \\frac{1}{2} \\frac{p_{\\phi_1}^2}{I_1}
      + \\frac{1}{2} \\frac{p_{\\phi_2}^2}{I_2}
      - \\frac{\\mu_0}{4\\pi} \\frac{\\mu_{1} \\mu_{2}}{2 r^{3}}
      \\left(
        \\cos{\\left (\\phi_{1} - \\phi_{2} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{2} - 2 \\theta \\right )}
        \\right)
      \\\\
      H_{fixed}=
      \\frac{1}{2}(
        p_r^2/m
        + \\frac{p_\\theta^2}{mr^2}
        +\\frac{5 p_\\phi^2}{2 ma^2} )
      -\\frac{\\mu_0}{4\\pi} \\frac{\\mu^2}{2 r^{3}}(
        \\cos{\\phi} + 3\\cos{(\\phi-2\\theta)}
        )
      `,
      explanation: "The hamiltonian I have found for the two free dipoles and the hamiltonian from the 2017 paper some of the notation converted, namely using $&\\mu&$ for dipole magnitude"
    },
    {
      expression: `
      m_1 = m \\rightarrow I_1 = \\frac{ ma^2}{5}
      \\\\
      m2 = \\alpha m \\rightarrow I_2 = \\frac{ \\alpha ma^2}{5}
      \\\\
      m_r = \\frac{m_1m_2}{m_1+m_2} = \\frac{\\alpha m^2}{(1+\\alpha)m}
      \\\\
      \\mu_1=\\mu_2=\\mu
      \\\\
      \\phi_{20} = p_{\\phi_{20}}=0
      `,
      explanation: "some substitutions and initial conditions assumed for the free hamiltonian."
    },
    {
      expression: `
      H_{free}=
      \\\\
      \\frac{1}{2} (
        p_r^2 \\frac{(1+\\alpha)m}{\\alpha m^2}
        + \\frac{p_\\theta^2}{ r^2}\\frac{(1+\\alpha)m}{\\alpha m^2}
        )
      + \\frac{1}{2} \\frac{5}{ ma^2} p_{\\phi_1}
      + \\frac{1}{2} \\frac{5}{ \\alpha ma^2} p_{\\phi_2}
      \\\\
      - \\frac{\\mu_0}{4\\pi} \\frac{\\mu^2}{2 r^{3}}
      \\left(
        \\cos{\\left (\\phi_{1} - \\phi_{2} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{2} - 2 \\theta \\right )}
        \\right)
      \\\\
      \\lim_{\\alpha \\to \\infty} H_{free} =
      \\frac{1}{2} (
        p_r^2 \\frac{1}{m}
        + \\frac{p_\\theta^2}{ r^2}\\frac{1}{m}
        )
      + \\frac{1}{2} \\frac{5}{ ma^2} p_{\\phi_1}
      + 0
      \\\\
      - \\frac{\\mu_0}{4\\pi} \\frac{\\mu^2}{2 r^{3}}
      \\left(
        \\cos{\\left (\\phi_{1} - \\phi_{2} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{2} - 2 \\theta \\right )}
        \\right)
      `,
      explanation: "The hamiltonian in the limit of the second mass going to infinite. Noting the kinetic energy term reverts to the fixed case lacking a $&p_{\\phi_2}&$ term the associated equation for change in $&\\phi_2&$ will be zero. Given our initial assumption of that being 0 is now fixed. So the final hamiltonian becomes"
    },
    {
      expression: `
      \\lim_{\\alpha \\to \\infty} H_{free} =
      \\frac{1}{m2} (
        p_r^2
        + \\frac{p_\\theta^2}{ r^2}
        + \\frac{5}{ a^2} p_{\\phi_1}
        )
      - \\frac{\\mu_0}{4\\pi} \\frac{\\mu^2}{2 r^{3}}
      \\left(
        \\cos{\\left (\\phi_{1} \\right )} + 3 \\cos{\\left (\\phi_{1} + 2 \\theta \\right )}
        \\right)
      `,
      explanation: "which aside for the subscripts on $&\\phi_1&$ is indistinguishable from the fixed case. A similar approach can be done to show the same occurs for if mass 1 goes to infinity as $&\\cos(-x)=\\cos(x)&$"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`Self`,
    description:"Examine the hamiltonian for the double free dipole for equilibrium points",
    steps:[
    {
      expression: `
      H=\\frac{1}{2} (
        \\frac{p_r^2}{m_r}
      + \\frac{p_\\theta^2}{m_r r^2}
      + \\frac{p_{\\phi_1}^2}{I_1}
      + \\frac{p_{\\phi_2}^2}{I_2}
      )
      - \\frac{\\mu_0}{4\\pi} \\frac{\\mu_{1} \\mu_{2}}{2 r^{3}}
      \\left(
        \\cos{\\left (\\phi_{1} - \\phi_{2} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{2} - 2 \\theta \\right )}
        \\right)
      \\\\
      \\rightarrow
      \\\\
      -\\partial_{\\theta} H =
      \\frac{3 \\gamma}{r^{3}} \\mu_{1} \\mu_{2} \\sin{\\left (\\phi_{1} + \\phi_{2} - 2 \\theta \\right )}
      \\\\
      -\\partial_{\\phi_1} H =
      \\frac{\\gamma \\mu_{1} \\mu_{2}}{2 r^{3}} \\left(- \\sin{\\left (\\phi_{1} - \\phi_{2} \\right )} - 3 \\sin{\\left (\\phi_{1} + \\phi_{2} - 2 \\theta \\right )}\\right)
      \\\\
      -\\partial_{\\phi_2} H =
      \\frac{\\gamma \\mu_{1} \\mu_{2}}{2 r^{3}} \\left(\\sin{\\left (\\phi_{1} - \\phi_{2} \\right )} - 3 \\sin{\\left (\\phi_{1} + \\phi_{2} - 2 \\theta \\right )}\\right)
      \\\\
      -\\partial_{r} H =
      - \\frac{3 \\gamma \\mu_{1} \\mu_{2}}{2 r^{4}} \\left(\\cos{\\left (\\phi_{1} - \\phi_{2} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{2} - 2 \\theta \\right )}\\right)
      + \\frac{p_{\\theta}^{2}}{m_{r} r^{3}}
      `,
      explanation: "Assuming fixed r we determine the conjugate forces for the angular coordinates."
    },
    {
      expression: `
      \\dot p_{\\theta} = 0 \\iff
      \\phi_{1} + \\phi_{2} - 2 \\theta = j\\pi
      \\\\
      \\therefore
      \\dot p_{\\phi_1}=\\dot p_{\\phi_2} = 0
      \\iff \\phi_{1} - \\phi_{2} = k\\pi
      `,
      explanation: "Where j and k are integers. We note that these constraints give us 2 independent equations but 3 variables, so we should expect not individual solutions, but a family of curves of solutions."
    },
    {
      expression: `
      \\phi_{1} + \\phi_{2} - 2 \\theta + \\phi_{1} - \\phi_{2} = j\\pi + k\\pi
      \\\\
      2\\phi_{1}- 2 \\theta = j\\pi + k\\pi
      \\\\
      \\phi_{1} - \\theta = \\frac{j+k}{2}\\pi
      \\\\
      \\phi_{1} = \\frac{j+k}{2}\\pi+\\theta
      \\\\
      \\phi_{2} = \\phi_{1} - k\\pi = \\frac{j+k}{2}\\pi+\\theta - k\\pi
      \\\\
      \\phi_{2} = \\frac{j-k}{2}\\pi+\\theta
      `,
      explanation: "given j and k, equilibrium conditions are specified. Also given that the functions are periodic over $&2\\pi&$ a finite number of curves are distinguishable, those comprised of k's and j's equal to 0 or 1."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
