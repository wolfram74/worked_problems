var problems = [

  {
    location:`by me`,
    description:"Supposing a square partially filled with dielectric to distance d and the boundaries held at 0 potential except for the wall at x=L which is some function $&v(y)&$ analyze the system.",
    steps:[
    {
      expression: `\\Phi(x,y)=V_x V_y`,
      explanation: "Assuming our solution is separable"
    },
    {
      expression: `\\nabla^2\\Phi = 0 = V_x'' V_y+ V_x V_y''`,
      explanation: "Poisson's equation"
    },
    {
      expression: `\\frac{V_x''}{V_x} + \\frac{V_y''}{V_y}=0`,
      explanation: "fully separating the functions to show they must be constants"
    },
    {
      expression: `\\frac{V_x''}{V_x} = \\alpha^2, \\frac{V_y''}{V_y}=-\\frac{V_x''}{V_x}=-\\alpha^2`,
      explanation: "establishing the differential equations to solve the separated functions"
    },
    {
      expression: `
      V_x=A_\\alpha sinh(\\alpha x) + B_\\alpha cosh(\\alpha x),
      V_y=C_\\alpha sin(\\alpha x) + D_\\alpha cos(\\alpha x)
      `,
      explanation: "The general solutions for our potentials."
    },
    {
      expression: `\\Phi(x,0)=\\Phi(x,L)=0\\rightarrow
      D_\\alpha=0, \\alpha=\\frac{n\\pi}{L}`,
      explanation: "boundary conditions rule out cosine terms on both left and right solutions"
    },
    {
      expression: `\\Phi(0,y)=0\\rightarrow B_{\\alpha L}=0`,
      explanation: "boundary conditions rule out cosh terms on the dielectric side"
    },
    {
      expression: `
      L_\\alpha = A_{\\alpha L}*C_{\\alpha L},
      J_\\alpha = A_{\\alpha R}*C_{\\alpha R},
      K_\\alpha = B_{\\alpha R}*C_{\\alpha R},
       `,
      explanation: "Collapsing some terms"
    },
    {
      expression: `
      \\Phi_L = L_\\alpha sin(\\alpha y) sinh(\\alpha x),
      \\Phi_R = sin(\\alpha y)( J_\\alpha sinh(\\alpha x)+ K_\\alpha cosh(\\alpha x) )
      `,
      explanation: "What's left after applying the grounded boundary conditions"
    },
    {
      expression: `\\Phi_R(L,y)=V(y)=
      sin(\\alpha y)( J_\\alpha sinh(\\alpha L)+ K_\\alpha cosh(\\alpha L) )
      `,
      explanation: "Imposing the right most boundary condition"
    },
    {
      expression: `M_\\alpha = ( J_\\alpha sinh(\\alpha L)+ K_\\alpha cosh(\\alpha L) )`,
      explanation: "$&M_\\alpha&$ are the fourier coefficients after decomposing V(y), this provides constraints on J's and K's"
    },
    {
      expression: `
      K_\\alpha =  \\frac{M_\\alpha -J_\\alpha sinh(\\alpha L)}{cosh(\\alpha L)},
      \\\\
      \\Phi_R(x,y) =
      sin(\\alpha y)(
        J_\\alpha sinh(\\alpha x)
        + \\frac
            {M_\\alpha -J_\\alpha sinh(\\alpha L)}
            {cosh(\\alpha L)}
            cosh(\\alpha x)
        )
      `,
      explanation: "expressing K's in terms of J's and how the potential looks outside the dielectric"
    },
    {
      expression: `\\Phi_L(d,y)=\\Phi_R(d,y)
      \\\\
      L_\\alpha sin(\\alpha y) sinh(\\alpha d)
      =
      sin(\\alpha y)(
        J_\\alpha sinh(\\alpha d)
        + \\frac
            {M_\\alpha -J_\\alpha sinh(\\alpha L)}
            {cosh(\\alpha L)}
            cosh(\\alpha d)
        )
      `,
      explanation: "a consequence of the curl of E being 0 is that the potential is continuous"
    },
    {
      expression: `
      L_\\alpha sinh(\\alpha d)
      =
              J_\\alpha sinh(\\alpha d)
        + \\frac
            {M_\\alpha -J_\\alpha sinh(\\alpha L)}
            {cosh(\\alpha L)}
            cosh(\\alpha d)
      \\\\
      L_\\alpha
      =
      J_\\alpha
      + \\frac
          {M_\\alpha -J_\\alpha sinh(\\alpha L)}
          {cosh(\\alpha L)}
          \\frac{cosh(\\alpha d)}{sinh(\\alpha d)}

      `,
      explanation: "expressing L's in terms of J"
    },
    {
      expression: `
      \\epsilon_L\\partial_x\\Phi_L|_{x=d}-\\epsilon_R\\partial_x\\Phi_R|_{x=d}=\\sigma_(y)`,
      explanation: "Impact of possible free charge at the dielectric layer, we will suppose it is 0"
    },
    {
      expression: `
      \\epsilon
      L_\\alpha \\alpha sin(\\alpha y) cosh(\\alpha d)
      =
      \\epsilon_0
      sin(\\alpha y)(
        J_\\alpha \\alpha cosh(\\alpha d)
        + \\frac
            {M_\\alpha -J_\\alpha sinh(\\alpha L)}
            {cosh(\\alpha L)}
            \\alpha sinh(\\alpha d)
        )
      \\\\
      \\alpha
      \\epsilon
      L_\\alpha  sin(\\alpha y) cosh(\\alpha d)
      =
      \\alpha
      \\epsilon_0
      sin(\\alpha y)(
        J_\\alpha cosh(\\alpha d)
        + \\frac
            {M_\\alpha -J_\\alpha sinh(\\alpha L)}
            {cosh(\\alpha L)}
            sinh(\\alpha d)
        )
      \\\\
      \\epsilon
      L_\\alpha  cosh(\\alpha d)
      =
      \\epsilon_0
      (
        J_\\alpha cosh(\\alpha d)
        + \\frac
            {M_\\alpha -J_\\alpha sinh(\\alpha L)}
            {cosh(\\alpha L)}
            sinh(\\alpha d)
        )
      \\\\
      L_\\alpha
      =
      \\frac{\\epsilon_0}{\\epsilon}
      (
        J_\\alpha
        + \\frac
            {M_\\alpha -J_\\alpha sinh(\\alpha L)}
            {cosh(\\alpha L)}
          \\frac
            {sinh(\\alpha d)}
            {cosh(\\alpha d)}
        )
      \\\\
      J_\\alpha
      + \\frac
          {M_\\alpha -J_\\alpha sinh(\\alpha L)}
          {cosh(\\alpha L)}
          \\frac{cosh(\\alpha d)}{sinh(\\alpha d)}
      =
      \\frac{\\epsilon_0}{\\epsilon}
      (
        J_\\alpha
        + \\frac
            {M_\\alpha -J_\\alpha sinh(\\alpha L)}
            {cosh(\\alpha L)}
          \\frac
            {sinh(\\alpha d)}
            {cosh(\\alpha d)}
        )
      \\\\
      J_\\alpha(1-\\frac{\\epsilon_0}{\\epsilon})
      + \\frac
          {M_\\alpha -J_\\alpha sinh(\\alpha L)}
          {cosh(\\alpha L)}
          \\frac{cosh(\\alpha d)}{sinh(\\alpha d)}
      =
      \\frac{\\epsilon_0}{\\epsilon}
      (
          \\frac
            {M_\\alpha -J_\\alpha sinh(\\alpha L)}
            {cosh(\\alpha L)}
          \\frac
            {sinh(\\alpha d)}
            {cosh(\\alpha d)}
        )
      \\\\
      J_\\alpha(1-\\frac{\\epsilon_0}{\\epsilon})
      + (\\frac
          {M_\\alpha }
          {cosh(\\alpha L)}
        -J_\\alpha tanh(\\alpha L))
        coth(\\alpha d)
      =
      \\frac{\\epsilon_0}{\\epsilon}
      (
        (\\frac
          {M_\\alpha }
          {cosh(\\alpha L)}
        -J_\\alpha tanh(\\alpha L))
        tanh(\\alpha d)
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
    ]
  },

  {
    location:`NA`,
    description:"Much as the previous problem only now the potential is along the top edge",
    steps:[
    {
      expression: `
      V_x=A_\\alpha sin(\\alpha x) + B_\\alpha cos(\\alpha x),
      V_y=C_\\alpha sinh(\\alpha y) + D_\\alpha cosh(\\alpha y)
      `,
      explanation: "Skipping right to the general potentials"
    },
    {
      expression: `
        \\Phi(x,0)=0, \\Phi(x,L)=V(x)
        \\rightarrow
        D_\\alpha=0`,
      explanation: "the top boundary conditions being applied"
    },
    {
      expression: `
      \\Phi(0,y)=0
      B_{\\alpha L} = 0
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\Phi_L=L_\\alpha sin(\\alpha x) sinh(\\alpha y)
      \\\\
      \\Phi_R=(J_\\alpha sin(\\alpha x) +K_\\alpha cos(\\alpha x))sinh(\\alpha y)
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
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

  {
    location:`by eric`,
    description:"supposing an infinite slab with thickness d of dielectric is placed in a region of constant electric field",
    steps:[
    {
      expression: `\\Phi_i = A_i x + B_i`,
      explanation: "the three regions each have a potential taking on that form."
    },
    {
      expression: `\\Phi(0)=0\\rightarrow B_1=B_2=0`,
      explanation: "choosing the left side of the dielectric to be potential 0 and it's consequences for each of the potentials"
    },
    {
      expression: `-\\epsilon_0\\partial_x \\Phi_1(-\\infty) = -\\epsilon_0\\partial_x \\Phi_3(\\infty) = E_0 \\rightarrow A_1=A_3 = -\\frac{E_0}{\\epsilon_0}`,
      explanation: "the externally imposed field defines the coefficients for those regions"
    },
    {
      expression: `
      \\Phi_2(d)=\\Phi_3(d)
      \\rightarrow
      A_2 d = -\\frac{E_0}{\\epsilon_0} d + B_3
      \\\\
      B_3 = (A_2+\\frac{E_0}{\\epsilon_0})d
      `,
      explanation: "continuity of potential gives us a relationship between gradient in the dielectric and constant in region 3"
    },
    {
      expression: `
      -\\epsilon\\partial_x \\Phi_2(d) = -\\epsilon_0\\partial_x \\Phi_3(d)
      \\\\
      -\\epsilon A_2 = E_0
      \\\\
      A_2 = -\\frac{E_0}{\\epsilon}
      \\\\
      B_3 = E_0(\\frac{1}{\\epsilon_0}-\\frac{1}{\\epsilon})d
      `,
      explanation: "using displacement across the boundary is continuous if no free charge is present"
    },
    {
      expression: `
        \\Phi_1 = -\\frac{E_0}{\\epsilon_0} x
        \\\\
        \\Phi_2 = -\\frac{E_0}{\\epsilon} x
        \\\\
        \\Phi_3 = -\\frac{E_0}{\\epsilon_0} x
          + E_0(\\frac{1}{\\epsilon_0}-\\frac{1}{\\epsilon})d
      `,
      explanation: "final potentials of all 3 regions"
    },
    {
      expression: `
        \\vec D_i = -\\epsilon_i \\nabla \\Phi_i
        \\\\
        \\vec D_1 = E_0
        \\\\
        \\vec D_2 = E_0
        \\\\
        \\vec D_3 = E_0
      `,
      explanation: "displacement for all 3 regions"
    },
    {
      expression: `\\vec P_2 = (1-\\frac{\\epsilon_0}{\\epsilon}) E_0`,
      explanation: "the only non-zero polarization"
    },
    {
      expression: `
      -\\epsilon \\nabla \\Phi = \\vec D
      \\\\
      \\vec D = \\epsilon_0 \\vec E + \\vec P
      \\\\
      \\frac{1}{\\epsilon} \\vec D = \\vec E
      \\\\
      (1-\\frac{\\epsilon_0}{\\epsilon}) \\vec D = \\vec P
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
]
