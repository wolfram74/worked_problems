var problems = [

  {
    location:`Riley's math methods chapter 8`,//'
    description:"Given the differential operator $&\\partial_x^2+a\\delta(x)+&$ and boundary conditions at plus-minus pi are 0, show it's eigen values satisfy $&tan(\\pi \\sqrt{\\lambda})=\\frac{2\\sqrt{\\lambda}}{a}&$",
    steps:[
    {
      expression: `Ly_n=\\lambda_ny_n`,
      explanation: "dirac comb 224-229, delta functions in general 68-78, 83, 89, 103-105, 254-256, 404, 408"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`jackson's E&M problem 3.1`,//'
    description:"suppose two concentric spheres radius 1 and radius 2. the top half of the inner and bottom half of the outer are held at constant poential $&V_0&$, otherwise are 0. solve in terms of legendre polynomials",
    steps:[
    {
      expression: `
        \\Phi(r, \\theta_p)=\\Sigma_0^\\infty
        [A_lr^l+B_lr^{-(l+1)}]P_l(cos(\\theta_p))
        `,
      explanation: "as the charge density between the two shells is 0, and the shells (and by extension the boundary conditions) don't have any equatorial variation, the intervening potential will have this form"
    },
    {
      expression: `
        \\Phi(r_1, \\theta_p)=V_0(1-H(\\theta_p-\\pi/2)),
        \\Phi(r_2, \\theta_p)=V_0(H(\\theta_p-\\pi/2))
        `,
      explanation: "explicit statement of the boundary conditions on the two shells. As there are two finite boundaries neither A's or B's can be immediately discarded."
    },
    {
      expression: `
        \\Phi(r_1, \\theta_p)=V_0(1-H(-cos(\\theta_p))),
        \\Phi(r_2, \\theta_p)=V_0(H(-cos(\\theta_p)))
      `,
      explanation: "recasting the boundary conditions in terms of $&cos(\\theta)&$"
    },
    {
      expression: `\\Phi(r_1, \\theta_p)=V_0(1-H(-cos(\\theta_p)))=
      \\Sigma_0^\\infty[A_lr_1^l+B_lr_1^{-(l+1)}]P_l(cos(\\theta_p))`,
      explanation: "The relationship of the inner boundary with the general series"
    },
    {
      expression: `
      A_lr_1^l+B_lr_1^{-(l+1)}=
      \\frac{2l+1}{2}\\int_{-1}^1 V_0(1-H(-cos(\\theta_p)))P_l(cos(\\theta)) dcos(\\theta)
      =\\frac{2l+1}{2}\\frac{V_0}{2}\\int_{-1}^1 (2-2H(-x))P_l(x) dx
      `,
      explanation: "establishing the relationship to satisfy the inner boundary and making the heaviside function take on a form that will simplify easier later."
    },
    {
      expression: `
      A_lr_2^l+B_lr_2^{-(l+1)}=
      \\frac{2l+1}{2}\\frac{V_0}{2}\\int_{-1}^1 2H(-x)P_l(x) dx
      `,
      explanation: "following similar logic for the outer boundary"
    },
    {
      expression: `2-2H(-x)=2H(x)`,
      explanation: "a convenient simplification"
    },
    {
      expression: `
      (A_lr_1^l+B_lr_1^{-(l+1)})\\frac{4}{V_0}=
      (2H(x))P_{l+1}|_{-1}^1 - \\int_{-1}^{1}2\\delta(x)P_{l+1} dx
      -(2H(x))P_{l-1}|_{-1}^1 + \\int_{-1}^{1}2\\delta(x)P_{l-1} dx
      \\\\
      =2P_{l+1}(1) - P_{l+1}(0)
      -2P_{l-1}(1) + P_{l-1}(0)=2(P_{l-1}(0)-P_{l+1}(0))
      `,
      explanation: "a simplified expression for the constraints imposed by the inner boundary"
    },
    {
      expression: `
      (A_lr_2^l+B_lr_2^{-(l+1)})\\frac{4}{V_0}=
      (2H(-x))P_{l+1}|_{-1}^1 + \\int_{-1}^{1}2\\delta(x)P_{l+1} dx
      -(2H(-x))P_{l-1}|_{-1}^1 - \\int_{-1}^{1}2\\delta(x)P_{l-1} dx
      \\\\
      =2P_{l+1}(-1) + P_{l+1}(0)
      -2P_{l-1}(-1) - P_{l-1}(0)=2(P_{l+1}(0)-P_{l-1}(0))
      `,
      explanation: "similar expression for the outer boundary"
    },
    {
      expression: `\\Delta_l = P_{l+1}(0)-P_{l-1}(0)`,
      explanation: "a useful place holder definition"
    },
    {
      expression: `
      (A_lr_1^l+B_lr_1^{-(l+1)})\\frac{2}{V_0}=
      -\\Delta_l
      \\\\
      \\frac{2A_lr_1^l}{V_0}+\\frac{2B_lr_1^{-(l+1)}}{V_0}=
      -\\Delta_l
      \\\\
      \\frac{2A_lr_1^l}{1}+\\Delta_lV_0=
      -2B_lr_1^{-(l+1)}
      \\\\
      -A_lr_1^{(2l+1)}-\\Delta_lr_1^{(l+1)}\\frac{V_0}{2}=
      B_l
      `,
      explanation: "Taking the inner boundary condition and solving for $&B_l&$"
    },
    {
      expression: `
      (A_lr_2^l+(-A_lr_1^{(2l+1)}-\\Delta_lr_1^{(l+1)}\\frac{V_0}{2})r_2^{-(l+1)})\\frac{4}{V_0}=
      2\\Delta_l
      \\\\
      A_lr_2^l\\frac{4}{V_0}
      -A_lr_1^{(2l+1)}r_2^{-(l+1)}\\frac{4}{V_0}
      -\\Delta_lr_1^{(l+1)}r_2^{-(l+1)}\\frac{V_0}{2}\\frac{4}{V_0}
      =
      2\\Delta_l
      \\\\
      4A_l(
        \\frac{r_2^l}{V_0}
        -\\frac{r_1^{(2l+1)}r_2^{-(l+1)}}{V_0}
        )
      -2\\Delta_l\\frac{r_1}{r_2}^{(l+1)}
      =
      2\\Delta_l
      \\\\
      A_l\\frac{2r_2^l}{V_0}(
        1
        -(\\frac{r_1}{r_2})^{(2l+1)}
        )
      =
      \\Delta_l(1+(\\frac{r_1}{r_2})^{(l+1)})
      \\\\
      A_l
      =
      \\Delta_l
      (1+(\\frac{r_1}{r_2})^{(l+1)})
      \\frac{V_0}{2r_2^l}
      (
        1
        -(\\frac{r_1}{r_2})^{(2l+1)}
        )^{-1}
      \\\\
      A_l
      =
      \\Delta_l
      \\frac{
        1+(\\frac{r_1}{r_2})^{(l+1)}
      }{
        1-(\\frac{r_1}{r_2})^{(2l+1)}
      }
      \\frac{V_0}{2r_2^l}
      `,
      explanation: "substituting and solving for the $&A_l&$ contribution. Of note is that it goes to 0 as r2 goes to infinite"
    },
    {
      expression: `
      -(\\Delta_l
      \\frac{
        1+(\\frac{r_1}{r_2})^{(l+1)}
      }{
        1-(\\frac{r_1}{r_2})^{(2l+1)}
      }
      \\frac{V_0}{2r_2^l})r_1^{(2l+1)}-\\Delta_lr_1^{(l+1)}\\frac{V_0}{2}=
      B_l
      \\\\
      -\\Delta_l\\frac{V_0}{2}(
        (
        \\frac{
          1+(\\frac{r_1}{r_2})^{(l+1)}
        }{
          1-(\\frac{r_1}{r_2})^{(2l+1)}
        }
        \\frac{1}{r_2^l})r_1^{(2l+1)}+r_1^{(l+1)}
        )=
      B_l
      \\\\
      -\\Delta_l
      \\frac{V_0}{2}
      r_1^{(l+1)}(
        (
        \\frac{
          1+(\\frac{r_1}{r_2})^{(l+1)}
        }{
          1-(\\frac{r_1}{r_2})^{(2l+1)}
        }
        \\frac{r_1^l}{r_2^l})+1
      )=
      B_l
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
