var problems = [

  {
    location:`research`,
    description:"specify the geometry for the filled hexagon. Assumes spheres are diameter $&l&$",
    steps:[
    {
      expression: `
      U_{i,j}=
      -\\frac{\\mu_0}{4\\pi}
      \\frac{\\mu_i \\mu_j}{2}
      \\frac{1}{r_{i,j}^3}
      [cos(\\phi_i-\\phi_j)+3cos(\\phi_i+\\phi_j-2\\theta_{i,j})]
      `,
      explanation: "potential energy for two spheres, i, j. Central sphere is index 0 and outter 6 range 1 to 6, counter clockwise starting from the +x axis. See diagram at bottom."
    },
    {
      expression: `
      r_{i,j}=r_{j,i}
      \\\\
      r_{0,i}=l
      \\\\
      r_{i-j\\%6=1,5}=l
      \\\\
      r_{i-j\\%6=2,4}=3^{1/2}l
      \\\\
      r_{i-j\\%6=3}=2l
      `,
      explanation: "the radial terms given our symmetry."
    },
    {
      expression: `
      \\theta_{i,j} \\neq \\theta_{j,i}
      \\\\
      \\theta_{0,i} = 2 (i-1) \\pi/6
      \\\\
      |\\theta_{i,j}| + |\\theta_{j,i}| = \\pi
      \\\\
      \\theta_{i,j} =
      \\frac{(1+2i+(j-i)\\%6)\\%12}
      {6}\\pi
      `,
      explanation: "NA"
    },
    {
      expression: `
U_{0,j}, 0
 \\\\ \\qquad
, \\gamma \\left(\\cos{\\left (\\phi_{0} - \\phi_{1} \\right )} + 3 \\cos{\\left (\\phi_{0} + \\phi_{1} \\right )}\\right), \\gamma \\left(\\cos{\\left (\\phi_{0} - \\phi_{2} \\right )} - 3 \\cos{\\left (\\phi_{0} + \\phi_{2} + \\frac{\\pi}{3} \\right )}\\right)
 \\\\ \\qquad
, \\gamma \\left(- 3 \\sin{\\left (\\phi_{0} + \\phi_{3} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{0} - \\phi_{3} \\right )}\\right), \\gamma \\left(\\cos{\\left (\\phi_{0} - \\phi_{4} \\right )} + 3 \\cos{\\left (\\phi_{0} + \\phi_{4} \\right )}\\right)
 \\\\ \\qquad
, \\gamma \\left(\\cos{\\left (\\phi_{0} - \\phi_{5} \\right )} - 3 \\cos{\\left (\\phi_{0} + \\phi_{5} + \\frac{\\pi}{3} \\right )}\\right), \\gamma \\left(- 3 \\sin{\\left (\\phi_{0} + \\phi_{6} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{0} - \\phi_{6} \\right )}\\right)
 \\\\ \\qquad

\\\\
U_{1,j}, \\gamma \\left(\\cos{\\left (\\phi_{0} - \\phi_{1} \\right )} - 3 \\cos{\\left (\\phi_{0} + \\phi_{1} + \\frac{\\pi}{3} \\right )}\\right)
 \\\\ \\qquad
, 0, \\gamma \\left(- 3 \\sin{\\left (\\phi_{1} + \\phi_{2} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{1} - \\phi_{2} \\right )}\\right)
 \\\\ \\qquad
, \\frac{\\sqrt{3} \\gamma}{9} \\left(\\cos{\\left (\\phi_{1} - \\phi_{3} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{3} + \\frac{\\pi}{3} \\right )}\\right), \\frac{\\gamma}{8} \\left(\\cos{\\left (\\phi_{1} - \\phi_{4} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{4} \\right )}\\right)
 \\\\ \\qquad
, \\frac{\\sqrt{3} \\gamma}{9} \\left(3 \\sin{\\left (\\phi_{1} + \\phi_{5} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{1} - \\phi_{5} \\right )}\\right), \\gamma \\left(\\cos{\\left (\\phi_{1} - \\phi_{6} \\right )} - 3 \\cos{\\left (\\phi_{1} + \\phi_{6} + \\frac{\\pi}{3} \\right )}\\right)
 \\\\ \\qquad

\\\\
U_{2,j}, \\gamma \\left(\\cos{\\left (\\phi_{0} - \\phi_{2} \\right )} - 3 \\cos{\\left (\\phi_{0} + \\phi_{2} \\right )}\\right)
 \\\\ \\qquad
, \\gamma \\left(- 3 \\sin{\\left (\\phi_{1} + \\phi_{2} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{1} - \\phi_{2} \\right )}\\right), 0
 \\\\ \\qquad
, \\gamma \\left(\\cos{\\left (\\phi_{2} - \\phi_{3} \\right )} + 3 \\cos{\\left (\\phi_{2} + \\phi_{3} \\right )}\\right), \\frac{\\sqrt{3} \\gamma}{9} \\left(3 \\sin{\\left (\\phi_{2} + \\phi_{4} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{2} - \\phi_{4} \\right )}\\right)
 \\\\ \\qquad
, \\frac{\\gamma}{8} \\left(\\cos{\\left (\\phi_{2} - \\phi_{5} \\right )} - 3 \\cos{\\left (\\phi_{2} + \\phi_{5} + \\frac{\\pi}{3} \\right )}\\right), \\frac{\\sqrt{3} \\gamma}{9} \\left(\\cos{\\left (\\phi_{2} - \\phi_{6} \\right )} - 3 \\cos{\\left (\\phi_{2} + \\phi_{6} \\right )}\\right)
 \\\\ \\qquad

\\\\
U_{3,j}, \\gamma \\left(- 3 \\sin{\\left (\\phi_{0} + \\phi_{3} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{0} - \\phi_{3} \\right )}\\right)
 \\\\ \\qquad
, \\frac{\\sqrt{3} \\gamma}{9} \\left(\\cos{\\left (\\phi_{1} - \\phi_{3} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{3} + \\frac{\\pi}{3} \\right )}\\right), \\gamma \\left(\\cos{\\left (\\phi_{2} - \\phi_{3} \\right )} + 3 \\cos{\\left (\\phi_{2} + \\phi_{3} \\right )}\\right)
 \\\\ \\qquad
, 0, \\gamma \\left(\\cos{\\left (\\phi_{3} - \\phi_{4} \\right )} - 3 \\cos{\\left (\\phi_{3} + \\phi_{4} + \\frac{\\pi}{3} \\right )}\\right)
 \\\\ \\qquad
, \\frac{\\sqrt{3} \\gamma}{9} \\left(\\cos{\\left (\\phi_{3} - \\phi_{5} \\right )} - 3 \\cos{\\left (\\phi_{3} + \\phi_{5} \\right )}\\right), \\frac{\\gamma}{8} \\left(- 3 \\sin{\\left (\\phi_{3} + \\phi_{6} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{3} - \\phi_{6} \\right )}\\right)
 \\\\ \\qquad

\\\\
U_{4,j}, \\gamma \\left(\\cos{\\left (\\phi_{0} - \\phi_{4} \\right )} + 3 \\cos{\\left (\\phi_{0} + \\phi_{4} + \\frac{\\pi}{3} \\right )}\\right)
 \\\\ \\qquad
, \\frac{\\gamma}{8} \\left(\\cos{\\left (\\phi_{1} - \\phi_{4} \\right )} + 3 \\cos{\\left (\\phi_{1} + \\phi_{4} \\right )}\\right), \\frac{\\sqrt{3} \\gamma}{9} \\left(3 \\sin{\\left (\\phi_{2} + \\phi_{4} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{2} - \\phi_{4} \\right )}\\right)
 \\\\ \\qquad
, \\gamma \\left(\\cos{\\left (\\phi_{3} - \\phi_{4} \\right )} - 3 \\cos{\\left (\\phi_{3} + \\phi_{4} + \\frac{\\pi}{3} \\right )}\\right), 0
 \\\\ \\qquad
, \\gamma \\left(- 3 \\sin{\\left (\\phi_{4} + \\phi_{5} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{4} - \\phi_{5} \\right )}\\right), \\frac{\\sqrt{3} \\gamma}{9} \\left(\\cos{\\left (\\phi_{4} - \\phi_{6} \\right )} + 3 \\cos{\\left (\\phi_{4} + \\phi_{6} + \\frac{\\pi}{3} \\right )}\\right)
 \\\\ \\qquad

\\\\
U_{5,j}, \\gamma \\left(\\cos{\\left (\\phi_{0} - \\phi_{5} \\right )} + 3 \\cos{\\left (\\phi_{0} + \\phi_{5} \\right )}\\right)
 \\\\ \\qquad
, \\frac{\\sqrt{3} \\gamma}{9} \\left(3 \\sin{\\left (\\phi_{1} + \\phi_{5} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{1} - \\phi_{5} \\right )}\\right), \\frac{\\gamma}{8} \\left(\\cos{\\left (\\phi_{2} - \\phi_{5} \\right )} - 3 \\cos{\\left (\\phi_{2} + \\phi_{5} + \\frac{\\pi}{3} \\right )}\\right)
 \\\\ \\qquad
, \\frac{\\sqrt{3} \\gamma}{9} \\left(\\cos{\\left (\\phi_{3} - \\phi_{5} \\right )} - 3 \\cos{\\left (\\phi_{3} + \\phi_{5} \\right )}\\right), \\gamma \\left(- 3 \\sin{\\left (\\phi_{4} + \\phi_{5} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{4} - \\phi_{5} \\right )}\\right)
 \\\\ \\qquad
, 0, \\gamma \\left(\\cos{\\left (\\phi_{5} - \\phi_{6} \\right )} + 3 \\cos{\\left (\\phi_{5} + \\phi_{6} \\right )}\\right)
 \\\\ \\qquad

\\\\
U_{6,j}, \\gamma \\left(3 \\sin{\\left (\\phi_{0} + \\phi_{6} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{0} - \\phi_{6} \\right )}\\right)
 \\\\ \\qquad
, \\gamma \\left(\\cos{\\left (\\phi_{1} - \\phi_{6} \\right )} - 3 \\cos{\\left (\\phi_{1} + \\phi_{6} + \\frac{\\pi}{3} \\right )}\\right), \\frac{\\sqrt{3} \\gamma}{9} \\left(\\cos{\\left (\\phi_{2} - \\phi_{6} \\right )} - 3 \\cos{\\left (\\phi_{2} + \\phi_{6} \\right )}\\right)
 \\\\ \\qquad
, \\frac{\\gamma}{8} \\left(- 3 \\sin{\\left (\\phi_{3} + \\phi_{6} + \\frac{\\pi}{6} \\right )} + \\cos{\\left (\\phi_{3} - \\phi_{6} \\right )}\\right), \\frac{\\sqrt{3} \\gamma}{9} \\left(\\cos{\\left (\\phi_{4} - \\phi_{6} \\right )} + 3 \\cos{\\left (\\phi_{4} + \\phi_{6} + \\frac{\\pi}{3} \\right )}\\right)
 \\\\ \\qquad
, \\gamma \\left(\\cos{\\left (\\phi_{5} - \\phi_{6} \\right )} + 3 \\cos{\\left (\\phi_{5} + \\phi_{6} \\right )}\\right), 0
 \\\\ \\qquad      `,
      explanation: "final potential"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
