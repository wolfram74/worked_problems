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
      -e^{2A}dt^2+e^{2B}dr^2+e^{2C}(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)
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
      \\Gamma^{t}_{t t}=
      \\frac{1}{2}g^{tt}(
      \\partial_{t}g_{t t}
      +\\partial_{t}g_{t t}
      -\\partial_{t}g_{t t}
      ) = \\frac{1}{2}e^{-2A}(0+0-0)
      \\\\
      \\Gamma^{t}_{t r}=
      \\frac{1}{2}g^{tt}(
      \\partial_{t}g_{r t}
      +\\partial_{r}g_{t t}
      -\\partial_{t}g_{t r}
      ) = \\frac{1}{2}g^{tt}(0+2ae^{2A})
      \\\\
      \\Gamma^{t}_{t \\theta_{p}}=
      \\frac{1}{2}g^{tt}(
      \\partial_{t}g_{\\theta_{p} t}
      +\\partial_{\\theta_{p}}g_{t t}
      -\\partial_{t}g_{t \\theta_{p}}
      )=
      \\frac{1}{2}g^{tt}(
      0
      +\\partial_{\\theta_{p}}g_{t t}
      -0
      )
      \\\\
      \\Gamma^{t}_{t \\theta_{e}}=
      \\frac{1}{2}g^{tt}(
      \\partial_{t}g_{\\theta_{e} t}
      +\\partial_{\\theta_{e}}g_{t t}
      -\\partial_{t}g_{t \\theta_{e}}
      )
      \\\\
      \\Gamma^{t}_{r t}=
      \\frac{1}{2}g^{tt}(
      \\partial_{r}g_{t t}
      +\\partial_{t}g_{t r}
      -\\partial_{t}g_{r t}
      )
      \\\\
      \\Gamma^{t}_{r r}=
      \\frac{1}{2}g^{tt}(
      \\partial_{r}g_{r t}
      +\\partial_{r}g_{t r}
      -\\partial_{t}g_{r r}
      )
      \\\\
      \\Gamma^{t}_{r \\theta_{p}}=
      \\frac{1}{2}g^{tt}(
      \\partial_{r}g_{\\theta_{p} t}
      +\\partial_{\\theta_{p}}g_{t r}
      -\\partial_{t}g_{r \\theta_{p}}
      )
      \\\\
      \\Gamma^{t}_{r \\theta_{e}}=
      \\frac{1}{2}g^{tt}(
      \\partial_{r}g_{\\theta_{e} t}
      +\\partial_{\\theta_{e}}g_{t r}
      -\\partial_{t}g_{r \\theta_{e}}
      )
      \\\\
      \\Gamma^{t}_{\\theta_{p} t}=
      \\frac{1}{2}g^{tt}(
      \\partial_{\\theta_{p}}g_{t t}
      +\\partial_{t}g_{t \\theta_{p}}
      -\\partial_{t}g_{\\theta_{p} t}
      )
      \\\\
      \\Gamma^{t}_{\\theta_{p} r}=
      \\frac{1}{2}g^{tt}(
      \\partial_{\\theta_{p}}g_{r t}
      +\\partial_{r}g_{t \\theta_{p}}
      -\\partial_{t}g_{\\theta_{p} r}
      )
      \\\\
      \\Gamma^{t}_{\\theta_{p} \\theta_{p}}=
      \\frac{1}{2}g^{tt}(
      \\partial_{\\theta_{p}}g_{\\theta_{p} t}
      +\\partial_{\\theta_{p}}g_{t \\theta_{p}}
      -\\partial_{t}g_{\\theta_{p} \\theta_{p}}
      )
      \\\\
      \\Gamma^{t}_{\\theta_{p} \\theta_{e}}=
      \\frac{1}{2}g^{tt}(
      \\partial_{\\theta_{p}}g_{\\theta_{e} t}
      +\\partial_{\\theta_{e}}g_{t \\theta_{p}}
      -\\partial_{t}g_{\\theta_{p} \\theta_{e}}
      )
      \\\\
      \\Gamma^{t}_{\\theta_{e} t}=
      \\frac{1}{2}g^{tt}(
      \\partial_{\\theta_{e}}g_{t t}
      +\\partial_{t}g_{t \\theta_{e}}
      -\\partial_{t}g_{\\theta_{e} t}
      )
      \\\\
      \\Gamma^{t}_{\\theta_{e} r}=
      \\frac{1}{2}g^{tt}(
      \\partial_{\\theta_{e}}g_{r t}
      +\\partial_{r}g_{t \\theta_{e}}
      -\\partial_{t}g_{\\theta_{e} r}
      )
      \\\\
      \\Gamma^{t}_{\\theta_{e} \\theta_{p}}=
      \\frac{1}{2}g^{tt}(
      \\partial_{\\theta_{e}}g_{\\theta_{p} t}
      +\\partial_{\\theta_{p}}g_{t \\theta_{e}}
      -\\partial_{t}g_{\\theta_{e} \\theta_{p}}
      )
      \\\\
      \\Gamma^{t}_{\\theta_{e} \\theta_{e}}=
      \\frac{1}{2}g^{tt}(
      \\partial_{\\theta_{e}}g_{\\theta_{e} t}
      +\\partial_{\\theta_{e}}g_{t \\theta_{e}}
      -\\partial_{t}g_{\\theta_{e} \\theta_{e}}
      )
      \\\\
      \\Gamma^{r}_{t t}=
      \\frac{1}{2}g^{rr}(
      \\partial_{t}g_{t r}
      +\\partial_{t}g_{r t}
      -\\partial_{r}g_{t t}
      )
      \\\\
      \\Gamma^{r}_{t r}=
      \\frac{1}{2}g^{rr}(
      \\partial_{t}g_{r r}
      +\\partial_{r}g_{r t}
      -\\partial_{r}g_{t r}
      )
      \\\\
      \\Gamma^{r}_{t \\theta_{p}}=
      \\frac{1}{2}g^{rr}(
      \\partial_{t}g_{\\theta_{p} r}
      +\\partial_{\\theta_{p}}g_{r t}
      -\\partial_{r}g_{t \\theta_{p}}
      )
      \\\\
      \\Gamma^{r}_{t \\theta_{e}}=
      \\frac{1}{2}g^{rr}(
      \\partial_{t}g_{\\theta_{e} r}
      +\\partial_{\\theta_{e}}g_{r t}
      -\\partial_{r}g_{t \\theta_{e}}
      )
      \\\\
      \\Gamma^{r}_{r t}=
      \\frac{1}{2}g^{rr}(
      \\partial_{r}g_{t r}
      +\\partial_{t}g_{r r}
      -\\partial_{r}g_{r t}
      )
      \\\\
      \\Gamma^{r}_{r r}=
      \\frac{1}{2}g^{rr}(
      \\partial_{r}g_{r r}
      +\\partial_{r}g_{r r}
      -\\partial_{r}g_{r r}
      )
      \\\\
      \\Gamma^{r}_{r \\theta_{p}}=
      \\frac{1}{2}g^{rr}(
      \\partial_{r}g_{\\theta_{p} r}
      +\\partial_{\\theta_{p}}g_{r r}
      -\\partial_{r}g_{r \\theta_{p}}
      )
      \\\\
      \\Gamma^{r}_{r \\theta_{e}}=
      \\frac{1}{2}g^{rr}(
      \\partial_{r}g_{\\theta_{e} r}
      +\\partial_{\\theta_{e}}g_{r r}
      -\\partial_{r}g_{r \\theta_{e}}
      )
      \\\\
      \\Gamma^{r}_{\\theta_{p} t}=
      \\frac{1}{2}g^{rr}(
      \\partial_{\\theta_{p}}g_{t r}
      +\\partial_{t}g_{r \\theta_{p}}
      -\\partial_{r}g_{\\theta_{p} t}
      )
      \\\\
      \\Gamma^{r}_{\\theta_{p} r}=
      \\frac{1}{2}g^{rr}(
      \\partial_{\\theta_{p}}g_{r r}
      +\\partial_{r}g_{r \\theta_{p}}
      -\\partial_{r}g_{\\theta_{p} r}
      )
      \\\\
      \\Gamma^{r}_{\\theta_{p} \\theta_{p}}=
      \\frac{1}{2}g^{rr}(
      \\partial_{\\theta_{p}}g_{\\theta_{p} r}
      +\\partial_{\\theta_{p}}g_{r \\theta_{p}}
      -\\partial_{r}g_{\\theta_{p} \\theta_{p}}
      )
      \\\\
      \\Gamma^{r}_{\\theta_{p} \\theta_{e}}=
      \\frac{1}{2}g^{rr}(
      \\partial_{\\theta_{p}}g_{\\theta_{e} r}
      +\\partial_{\\theta_{e}}g_{r \\theta_{p}}
      -\\partial_{r}g_{\\theta_{p} \\theta_{e}}
      )
      \\\\
      \\Gamma^{r}_{\\theta_{e} t}=
      \\frac{1}{2}g^{rr}(
      \\partial_{\\theta_{e}}g_{t r}
      +\\partial_{t}g_{r \\theta_{e}}
      -\\partial_{r}g_{\\theta_{e} t}
      )
      \\\\
      \\Gamma^{r}_{\\theta_{e} r}=
      \\frac{1}{2}g^{rr}(
      \\partial_{\\theta_{e}}g_{r r}
      +\\partial_{r}g_{r \\theta_{e}}
      -\\partial_{r}g_{\\theta_{e} r}
      )
      \\\\
      \\Gamma^{r}_{\\theta_{e} \\theta_{p}}=
      \\frac{1}{2}g^{rr}(
      \\partial_{\\theta_{e}}g_{\\theta_{p} r}
      +\\partial_{\\theta_{p}}g_{r \\theta_{e}}
      -\\partial_{r}g_{\\theta_{e} \\theta_{p}}
      )
      \\\\
      \\Gamma^{r}_{\\theta_{e} \\theta_{e}}=
      \\frac{1}{2}g^{rr}(
      \\partial_{\\theta_{e}}g_{\\theta_{e} r}
      +\\partial_{\\theta_{e}}g_{r \\theta_{e}}
      -\\partial_{r}g_{\\theta_{e} \\theta_{e}}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{t t}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{t}g_{t \\theta_{p}}
      +\\partial_{t}g_{\\theta_{p} t}
      -\\partial_{\\theta_{p}}g_{t t}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{t r}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{t}g_{r \\theta_{p}}
      +\\partial_{r}g_{\\theta_{p} t}
      -\\partial_{\\theta_{p}}g_{t r}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{t \\theta_{p}}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{t}g_{\\theta_{p} \\theta_{p}}
      +\\partial_{\\theta_{p}}g_{\\theta_{p} t}
      -\\partial_{\\theta_{p}}g_{t \\theta_{p}}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{t \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{t}g_{\\theta_{e} \\theta_{p}}
      +\\partial_{\\theta_{e}}g_{\\theta_{p} t}
      -\\partial_{\\theta_{p}}g_{t \\theta_{e}}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{r t}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{r}g_{t \\theta_{p}}
      +\\partial_{t}g_{\\theta_{p} r}
      -\\partial_{\\theta_{p}}g_{r t}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{r r}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{r}g_{r \\theta_{p}}
      +\\partial_{r}g_{\\theta_{p} r}
      -\\partial_{\\theta_{p}}g_{r r}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{r \\theta_{p}}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{r}g_{\\theta_{p} \\theta_{p}}
      +\\partial_{\\theta_{p}}g_{\\theta_{p} r}
      -\\partial_{\\theta_{p}}g_{r \\theta_{p}}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{r \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{r}g_{\\theta_{e} \\theta_{p}}
      +\\partial_{\\theta_{e}}g_{\\theta_{p} r}
      -\\partial_{\\theta_{p}}g_{r \\theta_{e}}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{\\theta_{p} t}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{\\theta_{p}}g_{t \\theta_{p}}
      +\\partial_{t}g_{\\theta_{p} \\theta_{p}}
      -\\partial_{\\theta_{p}}g_{\\theta_{p} t}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{\\theta_{p} r}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{\\theta_{p}}g_{r \\theta_{p}}
      +\\partial_{r}g_{\\theta_{p} \\theta_{p}}
      -\\partial_{\\theta_{p}}g_{\\theta_{p} r}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{\\theta_{p} \\theta_{p}}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{\\theta_{p}}g_{\\theta_{p} \\theta_{p}}
      +\\partial_{\\theta_{p}}g_{\\theta_{p} \\theta_{p}}
      -\\partial_{\\theta_{p}}g_{\\theta_{p} \\theta_{p}}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{\\theta_{p} \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{\\theta_{p}}g_{\\theta_{e} \\theta_{p}}
      +\\partial_{\\theta_{e}}g_{\\theta_{p} \\theta_{p}}
      -\\partial_{\\theta_{p}}g_{\\theta_{p} \\theta_{e}}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{\\theta_{e} t}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{\\theta_{e}}g_{t \\theta_{p}}
      +\\partial_{t}g_{\\theta_{p} \\theta_{e}}
      -\\partial_{\\theta_{p}}g_{\\theta_{e} t}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{\\theta_{e} r}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{\\theta_{e}}g_{r \\theta_{p}}
      +\\partial_{r}g_{\\theta_{p} \\theta_{e}}
      -\\partial_{\\theta_{p}}g_{\\theta_{e} r}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{\\theta_{e} \\theta_{p}}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{\\theta_{e}}g_{\\theta_{p} \\theta_{p}}
      +\\partial_{\\theta_{p}}g_{\\theta_{p} \\theta_{e}}
      -\\partial_{\\theta_{p}}g_{\\theta_{e} \\theta_{p}}
      )
      \\\\
      \\Gamma^{\\theta_{p}}_{\\theta_{e} \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{p}\\theta_{p}}(
      \\partial_{\\theta_{e}}g_{\\theta_{e} \\theta_{p}}
      +\\partial_{\\theta_{e}}g_{\\theta_{p} \\theta_{e}}
      -\\partial_{\\theta_{p}}g_{\\theta_{e} \\theta_{e}}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{t t}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{t}g_{t \\theta_{e}}
      +\\partial_{t}g_{\\theta_{e} t}
      -\\partial_{\\theta_{e}}g_{t t}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{t r}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{t}g_{r \\theta_{e}}
      +\\partial_{r}g_{\\theta_{e} t}
      -\\partial_{\\theta_{e}}g_{t r}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{t \\theta_{p}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{t}g_{\\theta_{p} \\theta_{e}}
      +\\partial_{\\theta_{p}}g_{\\theta_{e} t}
      -\\partial_{\\theta_{e}}g_{t \\theta_{p}}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{t \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{t}g_{\\theta_{e} \\theta_{e}}
      +\\partial_{\\theta_{e}}g_{\\theta_{e} t}
      -\\partial_{\\theta_{e}}g_{t \\theta_{e}}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{r t}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{r}g_{t \\theta_{e}}
      +\\partial_{t}g_{\\theta_{e} r}
      -\\partial_{\\theta_{e}}g_{r t}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{r r}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{r}g_{r \\theta_{e}}
      +\\partial_{r}g_{\\theta_{e} r}
      -\\partial_{\\theta_{e}}g_{r r}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{r \\theta_{p}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{r}g_{\\theta_{p} \\theta_{e}}
      +\\partial_{\\theta_{p}}g_{\\theta_{e} r}
      -\\partial_{\\theta_{e}}g_{r \\theta_{p}}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{r \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{r}g_{\\theta_{e} \\theta_{e}}
      +\\partial_{\\theta_{e}}g_{\\theta_{e} r}
      -\\partial_{\\theta_{e}}g_{r \\theta_{e}}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{\\theta_{p} t}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{p}}g_{t \\theta_{e}}
      +\\partial_{t}g_{\\theta_{e} \\theta_{p}}
      -\\partial_{\\theta_{e}}g_{\\theta_{p} t}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{\\theta_{p} r}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{p}}g_{r \\theta_{e}}
      +\\partial_{r}g_{\\theta_{e} \\theta_{p}}
      -\\partial_{\\theta_{e}}g_{\\theta_{p} r}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{\\theta_{p} \\theta_{p}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{p}}g_{\\theta_{p} \\theta_{e}}
      +\\partial_{\\theta_{p}}g_{\\theta_{e} \\theta_{p}}
      -\\partial_{\\theta_{e}}g_{\\theta_{p} \\theta_{p}}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{\\theta_{p} \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{p}}g_{\\theta_{e} \\theta_{e}}
      +\\partial_{\\theta_{e}}g_{\\theta_{e} \\theta_{p}}
      -\\partial_{\\theta_{e}}g_{\\theta_{p} \\theta_{e}}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{\\theta_{e} t}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{e}}g_{t \\theta_{e}}
      +\\partial_{t}g_{\\theta_{e} \\theta_{e}}
      -\\partial_{\\theta_{e}}g_{\\theta_{e} t}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{\\theta_{e} r}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{e}}g_{r \\theta_{e}}
      +\\partial_{r}g_{\\theta_{e} \\theta_{e}}
      -\\partial_{\\theta_{e}}g_{\\theta_{e} r}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{\\theta_{e} \\theta_{p}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{e}}g_{\\theta_{p} \\theta_{e}}
      +\\partial_{\\theta_{p}}g_{\\theta_{e} \\theta_{e}}
      -\\partial_{\\theta_{e}}g_{\\theta_{e} \\theta_{p}}
      )
      \\\\
      \\Gamma^{\\theta_{e}}_{\\theta_{e} \\theta_{e}}=
      \\frac{1}{2}g^{\\theta_{e}\\theta_{e}}(
      \\partial_{\\theta_{e}}g_{\\theta_{e} \\theta_{e}}
      +\\partial_{\\theta_{e}}g_{\\theta_{e} \\theta_{e}}
      -\\partial_{\\theta_{e}}g_{\\theta_{e} \\theta_{e}}
      )
      \\\\

      `,
      explanation: "NA"
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
      `,
      explanation: "equation 3.67 from carrol's notes, different anti-symmetry relation"
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
      =
      `,
      explanation: "equation 3.90 from carrols notes"
    },
    {
      expression: `
      R = g^{\\mu \\nu} R^{\\; \\; \\lambda}_{\\mu \\lambda \\nu}
      `,
      explanation: "equation 3.92"
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
