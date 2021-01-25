var problems = [

  {
    location:`NA`,
    description:"some identities regarding derivatives with the metric",
    steps:[
    {
      expression: `
      g^{-1} = det(g^{\\mu \\nu}),
      g = det(g_{\\mu \\nu})
      \\\\
      \\Gamma^\\mu_{\\mu \\nu}
      \\\\
      =
      \\frac{1}{2}g^{\\mu\\alpha_{1}}(
        \\partial_{\\mu}g_{\\nu \\alpha_{1}}
        +\\partial_{\\nu}g_{\\alpha_{1} \\mu}
        -\\partial_{\\alpha_{1}}g_{\\mu \\nu}
        )
      \\\\
      =
      \\frac{1}{2}g^{\\mu\\alpha_{1}}(
        \\partial_{\\mu}g_{\\nu \\alpha_{1}}
        -\\partial_{\\alpha_{1}}g_{\\mu \\nu}
        )
      +
      \\frac{1}{2}g^{\\mu\\alpha_{1}}
      \\partial_{\\nu}g_{\\alpha_{1} \\mu}
      \\\\
      =
      0
      +
      \\frac{1}{2}g^{\\mu\\alpha_{1}}
      \\partial_{\\nu}g_{\\alpha_{1} \\mu}
      =
      \\frac{1}{2}g^{\\mu\\alpha_{1}}
      \\partial_{\\nu}g_{\\mu \\alpha_{1}}
      \\\\
      =
      \\frac{1}{2}g^{\\mu\\alpha_{1}}
      \\partial_{\\nu} g_{\\mu \\alpha_{1}}
      \\\\
      =
      (-g)^{-1/2}
      \\partial_\\nu (-g)^{1/2}
      `,
      explanation: "by equation 4.63 in carrol we establish an identity for summing over the christoffel symbols"
    },
    {
      //5.33, 5.41
      //eq 3.12
      expression: `
      \\nabla_{(\\mu} k^\\nu) = \\nabla_\\mu k^\\nu + \\nabla_\\nu k^\\mu = 0
      \\\\
      \\partial_\\mu k^\\nu
      +
      \\Gamma_{\\mu \\lambda}^{\\nu} k^{\\lambda}
      +
      \\partial_\\nu k^\\mu
      +
      \\Gamma_{\\nu \\lambda}^{\\mu} k^{\\lambda}
      =0
      \\\\
      g^{\\mu \\nu} \\nabla_{(\\mu} k^\\nu)
      = 2 \\nabla_\\mu k^\\mu
      = 2 \\nabla_\\nu k^\\nu = 0
      \\\\
      \\partial_\\mu k^\\mu
      =
      -
      \\Gamma_{\\mu \\lambda}^{\\mu} k^{\\lambda}
      \\\\
      \\partial_{\\mu}((-g)^{1/2} k^\\mu)
      =
      \\partial_{\\mu}((-g)^{1/2})k^\\mu
      +
      (-g)^{1/2}
      \\partial_{\\mu}(k^\\mu)
      =
      \\\\
      (-g)^{1/2}
      \\Gamma^\\nu_{\\nu \\mu}
      k^\\mu
      +
      (-g)^{1/2}
      \\partial_{\\mu}(k^\\mu)
      =
      \\\\
      (-g)^{1/2}
      \\Gamma^\\nu_{\\nu \\mu}
      k^\\mu
      -
      (-g)^{1/2}
      \\Gamma_{\\mu \\lambda}^{\\mu} k^{\\lambda}
      =0
      `,
      explanation: "given the definition of a killing vector we establish a 2nd identity."
    },
    {
      expression: `
      \\nabla_{\\alpha_1} P^{\\alpha_2 \\alpha_3}
      =
      \\partial_{\\alpha_1} P^{\\alpha_2 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_2}
      P^{\\alpha_5 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
      P^{\\alpha_2 \\alpha_4}
      \\\\
      \\nabla_{\\alpha_1} P^{\\alpha_1 \\alpha_3}
      =
      \\partial_{\\alpha_1} P^{\\alpha_1 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_5}^{\\alpha_1}
      P^{\\alpha_5 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
      P^{\\alpha_1 \\alpha_4}
      \\\\

      \\nabla_{\\alpha_1} P^{\\alpha_1 \\alpha_3}
      =
      \\partial_{\\alpha_1} P^{\\alpha_1 \\alpha_3}
      +
      (-g)^{-1/2}
      \\partial_{\\alpha_5}( (-g)^{1/2})
      P^{\\alpha_5 \\alpha_3}
      +
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
      P^{\\alpha_1 \\alpha_4}
      \\\\
      (-g)^{-1/2}
      \\partial_{\\alpha_5}( (-g)^{1/2})
      P^{\\alpha_5 \\alpha_3}
      =
      (-g)^{-1/2}
      \\partial_{\\alpha_5} (
        (-g)^{1/2}
        P^{\\alpha_5 \\alpha_3}
      )
      -
      (-g)^{-1/2}
      \\partial_{\\alpha_5}
      (P^{\\alpha_5 \\alpha_3})
      (-g)^{1/2}
      \\\\
      (-g)^{-1/2}
      (-g)^{1/2}=1
      \\\\
      \\partial_{\\alpha_1} P^{\\alpha_1 \\alpha_3}
      -
      (-g)^{-1/2}
      \\partial_{\\alpha_5}
      (P^{\\alpha_5 \\alpha_3})
      (-g)^{1/2} = 0
      \\\\
      \\therefore
      \\nabla_{\\alpha_1} P^{\\alpha_1 \\alpha_3}
      =
      (-g)^{-1/2}
      \\partial_{\\alpha_5} (
        (-g)^{1/2}
        P^{\\alpha_5 \\alpha_3}
      )
      +
      \\Gamma_{\\alpha_1 \\alpha_4}^{\\alpha_3}
      P^{\\alpha_1 \\alpha_4}
      `,
      explanation: "We extract another identity"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    description:"Doing E&M in GR",//eq 7.107, 109
    steps:[
    {
      expression: `
      T_{\\mu \\nu} =
      \\frac{1}{4\\pi} (
        F_{\\mu \\alpha_1}
        F_{\\nu}^{\\;\\alpha_1}
        -\\frac{1}{4}
        g_{\\mu \\nu}
        F_{\\alpha_1 \\alpha_2}
        F^{\\alpha_1 \\alpha_2}
        )
      \\\\
      \\nabla_{\\mu} F_{\\mu \\sigma}=0
      \\\\
      \\nabla_{[\\mu} F_{\\nu \\rho]}=0
      `,
      explanation: "The minkowski metric is now replaced with the more general metric and the maxwell equation and the bianchi identity are not directly effected, but their derivatives are now metric dependent."
    },
    {
      expression: `
      S =
      \\frac{1}{16\\pi G}
      \\int d^4x (-g)^{1/2}R
      -
      \\frac{1}{4}
      \\int d^4x (-g)^{1/2}
      F_{\\alpha_1 \\alpha_2}
      F^{\\alpha_1 \\alpha_2}
      \\\\
      F_{\\alpha_1 \\alpha_2} = 2\\nabla_{[\\alpha_1}A_{\\alpha_2]}
      \\\\
      \\delta S_{M}
      =
      -
      \\frac{1}{4}
      \\int d^4x
      [
        +
        \\delta(
          (-g)^{1/2})
        F_{\\alpha_1 \\alpha_2}
        F^{\\alpha_1 \\alpha_2}
        +
        (-g)^{1/2}
        \\delta(
          F_{\\alpha_1 \\alpha_2})
        F^{\\alpha_1 \\alpha_2}
        +
        (-g)^{1/2}
        F_{\\alpha_1 \\alpha_2}
        \\delta(
          F^{\\alpha_1 \\alpha_2})
      ]
      \\\\
      \\delta((-g)^{1/2})_{A_\\mu} = 0
      \\\\
      \\delta(
        F_{\\alpha_1 \\alpha_2})
      F^{\\alpha_1 \\alpha_2}
      =
        F_{\\alpha_1 \\alpha_2}
        \\delta(
          F^{\\alpha_1 \\alpha_2})
      =
      \\delta(
        2\\nabla_{[\\alpha_1}A_{\\alpha_2]}
        )
      F^{\\alpha_1 \\alpha_2}
      \\\\
      =
      2\\delta(
        \\nabla_{\\alpha_1}A_{\\alpha_2}
        -
        \\nabla_{\\alpha_2}A_{\\alpha_1}
        )
      F^{\\alpha_1 \\alpha_2}
      \\\\
      =
      2(
        \\nabla_{\\alpha_1}\\delta A_{\\alpha_2}
        -
        \\nabla_{\\alpha_2}\\delta A_{\\alpha_1}
        )
      F^{\\alpha_1 \\alpha_2}
      \\\\
      \\delta S_{M}
      =
      -
      \\int d^4x
      [
      (-g)^{1/2}
      (
        \\nabla_{\\alpha_1}\\delta A_{\\alpha_2}
        -
        \\nabla_{\\alpha_2}\\delta A_{\\alpha_1}
        )
      F^{\\alpha_1 \\alpha_2}
      ]
      \\\\
      \\nabla_{\\alpha_1}(\\delta A_{\\alpha_2})F^{\\alpha_1 \\alpha_2}
      =
      \\nabla_{\\alpha_1}(\\delta A_{\\alpha_2} F^{\\alpha_1 \\alpha_2})
      -
      \\nabla_{\\alpha_1}(F^{\\alpha_1 \\alpha_2})\\delta A_{\\alpha_2}
      \\\\
      \\nabla_{\\alpha_1}\\delta A_{\\alpha_2}
      -
      \\nabla_{\\alpha_2}\\delta A_{\\alpha_1}
      =
      2\\nabla_{\\alpha_1}\\delta A_{\\alpha_2}
      \\\\
      \\delta S_{M}
      =
      -
      \\int d^4x
      [
      2(-g)^{1/2}
      (
        \\nabla_{\\alpha_1}(\\delta A_{\\alpha_2} F^{\\alpha_1 \\alpha_2})
        -
        \\nabla_{\\alpha_1}(F^{\\alpha_1 \\alpha_2})\\delta A_{\\alpha_2}
        )
      ]
      \\\\
      =
      \\int d^4x
      [
      (-g)^{1/2}
      \\nabla_{\\alpha_1}(F^{\\alpha_1 \\alpha_2})\\delta A_{\\alpha_2}
      ]
      -
      \\int d^4x
      [
      (-g)^{1/2}
      \\nabla_{\\alpha_1}(\\delta A_{\\alpha_2} F^{\\alpha_1 \\alpha_2})
      ]
      \\\\
      \\int d^4x
      [
      (-g)^{1/2}
      \\nabla_{\\alpha_1}(\\delta A_{\\alpha_2} F^{\\alpha_1 \\alpha_2})
      ] = 0
      \\\\
      \\delta S_{M} = 0 \\iff \\nabla_{\\alpha_1}(F^{\\alpha_1 \\alpha_2})=0
      `,
      explanation: "The maxwell equation comes out from varying the action with respect to the vector potential."
    },
    {
      expression: `
      \\delta S_{M}
      =
      -
      \\frac{1}{4}
      \\int d^4x
      [
        +
        \\delta(
          (-g)^{1/2})
        F_{\\alpha_1 \\alpha_2}
        F^{\\alpha_1 \\alpha_2}
        +
        (-g)^{1/2}
        \\delta(
          F_{\\alpha_1 \\alpha_2})
        F^{\\alpha_1 \\alpha_2}
        +
        (-g)^{1/2}
        F_{\\alpha_1 \\alpha_2}
        \\delta(
          F^{\\alpha_1 \\alpha_2})
      ]
      \\\\
      \\delta(
          F_{\\alpha_1 \\alpha_2})_{g^{\\alpha_1 \\alpha_2}} = 0
      \\\\
      \\delta(
        (-g)^{1/2})
      =
      \\delta(
        (-g^{-1})^{-1/2})
      =
      \\frac{1}{2}
      (-g^{-1})^{-3/2}
      \\delta(
        (g^{-1}))
      =
      \\frac{1}{2}
      (-g)^{1/2}
      (-g)^{1}
      \\delta(
        (g^{-1}))
      \\\\
      =
      \\frac{1}{2}
      (-g)^{1/2}
      (-g)^{1}
      g^{-1}
      g_{\\beta_1 \\beta_2}
      \\delta(
        (g^{\\beta_1 \\beta_2}))
      =
      \\frac{1}{2}
      (-g)^{1/2}
      g_{\\beta_1 \\beta_2}
      \\delta(
        (g^{\\beta_1 \\beta_2}))
      \\\\
      \\delta(
        F^{\\alpha_1 \\alpha_2})
      =
      \\delta(
        F_{\\beta_1 \\beta_2}
        g^{\\alpha_1 \\beta_2}
        g^{\\beta_1 \\alpha_2}
        )
      =
      F_{\\beta_1 \\beta_2}
      g^{\\beta_1 \\alpha_2}
      \\delta(
        g^{\\alpha_1 \\beta_2}
        )
      +
      F_{\\beta_1 \\beta_2}
      g^{\\alpha_1 \\beta_2}
      \\delta(
        g^{\\beta_1 \\alpha_2}
        )
      \\\\
      F_{\\alpha_1 \\alpha_2}
      \\delta(
        F_{\\beta_1 \\beta_2}
        g^{\\alpha_1 \\beta_2}
        g^{\\beta_1 \\alpha_2}
        )
      =
      -2
      F_{\\alpha_1 \\beta_2}
      F_{\\beta_1 \\gamma_1}
      g^{\\alpha_1 \\gamma_1}
      \\delta(
        g^{\\beta_1 \\beta_2}
        )
      =
      -2
      F_{\\alpha_1 \\beta_2}
      F_{\\beta_1}^{\\; \\alpha_1}
      \\delta(
        g^{\\beta_1 \\beta_2}
        )
      \\\\
      \\delta S_{M}
      =
      -
      \\frac{1}{4}
      \\int d^4x
      [
        \\frac{1}{2}
        (-g)^{1/2}
        g_{\\beta_1 \\beta_2}
        F_{\\alpha_1 \\alpha_2}
        F^{\\alpha_1 \\alpha_2}
        \\delta(
          (g^{\\beta_1 \\beta_2}))
        +
        0
        +
        -2
        (-g)^{1/2}
        F_{\\alpha_1 \\beta_2}
        F_{\\beta_1}^{\\; \\alpha_1}
        \\delta(
          g^{\\beta_1 \\beta_2}
        )
      ]
      \\\\
      \\delta S_{M} = 0
      \\iff
      g_{\\beta_1 \\beta_2}
      F_{\\alpha_1 \\alpha_2}
      F^{\\alpha_1 \\alpha_2}
      -
      4
      F_{\\alpha_1 \\beta_2}
      F_{\\beta_1}^{\\; \\alpha_1} =0
      `,
      explanation: "NA"
    },
    {
      expression: `-`,
      explanation: "I suspect not, having varied the action with both the vector potential and the metric, the only thing left is the field tensor, but that is itself dependent on the vector potential."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
// r =2 G m
// =2 G rho r^3
// r^2 = 1/(2 G rho)
