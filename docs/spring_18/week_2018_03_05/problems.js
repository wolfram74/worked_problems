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
      D_2=C_2\\frac{r_1r'^{-1}-1}{r_2r'^{-1}-1} = C_2 \\frac{r_1-r'}{r_2-r'}
      \\\\
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
      expression: `
      \\partial_r\\Phi_{Gr}(r=r')-\\partial_r\\Phi_{Gl}(r=r')=-4\\pi
      \\\\
      \\Phi_{Gl}(r)=-C_2(r_1r^{-1}-1)
      \\\\
      \\Phi_{Gr}(r)=-C_2 \\frac{r_1-r'}{r_2-r'}(r_2r^{-1}-1)
      \\\\
      (C_2 \\frac{r_1-r'}{r_2-r'}r_2r^{-2})|_{r'}
      -(+C_2r_1r^{-2})|_{r'} =
      -4\\pi
      \\\\
      C_2 (\\frac{r_1-r'}{r_2-r'}r_2r'^{-2}
      -r_1r'^{-2}) =
      -4\\pi
      \\\\
      C_2
      =
      -4\\pi\\frac{1}{
        \\frac{r_1-r'}{r_2-r'}r_2r'^{-2}-r_1r'^{-2}
      }
      =
      -4\\pi\\frac{1}{
        (\\frac{r_1-r'}{r_2-r'}r_2-r_1)r'^{-2}
      }
      =
      -4\\pi\\frac{r'^{2}}{
        (\\frac{r_1-r'}{r_2-r'}r_2-r_1)
      }
      \\\\
      =
      -4\\pi\\frac{r'^{2}}{
        (\\frac{r_1-r'}{r_2-r'}\\frac{r_2}{r_1}-1)r_1
      }

      `,
      explanation: "Specifying the final coefficient"
    },
    {
      expression: `
      \\Phi_G(r, r')=
       \\begin{cases}
        4\\pi\\frac{r'^{2}}{
        (\\frac{r_1-r'}{r_2-r'}\\frac{r_2}{r_1}-1)r_1
      }(r_1r'^{-1}-1) & r < r' \\\\
        4\\pi\\frac{r'^{2}}{
        (\\frac{r_1-r'}{r_2-r'}\\frac{r_2}{r_1}-1)r_1
      } \\frac{r_1-r'}{r_2-r'}(r_2r^{-1}-1) & r > r'
      \\end{cases}
      `,
      explanation: "The final green's function for the "
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
//'
  {
    location:`self generated`,
    description:"Listing the fundamental equations for finding wave solutions to plasma problems and how a few assumptions simplify them.",
    steps:[
    {
      expression: `
      \\nabla\\cdot{\\vec E} = \\rho/\\epsilon_0
      \\\\
      \\nabla\\cdot{\\vec B} = 0
      \\\\
      \\nabla\\times{\\vec E} = -\\dot{\\vec B}
      \\\\
      \\nabla\\times{\\vec B} = (\vec J + \\epsilon_0 \\dot{\\vec E})/\\mu_0
      `,
      explanation: "Differential form of maxwell's equations"
    },
    {
      expression: `
      \\dot n_i + \\nabla \\cdot ( \\vec u_i n_i) = 0
      \\\\
      \\dot n_e + \\nabla \\cdot ( \\vec u_e n_e) = 0
      `,
      explanation: "continuity of particle density"
    },
    {
      expression: `
      m_s n_s(
        \\partial_t \\vec{u_s} + (\\vec{u_s} \\cdot \\nabla)\\vec{u_s}
        )=
      q_sn_s(\\vec E + \\vec{u_s} \\times \\vec B) + \\nabla P -\\nu n \\vec{u_s}
      `,
      explanation: "Continuity of momentum"
    },
    {
      expression: `
      f = f_0+f_1e^{i(\\vec k \\cdot \\vec r -\\omega t)}
      `,
      explanation: "Assuming any quantity of interest can be expressed as some constant plus a term varying like a planewave."
    },
    {
      expression: `
      \\nabla f_1 = i\\vec k f_1
      \\\\
      \\partial_t f_1 = -i\\omega f_1
      \\\\
      \\nabla \\cdot \\vec f_1 = i\\vec k \\cdot \\vec f_1
      \\\\
      \\nabla \\times \\vec f_1 = i\\vec k \\times \\vec f_1
      `,
      explanation: "consequences of various differential operators resulting from assumptions about our solutions."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
