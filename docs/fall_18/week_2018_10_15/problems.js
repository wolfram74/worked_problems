var problems = [
//donezo
  {
    location:`problem set`,
    description:"Show hamilton's vector can't be a canonical variable",
    steps:[
    {
      expression: `
      \\vec h = \\vec p - \\frac{\\mu\\alpha}{L}\\hat \\phi
      \\\\
      \\hat \\phi
      = -sin(\\phi)\\hat x + cos(\\phi)\\hat y
      = -sin(atan(x/y))\\hat x + cos(atan(x/y))\\hat y
      `,
      explanation: "hamilton's vector"
    },
    {
      expression: `
      \\{\\vec q, \\vec h\\}=1
      \\\\
      \\{\\vec q, \\vec q\\}=0
      \\\\
      \\{\\vec h, \\vec h\\}=0
      `,
      explanation: "what it would mean for hamilton's vector and some other quantity to be canonical."
    },
    {
      expression: `
      \\{\\vec h, \\vec h\\}_x
      =
      \\partial_{x_i}{h_i}_x\\partial_{p_i}{h_i}_x
      - \\partial_{x_j}{h_j}_x\\partial_{p_j}{h_j}_x
      \\\\
      =- \\frac{2 \\gamma x^{2}}{y^{3} \\left(\\frac{x^{2}}{y^{2}} + 1\\right)^{\\frac{3}{2}}} + \\frac{2 \\gamma}{y \\sqrt{\\frac{x^{2}}{y^{2}} + 1}} \\neq 0
      `,
      explanation: "doesn't even self commute, so not canonical"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`problem set`,
    description:"Use the hamilton jacobi method for a free particle in 3 dimensions",
    steps:[
    {
      expression: `
      H = p^2/2m
      `,
      explanation: "the free particle hamiltonian"
    },
    {
      expression: `
      \\partial_t S = -(\\nabla S)^2\\frac{1}{2m}
      `,
      explanation: "The hamilton jacobi equation"
    },
    {
      expression: `
      S = f(\\vec x) + Et
      \\\\
      |\\nabla f| = (2mE)^{1/2}
      `,
      explanation: "one approach"
    },
    {
      expression: `E = -`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
  //donezo
  {
    location:`final`,
    description:"Analyze the action for a relativistic free particle.",
    /*
    */
    steps:[
    {
      expression: `
      S = -\\int mc^2(1-\\frac{\\dot x^2}{c^2})^{1/2}dt
      `,
      explanation: "Our action integral"
    },
    {
      expression: `
      p
      = \\partial_{\\dot x} (-mc^2(1-\\frac{\\dot x^2}{c^2})^{1/2})
      = m \\dot x (1-\\frac{\\dot x^2}{c^2})^{-1/2}
      \\\\
      \\dot x = \\frac{c p}{(c^2m^2+p^2)^{1/2}}
      `,
      explanation: "Finding the conjugate momentum and velocity in terms of it. Sanity check, for arbitrarily large momenta, the velocity approaches c."
    },
    {
      expression: `
      H = p*\\dot x - L = c \\sqrt{c^{2} m^{2} + p^{2}}
      \\\\
      -\\partial_x H = 0
      \\\\
      \\partial_p H = \\frac{c p}{\\sqrt{c^{2} m^{2} + p^{2}}}
      \\\\
      x(t) = \\frac{c p}{\\sqrt{c^{2} m^{2} + p^{2}}}*t
      `,
      explanation: "constructing the hamiltonian we take note of the constancy of the momentum and as a sanity check, taylor series expansion around p=0 reproduces the classical relationship."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
  //donezo
  {
    location:`final`,
    description:"Assess a pair of coordinates for canonicity.",
    steps:[
    {
      expression: `
      \\pi = x p^2
      \\\\
      q = p^{-1}
      \\\\
      \\{ f, g \\} =
      \\partial_x f \\partial_p g - \\partial_p f \\partial_x g
      `,
      explanation: "our coordinates and the definition of poisson brackets"
    },
    {
      expression: `
      \\{ q, q \\} =
      \\partial_x q \\partial_p q - \\partial_p q \\partial_x q
      \\\\
      0 \\partial_p q - \\partial_p q 0 = 0
      `,
      explanation: "The position coordinate satisfies the self-commutation requirement"
    },
    {
      expression: `
      \\{ \\pi, \\pi \\} =
      \\partial_x \\pi \\partial_p \\pi - \\partial_p \\pi \\partial_x \\pi
      \\\\
      p^2 2xp - 2xp p^2=0
      `,
      explanation: "the momentum satisfies the self-commutation requirement"
    },
    {
      expression: `
      \\{ q, \\pi \\} =
      \\partial_x q \\partial_p \\pi - \\partial_p q \\partial_x \\pi
      \\\\
      0 \\partial_p \\pi + p^{-2} \\partial_x \\pi
      = p^{-2} p^2 = 1
      `,
      explanation: "satisfies the canonical requirements."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`final`,
    description:"Analyze free fall gravity in two dimensions.",
    /*
    lagrangian
    momenta
    hamiltonian
    ham-jacobi equation
    solve HJE
    do canonical transform
    invert transform
    */
    steps:[
    {
      expression: `
      L = \\frac{m}{2}(\\dot x^2 + \\dot z^2) - mgz
      `,
      explanation: "The lagrangian for free fall near a sphere's surface"
    },
    {
      expression: `
      \\partial_{\\dot x} L = m\\dot x = p_x
      \\\\
      \\partial_{\\dot z} L = m\\dot z = p_z
      \\\\
      \\partial_x L = 0 \\therefore \\dot p_x = 0
      `,
      explanation: "The conjugate momenta for this system, identifying a constant of motion. This vindicates our earlier choice of two dimensions as we could choose the horizontal motion to be x and not lose any generality."
    },
    {
      expression: `
      H = \\frac{1}{2m}(p_x^2 + p_z^2) + mgz
      \\\\
      -\\partial_t S =
      \\frac{1}{2m}((\\partial_x S)^2 + (\\partial_z S)^2) + mgz
      `,
      explanation: "The hamiltonian and hamilton-jacobi equation for this system."
    },
    {
      expression: `
      S(x,z,t) = S_x(x)+S_z(z) - Et
      \\\\
      E = \\frac{1}{2m}((\\partial_x S_x)^2 + (\\partial_z S_z)^2) + mgz
      \\\\
      2mE-(\\partial_x S_x)^2 = (\\partial_z S_z)^2+2m^2gz
      `,
      explanation: "as both sides of the equation are in independent variables, they must both equal to some other constant quantity."
    },
    {
      expression: `
      2mE - (\\partial_x S_x)^2= W
      \\\\
      (2mE-W)^{1/2} = \\partial_x S_x
      \\\\
      (2mE-W)^{1/2} = \\pi_x
      \\\\
      S_x = \\pi_x x + c_x
      `,
      explanation: "the general solution for $&S_x&$"
    },
    {
      expression: `
      (\\partial_z S_z)^2 = W-2m^2gz
      \\\\
      \\partial_z S_z = (W-2m^2gz)^{1/2}
      \\\\
      \\partial_z S_z = W^{1/2}(1-\\frac{2m^2g}{W}z)^{1/2}
      \\\\
      S_z = W^{1/2}\\int (1-\\frac{2m^2g}{W}z)^{1/2} dz +c_z
      \\\\
      \\pi_z = \\frac{2m^2g}{W}, W = \\frac{2m^2g}{\\pi_z }
      \\\\
      S_z = W^{1/2}\\frac{2(1-\\pi_z z)^{3/2}}{3\\pi_z} +c_z
      `,
      explanation: "the general solution for $&S_z&$"
    },
    {
      expression: `
      S= S_x + S_z - Et
      \\\\
      =
      \\pi_x x + c_x
      + W^{1/2}\\frac{2(1-\\pi_z z)^{3/2}}{3\\pi_z} +c_z
      - Et
      \\\\
      =
      \\pi_x x
      + W^{1/2}\\frac{2(1-\\pi_z z)^{3/2}}{3\\pi_z}
      - Et+c_0
      \\\\
      E= \\frac{\\pi_x^2}{2m}+\\frac{mg}{\\pi_z}
      \\\\
      S =
      \\pi_x x
      + (\\frac{2m^2g}{\\pi_z })^{1/2}\\frac{2(1-\\pi_z z)^{3/2}}{3\\pi_z}
      - (\\frac{\\pi_x^2}{2m}+\\frac{mg}{\\pi_z})t
      +c_0
      \\\\
      S =
      \\pi_x x
      + m(2g)^{1/2}\\frac{2(\\pi_z^{-1}- z)^{3/2}}{3}
      - (\\frac{\\pi_x^2}{2m}+\\frac{mg}{\\pi_z})t
      +c_0

      `,
      explanation: "Hamilton's principle function."
    },
    {
      expression: `
      \\partial_{x^i} f = p_i
      \\\\
      -\\partial_{q^i} f = \\pi_i
      \\\\
      \\partial_{\\pi_z} S = q_z =
      \\frac{gm}{\\pi_z^2}t
      -\\frac{m(2g)^{1/2}(\\pi_z^{-1}-z)^{1/2}}{\\pi_z^2}
      \\\\
      \\frac{gm}{\\pi_z^2}t-q_z =
      \\frac{m(2g)^{1/2}(\\pi_z^{-1}-z)^{1/2}}{\\pi_z^2}
      \\\\
      (gmt-q_z\\pi_z^2) =
      m(2g)^{1/2}(\\pi_z^{-1}-z)^{1/2}
      \\\\
      g^2m^2t^2
      -2q_z\\pi_z^2) gmt
      +q_z^2\\pi_z^4
      =
      2 m^2 g (\\pi_z^{-1}-z)
      =
      2 m^2 g \\pi_z^{-1} - 2 m^2 g z
      \\\\
      g^2m^2t^2
      -2q_z\\pi_z^2) gmt
      +q_z^2\\pi_z^4
      -2 m^2 g \\pi_z^{-1}
      =
      - 2 m^2 g z
      \\\\
      -\\frac{g}{2}t^2
      +\\frac{ q_z\\pi_z^2}{m} t
      + \\pi_z^{-1}
      -\\frac{q_z^2\\pi_z^4}{2 m^2 g }
      =
      z
      `,
      explanation: "Canonical transformations and the value of z as a function of time."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
