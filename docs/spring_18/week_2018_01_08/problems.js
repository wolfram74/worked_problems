var problems = [

  {
    location:`Current events`,
    description:"come to some conclusions about the dragon on a dipole magnet in a uniform plasma flow.",
    steps:[
    {
      expression: `
        n=n_e=n_i
        \\\\
        \\vec v=v_e=v_i=v_0\\hat z
        \\rightarrow
        \\vec J = 0`,
      explanation: "some assumptions about the nature of the plasma flow, that is is homogeneous and single speed. "
    },
    {
      expression: `\\vec A = A_{\\theta_e} =
      M \\frac{\\mu_0 }{4\\pi}\\frac{sin(\\theta_p)}{r^2}
      `,
      explanation: "equation 3.7.22 from gurnett and bhattacharjee (G+B) describing the vector potential of a dipole. the subscripts on thetas denote equatorial angle and polar angle respectively."
    },
    {
      expression: `
      L=
      \\frac{1}{2}m \\vec v \\cdot \\vec v + q\\vec A \\cdot \\vec v
      =\\\\
      \\frac{1}{2}m(
        \\dot r^2
        + r^2 \\dot \\theta_p^2
        + r^2 sin(\\theta_p)^2 \\dot \\theta_e^2
        )+qA_{\\theta_e}r sin(\\theta_p) \\dot \\theta_e
      `,
      explanation: "The lagrangian for a charged particle in spherical coordinates"
    },
    {
      expression: `
        p_{q_i}=\\partial_{\\dot q_i} L
        \\\\
        p_{r}=\\partial_{\\dot r} L = m \\dot r
        \\rightarrow
        \\dot r =
        \\frac{p_r}{m}
        \\\\
        p_{\\theta_p}=\\partial_{\\dot \\theta_p} L = mr^2 \\dot \\theta_p
        \\rightarrow
        \\dot \\theta_p =
        \\frac{p_{\\theta_p}}{mr^2}
        \\\\
        p_{\\theta_e}
        =
        \\partial_{\\dot \\theta_e} L
        =mr^2 sin(\\theta_p)^2 \\dot \\theta_e + qA_{\\theta_e}r sin(\\theta_p)
        \\rightarrow
        \\dot \\theta_e =
        \\frac{p_{\\theta_e} - qA_{\\theta_e}r sin(\\theta_p)}{mr^2 sin(\\theta_p)^2}
        `,
      explanation: "the conjugate momenta of a particle in the dipole potential and how to replace their previous configuration velocities"
    },
    {
      expression: `
      H =
      \\frac{1}{2}m(
        (\\frac{p_r}{m})^2
        + r^2 (\\frac{p_{\\theta_p}}{mr^2})^2
        + r^2 sin(\\theta_p)^2 (
          \\frac{p_{\\theta_e} - qA_{\\theta_e}r sin(\\theta_p)}{mr^2 sin(\\theta_p)^2}
          )^2
        )+qA_{\\theta_e}r sin(\\theta_p) \\frac{p_{\\theta_e} - qA_{\\theta_e}r sin(\\theta_p)}{mr^2 sin(\\theta_p)^2}
      \\\\
      =
      \\frac{1}{2}m(
        (\\frac{p_r}{m})^2
        + r^2 (\\frac{p_{\\theta_p}}{mr^2})^2
        + \\frac{r^2 sin(\\theta_p)^2}{
           (mr^2 sin(\\theta_p)^2)^2
        } (
          p_{\\theta_e}
          - qA_{\\theta_e}r sin(\\theta_p)
          )^2
        )+qA_{\\theta_e}r sin(\\theta_p) \\frac{p_{\\theta_e} - qA_{\\theta_e}r sin(\\theta_p)}{mr^2 sin(\\theta_p)^2}
      \\\\
      =
      \\frac{1}{2}m(
        (\\frac{p_r}{m})^2
        + r^2 (\\frac{p_{\\theta_p}}{mr^2})^2
        + \\frac{r^2 sin(\\theta_p)^2}{
           (mr^2 sin(\\theta_p)^2)^2
        } (
          p_{\\theta_e}^2
          + q^2A_{\\theta_e}^2r^2 sin(\\theta_p)^2
          - 2qA_{\\theta_e}r sin(\\theta_p) p_{\\theta_e}
          )
        )+qA_{\\theta_e}r sin(\\theta_p) \\frac{p_{\\theta_e} - qA_{\\theta_e}r sin(\\theta_p)}{mr^2 sin(\\theta_p)^2}
      \\\\
      =
        \\frac{p_r^2}{2m}
        + \\frac{p_{\\theta_p}^2}{2mr^2}
        + \\frac{
          p_{\\theta_e}
          - qA_{\\theta_e}r sin(\\theta_p)
        }{
           mr^2 sin(\\theta_p)^2
        }\\frac{1}{2} (
          p_{\\theta_e}
          - qA_{\\theta_e}r sin(\\theta_p)
          )
        +qA_{\\theta_e}r sin(\\theta_p) \\frac{p_{\\theta_e} - qA_{\\theta_e}r sin(\\theta_p)}{mr^2 sin(\\theta_p)^2}
      \\\\
      =
        \\frac{p_r^2}{2m}
        + \\frac{p_{\\theta_p}^2}{2mr^2}
        + (\\frac{1}{2} (
          p_{\\theta_e}
          - qA_{\\theta_e}r sin(\\theta_p)
          )
        +qA_{\\theta_e}r sin(\\theta_p)) \\frac{p_{\\theta_e} - qA_{\\theta_e}r sin(\\theta_p)}{mr^2 sin(\\theta_p)^2}
      \\\\
      =
        \\frac{p_r^2}{2m}
        + \\frac{p_{\\theta_p}^2}{2mr^2}
        + \\frac{1}{2} (
          p_{\\theta_e}
          + qA_{\\theta_e}r sin(\\theta_p)
          )
        \\frac{p_{\\theta_e} - qA_{\\theta_e}r sin(\\theta_p)}{mr^2 sin(\\theta_p)^2}
      \\\\
      =
        \\frac{p_r^2}{2m}
        + \\frac{p_{\\theta_p}^2}{2mr^2}
        + \\frac{1}{2}
        \\frac{
          p_{\\theta_e}^2
          - (qA_{\\theta_e}r sin(\\theta_p))^2
        }{ mr^2 sin(\\theta_p)^2 }
      \\\\
      =
        \\frac{p_r^2}{2m}
        + \\frac{p_{\\theta_p}^2}{2mr^2}
        + \\frac{1}{2}
        \\frac{
          p_{\\theta_e}^2
        }{ mr^2 sin(\\theta_p)^2 }
        - \\frac{1}{2}
        \\frac{
          (qr sin(\\theta_p)A_{\\theta_e})^2
        }{ mr^2 sin(\\theta_p)^2 }
      \\\\
      =
        \\frac{p_r^2}{2m}
        + \\frac{p_{\\theta_p}^2}{2mr^2}
        + \\frac{1}{2}
        \\frac{
          p_{\\theta_e}^2
        }{ mr^2 sin(\\theta_p)^2 }
        - \\frac{1}{2}
        \\frac{
          (
            qr sin(\\theta_p)
            M \\frac{\\mu_0 }{4\\pi}\\frac{sin(\\theta_p)}{r^2}
            )^2
        }{ mr^2 sin(\\theta_p)^2 }
      `,
      explanation: "the hamiltonian in terms of conjugate momenta"
    },
    {
      expression: `
      \\psi(r,\\theta_p)=
      \\frac{1}{2}
        \\frac{
          (
            qr sin(\\theta_p)
            M \\frac{\\mu_0 }{4\\pi}\\frac{sin(\\theta_p)}{r^2}
            )^2
        }{ mr^2 sin(\\theta_p)^2 }
      \\\\
      =
      \\frac{1}{2}
      \\frac{(qM \\frac{\\mu_0 }{4\\pi})^2}{m}
        \\frac{
          (
            r sin(\\theta_p)
            \\frac{sin(\\theta_p)}{r^2}
            )^2
        }{ r^2 sin(\\theta_p)^2 }
      \\\\
      =
      \\frac{1}{2}
      \\frac{(qM \\frac{\\mu_0 }{4\\pi})^2}{m}
        \\frac{
          (
            \\frac{sin(\\theta_p)}{r^2}
            )^2
        }{1}
      \\\\
      =
      \\frac{1}{2}
      \\frac{(qM \\frac{\\mu_0 }{4\\pi})^2}{m}
      \\frac{sin(\\theta_p)^2}{r^4}
      `,
      explanation: "simplifying one of the potential terms"
    },
    {
      expression: `H=
      =
        \\frac{1}{2}(
          \\frac{p_r^2}{m}
          + \\frac{p_{\\theta_p}^2}{mr^2}
          +\\frac{
            p_{\\theta_e}^2
          }{ mr^2 sin(\\theta_p)^2 }
          -\\frac{(qM \\frac{\\mu_0 }{4\\pi})^2}{m}
          \\frac{sin(\\theta_p)^2}{r^4}
          )
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
