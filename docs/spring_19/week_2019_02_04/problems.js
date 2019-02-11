var problems = [
// homework 12 from dr. rodgers class
  {
    location:`NA`,
    description:"consider the electro-magnetic potential as a set of functions $&A_\\mu&$ and the electro-magnetic field $&F_{\\mu \\nu} = 2(\\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu)&$",
    steps:[
    {
      expression: `
      A_\\mu' = A_\\mu+\\partial_\\mu \\alpha
      \\\\
      F_{\\mu \\nu}' =
      2(\\partial_\\mu A_\\nu' - \\partial_\\nu A_\\mu')
      = 2(
        \\partial_\\mu (A_\\nu+\\partial_\\nu \\alpha)
        - \\partial_\\nu (A_\\mu+\\partial_\\mu \\alpha))
      \\\\
      = 2(
        \\partial_\\mu A_\\nu
        +\\partial_\\mu \\partial_\\nu \\alpha
        - \\partial_\\nu A_\\mu
        - \\partial_\\nu \\partial_\\mu \\alpha)
      \\\\
      = 2(
        \\partial_\\mu A_\\nu
        - \\partial_\\nu A_\\mu
        +\\partial_\\mu \\partial_\\nu \\alpha
        - \\partial_\\nu \\partial_\\mu \\alpha
        )=F_{\\mu \\nu}+0
      \\\\
      `,
      explanation: "The electro-magnetic field is unchanged by the this transformation."
    },
    {
      expression: `
      \\epsilon_{ijk} = \\pm 1 (even/odd \\ permutations)
      \\\\
      \\epsilon_{imn}\\epsilon^{jmn}=f(i,j,m,n)
      \\\\
      i=m, i=n, j=m, j=n \\rightarrow f= 0
      \\\\
      i \\neq j \\rightarrow i = (n||m) \\ ||\\  j = (n||m) \\rightarrow f=0
      \\\\
      i = j \\rightarrow f= 1-1+1 =1
      \\\\
      \\therefore \\epsilon_{imn}\\epsilon^{jmn} = \\delta^{j}_i
      `,
      explanation: "pairs of levi civita tensors can compact to delta functions."
    },
    {
      expression: `
      J^\\mu = (\\rho, J^i)
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\epsilon_{\\alpha_1 \\alpha_2 \\alpha_3 \\gamma}
      \\epsilon^{\\beta_1 \\beta_2 \\beta_3 \\gamma}
      =-6
      \\delta^{\\beta_1}_{[\\alpha_1}
      \\delta^{\\beta_2}_{\\alpha_2}
      \\delta^{\\beta_3}_{\\alpha_3]}
      `,
      explanation: "NA"
    },
    {
      expression: `
      T_{\\mu \\nu}
      \\equiv
      \\frac{1}{4\\pi}(
        F_{\\mu \\alpha_1} F^{\\alpha_1}_{\\nu}
        +
        \\frac{1}{4}\\eta_{\\mu \\nu}
        F_{\\alpha_1 \\alpha_3} F^{\\alpha_1 \\alpha_3}
        )
      \\\\
      T_{\\mu \\nu}- T_{\\nu \\mu}
      =
      \\frac{1}{4\\pi}(
        F_{\\mu \\alpha_1} F^{\\alpha_1}_{\\nu}
        +
        \\frac{1}{4}\\eta_{\\mu \\nu}
        F_{\\alpha_1 \\alpha_3} F^{\\alpha_1 \\alpha_3}
        -F_{\\nu \\alpha_1} F^{\\alpha_1}_{\\mu}
        -
        \\frac{1}{4}\\eta_{\\nu \\mu}
        F_{\\alpha_1 \\alpha_3} F^{\\alpha_1 \\alpha_3}
        )
      \\\\
      =
      \\frac{1}{4\\pi}(
        F_{\\mu \\alpha_1} F^{\\alpha_1}_{\\nu}
        -F_{\\nu \\alpha_1} F^{\\alpha_1}_{\\mu}
        +
        (\\frac{1}{4}\\eta_{\\mu \\nu}
        -
        \\frac{1}{4}\\eta_{\\nu \\mu})
        F_{\\alpha_1 \\alpha_3} F^{\\alpha_1 \\alpha_3}
        )
      =
      \\frac{1}{4\\pi}(
        F_{\\mu \\alpha_1} F^{\\alpha_1}_{\\;\\;\\nu}
        -F_{\\nu \\alpha_1} F^{\\alpha_1}_{\\;\\;\\mu}
        )
      \\\\
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
    description:"suppose two tensors $&T^{\\mu \\nu}&$ and $&S^{\\mu}_{\\ \\nu}&$ show the following quantities are tensors of the indicated rank",
    steps:[
    {
      expression: `
      A^{\\mu \\nu}
      =
      \\phi T^{\\mu \\nu}
      +\\psi g^{\\alpha \\nu} S^{\\mu}_{\\ \\alpha}
      \\\\
      A'^{\\mu \\nu}
      =
      \\phi' T'^{\\mu \\nu}
      +\\psi' g'^{\\alpha \\nu} S'^{\\mu}_{\\ \\alpha}
      \\\\
      =
      \\phi
      \\frac{\\partial x'^{\\mu}}{\\partial x^{\\gamma} }
      \\frac{\\partial x'^{\\nu}}{\\partial x^{\\delta} }
      T^{\\gamma \\delta}
      +\\psi
      \\frac{\\partial x'^{\\alpha}}{\\partial x^{\\sigma} }
      \\frac{\\partial x'^{\\nu}}{\\partial x^{\\delta} }
      g^{\\sigma \\delta}
      \\frac{\\partial x^{\\beta} }{\\partial x'^{\\alpha}}
      \\frac{\\partial x'^{\\mu}}{\\partial x^{\\gamma} }
      S^{\\gamma}_{\\ \\beta}
      \\\\
      \\frac{\\partial x'^{\\alpha}}{\\partial x^{\\sigma} }
      \\frac{\\partial x^{\\beta} }{\\partial x'^{\\alpha}}
      =\\delta^{\\beta}_{\\sigma}
      \\\\
      A'^{\\mu \\nu}
      =
      \\phi
      \\frac{\\partial x'^{\\mu}}{\\partial x^{\\gamma} }
      \\frac{\\partial x'^{\\nu}}{\\partial x^{\\delta} }
      T^{\\gamma \\delta}
      +\\psi
      \\frac{\\partial x'^{\\mu}}{\\partial x^{\\gamma} }
      \\frac{\\partial x'^{\\nu}}{\\partial x^{\\delta} }
      g^{\\sigma \\delta}
      S^{\\gamma}_{\\ \\sigma}
      =
      \\\\
      \\frac{\\partial x'^{\\mu}}{\\partial x^{\\gamma} }
      \\frac{\\partial x'^{\\nu}}{\\partial x^{\\delta} }
      (
      \\phi
      T^{\\gamma \\delta}
      +\\psi
      g^{\\sigma \\delta}
      S^{\\gamma}_{\\ \\sigma}
        )
      =
      \\\\
      \\frac{\\partial x'^{\\mu}}{\\partial x^{\\gamma} }
      \\frac{\\partial x'^{\\nu}}{\\partial x^{\\delta} }
      (
      A^{\\gamma \\delta}
        )
      `,//'
      explanation: "addition of tensors multiplied by scalars are still tensors."
    },
    {
      expression: `
      B^{\\mu \\nu \\rho}_{\\ \\ \\ \\ \\ \\sigma}
      =T^{\\mu \\nu} S^{\\rho}_{\\ \\sigma}
      \\\\
      B'^{\\beta_1 \\beta_2 \\beta_3}_{\\ \\ \\ \\ \\ \\beta_4}
      =
      T'^{\\beta_1 \\beta_2}
      S'^{\\beta_3}_{\\ \\beta_4}
      =
      \\frac{\\partial x'^{\\beta_1}}{\\partial x^{\\alpha_1} }
      \\frac{\\partial x'^{\\beta_2}}{\\partial x^{\\alpha_2} }
      T^{\\alpha_1 \\alpha_2}
      \\frac{\\partial x'^{\\beta_3}}{\\partial x^{\\alpha_3} }
      \\frac{\\partial x^{\\alpha_4} }{\\partial x'^{\\beta_4}}
      S^{\\alpha_3}_{\\ \\alpha_4}
      =
      \\frac{\\partial x'^{\\beta_1}}{\\partial x^{\\alpha_1} }
      \\frac{\\partial x'^{\\beta_2}}{\\partial x^{\\alpha_2} }
      \\frac{\\partial x'^{\\beta_3}}{\\partial x^{\\alpha_3} }
      \\frac{\\partial x^{\\alpha_4} }{\\partial x'^{\\beta_4}}
      T^{\\alpha_1 \\alpha_2}
      S^{\\alpha_3}_{\\ \\alpha_4}
      \\\\
      =
      \\frac{\\partial x'^{\\beta_1}}{\\partial x^{\\alpha_1} }
      \\frac{\\partial x'^{\\beta_2}}{\\partial x^{\\alpha_2} }
      \\frac{\\partial x'^{\\beta_3}}{\\partial x^{\\alpha_3} }
      \\frac{\\partial x^{\\alpha_4} }{\\partial x'^{\\beta_4}}
      B^{\\alpha_1 \\alpha_2\\alpha_3}_{\\;\\;\\;\\;\\;\\;\\alpha_4}

      `,//'
      explanation: "outer product multiplication transforms as a tensor"
    },
    {
      expression: `
      C^{\\mu \\nu}=
      B^{\\mu  \\rho \\nu}_{\\ \\ \\ \\ \\ \\rho}
      =T^{\\mu \\rho} S^{\\nu}_{\\ \\rho}
      \\\\
      C'^{\\beta_1 \\beta_2}
      =
      T'^{\\beta_1 \\beta_3}
      S'^{\\beta_2}_{\\;\\;\\beta_3}
      \\\\
      =
      \\frac{\\partial x'^{\\beta_1}}{\\partial x^{\\alpha_1} }
      \\frac{\\partial x'^{\\beta_3}}{\\partial x^{\\alpha_4} }
      T^{\\alpha_1 \\alpha_4}
      \\frac{\\partial x'^{\\beta_2}}{\\partial x^{\\alpha_2} }
      \\frac{\\partial x^{\\alpha_3} }{\\partial x'^{\\beta_3}}
      S^{\\alpha_2}_{\\;\\;\\alpha_3}
      \\\\
      \\frac{\\partial x'^{\\beta_3}}{\\partial x^{\\alpha_4} }
      \\frac{\\partial x^{\\alpha_3} }{\\partial x'^{\\beta_3}}
      =\\delta^{\\alpha_4}_{\\alpha_3}
      \\\\
      C'^{\\beta_1 \\beta_2}
      =
      \\frac{\\partial x'^{\\beta_1}}{\\partial x^{\\alpha_1} }
      \\frac{\\partial x'^{\\beta_2}}{\\partial x^{\\alpha_2} }
      T^{\\alpha_1 \\alpha_3}
      S^{\\alpha_2}_{\\;\\;\\alpha_3}
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\nabla_{\\alpha_1} T^{\\alpha_2 \\alpha_3}
      =
      \\partial_{\\alpha_1} T^{\\alpha_2 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_2}
      T^{\\alpha_5 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
      T^{\\alpha_2 \\alpha_4}
      \\\\
      \\nabla_{\\beta_1} T^{\\beta_2 \\beta_3}
      =
      \\partial_{\\beta_1} T^{\\beta_2 \\beta_3}
      +
      \\Gamma_{\\beta_1 \\beta_5}^{\\beta_2}
      T^{\\beta_5 \\beta_3}
      +
      \\Gamma_{\\beta_1 \\beta_4}^{\\beta_3}
      T^{\\beta_2 \\beta_4}
      \\\\
      =
      \\partial_{\\beta_1}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      T^{\\alpha_2 \\alpha_3}
      +
      \\Gamma_{\\beta_1 \\beta_4}^{\\beta_2}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\frac{\\partial x^{\\beta_4}}{\\partial x^{\\alpha_4}}
      T^{\\alpha_3 \\alpha_4}
      +
      \\Gamma_{\\beta_1 \\beta_5}^{\\beta_3}
      \\frac{\\partial x^{\\beta_5}}{\\partial x^{\\alpha_5}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      T^{\\alpha_5 \\alpha_2}
      \\\\
      =
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\partial_{\\alpha_1}
      T^{\\alpha_2 \\alpha_3}
      +
      (
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_2} \\partial x^{\\alpha_1}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      +
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_3} \\partial x^{\\alpha_1}}
      )
      T^{\\alpha_2 \\alpha_3}
      \\\\
      +
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_4}}{\\partial x^{\\beta_4}}
        \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
        \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_2}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_4}}{\\partial x^{\\beta_4}}
        \\frac{\\partial^2 \\beta_2}{
          \\partial x^{\\alpha_1}
          \\partial x^{\\alpha_4}
        }
        )
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\frac{\\partial x^{\\beta_4}}{\\partial x^{\\alpha_4}}
      T^{\\alpha_3 \\alpha_4}
      \\\\
      +
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_5}}{\\partial x^{\\beta_5}}
        \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
        \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_3}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_5}}{\\partial x^{\\beta_5}}
        \\frac{\\partial^2 \\beta_3}{
          \\partial x^{\\alpha_1}
          \\partial x^{\\alpha_5}
        }
        )
      \\frac{\\partial x^{\\beta_5}}{\\partial x^{\\alpha_5}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      T^{\\alpha_5 \\alpha_2}
      \\\\
      =
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\partial_{\\alpha_1}
      T^{\\alpha_2 \\alpha_3}
      +
      (
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_2} \\partial x^{\\alpha_1}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      +
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_3} \\partial x^{\\alpha_1}}
      )
      T^{\\alpha_2 \\alpha_3}
      \\\\
      +
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\beta_4}}{\\partial x^{\\alpha_4}}
        \\frac{\\partial x^{\\alpha_4}}{\\partial x^{\\beta_4}}
        \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
        \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_2}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\beta_4}}{\\partial x^{\\alpha_4}}
        \\frac{\\partial x^{\\alpha_4}}{\\partial x^{\\beta_4}}
        \\frac{\\partial^2 \\beta_2}{
          \\partial x^{\\alpha_1}
          \\partial x^{\\alpha_4}
        }
        )
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      T^{\\alpha_3 \\alpha_4}
      \\\\
      +
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_5}}{\\partial x^{\\beta_5}}
        \\frac{\\partial x^{\\beta_5}}{\\partial x^{\\alpha_5}}
        \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
        \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_3}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_5}}{\\partial x^{\\beta_5}}
        \\frac{\\partial x^{\\beta_5}}{\\partial x^{\\alpha_5}}
        \\frac{\\partial^2 \\beta_3}{
          \\partial x^{\\alpha_1}
          \\partial x^{\\alpha_5}
        }
        )
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      T^{\\alpha_5 \\alpha_2}
      \\\\
      =
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\partial_{\\alpha_1}
      T^{\\alpha_2 \\alpha_3}
      +
      (
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_2} \\partial x^{\\alpha_1}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      +
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_3} \\partial x^{\\alpha_1}}
      )
      T^{\\alpha_2 \\alpha_3}
      \\\\
      +
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        1
        \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
        \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_2}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        1
        \\frac{\\partial^2 \\beta_2}{
          \\partial x^{\\alpha_1}
          \\partial x^{\\alpha_4}
        }
        )
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      T^{\\alpha_3 \\alpha_4}
      \\\\
      +
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        1
        \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
        \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_3}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        1
        \\frac{\\partial^2 \\beta_3}{
          \\partial x^{\\alpha_1}
          \\partial x^{\\alpha_5}
        }
        )
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      T^{\\alpha_5 \\alpha_2}
      \\\\
      =
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\partial_{\\alpha_1}
      T^{\\alpha_2 \\alpha_3}
      +
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_2}
      T^{\\alpha_3 \\alpha_4}
      +
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_3}
      T^{\\alpha_5 \\alpha_2}
      \\\\
      +
      (
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_2} \\partial x^{\\alpha_1}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      +
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_3} \\partial x^{\\alpha_1}}
      )
      T^{\\alpha_2 \\alpha_3}
      \\\\
      -
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\frac{\\partial^2 \\beta_2}{
        \\partial x^{\\alpha_1}
        \\partial x^{\\alpha_4}
      }
      T^{\\alpha_3 \\alpha_4}
      -
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial^2 \\beta_3}{
        \\partial x^{\\alpha_1}
        \\partial x^{\\alpha_5}
      }
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      T^{\\alpha_5 \\alpha_2}
      \\\\
      =
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\partial_{\\alpha_1}
      T^{\\alpha_2 \\alpha_3}
      +
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_2}
      T^{\\alpha_3 \\alpha_4}
      +
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_3}
      T^{\\alpha_5 \\alpha_2}
      \\\\
      +
      (
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_2} \\partial x^{\\alpha_1}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      +
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_3} \\partial x^{\\alpha_1}}
      )
      T^{\\alpha_2 \\alpha_3}
      \\\\
      -
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial^2 \\beta_2}{
        \\partial x^{\\alpha_1}
        \\partial x^{\\alpha_3}
      }
      T^{\\alpha_2 \\alpha_3}
      -
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial^2 \\beta_3}{
        \\partial x^{\\alpha_1}
        \\partial x^{\\alpha_2}
      }
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_3}}
      T^{\\alpha_2 \\alpha_3}
      \\\\

      `,
      //eq 2.16 in carrol
      //eq 3.6 in carrol
      explanation: "NA"
    },
    {
      expression: `
      \\partial_{\\beta_1} T^{\\beta_2 \\beta_3}
      =
      \\\\
      \\partial_{\\beta_1}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      T^{\\alpha_2 \\alpha_3}
      =
      \\\\
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\partial_{\\alpha_1}(
            \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
            \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
            T^{\\alpha_2 \\alpha_3}
      )
      =
      \\\\
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      (
            \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
            \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
            \\partial_{\\alpha_1}
            T^{\\alpha_2 \\alpha_3}
            +
            \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
            \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_3}}
            T^{\\alpha_2 \\alpha_3}
            +
            \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
            \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_2}}
            T^{\\alpha_2 \\alpha_3}
      )
      =
      \\\\
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\partial_{\\alpha_1}
      T^{\\alpha_2 \\alpha_3}
      +(
            \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
            \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
            \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_3}}
            +
            \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
            \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
            \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_2}}
      )T^{\\alpha_2 \\alpha_3}

      `,
      explanation: "NA"
    },
    {
      expression: `
      \\Gamma_{\\beta_1 \\beta_5}^{\\beta_2}
      T^{\\beta_5 \\beta_3}
      =
      \\\\
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_5}}{\\partial x^{\\beta_5}}
        \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
        \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_2}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_5}}{\\partial x^{\\beta_5}}
        \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_5}}
      )
      \\frac{\\partial x^{\\beta_5}}{\\partial x^{\\alpha_5}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      T^{\\alpha_5 \\alpha_3}
      =
      \\\\
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_5}}{\\partial x^{\\beta_5}}
        \\frac{\\partial x^{\\beta_5}}{\\partial x^{\\alpha_5}}
        \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
        \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_2}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_5}}{\\partial x^{\\beta_5}}
        \\frac{\\partial x^{\\beta_5}}{\\partial x^{\\alpha_5}}
        \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_5}}
      )
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      T^{\\alpha_5 \\alpha_3}
      =
      \\\\
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        1
        \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
        \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_2}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        1
        \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_5}}
      )
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      T^{\\alpha_5 \\alpha_3}
      =
      \\\\
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_2}
      T^{\\alpha_5 \\alpha_3}
      -
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_5}}
      T^{\\alpha_5 \\alpha_3}
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\Gamma_{\\beta_1 \\beta_4}^{\\beta_3}
      T^{\\beta_2 \\beta_4}
      =
      \\\\
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_4}}{\\partial x^{\\beta_4}}
        \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
        \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_4}}{\\partial x^{\\beta_4}}
        \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_4}}
      )
      \\frac{\\partial x^{\\beta_4}}{\\partial x^{\\alpha_4}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      T^{\\alpha_2 \\alpha_4}
      =
      \\\\
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_4}}{\\partial x^{\\beta_4}}
        \\frac{\\partial x^{\\beta_4}}{\\partial x^{\\alpha_4}}
        \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
        \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        \\frac{\\partial x^{\\alpha_4}}{\\partial x^{\\beta_4}}
        \\frac{\\partial x^{\\beta_4}}{\\partial x^{\\alpha_4}}
        \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_4}}
      )
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      T^{\\alpha_2 \\alpha_4}
      =
      \\\\
      (
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        1
        \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
        \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
        -
        \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
        1
        \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_4}}
      )
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      T^{\\alpha_2 \\alpha_4}
      =
      \\\\
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
      T^{\\alpha_2 \\alpha_4}
      -
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_4}}
      T^{\\alpha_2 \\alpha_4}
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_3}}
      T^{\\alpha_2 \\alpha_3}
      -
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial^2 x^{\\beta_3}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_4}}
      T^{\\alpha_2 \\alpha_4}
      =0
      \\\\
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_2}}
      T^{\\alpha_2 \\alpha_3}
      -
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\frac{\\partial^2 x^{\\beta_2}}{\\partial x^{\\alpha_1}\\partial x^{\\alpha_5}}
      T^{\\alpha_5 \\alpha_3}
      = 0
      \\\\
      \\therefore
      \\nabla_{\\beta_1} T^{\\beta_2 \\beta_3}
      =
      \\frac{\\partial x^{\\alpha_1}}{\\partial x^{\\beta_1}}
      \\frac{\\partial x^{\\beta_2}}{\\partial x^{\\alpha_2}}
      \\frac{\\partial x^{\\beta_3}}{\\partial x^{\\alpha_3}}
      \\nabla_{\\alpha_1} T^{\\alpha_2 \\alpha_3}
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
