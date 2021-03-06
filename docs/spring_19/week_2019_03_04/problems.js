var problems = [
/*
christoffel symbol defined in terms of a metric: 3.21
riemann tensor defined: 3.67, in terms of christoffel symbols
ricci tensor: 3.90
ricci scalar defined: 3.92
lie derivative 5.33 might be useful
commutator defined: carrol 5.26
ds^2 =
  -e^{2A}dt^2
  +e^{2B}dr^2
  +e^{2C}(d\\theta_p^2+sin(\\theta_p)^2d\\theta_e^2)
killing vector defined by 5.41
lie derivative defined by 5.33
nabla/covariant derivative defined by 3.19 or 3.1
3.12 for lowered indices
*/
  {
    location:`NA`,
    description:"given a line element, do a whole bunch of stuff",
    steps:[
    {
      expression: `
      ds^2 =
      g_{\\mu \\nu}dx^\\mu dx^\\nu
      =
      -e^{2A}dt^2
      +e^{2B}dr^2
      +e^{2C}(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)
      \\\\
      g_{t t} = -e^{2A},
      g_{r r} = e^{2B},
      g_{\\theta_p \\theta_p} = e^{2C},
      g_{\\theta_e \\theta_e} = e^{2C} sin(\\theta_p)^2
      \\\\
      else, 0
      \\\\
      g_{\\mu \\alpha}g^{\\alpha \\nu} = \\delta^\\nu_\\mu \\therefore
      \\\\
      g^{t t} = -e^{-2A},
      g^{r r} = e^{-2B},
      g^{\\theta_p \\theta_p} = e^{-2C},
      g^{\\theta_e \\theta_e} = e^{-2C} csc(\\theta_p)^2
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\Gamma^\\mu_{\\nu \\sigma}
      =
      \\frac{1}{2}g^{\\mu\\alpha_{1}}(
        \\partial_{\\nu}g_{\\sigma \\alpha_{1}}
        +\\partial_{\\sigma}g_{\\alpha_{1} \\nu}
        -\\partial_{\\alpha_{1}}g_{\\nu \\sigma}
        )
      \\\\
      =
      \\frac{1}{2}g^{\\mu\\alpha_{1}}
      \\delta_{\\alpha_1}^{\\mu}
      \\delta^{\\alpha_1}_{\\mu}
      (
        \\partial_{\\nu}g_{\\sigma \\alpha_{1}}
        +\\partial_{\\sigma}g_{\\alpha_{1} \\nu}
        -\\partial_{\\alpha_{1}}g_{\\nu \\sigma}
        )
      \\\\
      =
      \\frac{1}{2}g^{\\mu \\mu}(
        \\partial_{\\nu}g_{\\sigma  \\mu}
        +\\partial_{\\sigma}g_{ \\mu \\nu}
        -\\partial_{ \\mu}g_{\\nu \\sigma}
        )
      \\\\
      \\Gamma^{t}_{t r}=
      \\frac{1}{2}g^{tt}(
      \\partial_{t}g_{r t}
      +\\partial_{r}g_{t t}
      -\\partial_{t}g_{t r}
      )
      =
      \\frac{d}{d r} A{\\left (r \\right )}
      \\\\

      \\Gamma^{t}_{r t}=
      \\frac{1}{2}g^{tt}(
      \\partial_{r}g_{t t}
      +\\partial_{t}g_{t r}
      -\\partial_{t}g_{r t}
      )
      =
      \\frac{d}{d r} A{\\left (r \\right )}
      \\\\

      \\Gamma^{r}_{t t}=
      \\frac{1}{2}g^{rr}(
      \\partial_{t}g_{t r}
      +\\partial_{t}g_{r t}
      -\\partial_{r}g_{t t}
      )
      =
      e^{2 A{\\left (r \\right )} - 2 B{\\left (r \\right )}} \\frac{d}{d r} A{\\left (r \\right )}
      \\\\

      \\Gamma^{r}_{r r}=
      \\frac{1}{2}g^{rr}(
      \\partial_{r}g_{r r}
      +\\partial_{r}g_{r r}
      -\\partial_{r}g_{r r}
      )
      =
      \\frac{d}{d r} B{\\left (r \\right )}
      \\\\

      \\Gamma^{r}_{\\theta_{p} \\theta_{p}}=
      \\frac{1}{2}g^{rr}(
      \\partial_{\\theta_{p}}g_{\\theta_{p} r}
      +\\partial_{\\theta_{p}}g_{r \\theta_{p}}
      -\\partial_{r}g_{\\theta_{p} \\theta_{p}}
      )
      =
      - e^{- 2 B{\\left (r \\right )} + 2 C{\\left (r \\right )}} \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      \\Gamma^{r}_{\\theta_{e} \\theta_{e}}=
      \\frac{1}{2}g^{rr}(
      \\partial_{\\theta_{e}}g_{\\theta_{e} r}
      +\\partial_{\\theta_{e}}g_{r \\theta_{e}}
      -\\partial_{r}g_{\\theta_{e} \\theta_{e}}
      )
      =
      - e^{- 2 B{\\left (r \\right )} + 2 C{\\left (r \\right )}} \\sin^{2}{\\left (\\theta_{p} \\right )} \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      \\Gamma^{\\theta_{p}}_{r \\theta_{p}}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{r}g_{\\theta_{p} \\theta_{p}}
      +\\partial_{\\theta_{p}}g_{\\theta_{p} r}
      -\\partial_{\\theta_{p}}g_{r \\theta_{p}}
      )
      =
      \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      \\Gamma^{\\theta_{p}}_{\\theta_{p} r}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{\\theta_{p}}g_{r \\theta_{p}}
      +\\partial_{r}g_{\\theta_{p} \\theta_{p}}
      -\\partial_{\\theta_{p}}g_{\\theta_{p} r}
      )
      =
      \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      \\Gamma^{\\theta_{p}}_{\\theta_{e} \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{\\theta_{e}}g_{\\theta_{e} \\theta_{p}}
      +\\partial_{\\theta_{e}}g_{\\theta_{p} \\theta_{e}}
      -\\partial_{\\theta_{p}}g_{\\theta_{e} \\theta_{e}}
      )
      =
      - \\frac{1}{2} \\sin{\\left (2 \\theta_{p} \\right )}
      \\\\

      \\Gamma^{\\theta_{e}}_{r \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{r}g_{\\theta_{e} \\theta_{e}}
      +\\partial_{\\theta_{e}}g_{\\theta_{e} r}
      -\\partial_{\\theta_{e}}g_{r \\theta_{e}}
      )
      =
      \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      \\Gamma^{\\theta_{e}}_{\\theta_{p} \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{p}}g_{\\theta_{e} \\theta_{e}}
      +\\partial_{\\theta_{e}}g_{\\theta_{e} \\theta_{p}}
      -\\partial_{\\theta_{e}}g_{\\theta_{p} \\theta_{e}}
      )
      =
      \\frac{1}{\\tan{\\left (\\theta_{p} \\right )}}
      \\\\

      \\Gamma^{\\theta_{e}}_{\\theta_{e} r}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{e}}g_{r \\theta_{e}}
      +\\partial_{r}g_{\\theta_{e} \\theta_{e}}
      -\\partial_{\\theta_{e}}g_{\\theta_{e} r}
      )
      =
      \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      \\Gamma^{\\theta_{e}}_{\\theta_{e} \\theta_{p}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{e}}g_{\\theta_{p} \\theta_{e}}
      +\\partial_{\\theta_{p}}g_{\\theta_{e} \\theta_{e}}
      -\\partial_{\\theta_{e}}g_{\\theta_{e} \\theta_{p}}
      )
      =
      \\frac{1}{\\tan{\\left (\\theta_{p} \\right )}}
      \\\\
      `,
      explanation: "These are the non-vanishing components of the christoffel symbols."
    },
    {
      //involves 256*(2*7+9*2)=8192 derivatives
      expression: `
      R_{\\mu \\nu \\;  \\rho}^{\\; \\; \\lambda}
      =?
      \\\\
      R^{\\beta_1}_{ \\; \\; \\gamma_1 \\gamma_2 \\gamma_3}
      =
      \\partial_{\\gamma_2}
      \\Gamma^{\\beta_1}_{\\gamma_3 \\gamma_1 }
      -
      \\partial_{\\gamma_3}
      \\Gamma^{\\beta_1}_{\\gamma_2 \\gamma_1 }
      +
      \\Gamma^{\\beta_1}_{\\gamma_2 \\alpha}
      \\Gamma^{\\alpha}_{\\gamma_3 \\gamma_1}
      -
      \\Gamma^{\\beta_1}_{\\alpha \\gamma_3}
      \\Gamma^{\\alpha}_{\\gamma_2 \\gamma_1}
      \\\\
      R^{\\beta_1}_{ \\; \\gamma_1 \\gamma_2 \\gamma_3} = -
      R^{\\beta_1}_{ \\; \\gamma_1 \\gamma_3 \\gamma_2}
      \\\\
      \\partial_{\\gamma_2}
      \\Gamma^{\\beta_1}_{\\gamma_3 \\gamma_1 }
      -
      \\partial_{\\gamma_3}
      \\Gamma^{\\beta_1}_{\\gamma_2 \\gamma_1 }
      +
      \\Gamma^{\\beta_1}_{\\gamma_2 \\alpha}
      \\Gamma^{\\alpha}_{\\gamma_3 \\gamma_1}
      -
      \\Gamma^{\\beta_1}_{\\alpha \\gamma_3}
      \\Gamma^{\\alpha}_{\\gamma_2 \\gamma_1}
      =
      \\\\
      \\partial_{\\gamma_2}
      \\frac{1}{2}g^{\\beta_{1}\\beta_{1}}(
      \\partial_{\\gamma_{3}}g_{\\gamma_{1} \\beta_{1}}
      +\\partial_{\\gamma_{1}}g_{\\beta_{1} \\gamma_{3}}
      -\\partial_{\\beta_{1}}g_{\\gamma_{3} \\gamma_{1}}
      )
      -
      \\partial_{\\gamma_3}
      \\frac{1}{2}g^{\\beta_{1}\\beta_{1}}(
      \\partial_{\\gamma_{2}}g_{\\gamma_{1} \\beta_{1}}
      +\\partial_{\\gamma_{1}}g_{\\beta_{1} \\gamma_{2}}
      -\\partial_{\\beta_{1}}g_{\\gamma_{2} \\gamma_{1}}
      )
      \\\\
      +
      \\frac{1}{2}g^{\\beta_{1}\\beta_{1}}(
      \\partial_{\\gamma_{2}}g_{\\alpha \\beta_{1}}
      +\\partial_{\\alpha}g_{\\beta_{1} \\gamma_{2}}
      -\\partial_{\\beta_{1}}g_{\\gamma_{2} \\alpha}
      )
      \\frac{1}{2}g^{\\alpha\\alpha}(
      \\partial_{\\gamma_{3}}g_{\\gamma_{1} \\alpha}
      +\\partial_{\\gamma_{1}}g_{\\alpha \\gamma_{3}}
      -\\partial_{\\alpha}g_{\\gamma_{3} \\gamma_{1}}
      )
      \\\\
      -
      \\frac{1}{2}g^{\\beta_{1}\\beta_{1}}(
      \\partial_{\\alpha}g_{\\gamma_{3} \\beta_{1}}
      +\\partial_{\\gamma_{3}}g_{\\beta_{1} \\alpha}
      -\\partial_{\\beta_{1}}g_{\\alpha \\gamma_{3}}
      )
      \\frac{1}{2}g^{\\alpha\\alpha}(
      \\partial_{\\gamma_{2}}g_{\\gamma_{1} \\alpha}
      +\\partial_{\\gamma_{1}}g_{\\alpha \\gamma_{2}}
      -\\partial_{\\alpha}g_{\\gamma_{2} \\gamma_{1}}
      )
      \\\\
      R^{t}_{\\;\\;r t r}
      =
      - \\left(\\frac{d}{d r} A{\\left (r \\right )}\\right)^{2} + \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} B{\\left (r \\right )} - \\frac{d^{2}}{d r^{2}}  A{\\left (r \\right )}
      \\\\

      R^{t}_{\\;\\;r r t}
      =
      \\left(\\frac{d}{d r} A{\\left (r \\right )}\\right)^{2} - \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} B{\\left (r \\right )} + \\frac{d^{2}}{d r^{2}}  A{\\left (r \\right )}
      \\\\

      R^{t}_{\\;\\;\\theta_{p} t \\theta_{p}}
      =
      - e^{- 2 B{\\left (r \\right )} + 2 C{\\left (r \\right )}} \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      R^{t}_{\\;\\;\\theta_{p} \\theta_{p} t}
      =
      e^{- 2 B{\\left (r \\right )} + 2 C{\\left (r \\right )}} \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      R^{t}_{\\;\\;\\theta_{e} t \\theta_{e}}
      =
      - e^{- 2 B{\\left (r \\right )} + 2 C{\\left (r \\right )}} \\sin^{2}{\\left (\\theta_{p} \\right )} \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      R^{t}_{\\;\\;\\theta_{e} \\theta_{e} t}
      =
      e^{- 2 B{\\left (r \\right )} + 2 C{\\left (r \\right )}} \\sin^{2}{\\left (\\theta_{p} \\right )} \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      R^{r}_{\\;\\;t t r}
      =
      \\left(- \\left(\\frac{d}{d r} A{\\left (r \\right )}\\right)^{2} + \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} B{\\left (r \\right )} - \\frac{d^{2}}{d r^{2}}  A{\\left (r \\right )}\\right) e^{2 A{\\left (r \\right )} - 2 B{\\left (r \\right )}}
      \\\\

      R^{r}_{\\;\\;t r t}
      =
      \\left(\\left(\\frac{d}{d r} A{\\left (r \\right )}\\right)^{2} - \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} B{\\left (r \\right )} + \\frac{d^{2}}{d r^{2}}  A{\\left (r \\right )}\\right) e^{2 A{\\left (r \\right )} - 2 B{\\left (r \\right )}}
      \\\\

      R^{r}_{\\;\\;\\theta_{p} r \\theta_{p}}
      =
      \\left(\\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} - \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} - \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}\\right) e^{- 2 B{\\left (r \\right )} + 2 C{\\left (r \\right )}}
      \\\\

      R^{r}_{\\;\\;\\theta_{p} \\theta_{p} r}
      =
      \\left(- \\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} + \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} + \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}\\right) e^{- 2 B{\\left (r \\right )} + 2 C{\\left (r \\right )}}
      \\\\

      R^{r}_{\\;\\;\\theta_{e} r \\theta_{e}}
      =
      \\left(\\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} - \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} - \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}\\right) e^{- 2 B{\\left (r \\right )} + 2 C{\\left (r \\right )}} \\sin^{2}{\\left (\\theta_{p} \\right )}
      \\\\

      R^{r}_{\\;\\;\\theta_{e} \\theta_{e} r}
      =
      \\left(- \\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} + \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} + \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}\\right) e^{- 2 B{\\left (r \\right )} + 2 C{\\left (r \\right )}} \\sin^{2}{\\left (\\theta_{p} \\right )}
      \\\\

      R^{\\theta_{p}}_{\\;\\;t t \\theta_{p}}
      =
      - e^{2 A{\\left (r \\right )} - 2 B{\\left (r \\right )}} \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      R^{\\theta_{p}}_{\\;\\;t \\theta_{p} t}
      =
      e^{2 A{\\left (r \\right )} - 2 B{\\left (r \\right )}} \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      R^{\\theta_{p}}_{\\;\\;r r \\theta_{p}}
      =
      - \\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} + \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} + \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}
      \\\\

      R^{\\theta_{p}}_{\\;\\;r \\theta_{p} r}
      =
      \\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} - \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} - \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}
      \\\\

      R^{\\theta_{p}}_{\\;\\;\\theta_{e} \\theta_{p} \\theta_{e}}
      =
      \\sin^{2}{\\left (\\theta_{p} \\right )} - e^{- 2 B{\\left (r \\right )}} e^{2 C{\\left (r \\right )}} \\sin^{2}{\\left (\\theta_{p} \\right )} \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2}
      \\\\

      R^{\\theta_{p}}_{\\;\\;\\theta_{e} \\theta_{e} \\theta_{p}}
      =
      - \\sin^{2}{\\left (\\theta_{p} \\right )} + e^{- 2 B{\\left (r \\right )}} e^{2 C{\\left (r \\right )}} \\sin^{2}{\\left (\\theta_{p} \\right )} \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2}
      \\\\

      R^{\\theta_{e}}_{\\;\\;t t \\theta_{e}}
      =
      - e^{2 A{\\left (r \\right )} - 2 B{\\left (r \\right )}} \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      R^{\\theta_{e}}_{\\;\\;t \\theta_{e} t}
      =
      e^{2 A{\\left (r \\right )} - 2 B{\\left (r \\right )}} \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )}
      \\\\

      R^{\\theta_{e}}_{\\;\\;r r \\theta_{e}}
      =
      - \\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} + \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} + \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}
      \\\\

      R^{\\theta_{e}}_{\\;\\;r \\theta_{e} r}
      =
      \\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} - \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} - \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}
      \\\\

      R^{\\theta_{e}}_{\\;\\;\\theta_{p} \\theta_{p} \\theta_{e}}
      =
      -1 + e^{- 2 B{\\left (r \\right )}} e^{2 C{\\left (r \\right )}} \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2}
      \\\\

      R^{\\theta_{e}}_{\\;\\;\\theta_{p} \\theta_{e} \\theta_{p}}
      =
      1 - e^{- 2 B{\\left (r \\right )}} e^{2 C{\\left (r \\right )}} \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2}
      \\\\

      `,
      explanation: "equation 3.67 from carrol's notes, different anti-symmetry relation, we can see from inspection that it holds in our case."
    },
    {
      expression: `
      R_{\\mu \\nu} = R^{\\lambda}_{\\; \\; \\mu \\lambda \\nu}
      \\\\
      R^{\\beta_1}_{ \\; \\; \\gamma_1 \\beta_1 \\gamma_2}
      =
      \\partial_{\\beta_1}
      \\Gamma^{\\beta_1}_{\\gamma_2 \\gamma_1 }
      -
      \\partial_{\\gamma_2}
      \\Gamma^{\\beta_1}_{\\beta_1 \\gamma_1 }
      +
      \\Gamma^{\\beta_1}_{\\beta_1 \\alpha}
      \\Gamma^{\\alpha}_{\\gamma_2 \\gamma_1}
      -
      \\Gamma^{\\beta_1}_{\\alpha \\gamma_2}
      \\Gamma^{\\alpha}_{\\beta_1 \\gamma_1}
      =
      \\\\
      \\partial_{\\beta_1}
      \\frac{1}{2}g^{\\beta_{1}\\beta_{1}}(
      \\partial_{\\gamma_{2}}g_{\\gamma_{1} \\beta_{1}}
      +\\partial_{\\gamma_{1}}g_{\\beta_{1} \\gamma_{2}}
      -\\partial_{\\beta_{1}}g_{\\gamma_{2} \\gamma_{1}}
      )
      -
      \\partial_{\\gamma_2}
      \\frac{1}{2}g^{\\beta_{1}\\beta_{1}}(
      \\partial_{\\beta_{1}}g_{\\gamma_{1} \\beta_{1}}
      +\\partial_{\\gamma_{1}}g_{\\beta_{1} \\beta_{1}}
      -\\partial_{\\beta_{1}}g_{\\beta_{1} \\gamma_{1}}
      )
      \\\\
      +
      \\frac{1}{2}g^{\\beta_{1}\\beta_{1}}(
      \\partial_{\\beta_{1}}g_{\\alpha \\beta_{1}}
      +\\partial_{\\alpha}g_{\\beta_{1} \\beta_{1}}
      -\\partial_{\\beta_{1}}g_{\\beta_{1} \\alpha}
      )
      \\frac{1}{2}g^{\\alpha\\alpha}(
      \\partial_{\\gamma_{2}}g_{\\gamma_{1} \\alpha}
      +\\partial_{\\gamma_{1}}g_{\\alpha \\gamma_{2}}
      -\\partial_{\\alpha}g_{\\gamma_{2} \\gamma_{1}}
      )
      \\\\
      -
      \\frac{1}{2}g^{\\beta_{1}\\beta_{1}}(
      \\partial_{\\alpha}g_{\\gamma_{2} \\beta_{1}}
      +\\partial_{\\gamma_{2}}g_{\\beta_{1} \\alpha}
      -\\partial_{\\beta_{1}}g_{\\alpha \\gamma_{2}}
      )
      \\frac{1}{2}g^{\\alpha\\alpha}(
      \\partial_{\\beta_{1}}g_{\\gamma_{1} \\alpha}
      +\\partial_{\\gamma_{1}}g_{\\alpha \\beta_{1}}
      -\\partial_{\\alpha}g_{\\beta_{1} \\gamma_{1}}
      )
      \\\\
      R_{t t}
      =
      \\left(\\left(\\frac{d}{d r} A{\\left (r \\right )}\\right)^{2} - \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} B{\\left (r \\right )} + 2 \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} + \\frac{d^{2}}{d r^{2}}  A{\\left (r \\right )}\\right) e^{2 A{\\left (r \\right )} - 2 B{\\left (r \\right )}}
      \\\\

      R_{r r}
      =
      - \\left(\\frac{d}{d r} A{\\left (r \\right )}\\right)^{2} + \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} B{\\left (r \\right )} + 2 \\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} - 2 \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} - \\frac{d^{2}}{d r^{2}}  A{\\left (r \\right )} - 2 \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}
      \\\\

      R_{\\theta_{p} \\theta_{p}}
      =
      \\left(e^{2 B{\\left (r \\right )}} - e^{2 C{\\left (r \\right )}} \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} + e^{2 C{\\left (r \\right )}} \\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} - 2 e^{2 C{\\left (r \\right )}} \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} - e^{2 C{\\left (r \\right )}} \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}\\right) e^{- 2 B{\\left (r \\right )}}
      \\\\

      R_{\\theta_{e} \\theta_{e}}
      =
      \\left(e^{2 B{\\left (r \\right )}} - e^{2 C{\\left (r \\right )}} \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} + e^{2 C{\\left (r \\right )}} \\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} - 2 e^{2 C{\\left (r \\right )}} \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} - e^{2 C{\\left (r \\right )}} \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}\\right) e^{- 2 B{\\left (r \\right )}} \\sin^{2}{\\left (\\theta_{p} \\right )}
      \\\\
      `,
      explanation: "equation 3.90 from carrols notes, we see only diagonal terms in this tensor."
    },
    {
      expression: `
      R = g^{\\mu \\nu} R^{\\; \\; \\lambda}_{\\mu \\lambda \\nu}
      =
      2 \\left(\\left(- \\left(\\frac{d}{d r} A{\\left (r \\right )}\\right)^{2} + \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} B{\\left (r \\right )} - 2 \\frac{d}{d r} A{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )} + 2 \\frac{d}{d r} B{\\left (r \\right )} \\frac{d}{d r} C{\\left (r \\right )}
        \\\\
        - 3 \\left(\\frac{d}{d r} C{\\left (r \\right )}\\right)^{2} - \\frac{d^{2}}{d r^{2}}  A{\\left (r \\right )} - 2 \\frac{d^{2}}{d r^{2}}  C{\\left (r \\right )}\\right) e^{2 C{\\left (r \\right )}} + e^{2 B{\\left (r \\right )}}\\right) e^{- 2 B{\\left (r \\right )} - 2 C{\\left (r \\right )}}
      `,
      explanation: "equation 3.92, quite a hefty expression."
    },
    {
      //given killing vectors are upper indexed
      expression: `
      \\mathcal{L}_{k}g_{\\mu \\nu} = 0
      \\\\
      \\mathcal{L}_{k}g_{\\mu \\nu} = \\nabla_{\\mu}k_{\\nu} + \\nabla_{\\nu}k_{\\mu}
      \\\\
      \\nabla_{\\mu}k_{\\nu} =
      \\partial_{\\mu} k_{\\nu}
      - \\Gamma_{\\mu \\nu}^{\\alpha} k_{\\alpha}
      `,
      explanation: "eq5.41, eq5.33 and eq3.12 from carrol"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
