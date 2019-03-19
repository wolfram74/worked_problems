problems.push(
	  {
    location:`NA`,
    description:"working with a specific metric now",
    steps:[
    {
      expression: `
      ds^2 =
      -\\frac{r^2(1+g^2r^2)-2mr+Q^2}{r^2}dt^2
      +\\frac{r^2}{r^2(1+g^2r^2)-2mr+Q^2}dr^2
      +r^2(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)
      `,
      explanation: "our new slightly specified metric"
    },
    {
      expression: `
      ds^2 =
      -\\frac{r^2(1+0)-0r+0}{r^2}dt^2
      +\\frac{r^2}{r^2(1+0)-0r+0}dr^2
      +r^2(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)
      =
      \\\\
      -dt^2
      +dr^2
      +r^2(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)
      `,
      explanation: "the same algebraic functions implemented earlier yield 0 for this very simple metric, which is by inspection the same line element for spherical coordinates which equation 6 outlines the coordinate change for."
    },
    {
      expression: `
      \\Gamma'^{\\alpha_1}_{\\beta_{2} \\beta_{3}}=0
      `,
      explanation: "algebraic software reveals that the christoffel symbols expressed in cartesian space are all 0, but there are non-zero elements for the spherical metric because a step along one of the angular directions will have a variable step size depending on where in the space the step is taken."
    },//'
    {
      expression: `
      ds^2 =
      -\\frac{r^2-2mr}{r^2}dt^2
      +\\frac{r^2}{r^2-2mr}dr^2
      +r^2(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)
      \\rightarrow R_{\\mu \\nu}=0
      `,
      explanation: "by computation it's verified the ricci tensor is 0 for all values, but the riemann tensor has as many non-zero terms as the more general case explored earlier."
    },
    {
      expression: `
      ds^2 =
      -\\frac{r^2(1+g^2r^2)-0}{r^2}dt^2
      +\\frac{r^2}{r^2(1+g^2r^2)-0}dr^2
      +r^2(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)
      \\rightarrow
      \\\\
			R_{t t}
			=
			3 g^{2} \\left(g^{2} r^{2} + 1\\right)
			\\\\

			R_{r r}
			=
			- \\frac{3 g^{2}}{g^{2} r^{2} + 1}
			\\\\

			R_{\\theta_{p} \\theta_{p}}
			=
			- 3 g^{2} r^{2}
			\\\\

			R_{\\theta_{e} \\theta_{e}}
			=
			- 3 g^{2} r^{2} \\sin^{2}{\\left (\\theta_{p} \\right )}
			\\\\
			\\rightarrow \\Lambda = -3g^2
      `,
      explanation: "setting g to the non-zero term we get a ricci tensor that's just a scalar multiple of the metric."
    },
    {
      expression: `
      ds^2 =
      -\\frac{r^2(1+g^2r^2)-2mr}{r^2}dt^2
      +\\frac{r^2}{r^2(1+g^2r^2)-2mr}dr^2
      +r^2(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)

      \\\\
			R_{t t}
			=
			\\frac{3 g^{2}}{r} \\left(g^{2} r^{3} - 2 m + r\\right)
			\\\\

			R_{r r}
			=
			- \\frac{3 g^{2} r}{g^{2} r^{3} - 2 m + r}
			\\\\

			R_{\\theta_{p} \\theta_{p}}
			=
			- 3 g^{2} r^{2}
			\\\\

			R_{\\theta_{e} \\theta_{e}}
			=
			- 3 g^{2} r^{2} \\sin^{2}{\\left (\\theta_{p} \\right )}
			\\\\

      `,
      explanation: "even allowing a mass we still get a cosmological metric by including the g term."
    },
    {
      expression: `
      ds^2 =
      -\\frac{r^2(1+0)-2mr+Q^2}{r^2}dt^2
      +\\frac{r^2}{r^2(1+0)-2mr+Q^2}dr^2
      +r^2(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)
      \\\\
			R_{t t}
			=
			\\frac{Q^{2}}{r^{6}} \\left(Q^{2} - 2 m r + r^{2}\\right)
			\\\\

			R_{r r}
			=
			- \\frac{Q^{2}}{r^{2} \\left(Q^{2} - 2 m r + r^{2}\\right)}
			\\\\

			R_{\\theta_{p} \\theta_{p}}
			=
			\\frac{Q^{2}}{r^{2}}
			\\\\

			R_{\\theta_{e} \\theta_{e}}
			=
			\\frac{Q^{2}}{r^{2}} \\sin^{2}{\\left (\\theta_{p} \\right )}
			\\\\
      `,
      explanation: "the AF charged case, notably non-zero and distinct from the metric it started with"
    },
    {
      expression: `
      ds^2 =
      -\\frac{r^2(1+g^2r^2)-2mr+Q^2}{r^2}dt^2
      +\\frac{r^2}{r^2(1+g^2r^2)-2mr+Q^2}dr^2
      +r^2(d\\theta_p^2+sin(\\theta_p)^2 d\\theta_e^2)
      \\\\
			R_{t t}
			=
			\\frac{Q^{4}}{r^{6}} + \\frac{4 Q^{2}}{r^{2}} g^{2} - \\frac{2 m}{r^{5}} Q^{2} + \\frac{Q^{2}}{r^{4}} + 3 g^{4} r^{2} - \\frac{6 m}{r} g^{2} + 3 g^{2}
			\\\\

			R_{r r}
			=
			- \\frac{Q^{2} + 3 g^{2} r^{4}}{r^{2} \\left(Q^{2} + g^{2} r^{4} - 2 m r + r^{2}\\right)}
			\\\\

			R_{\\theta_{p} \\theta_{p}}
			=
			\\frac{1}{r^{2}} \\left(Q^{2} - 3 g^{2} r^{4}\\right)
			\\\\

			R_{\\theta_{e} \\theta_{e}}
			=
			\\frac{1}{r^{2}} \\left(Q^{2} - 3 g^{2} r^{4}\\right) \\sin^{2}{\\left (\\theta_{p} \\right )}
			\\\\
      `,
      explanation: "the AAdS charged case. Again, quite non-zero, non-trivial relationship with the starting metric."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
  }
)
