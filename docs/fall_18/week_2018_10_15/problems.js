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
      explanation: "The conjugate momenta for this system, identifying a constant of motion"
    },
    {
      expression: `
      H = \\frac{}{2m}(p_x^2 + p_z^2) + mgz
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
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },
]
