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
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
