var problems = [
// homework 12 from dr. rodgers class
  {
    location:`NA`,
    description:"consider the electro-magnetic potential as a set of functions $&A_\\mu&$ and the electro-magnetic field $&F_{\\mu \\nu} = 2(\\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu)&$",
    steps:[
    //part a
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
    //part b
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
      i = j \\rightarrow f= 1^2+(-1)^2=2
      \\\\
      \\therefore \\epsilon_{imn}\\epsilon^{jmn} = 2\\delta^{j}_i
      \\\\
      B^i =\\frac{1}{2}\\epsilon^{ijk}F_{jk}
      \\\\
      \\epsilon_{ijk}
      B^i =
      \\epsilon_{ijk}
      \\frac{1}{2}\\epsilon^{ijk}F_{jk}
      =\\frac{1}{2}2F_{jk}
      \\\\
      \\epsilon_{ijk}
      B^i = F_{jk}

      `,
      explanation: "pairs of levi civita tensors can compact to delta functions."
    },
    //part c.i
    {
      expression: `
      E^{i} = F^{0i},\\;\\;
      F_{ij} = \\epsilon_{ijk}B^{k},\\;\\;
      J^\\mu = (\\rho, J^i)
      \\\\
      \\nabla \\times \\vec V = \\epsilon^{ijk} \\partial_{j}V_k
      \\\\
      \\nabla \\cdot \\vec V = \\partial_{j}V^j
      \\\\
      \\partial_t \\vec V = \\partial_{0}V^i
      \\\\
      \\partial_\\nu F^{\\mu \\nu}
      =
      \\partial_0 F^{\\mu 0}
      +
      \\partial_i F^{\\mu i}
      \\\\
      =
      \\partial_0 F^{\\mu 0}
      +
      \\partial_i F^{0 i}
      +
      \\partial_i F^{j i}
      \\\\
      =
      4\\pi J^0
      + \\partial_0 F^{\\mu 0}
      + \\partial_i F^{j i}
      \\\\
      =
      4\\pi J^0
      + \\partial_0 F^{\\mu 0}
      + \\partial_i \\eta^{aj}\\eta^{bi}\\epsilon_{abk}B^{k}
      \\\\
      =
      4\\pi J^0
      + \\partial_0 F^{\\mu 0}
      + \\partial_i \\eta^{aj}\\eta^{bi}\\eta^{ck}\\epsilon_{abk}B_{c}
      \\\\
      =
      4\\pi J^0
      - \\partial_0 F^{ 0 \\mu}
      + \\partial_i \\epsilon^{jic}B_{c}
      =
      4\\pi J^0
      + 4\\pi J^c
      =4\\pi J^{\\mu}
      `,
      explanation: "compressing the source terms for maxwells equations to tensor form"
    },//maxwell's equations taken from 1.74 in carroll
    // part c.ii
    {
      expression: `
      \\epsilon^{\\mu \\nu \\rho \\sigma}
      \\partial_{\\nu}F_{\\rho \\sigma}
      =
      \\epsilon^{a_1 0 a_2 a_3}
      \\partial_{0}F_{a_2 a_3}
      +
      \\epsilon^{b_1 b_2 0 b_3}
      \\partial_{b_2}F_{0 b_3}
      +
      \\epsilon^{c_1 c_2 c_3 0}
      \\partial_{c_2}F_{c_3 0}
      +
      \\epsilon^{0 d_1 d_2 d_3}
      \\partial_{d_1}F_{d_2 d_3}
      \\\\
      =
      -
      \\epsilon^{0 a_1 a_2 a_3}
      \\partial_{0}F_{a_2 a_3}
      +
      \\epsilon^{0 b_1 b_2 b_3}
      \\partial_{b_2}F_{0 b_3}
      -
      \\epsilon^{0 c_1 c_2 c_3}
      \\partial_{c_2}F_{c_3 0}
      +
      \\epsilon^{0 d_1 d_2 d_3}
      \\partial_{d_1}F_{d_2 d_3}
      \\\\
      =
      -
      \\epsilon^{0 a_1 a_2 a_3}
      \\partial_{0}F_{a_2 a_3}
      +
      \\epsilon^{0 b_1 b_2 b_3}
      \\partial_{b_2}F_{0 b_3}
      +
      \\epsilon^{0 c_1 c_2 c_3}
      \\partial_{c_2}F_{0 c_3}
      +
      \\epsilon^{0 d_1 d_2 d_3}
      \\partial_{d_1}F_{d_2 d_3}
      \\\\
      =
      \\epsilon^{a_1 a_2 a_3}
      \\partial_{0}F_{a_2 a_3}
      -
      \\epsilon^{ b_1 b_2 b_3}
      \\partial_{b_2}F_{0 b_3}
      -
      \\epsilon^{c_1 c_2 c_3}
      \\partial_{c_2}F_{0 c_3}
      -
      \\epsilon^{d_1 d_2 d_3}
      \\partial_{d_1}F_{d_2 d_3}
      \\\\
      =
      2
      \\partial_{0}B_{a_1}
      -
      2
      \\epsilon^{ b_1 b_2 b_3}
      \\partial_{b_2}E_{b_3}
      -
      2
      \\partial_{d_1}B^{d_2}
      \\\\
      =
      2(0)
      -
      2
      (0)

      `,
      explanation: "NA"
    },
    //part d.i
    {
      expression: `
      \\epsilon_{\\alpha_1 \\alpha_2 \\alpha_3 \\gamma}
      \\epsilon^{\\beta_1 \\beta_2 \\beta_3 \\gamma}
      =-6
      \\delta^{\\beta_1}_{[\\alpha_1}
      \\delta^{\\beta_2}_{\\alpha_2}
      \\delta^{\\beta_3}_{\\alpha_3]}
      \\\\
      \\epsilon^{\\beta_1 \\beta_2 \\beta_3 \\gamma}
      \\partial_{\\beta_1}
      F_{\\beta_2 \\beta_3}=0
      \\\\
      \\epsilon_{\\alpha_1 \\alpha_2 \\alpha_3 \\gamma}
      \\epsilon^{\\beta_1 \\beta_2 \\beta_3 \\gamma}
      \\partial_{\\beta_1}
      F_{\\beta_2 \\beta_3}=0
      \\\\
      -6
      \\delta^{\\beta_1}_{[\\alpha_1}
      \\delta^{\\beta_2}_{\\alpha_2}
      \\delta^{\\beta_3}_{\\alpha_3]}
      \\partial_{\\beta_1}
      F_{\\beta_2 \\beta_3}=0
      \\\\
      -6
      \\partial_{[\\alpha_1}
      F_{\\alpha_2 \\alpha_3]}=0

      `,
      explanation: "Another form for the bianchi identity part of maxwell's equations."
    },
    //part d.ii
    {
      expression: `
      \\partial_{[\\beta_1}
      F_{\\beta_2 \\beta_3]}
      =
      \\frac{1}{6}
      \\epsilon^{\\alpha_1 \\alpha_2 \\alpha_3 \\gamma_1}
      \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\gamma_1}
      \\partial_{\\alpha_1}
      F_{\\alpha_2 \\alpha_3}
      \\\\
      =
      \\frac{1}{12}
      \\epsilon^{\\alpha_1 \\alpha_2 \\alpha_3 \\sigma_1}
      \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
      \\epsilon^{\\gamma_2 \\gamma_3 \\sigma_2 \\sigma_3}
      \\epsilon_{\\alpha_2 \\alpha_3 \\sigma_2 \\sigma_3}
      \\partial_{\\alpha_1}
      \\partial_{\\gamma_2}
      A_{\\gamma_3}
      \\\\
      =
      \\frac{1}{12}
      \\epsilon^{\\alpha_1 \\alpha_2 \\alpha_3 \\sigma_1}
      \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
      (
        \\partial_{\\alpha_1}
        \\partial_{\\alpha_2}
        A_{\\alpha_3}
        -
        \\partial_{\\alpha_1}
        \\partial_{\\alpha_3}
        A_{\\alpha_2}
      )
      \\\\
      =
      \\frac{1}{24}
      \\epsilon^{\\alpha_1 \\alpha_2 \\alpha_3 \\sigma_1}
      \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
      (
        \\partial_{\\alpha_1}
        \\partial_{\\alpha_2}
        A_{\\alpha_3}
        -
        \\partial_{\\alpha_1}
        \\partial_{\\alpha_3}
        A_{\\alpha_2}
        +
        \\partial_{\\alpha_2}
        \\partial_{\\alpha_1}
        A_{\\alpha_3}
        -
        \\partial_{\\alpha_3}
        \\partial_{\\alpha_1}
        A_{\\alpha_2}
      )
      \\\\
      =
      \\frac{1}{24}
      (
        (
          \\epsilon^{\\alpha_1 \\alpha_2 \\alpha_3 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
          -
          \\epsilon^{\\alpha_2 \\alpha_1 \\alpha_3 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
        )
        \\partial_{\\alpha_1}
        \\partial_{\\alpha_2}
        A_{\\alpha_3}
        -
        (
          \\epsilon^{\\alpha_1 \\alpha_2 \\alpha_3 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
          -
          \\epsilon^{ \\alpha_3 \\alpha_2 \\alpha_1 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
        )
          \\partial_{\\alpha_1}
          \\partial_{\\alpha_3}
          A_{\\alpha_2}
      )

      \\\\
      =
      \\frac{1}{24}
      (
        (
          \\epsilon^{\\alpha_1 \\alpha_2 \\alpha_3 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
          -
          \\epsilon^{\\alpha_2 \\alpha_1 \\alpha_3 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
        )
        \\partial_{\\alpha_1}
        \\partial_{\\alpha_2}
        A_{\\alpha_3}
        -
        (
          -
          \\epsilon^{\\alpha_1 \\alpha_3 \\alpha_2 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
          +
          \\epsilon^{  \\alpha_2 \\alpha_3\\alpha_1 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
        )
          \\partial_{\\alpha_1}
          \\partial_{\\alpha_2}
          A_{\\alpha_3}
      )
      \\\\
      =
      \\frac{1}{24}
      (
        (
          \\epsilon^{\\alpha_1 \\alpha_2 \\alpha_3 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
          +
          \\epsilon^{\\alpha_1 \\alpha_3 \\alpha_2 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
          -
          \\epsilon^{\\alpha_2 \\alpha_1 \\alpha_3 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
          -
          \\epsilon^{  \\alpha_2 \\alpha_3\\alpha_1 \\sigma_1}
          \\epsilon_{\\beta_1 \\beta_2 \\beta_3 \\sigma_1}
        )
          \\partial_{\\alpha_1}
          \\partial_{\\alpha_2}
          A_{\\alpha_3}
      )
      \\\\
      \\frac{1}{24}
      (0-0)
      \\partial_{\\alpha_1}
      \\partial_{\\alpha_2}
      A_{\\alpha_3}
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
      (T_{\\mu \\nu}- T_{\\nu \\mu})\\eta_{\\alpha_1 \\alpha_2}
      =
      \\frac{1}{4\\pi}(
        F_{\\mu \\alpha_1}
        F^{\\alpha_1}_{\\;\\;\\nu}
        \\eta_{\\alpha_1 \\alpha_2}
        -F_{\\nu \\alpha_1}
        F^{\\alpha_1}_{\\;\\;\\mu}
        \\eta_{\\alpha_1 \\alpha_2}
        )
      \\\\
      =
      \\frac{1}{4\\pi}(
        F_{\\mu \\alpha_1}
        F_{\\alpha_2 \\nu}
        -F_{\\nu \\alpha_1}
        F_{\\alpha_2 \\mu}
        )
      \\\\
      =
      \\frac{1}{4\\pi}(
        2\\partial_{[\\mu}A_{\\alpha_1]}
        2\\partial_{[\\alpha_2}A_{\\nu]}
        -
        2\\partial_{[\\nu}A_{\\alpha_1]}
        2\\partial_{[\\alpha_2}A_{\\mu]}
        )
      \\\\
      =
      \\frac{1}{\\pi}(
        (
          \\partial_{\\mu}A_{\\alpha_1}
          -\\partial_{\\alpha_1}A_{\\mu}
        )
        (
          \\partial_{\\alpha_2}A_{\\nu}
          -\\partial_{\\nu}A_{\\alpha_2}
        )
        -
        (
          \\partial_{\\nu}A_{\\alpha_1}
          -\\partial_{\\alpha_1}A_{\\nu}
        )
        (
          \\partial_{\\alpha_2}A_{\\mu}
          -\\partial_{\\mu}A_{\\alpha_2}
        )
        )
      \\\\
      =
      \\frac{1}{\\pi}(
        (
          \\partial_{\\mu}A_{\\alpha_1}
          \\partial_{\\alpha_2}A_{\\nu}
          -
          \\partial_{\\mu}A_{\\alpha_1}
          \\partial_{\\nu}A_{\\alpha_2}
          -
          \\partial_{\\alpha_1}A_{\\mu}
          \\partial_{\\alpha_2}A_{\\nu}
          +
          \\partial_{\\alpha_1}A_{\\mu}
          \\partial_{\\nu}A_{\\alpha_2}
        )
        \\\\
        -
        (
          \\partial_{\\nu}A_{\\alpha_1}
          \\partial_{\\alpha_2}A_{\\mu}
          -
          \\partial_{\\nu}A_{\\alpha_1}
          \\partial_{\\mu}A_{\\alpha_2}
          -
          \\partial_{\\alpha_1}A_{\\nu}
          \\partial_{\\alpha_2}A_{\\mu}
          +
          \\partial_{\\alpha_1}A_{\\nu}
          \\partial_{\\mu}A_{\\alpha_2}
        )
        )
      \\\\
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\partial^\\nu T_{\\mu \\nu}
      =
      \\partial^\\nu (
        F_{\\mu \\lambda} F^\\lambda_\\nu
        +\\frac{1}{4}\\eta_{\\mu \\nu}
        F_{\\rho \\lambda} F^{ \\rho \\lambda }
        )
      \\\\
      =
      (\\partial^\\nu F_{\\mu \\lambda}) F^\\lambda_\\nu
      +
      F_{\\mu \\lambda} (\\partial^\\nu F^\\lambda_\\nu)
      +\\frac{1}{4}

      (\\partial_\\mu F_{\\rho \\lambda} )
      F^{ \\rho \\lambda }
      +\\frac{1}{4}
      F_{\\rho \\lambda}
      (\\partial_\\mu F^{ \\rho \\lambda })

      \\\\
      =
      (\\partial_\\nu F_{\\mu \\lambda})
      F^{\\lambda \\nu}
      +
      (\\partial_\\nu F^{\\lambda \\nu})
      F_{\\mu \\lambda}
      +
      \\frac{1}{2}
      \\partial_\\mu F_{\\rho \\lambda}
      F^{ \\rho \\lambda }


      `,
      explanation: "NA"
    },
    {
      expression: `
      (1/3)(
        \\partial_{\\alpha}
        F_{\\beta \\gamma}
        +
        \\partial_{\\gamma}
        F_{\\alpha \\beta}
        +
        \\partial_{\\beta}
        F_{ \\gamma \\alpha}
        )=0
      \\\\
      F^{\\alpha \\beta}(
        \\partial_{\\alpha}
        F_{\\beta \\gamma}
        +
        \\partial_{\\gamma}
        F_{\\alpha \\beta}
        +
        \\partial_{\\beta}
        F_{ \\gamma \\alpha}
        )=0
      \\\\
      F^{\\alpha \\beta}(
        \\partial_{\\alpha}
        F_{\\beta \\gamma}
        +
        \\partial_{\\gamma}
        F_{\\alpha \\beta}
        -
        \\partial_{\\alpha}
        F_{ \\gamma \\beta}
        )=0
      \\\\
      F^{\\alpha \\beta}(
        \\partial_{\\alpha}
        F_{\\beta \\gamma}
        +
        \\partial_{\\gamma}
        F_{\\alpha \\beta}
        +
        \\partial_{\\alpha}
        F_{  \\beta \\gamma}
        )=0
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
      explanation: "Covariant derivatives of 2nd order tensors transform like tensors."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
