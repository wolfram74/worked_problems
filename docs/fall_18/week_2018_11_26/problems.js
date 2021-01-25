var problems = [

  {
    location:`problem set 7`,
    description:"find the conjugate momenta and equations of motion",
    steps:[
    {
      expression: `
      S = \\int
      \\frac{1}{2}m(
        \\dot r^2
        +r^2 \\dot \\theta_p^2
        +sin(\\theta_p)^2r^2\\dot \\theta_e^2
        )
      +\\frac{k}{r}
      dt
      `,
      explanation: "our starting action"
    },
    {
      expression: `
      p_r
      = \\partial_{\\dot r}L
      = m \\dot r
      \\\\
      p_{\\theta_p}
      = \\partial_{\\dot \\theta_p}L
      = m r^2 \\dot \\theta_p
      \\\\
      p_{\\theta_e}
      = \\partial_{\\dot \\theta_e}L
      = m r^2 sin(\\theta_p)^2 \\dot \\theta_p
      `,
      explanation: "Our conveniently invertible momenta."
    },
    {
      expression: `
      H = \\sigma \\dot q_i p_i - L
      = \\frac{1}{2m}(
        p_r^2
        +r^{-2} p_{\\theta_p}^2
        +(sin(\\theta_p)r)^{-2}p_{\\theta_e}^2
        )
      -kr^{-1}
      `,
      explanation: "the system hamiltonian"
    },
    {
      expression: `
      -\\partial_{ r }H = \\dot p_r
      =
      \\frac{1}{mr^{3}}(
         p_{\\theta_p}^2
        +sin(\\theta_p)^{-2}p_{\\theta_e}^2
        )
      -kr^{-2}
      \\\\
      \\partial_{ p_r }H = \\dot r
      = p_r/m
      \\\\
      -\\partial_{ \\theta_e }H = \\dot p_{\\theta_e}
      = 0 \\therefore p_{\\theta_e}(t)=p_{\\theta_e}(0)=p_{\\theta_e}
      \\\\
      \\partial_{ p_{\\theta_e} }H = \\dot {\\theta_e}
      =p_{\\theta_e}(rsin(\\theta_p))^{-2}/m
      \\\\
      -\\partial_{ \\theta_p }H = \\dot p_{\\theta_p}
      =\\frac{p_{\\theta_e}^2}{2mr^2}\\frac{8 cos(\\theta_p)}{3sin(\\theta_p)-sin(3\\theta_p)}
      \\\\
      \\partial_{ p_{\\theta_p} }H = \\dot {\\theta_p}
      =p_{\\theta_p}r^{-2}/m
      \\\\
      `,
      explanation: "equations of motion for our system."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`problem Set 7`,
    description:"Compute the poisson bracket of f and g",
    steps:[
    {
      expression: `
      f =x^2 p
      \\\\
      g =p^2 + x^2
      `,
      explanation: "our observables"
    },
    {
      expression: `
      \\{ f, g\\} =
      \\Sigma_i
        \\partial_{q_i} f \\partial_{p_i} g
        - \\partial_{q_i} g \\partial_{p_i} f
      `,
      explanation: "defining the poisson bracket"
    },
    {
      expression: `
        \\partial_{x} (x^2 p) \\partial_{p} (p^2 + x^2)
        - \\partial_{x} (p^2 + x^2) \\partial_{p} (x^2 p)
        \\\\
        =2x 2p^2
        - 2 x^3 = 2x(2p^2 - x^2)
      `,
      explanation: "calculation of how these relate to each other."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`problem Set 7`,
    description:"find the matching momentum to $&q=x^2p^3&$, $&\\pi&$ such that it also satisfies fundamental poisson brackets. Then show it any function of q can be added to it and it will still satisfy the constraint.",
    steps:[
    {
      expression: `
      \\{q, \\pi \\}=1
      `,
      explanation: "a bracket that stipulates the relation between a position and it's momentum"
    },
    {
      expression: `
      \\{q, \\pi \\}
      =
        \\partial_{x} q \\partial_{p} \\pi
        - \\partial_{x} \\pi \\partial_{p} q
      \\\\
      =
        \\partial_{x} x^2p^3 \\partial_{p} \\pi
        - \\partial_{x} \\pi \\partial_{p} x^2p^3
      \\\\
      =
        2xp^3 \\partial_{p} \\pi
        - 3x^2p^2 \\partial_{x} \\pi
      \\\\
      \\pi = -x^{-1}p^{-2} \\rightarrow \\{q, \\pi \\} = 1
      `,
      explanation: "via trial and error a valid conjugate momenta is found."//page 20?
    },//semi-linear equation, i think
    {
      expression: `
      \\{q, \\pi+f(q) \\}=
      \\\\
        \\partial_{x} q \\partial_{p} \\pi + f
        - \\partial_{x} \\pi \\partial_{p} q - f
        +\\partial_{x} q \\partial_{p} f + \\pi
        - \\partial_{x} f \\partial_{p} q - \\pi
      \\\\
      =
      \\{q, \\pi \\}+ 0 + 0
      +
        \\partial_{x} q \\partial_{p} f
        - \\partial_{x} f \\partial_{p} q
      \\\\
      =
      \\{q, \\pi \\}
      +
        \\partial_{x} q \\partial_{p} q f'
        - \\partial_{x} q \\partial_{p} q f'
      \\\\
      =
      \\{q, \\pi \\}
      +
      \\{q, q \\} f'
      = \\{q, \\pi \\}
      `,
      explanation: "addition of a function in terms of q doesn't change the poisson bracket."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
