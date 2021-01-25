problems.push(
  {
  	//1c
    location:`NA`,
    description:"analyzing the temperature of a BTZ black hole",
    steps:[
    {
      expression: `
      r
      =
      r_+ cosh(\\frac{\\rho}{L})
      \\\\
      t_E = i t
      `,
      explanation: "reparametrizing radius and time"
    },
    {
      expression: `
      ds^2 =
      r_+^2L^{-2}sinh(\\frac{\\rho}{L})^2
      dt_E^2
      +
      d\\rho^2
      +
      r_+^2 cosh(\\frac{\\rho}{L})^2
      d\\theta^2
      `,
      explanation: "the line element in this new system"
    },
    {
      expression: `
      sinh(x) \\approx 0 + x,
      cosh(x) \\approx 1 + 0
      \\\\
      \\therefore
      ds^2 \\approx
      \\frac{r_+^2\\rho^2}{L^4}
      dt_E^2
      +
      d\\rho^2
      +
      r_+^2
      d\\theta^2
      `,
      explanation: "the metric close to the horizon where $&\\rho = 0&$."
    },
    {
      expression: `
      \\tilde t_E = \\frac{r_+}{L^2}t_E \\rightarrow d\\rho^2 + \\rho^2 d \\tilde t_E^2
      \\\\
      \\tilde t_E + 2\\pi = \\ tilde t_E
      \\\\
      t_E = t_E + 2\\pi \\frac{L^2}{r_+}
      \\\\
      \\beta = 2\\pi \\frac{L^2}{r_+} \\therefore T = \\frac{r_+}{ 2\\pi L^2 }
      `,
      explanation: "A temperature from argument by fiat."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
	)
