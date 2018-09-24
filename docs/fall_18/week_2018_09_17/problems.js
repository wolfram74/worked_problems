var problems = [

  {
    location:`Problem set 3`,
    description:"vary several actions and see if they behave differentally than from euler lagrange equations",
    steps:[
    {
      expression: `
      S = \\int e^{a x^2}e^{b v^2} dt
      \\\\
      \\delta S =
      \\int 2a xe^{a x^2}e^{b v^2}\\delta  x dt
      +
      \\int 2b ve^{a x^2}e^{b v^2}\\delta  v dt
      \\\\
      \\delta S =
      \\int 2a xe^{a x^2}e^{b v^2}\\delta  x dt
      -
      \\int 2b \\dot v e^{a x^2}e^{b v^2}\\delta  x dt
      -
      \\int 4 a b x v^2e^{a x^2}e^{b v^2}\\delta  x dt
      -
      \\int 4b^2 v^2 \\dot ve^{a x^2}e^{b v^2}\\delta  x dt
      \\\\
      \\therefore
      \\\\
      2a xe^{a x^2}e^{b v^2}=
      2b \\dot v e^{a x^2}e^{b v^2}+
      4 a b x v^2e^{a x^2}e^{b v^2}+
      4b^2 v^2 \\dot ve^{a x^2}e^{b v^2}
      \\\\
      2a x-4 a b x v^2=
      (2b  +
      4b^2 v^2) \\dot v
      \\\\
      \\dot v = \\frac{2a x-4 a b x v^2}{2b  +4b^2 v^2}
      `,
      explanation: "velocity dependent acceleration from first action."
    },
    {
      expression: `
      \\partial_x(e^{a x^2}e^{b v^2})
      =
      \\frac{d}{dt}\\partial_v(e^{a x^2}e^{b v^2})
      \\\\
      a2xe^{a x^2}e^{b v^2}
      =
      \\frac{d}{dt}2bve^{a x^2}e^{b v^2}
      \\\\
      a2xe^{a x^2}e^{b v^2}
      =
      2b\\dot v e^{a x^2}e^{b v^2}
      +
       2bv 2axv e^{a x^2} e^{b v^2}
      +
      2bve^{a x^2} 2bv\\dot ve^{b v^2}
      \\\\
      a2x
      =
      2b\\dot v
      +
      4abxv^2
      +
      4b^2v^2 \\dot v
      \\\\
      \\frac{a2x-4abxv^2}{2b + 4b^2v^2}
      =
      \\dot v
      `,
      explanation: "surprisingly the same equations of motion."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
//done
  {
    location:`in problem set 3`,
    description:"taking a $r^{-2}$ force, by varying the dimensions find how the period of the orbit depends on the radius.",
    steps:[
    {
      expression: `
      \\vec F = \\frac{-GMm}{r^2}\\hat r \\rightarrow U(r) = -GMmr^{-1}
      \\\\
      L = \\frac{m}{2}(\\dot r^2 + r^2 \\dot \\theta^2 +2GMr^{-1})
      `,
      explanation: "The potential underlying the gravitational force and the associated lagrangian for a particle in fixed well."
    },
    {
      expression: `
      t \\rightarrow \\alpha t \\\\
      r \\rightarrow \\beta r \\\\
      M \\rightarrow \\gamma M \\\\
      G \\rightarrow \\epsilon G
      `,
      explanation: "scaling the parameters in the lagrangian"
    },
    {
      expression: `
      L^* =
      \\frac{m}{2}(
        \\frac{\\beta^2}{\\alpha^2}(\\dot r^2 + r^2 \\dot \\theta^2)
        + \\frac{\\gamma \\epsilon}{\\beta}2GMr^{-1}
        )
      `,
      explanation: "How the lagrangian would be changed under this transformation."
    },
    {
      expression: `
      \\frac{\\beta^2}{\\alpha^2} = \\frac{\\gamma \\epsilon}{\\beta}
      `,
      explanation: "The constraint on how the parameters must relate to leave the action changed only by a scalar."
    },
    {
      expression: `
      \\frac{\\beta^3}{\\gamma \\epsilon} = \\alpha^2
      \\\\
      \\rightarrow
      \\\\
      \\frac{r^3}{G M} = T_0^2
      `,
      explanation: "determining the proportionality of orbital period with radius. Since no assumptions about angular momentum were made, it presumably holds for all values of ellipticity "
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
//stymied by poor initial approach
  {
    location:`problem set 3`,
    description:"Determine the curve a uniform chain of linear mass density $&\\lambda&$ and length L makes when draped with slack between two arbitrary points, $&\\vec r_1&$ and $&\\vec r_2&$ in a constant gravitational potential.",
    steps:[
    {
      expression: `
      U = \\int \\lambda g y ds
      \\\\
      ds^2 = dy^2+dx^2
      \\\\
      dy = y' dx
      \\\\
      U = \\int_{x_1}^{x_2} \\lambda g y (1+y'^2)^{1/2} dx
      `,
      explanation: "Whatever shape the curve takes will minimize the total potential energy of the chain"
    },
    {
      expression: `
      \\delta U = 0
      \\\\
      \\rightarrow
      \\\\
      (1+y'^2)^{1/2} = \\frac{d}{dx} yy'(1+y'^2)^{-1/2}
      \\\\
      (1+y'^2)^{1/2} =
      y'^2(1+y'^2)^{-1/2}
      + y y''(1+y'^2)^{-1/2}
      + y y'^2(1+y'^2)^{-3/2}
      \\\\
      (1+y'^2) =
      y'^2
      + y y''
      + y y'^2(1+y'^2)^{-1}
      \\\\
      (1+y'^2)^2 =
      y'^2(1+y'^2)
      + y y''(1+y'^2)
      + y y'^2
      \\\\
      1+2y'^2+y'^4 =
      y'^2+y'^4
      + y y''+y y'^2 y''
      + y y'^2
      \\\\
      1+y'^2=
      y y''
      +y y'^2 y''
      + y y'^2
      \\\\
      0=
      y y''
      +y y'^2 y''
      + y y'^2
      -1-y'^2
      `,
      explanation: ""
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
//some progress setting up lagrangian
  {
    location:`problem set 3`,
    description:"Take a small hoop rolling without slipping along a larger hoop, based on lagrange multipliers for constraints, determine when it loses contact",
    steps:[
    {
      expression: `
      U = mgy
      `,
      explanation: "Determining the potential energy for the small hoop"
    },
    {
      expression: `
      T_{cen} = \\frac{m}{2}(\\dot x^2 + \\dot y^2)
      \\\\
      T_{rot} = \\frac{m}{2}r^2\\dot \\theta^2
      `,
      explanation: "The center of mass kinetic energy and rotational kinetic energy"
    },
    {
      expression: `
      x^2+y^2 = r^2+2rR+R^2
      `,
      explanation: "The contact constraint between the smaller hoop and the bigger hoop"
    },
    {
      expression: `
      r^2 \\dot \\theta^2 = \\dot x^2 + \\dot y^2
      `,
      explanation: "along with the contact constraint is the no-slipping constraint."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`Problem set 3`,
    description:"Using lagrange multipliers to determine the movement of a block on a frictionless wedge.",
    steps:[
    {
      expression: `
      T = \\frac{1}{2}(m(\\dot x^2 + \\dot y^2) + M\\dot x_w^2)
      \\\\
      U = mgy
      \\\\
      tan(\\theta) = y/x \\rightarrow f(x,y) = y-xtan(\\theta) = 0
      `,
      explanation: "The various terms we will use to form our lagrangian"
    },
    {
      expression: `
      S =
      \\int(T-U+\\lambda f) dt=
      \\int[
        \\frac{1}{2}(m(\\dot x^2 + \\dot y^2) + M\\dot x_w^2)
        -mgy
        +\\lambda (y-xtan(\\theta))
        ] dt
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
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },

]
