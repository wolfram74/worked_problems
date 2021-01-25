var problems = [

  {
    location:`extending work on rolling dipoles`,
    description:"Determine a hamiltonian for two sliding frictionless spherical magnetic dipoles.",
    steps:[
    {
      expression: `
      \\vec r_1 = x_1 \\hat x + y_1 \\hat y = r_1 \\hat r(\\theta_1)
      \\\\
      \\vec r_2 = x_2 \\hat x + y_2 \\hat y = r_2 \\hat r(\\theta_2)
      \\\\
      \\vec \\mu_1 = \\mu_1 \\hat \\mu(\\phi_1)
      \\\\
      \\vec \\mu_2 = \\mu_2 \\hat \\mu(\\phi_2)
      \\\\
      \\hat r(\\theta) = cos(\\theta) \\hat x + sin(\\theta) \\hat y
      \\\\
      \\hat \\mu(\\phi) = cos(\\phi) \\hat x + sin(\\phi) \\hat y
      `,
      explanation: "All angles are measured from the x-axis"
    },
    {
      expression: `
      L = T - U
      \\\\
      T_i =
        \\frac{m_i}{2}(\\dot x_i^2 + \\dot x_i^2) +
        \\frac{I_i}{2} \\dot \\phi_i^2
      \\\\
        =
        \\frac{m_i}{2}(\\dot r_i^2 + \\dot \\theta_i^2r_i^2) +
        \\frac{I_i}{2} \\dot \\phi_i^2
      \\\\
      U_i = -\\vec \\mu_i \\cdot \\vec B_j
      `,
      explanation: "In the naive cartesian or polar frame, expressions for kinetic energy is straight forward. $&\\mu_i&$ being the dipole moment for ith sphere"
    },
    {
      expression: `
      \\gamma = \\frac{\\mu_0}{4\\pi}
      \\\\
      \\vec B_2(\\vec r, \\vec r_2, \\phi_2) = \\gamma(
        3 \\frac{
          \\vec \\mu_2 \\cdot (\\vec r - \\vec r_2)
        }{
          |\\vec r - \\vec r_2|^5
        }(\\vec r - \\vec r_2)
        -\\frac{
          \\vec \\mu_2
        }{
          |\\vec r - \\vec r_2|^3
        }
        )
      `,
      explanation: "Extending the field a dipole causes from the origin to one at a generic point."
    },
    {
      expression: `
      U_1 = -\\vec \\mu_1 \\cdot \\vec B_2(\\vec r_1, \\vec r_2, \\phi_2)=
      \\\\
      -\\gamma(
        3 \\frac{
          \\vec \\mu_2 \\cdot (\\vec r_1 - \\vec r_2)
        }{
          |\\vec r_1 - \\vec r_2|^5
        }\\vec \\mu_1 \\cdot(\\vec r_1 - \\vec r_2)
        -\\frac{
          \\vec \\mu_1 \\cdot\\vec \\mu_2
        }{
          |\\vec r_1 - \\vec r_2|^3
        }
        )
      \\\\
      \\vec r_{ij} = (\\vec r_i - \\vec r_j)
      \\\\
      U_1
      =
      \\gamma(
        \\frac{
          \\vec \\mu_1 \\cdot\\vec \\mu_2
        }{
          |\\vec r_{12}|^3
        }
        -3 \\frac{
          \\vec \\mu_2 \\cdot (\\vec r_{12})
        }{
          |\\vec r_{12}|^5
        }\\vec \\mu_1 \\cdot(\\vec r_{12})
        )
      =
      \\gamma(
        \\frac{
          \\vec \\mu_1 \\cdot\\vec \\mu_2
        }{
          |r_{12}|^3
        }
        -3 \\frac{
          \\vec \\mu_2 \\cdot \\hat r_{12}
          \\vec \\mu_1 \\cdot \\hat r_{12} r_{12}^2
        }{
          |r_{12}|^5
        }
        )
      \\\\
      =
      \\gamma(
        \\frac{
          \\vec \\mu_1 \\cdot\\vec \\mu_2
        }{
          |r_{12}|^3
        }
        -3 \\frac{
          \\vec \\mu_2 \\cdot \\hat r_{12}
          \\vec \\mu_1 \\cdot \\hat r_{12}
        }{
          |r_{12}|^3
        }
        )
      =
      \\frac{\\gamma}{|r_{12}|^3}(
        \\vec \\mu_1 \\cdot\\vec \\mu_2
        -3\\vec \\mu_2 \\cdot \\hat r_{12}
          \\vec \\mu_1 \\cdot \\hat r_{12}
        )
      `,
      explanation: "The interaction potential for dipole 1"
    },
    {
      expression: `
      U_2
      =
      \\frac{\\gamma}{|r_{21}|^3}(
        \\vec \\mu_2 \\cdot\\vec \\mu_1
        -3\\vec \\mu_1 \\cdot \\hat r_{21}
          \\vec \\mu_2 \\cdot \\hat r_{21}
        )
      \\\\
      |r_{21}|=|r_{12}|
      \\\\
      \\vec \\mu_2 \\cdot\\vec \\mu_1 = \\vec \\mu_1 \\cdot\\vec \\mu_2
      \\\\
      \\vec r_{12}
      = \\vec r_1 - \\vec r_2
      = -(-\\vec r_1 + \\vec r_2)
      = - \\vec r_{21}
      \\rightarrow \\hat r_{12} = - \\hat r_{21}
      \\\\
      \\rightarrow
      \\\\
      U_1 =
      \\frac{\\gamma}{|r_{21}|^3}(
        \\vec \\mu_2 \\cdot\\vec \\mu_1
        -3(-1)\\vec \\mu_1 \\cdot \\hat r_{21}
          (-1)\\vec \\mu_2 \\cdot \\hat r_{21}
        )
      =U_2 \\rightarrow U =
      \\frac{2\\gamma}{|r_{21}|^3}(
        \\vec \\mu_1 \\cdot\\vec \\mu_2
        -3\\vec \\mu_1 \\cdot \\hat r_{21}
          \\vec \\mu_2 \\cdot \\hat r_{21}
        )
      `,
      explanation: "An expression for the total potential energy of the two dipoles in terms of relative positioning."
    },
    {
      expression: `
      \\vec R = \\frac{m_1 \\vec r_1+m_2 \\vec r_2}{m_1+m_2}, m_t = m_1+m_2
      \\\\
      \\ r = \\vec r_{21} = r \\hat r(\\theta)
      \\\\
      \\theta = \\arctan(\\frac{y_2-R_y}{x_2-R_x})
      \\\\
      \\vec r_1 = \\vec R - \\frac{m_2}{m_t} \\vec r
      \\\\
      \\vec r_2 = \\vec R + \\frac{m_1}{m_t} \\vec r
      \\\\
      m_r  = \\frac{m_1m_2}{m_t}
      `,
      explanation: "new system coordinates to take advantage of the found potential energy."
    },
    {
      expression: `
      T =
      \\frac{1}{2}(
        m_t \\dot{ \\vec R^2} +
        m_r \\dot{ \\vec r^2}
        )
      + \\frac{1}{2} I_1 \\dot \\phi_1^2
      + \\frac{1}{2} I_2 \\dot \\phi_2^2
      \\\\
      =
      \\frac{1}{2}(
        m_t (\\dot{ R_x^2} + \\dot{ R_y^2}) +
        m_r (\\dot{ r^2}+\\dot{ \\theta^2}r^2)
        )
      + \\frac{1}{2} I_1 \\dot \\phi_1^2
      + \\frac{1}{2} I_2 \\dot \\phi_2^2
      `,
      explanation: "kinetic energy in terms of the new variables"
    },
    {
      expression: `
      U =
      \\frac{2\\gamma}{r^3}(
        \\mu_1 \\mu_2 (
          cos(\\phi_1)cos(\\phi_2)
          +sin(\\phi_1)sin(\\phi_2)
          )
        -3
        \\mu_1 (
          cos(\\phi_1)cos(\\theta)
          +sin(\\phi_1)sin(\\theta)
          )
        \\mu_2 (
          cos(\\phi_2)cos(\\theta)
          +sin(\\phi_2)sin(\\theta)
          )
        )
      \\\\
      =
      - \\frac{\\gamma \\mu_{1} \\mu_{2}}{2 r^{3}}
      \\left(
        \\cos{\\left (\\phi_{1} - \\phi_{2} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{2} - 2 \\theta \\right )}
        \\right)
      `,
      explanation: "A compact expression for the potential energy in the new coordinates. Noticing the center of mass coordinates don't feature their associated conjugate momenta are constants and will be ignored further."
    },
    {
      expression: `
      L = T - U =
      \\\\
        \\frac{m_r}{2} (\\dot{ r^2}+\\dot{ \\theta^2}r^2)
      + \\frac{1}{2} I_1 \\dot \\phi_1^2
      + \\frac{1}{2} I_2 \\dot \\phi_2^2
      - U(r, \\theta, \\phi_1, \\phi_2)
      \\\\
      \\partial_{\\dot r} L = p_r = m_r \\dot r
      \\rightarrow
      \\dot r =\\frac{p_r}{m_r}
      \\\\
      \\partial_{\\dot \\theta} L = p_\\theta = m_r r^2 \\dot \\theta
      \\rightarrow
      \\dot \\theta = \\frac{p_\\theta}{m_r r^2}
      \\\\
      \\partial_{\\dot \\phi_1} L = p_{\\phi_1} = I_1 \\dot \\phi_1
      \\rightarrow
      \\dot \\phi_1 = \\frac{p_{\\phi_1}}{I_1}
      \\\\
      \\partial_{\\dot \\phi_2} L = p_{\\phi_2} = I_2 \\dot \\phi_2
      \\rightarrow
      \\dot \\phi_2 = \\frac{p_{\\phi_2}}{I_2}
      `,
      explanation: "Conjugate momenta in terms of velocities and vice versa"
    },
    {
      expression: `
      H = T+U =
      \\\\
      \\frac{m_r}{2} (
        (\\frac{p_r}{m_r})^2+(\\frac{p_\\theta}{m_r r^2})^2r^2)
      + \\frac{1}{2} I_1 (\\frac{p_{\\phi_1}}{I_1})^2
      + \\frac{1}{2} I_2 (\\frac{p_{\\phi_2}}{I_2})^2
      + U(r, \\theta, \\phi_1, \\phi_2)
      \\\\
      =
      \\frac{1}{2} (
        \\frac{p_r^2}{m_r}+ \\frac{p_\\theta^2}{m_r r^2})
      + \\frac{1}{2} \\frac{p_{\\phi_1}^2}{I_1}
      + \\frac{1}{2} \\frac{p_{\\phi_2}^2}{I_2}
      - \\frac{\\gamma \\mu_{1} \\mu_{2}}{2 r^{3}}
      \\left(
        \\cos{\\left (\\phi_{1} - \\phi_{2} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{2} - 2 \\theta \\right )}
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
