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
      expression: `
      H
      =
        \\frac{1}{2}(
          \\frac{p_r^2}{m}
          + \\frac{p_{\\theta_p}^2}{mr^2}
          +\\frac{
            p_{\\theta_e}^2
          }{ mr^2 sin(\\theta_p)^2 }
          -\\frac{\\gamma}{m}
          \\frac{sin(\\theta_p)^2}{r^4}
          )
      \\\\
      \\gamma=(qM \\frac{\\mu_0 }{4\\pi})^2
      `,
      explanation: "A concise expression of the hamiltonian."
    },
    {
      expression: `
      \\partial_t H = 0 \\rightarrow E(t)=E_0
      \\\\
      \\partial_{\\theta_e} H = 0 \\rightarrow p_{\\theta_e}(t)=p_{\\theta_e0}
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
    },]
  },

  {
    location:`own notion`,
    description:"Convert a vector field from polar coordinates to cylindrical",
    steps:[
    {
      expression: `
        \\vec V =
        V_{\\rho} \\hat \\rho
        +V_{z} \\hat z
        +V_{\\theta} \\hat \\theta
        \\\\
        =V_{r} \\hat r
        +V_{\\theta_p} \\hat \\theta_p
        +V_{\\theta_e} \\hat \\theta_e
        \\\\
        =
        V_{x} \\hat x
        +V_{y} \\hat y
        +V_{z} \\hat z
        `,
      explanation: "A vector field can be expressed equivalently in any coordinate system"
    },
    {
      expression: `
      V_{z}
      = V_{r}cos(\\theta_p)-V_{\\theta_p}sin(\\theta_p)
      \\\\
      V_{x}
      = (V_{r}sin(\\theta_p)+V_{\\theta_p}cos(\\theta_p))cos(\\theta_e)
      -V_{\\theta_e}sin(\\theta_e)
      \\\\
      V_{y}
      = -(V_{r}sin(\\theta_p)+V_{\\theta_p}cos(\\theta_p))sin(\\theta_e)
      +V_{\\theta_e}cos(\\theta_e)
      `,
      explanation: "A spherical vector field recast in cartesian coordinates"
    },
    {
      expression: `
      \\begin{bmatrix}
        \\rho \\\\
        \\theta \\\\
        z
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        r sin(\\theta_{p}) \\\\
        \\theta_{e} \\\\
        r cos(\\theta_{p})
      \\end{bmatrix}
      ,
      \\begin{bmatrix}
        r \\\\
        \\theta_{\\theta_p} \\\\
        \\theta_{\\theta_e}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        (\\rho^2+z^2)^{1/2} \\\\
        atan(z/\\rho) \\\\
        \\theta
      \\end{bmatrix}

      `,
      explanation: "Expressions for cylindrical coordinates in terms of spherical"
    },
    {
      expression: `
      \\begin{bmatrix}
        \\hat \\rho \\\\
        \\hat  \\theta \\\\
        \\hat z
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        \\partial_{ r } \\rho
        & \\partial_{ \\theta_{p} } \\rho
        & \\partial_{ \\theta_{e} } \\rho
        \\\\
        \\partial_{ r } \\theta
        & \\partial_{ \\theta_{p} } \\theta
        & \\partial_{ \\theta_{e} } \\theta
        \\\\
        \\partial_{ r } z
        & \\partial_{ \\theta_{p} } z
        & \\partial_{ \\theta_{e} } z
      \\end{bmatrix}
      \\begin{bmatrix}
        \\hat r \\\\
        \\hat \\theta_{p} \\\\
        \\hat \\theta_{e}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        sin(\\theta_{p})
        & r cos(\\theta_{p})
        & 0
        \\\\
        0
        & 0
        & 1
        \\\\
        cos(\\theta_{p})
        & -r sin(\\theta_{p})
        & 0
      \\end{bmatrix}
      \\begin{bmatrix}
        \\hat r \\\\
        \\hat \\theta_{p} \\\\
        \\hat \\theta_{e}
      \\end{bmatrix}
      `,
      explanation: "A transformation from spherical unit vectors to cylindrical, the jacobian of which is simply r, as appropriate for cylindrical coordinates"
    },
    {
      expression: `
      \\begin{bmatrix}
        V_\\rho \\\\
        V_\\theta \\\\
        V_z
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        sin(\\theta_{p})
        & r cos(\\theta_{p})
        & 0
        \\\\
        0
        & 0
        & 1
        \\\\
        cos(\\theta_{p})
        & -r sin(\\theta_{p})
        & 0
      \\end{bmatrix}
      \\begin{bmatrix}
        V_r \\\\
        V_{\\theta_{p}} \\\\
        V_{\\theta_{e}}
      \\end{bmatrix}
      =
      \\begin{bmatrix}
        sin(\\theta_{p})V_r
        +r cos(\\theta_{p})V_{\\theta_{p}}
        +0 V_{\\theta_{e}}
        \\\\
        V_{\\theta_{p}}
        \\\\
        V_{\\theta_{e}}
      \\end{bmatrix}
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
