var problems = [

  {
    location:`self generated`,
    description:"Determine the green's function for an arbitrary shell of charge between 2 spherical conducting shells.",
    steps:[
    {
      expression: `
      \\nabla^2\\Phi_G(r, r') = -4\\pi\\delta(r-r')
      \\\\
      \\Phi_G(r,r')=\\Phi_G(r',r)\\rightarrow\\Phi_{Gl}(r=r')-\\Phi_{Gr}(r=r') = 0
      `,
      explanation: "Properties of green's functions"
    },
    {
      expression: `
      \\Phi_G(r_1, r') = \\Phi_G(r_2, r') = 0
      `,
      explanation: "The boundary conditions of two conducting spheres."
    },
    {
      expression: `\\nabla^2\\Phi_G = \\frac{1}{r^2}\\partial_r(r^2\\partial_r(\\Phi_G))`,
      explanation: "The differential operator of interest as we are disregarding angular variation on symmetry arguments."
    },
    {
      expression: `
      \\frac{1}{r^2}\\partial_r(r^2\\partial_r(\\Phi_G)) = 0
      \\\\
      \\partial_r(r^2\\partial_r(\\Phi_G)) = 0
      \\\\
      r^2\\partial_r(\\Phi_G) = C_1
      \\\\
      \\partial_r(\\Phi_G) = C_1r^{-2}
      \\\\
      \\Phi_G = -C_1r^{-1}+C_2=C_1r^{-1}+C_2
      `,
      explanation: "a form for the green's function valid everywhere except where r=r'"
    },
    {
      expression: `
      \\Phi_G(r=r_1)=C_1r_1^{-1}+C_2=0
      \\\\
      C_1=-C_2r_1
      \\\\
      \\Phi_G(r=r_2)=D_1r_2^{-1}+D_2=0
      \\\\
      D_1=-D_2r_2
      \\\\
      `,
      explanation: "Satisfying the external boundary conditions"
    },
    {
      expression: `
      \\Phi_{Gl}(r=r') = -C_2r_1r'^{-1}+C_2 = -C_2(r_1r'^{-1}-1)
      \\\\
      \\Phi_{Gr}(r=r') = -D_2r_2r'^{-1}+D_2 = -D_2(r_2r'^{-1}-1)
      \\\\
      \\Phi_{Gl}(r=r')-\\Phi_{Gr}(r=r')=0=
      \\\\
      -C_2(r_1r'^{-1}-1)+D_2(r_2r'^{-1}-1)
      \\\\
      D_2=C_2\\frac{r_1r'^{-1}-1}{r_2r'^{-1}-1} = C_2\\frac{r_1-r'}{r_2-r'}
      `,
      explanation: "Specifying another coefficient based on the continuity constraint."
    },
    {
      expression: `
      \\int_{r'-e}^{r'+e} dr[\\frac{1}{r^2}\\partial_r(r^2\\partial_r(\\Phi_G))]
      = \\int_{r'-e}^{r'+e} dr[-4\\pi \\delta(r-r')]
      \\\\
      \\int_{r'-e}^{r'+e} dr[\\partial_r(r^2\\partial_r(\\Phi_G))]
      = \\int_{r'-e}^{r'+e} dr[-4\\pi \\delta(r-r')r^2]
      \\\\
      \\int_{r'-e}^{r'+e} dr[(r^2\\partial_r(\\Phi_G))]
      = -4\\pi (1)r'^2]
      \\\\
      (r'^2\\partial_r(\\Phi_{Gr})) - (r'^2\\partial_r(\\Phi_{Gl}))
      = -4\\pi (1)r'^2]
      \\\\
      \\partial_r\\Phi_{Gr}(r=r')-\\partial_r\\Phi_{Gl}(r=r')=-4\\pi`,
      explanation: "The discontinuity at the r=r' boundary condition"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
