var problems = [

  {
    location:`research`,
    description:"produce a more tractable potential energy function",
    steps:[
    {
      expression: `
      U_{i,j}=
      -\\frac{\\mu_0}{4\\pi}
      \\frac{\\mu_i \\mu_j}{2}
      \\frac{1}{r_{i,j}^3}
      [cos(\\phi_i-\\phi_j)+3cos(\\phi_i+\\phi_j-2\\theta_{i,j})]
      `,
      explanation: "one of the components for the energy function."
    },
    {
      expression: `
      cos(\\phi_i-\\phi_j)
      = cos(\\phi_i)cos(\\phi_j)
      +sin(\\phi_i)sin(\\phi_j)
      \\\\
      cos(\\phi_i+\\phi_j-2\\theta_{i,j})
      = cos(\\phi_i+\\phi_j)cos(2\\theta_{i,j})
      +sin(\\phi_i+\\phi_j)sin(2\\theta_{i,j})
      \\\\
      = [
        cos(\\phi_i)cos(\\phi_j)
        -sin(\\phi_i)sin(\\phi_j)
      ]cos(2\\theta_{i,j})
      \\\\
      +[
        sin(\\phi_i)
        cos(\\phi_j)
        +
        cos(\\phi_i)
        sin(\\phi_j)
      ]sin(2\\theta_{i,j})
      `,
      explanation: "expanding the trig function portion"
    },
    {
      expression: `
      cos(\\phi_k) = x_k,sin(\\phi_k) = y_k,
      \\  iff \\
      x_k^2+y_k^2=1
      `,
      explanation: "a possible substitution if a constraint is observed"
    },
    {
      expression: `
      U_{i,j}=
      -\\frac{\\mu_0}{4\\pi}
      \\frac{\\mu_i \\mu_j}{2}
      \\frac{1}{r_{i,j}^3}
      [
      x_i x_j
      +y_i y_j
      +
      3[
        x_i x_j
        -y_i y_j
      ]cos(2\\theta_{i,j})
      +3[
        y_i x_j
        +
        x_i y_j
      ]sin(2\\theta_{i,j})
      ]
      `,
      explanation: "building the potential in this coordinate system."
    },
    {
      expression: `
U_{0,j}, 0
 \\\\ \\qquad
, 4 x_{0} x_{1} - 2 y_{0} y_{1}, \\frac{5 x_{0}}{2} x_{2} - \\frac{y_{0} y_{2}}{2} + \\frac{\\sqrt{3}}{2} \\left(3 x_{0} y_{2} + 3 x_{2} y_{0}\\right)
 \\\\ \\qquad
, - \\frac{x_{0} x_{3}}{2} + \\frac{5 y_{0}}{2} y_{3} + \\frac{\\sqrt{3}}{2} \\left(3 x_{0} y_{3} + 3 x_{3} y_{0}\\right), - 2 x_{0} x_{4} + 4 y_{0} y_{4}
 \\\\ \\qquad
, - \\frac{x_{0} x_{5}}{2} + \\frac{5 y_{0}}{2} y_{5} - \\frac{\\sqrt{3}}{2} \\left(3 x_{0} y_{5} + 3 x_{5} y_{0}\\right), \\frac{5 x_{0}}{2} x_{6} - \\frac{y_{0} y_{6}}{2} - \\frac{\\sqrt{3}}{2} \\left(3 x_{0} y_{6} + 3 x_{6} y_{0}\\right)
 \\\\ \\qquad
, \\lambda_{0} \\left(x_{0}^{2} + y_{0}^{2} - 1\\right)
\\\\
U_{1,j}, - \\frac{x_{0} x_{1}}{2} + \\frac{5 y_{0}}{2} y_{1} - \\frac{\\sqrt{3}}{2} \\left(3 x_{0} y_{1} + 3 x_{1} y_{0}\\right)
 \\\\ \\qquad
, 0, - \\frac{x_{1} x_{2}}{2} + \\frac{5 y_{1}}{2} y_{2} + \\frac{\\sqrt{3}}{2} \\left(3 x_{1} y_{2} + 3 x_{2} y_{1}\\right)
 \\\\ \\qquad
, x_{1} x_{3} + \\frac{3 x_{1}}{2} y_{3} + \\frac{3 x_{3}}{2} y_{1} + y_{1} y_{3} - \\frac{\\sqrt{3}}{2} \\left(3 x_{1} x_{3} - 3 y_{1} y_{3}\\right), - 2 x_{1} x_{4} + 4 y_{1} y_{4}
 \\\\ \\qquad
, x_{1} x_{5} - \\frac{3 x_{1}}{2} y_{5} - \\frac{3 x_{5}}{2} y_{1} + y_{1} y_{5} - \\frac{\\sqrt{3}}{2} \\left(3 x_{1} x_{5} - 3 y_{1} y_{5}\\right), - \\frac{x_{1} x_{6}}{2} + \\frac{5 y_{1}}{2} y_{6} - \\frac{\\sqrt{3}}{2} \\left(3 x_{1} y_{6} + 3 x_{6} y_{1}\\right)
 \\\\ \\qquad
, \\lambda_{1} \\left(x_{1}^{2} + y_{1}^{2} - 1\\right)
\\\\
U_{2,j}, x_{0} x_{2} - 3 x_{0} y_{2} - 3 x_{2} y_{0} + y_{0} y_{2}
 \\\\ \\qquad
, \\frac{5 x_{1}}{2} x_{2} - \\frac{y_{1} y_{2}}{2} - \\frac{\\sqrt{3}}{2} \\left(3 x_{1} y_{2} + 3 x_{2} y_{1}\\right), 0
 \\\\ \\qquad
, - 2 x_{2} x_{3} + 4 y_{2} y_{3}, x_{2} x_{4} - \\frac{3 x_{2}}{2} y_{4} - \\frac{3 x_{4}}{2} y_{2} + y_{2} y_{4} - \\frac{\\sqrt{3}}{2} \\left(3 x_{2} x_{4} - 3 y_{2} y_{4}\\right)
 \\\\ \\qquad
, - \\frac{x_{2} x_{5}}{2} + \\frac{5 y_{2}}{2} y_{5} - \\frac{\\sqrt{3}}{2} \\left(3 x_{2} y_{5} + 3 x_{5} y_{2}\\right), x_{2} x_{6} - 3 x_{2} y_{6} - 3 x_{6} y_{2} + y_{2} y_{6}
 \\\\ \\qquad
, \\lambda_{2} \\left(x_{2}^{2} + y_{2}^{2} - 1\\right)
\\\\
U_{3,j}, \\frac{5 x_{0}}{2} x_{3} - \\frac{y_{0} y_{3}}{2} - \\frac{\\sqrt{3}}{2} \\left(3 x_{0} y_{3} + 3 x_{3} y_{0}\\right)
 \\\\ \\qquad
, x_{1} x_{3} - \\frac{3 x_{1}}{2} y_{3} - \\frac{3 x_{3}}{2} y_{1} + y_{1} y_{3} + \\frac{\\sqrt{3}}{2} \\left(3 x_{1} x_{3} - 3 y_{1} y_{3}\\right), 4 x_{2} x_{3} - 2 y_{2} y_{3}
 \\\\ \\qquad
, 0, - \\frac{x_{3} x_{4}}{2} + \\frac{5 y_{3}}{2} y_{4} - \\frac{\\sqrt{3}}{2} \\left(3 x_{3} y_{4} + 3 x_{4} y_{3}\\right)
 \\\\ \\qquad
, x_{3} x_{5} - 3 x_{3} y_{5} - 3 x_{5} y_{3} + y_{3} y_{5}, \\frac{5 x_{3}}{2} x_{6} - \\frac{y_{3} y_{6}}{2} - \\frac{\\sqrt{3}}{2} \\left(3 x_{3} y_{6} + 3 x_{6} y_{3}\\right)
 \\\\ \\qquad
, \\lambda_{3} \\left(x_{3}^{2} + y_{3}^{2} - 1\\right)
\\\\
U_{4,j}, x_{0} x_{4} - \\frac{3 x_{0}}{2} y_{4} - \\frac{3 x_{4}}{2} y_{0} + y_{0} y_{4} + \\frac{\\sqrt{3}}{2} \\left(3 x_{0} x_{4} - 3 y_{0} y_{4}\\right)
 \\\\ \\qquad
, 4 x_{1} x_{4} - 2 y_{1} y_{4}, x_{2} x_{4} + \\frac{3 x_{2}}{2} y_{4} + \\frac{3 x_{4}}{2} y_{2} + y_{2} y_{4} + \\frac{\\sqrt{3}}{2} \\left(3 x_{2} x_{4} - 3 y_{2} y_{4}\\right)
 \\\\ \\qquad
, \\frac{5 x_{3}}{2} x_{4} - \\frac{y_{3} y_{4}}{2} + \\frac{\\sqrt{3}}{2} \\left(3 x_{3} y_{4} + 3 x_{4} y_{3}\\right), 0
 \\\\ \\qquad
, \\frac{5 x_{4}}{2} x_{5} - \\frac{y_{4} y_{5}}{2} - \\frac{\\sqrt{3}}{2} \\left(3 x_{4} y_{5} + 3 x_{5} y_{4}\\right), x_{4} x_{6} - \\frac{3 x_{4}}{2} y_{6} - \\frac{3 x_{6}}{2} y_{4} + y_{4} y_{6} + \\frac{\\sqrt{3}}{2} \\left(3 x_{4} x_{6} - 3 y_{4} y_{6}\\right)
 \\\\ \\qquad
, \\lambda_{4} \\left(x_{4}^{2} + y_{4}^{2} - 1\\right)
\\\\
U_{5,j}, 4 x_{0} x_{5} - 2 y_{0} y_{5}
 \\\\ \\qquad
, x_{1} x_{5} + \\frac{3 x_{1}}{2} y_{5} + \\frac{3 x_{5}}{2} y_{1} + y_{1} y_{5} + \\frac{\\sqrt{3}}{2} \\left(3 x_{1} x_{5} - 3 y_{1} y_{5}\\right), \\frac{5 x_{2}}{2} x_{5} - \\frac{y_{2} y_{5}}{2} + \\frac{\\sqrt{3}}{2} \\left(3 x_{2} y_{5} + 3 x_{5} y_{2}\\right)
 \\\\ \\qquad
, x_{3} x_{5} + 3 x_{3} y_{5} + 3 x_{5} y_{3} + y_{3} y_{5}, - \\frac{x_{4} x_{5}}{2} + \\frac{5 y_{4}}{2} y_{5} + \\frac{\\sqrt{3}}{2} \\left(3 x_{4} y_{5} + 3 x_{5} y_{4}\\right)
 \\\\ \\qquad
, 0, 4 x_{5} x_{6} - 2 y_{5} y_{6}
 \\\\ \\qquad
, \\lambda_{5} \\left(x_{5}^{2} + y_{5}^{2} - 1\\right)
\\\\
U_{6,j}, x_{0} x_{6} + \\frac{3 x_{0}}{2} y_{6} + \\frac{3 x_{6}}{2} y_{0} + y_{0} y_{6} + \\frac{\\sqrt{3}}{2} \\left(3 x_{0} x_{6} - 3 y_{0} y_{6}\\right)
 \\\\ \\qquad
, \\frac{5 x_{1}}{2} x_{6} - \\frac{y_{1} y_{6}}{2} + \\frac{\\sqrt{3}}{2} \\left(3 x_{1} y_{6} + 3 x_{6} y_{1}\\right), x_{2} x_{6} + 3 x_{2} y_{6} + 3 x_{6} y_{2} + y_{2} y_{6}
 \\\\ \\qquad
, - \\frac{x_{3} x_{6}}{2} + \\frac{5 y_{3}}{2} y_{6} + \\frac{\\sqrt{3}}{2} \\left(3 x_{3} y_{6} + 3 x_{6} y_{3}\\right), x_{4} x_{6} + \\frac{3 x_{4}}{2} y_{6} + \\frac{3 x_{6}}{2} y_{4} + y_{4} y_{6} - \\frac{\\sqrt{3}}{2} \\left(3 x_{4} x_{6} - 3 y_{4} y_{6}\\right)
 \\\\ \\qquad
, - 2 x_{5} x_{6} + 4 y_{5} y_{6}, 0
 \\\\ \\qquad
, \\lambda_{6} \\left(x_{6}^{2} + y_{6}^{2} - 1\\right)
\\\\
      `,
      explanation: "all the terms Uij"
    },
    {
      expression: `
      U=\\Sigma \\Sigma U_ij/2=
      \\\\
\\frac{\\lambda_{0}}{2} \\left(x_{0}^{2} + y_{0}^{2} - 1\\right) + \\frac{\\lambda_{1}}{2} \\left(x_{1}^{2} + y_{1}^{2} - 1\\right) + \\frac{\\lambda_{2}}{2} \\left(x_{2}^{2} + y_{2}^{2} - 1\\right) + \\frac{\\lambda_{3}}{2} \\left(x_{3}^{2} + y_{3}^{2} - 1\\right) + \\frac{\\lambda_{4}}{2} \\left(x_{4}^{2} + y_{4}^{2} - 1\\right) + \\frac{\\lambda_{5}}{2} \\left(x_{5}^{2} + y_{5}^{2} - 1\\right) + \\frac{\\lambda_{6}}{2} \\left(x_{6}^{2} + y_{6}^{2} - 1\\right)
\\\\
+ \\frac{7 x_{0}}{4} x_{1} + \\frac{7 x_{0}}{4} x_{2} + x_{0} x_{3} - \\frac{x_{0} x_{4}}{2} + \\frac{7 x_{0}}{4} x_{5} + \\frac{7 x_{0}}{4} x_{6} - \\frac{3 x_{0}}{2} y_{2} - \\frac{3 x_{0}}{4} y_{4} + \\frac{3 x_{0}}{4} y_{6} + x_{1} x_{2} + x_{1} x_{3} + x_{1} x_{4} + x_{1} x_{5} + x_{1} x_{6} + x_{2} x_{3} + x_{2} x_{4} + x_{2} x_{5}
\\\\
+ x_{2} x_{6} - \\frac{3 x_{2}}{2} y_{0} + x_{3} x_{4} + x_{3} x_{5} + x_{3} x_{6} + x_{4} x_{5} + x_{4} x_{6} - \\frac{3 x_{4}}{4} y_{0} + x_{5} x_{6} + \\frac{3 x_{6}}{4} y_{0} + \\frac{y_{0} y_{1}}{4} + \\frac{y_{0} y_{2}}{4} + y_{0} y_{3} + \\frac{5 y_{0}}{2} y_{4} + \\frac{y_{0} y_{5}}{4} + \\frac{y_{0} y_{6}}{4} + y_{1} y_{2} + y_{1} y_{3}
\\\\
+ y_{1} y_{4} + y_{1} y_{5} + y_{1} y_{6} + y_{2} y_{3} + y_{2} y_{4} + y_{2} y_{5} + y_{2} y_{6} + y_{3} y_{4} + y_{3} y_{5} + y_{3} y_{6} + y_{4} y_{5} + y_{4} y_{6} + y_{5} y_{6} + \\frac{3 \\sqrt{3}}{4} \\left(x_{0} x_{4} - y_{0} y_{4}\\right) + \\frac{3 \\sqrt{3}}{4} \\left(x_{0} x_{6} - y_{0} y_{6}\\right)
\\\\
- \\frac{3 \\sqrt{3}}{4} \\left(x_{0} y_{1} + x_{1} y_{0}\\right) + \\frac{3 \\sqrt{3}}{4} \\left(x_{0} y_{2} + x_{2} y_{0}\\right) - \\frac{3 \\sqrt{3}}{4} \\left(x_{0} y_{5} + x_{5} y_{0}\\right) - \\frac{3 \\sqrt{3}}{4} \\left(x_{0} y_{6} + x_{6} y_{0}\\right)
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
