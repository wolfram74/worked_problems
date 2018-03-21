var problems = [
/*
prob1
  a implement a derivative function to be used in splines
  b plug it into a pre-existing program
  c use interpolation to find maxima and value given data
prob2
  a use 3-point simpsons quadrature for an integral from 0 to 1
    ? h=b-a ?
  b estimate the error and compare with analytic value
    ? error term is largest value of 4th derivative in interval?
prob3
  a implement romberg integration with a convergence detector
  b (3 parts) use integrator on 3 trial functions
    iii will need a change of variables
  c use integrator to generate heat capacity vs temperature graph
*/
  {
    location:`HW#4`,
    description:"Finish the implementation of a cubic spline function and find the interpolated maxima of a sample data set",
    steps:[
    {
      expression: `-`,
      explanation: "respecting the wishes of my instructor on his stance that fortran is partially a collaboration deterrent I only put a modicum of time modifying the hodgepodge. the resulting interpolation is continuous in y, but obviously discontinuous in the first derivative. source available in the appendix."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`HW#4`,
    description:"Evaluate $&\\int_a^b f(x)=dx = \\frac{h}{3}[f(x_0)+4f(x_1)+f(x_2)] - \\frac{h^5}{90}f^{(4)}(\\xi)&$ for the function $&xe^x&$ from 0 to 1",
    steps:[
    {
      expression: `
      \\int_0^1xe^x dx=S
      \\\\
      (x_0,x_1,x_2)=(0, 1/2, 1)
      \\\\
      h=1/2
      \\\\
      f((x_0,x_1,x_2)) = (0, \\sqrt{e}/2, e)
      \\\\
      S \\approx ( 2\\sqrt{e}+ e)/6 \\approx 1.0026
      `,
      explanation: "Our estimated value is close to 1"
    },
    {
      expression: `
      \\frac{h^5}{90}f^{(4)}(\\xi)
      \\\\
      \\frac{1}{2^5 90}(\\partial_x)^4 (xe^x)=
      \\frac{1}{2880} (x+4)e^x
      \\\\
      \\frac{5}{2880} \\approx 0.0047
      \\\\
      \\int_0^1 xe^x dx = 1
      `,
      explanation: "Integral done by look up, we see that the error estimate was conservative as it was larger than the deviation of ~3 parts per hundred we actually got."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`HW#4`,
    description:"Implement a romberg's method integrator. Integrate a number of functions.",
    steps:[
    {
      expression: `-`,
      explanation: "Make file included in source including tests documenting some of behavior."
    },
    {
      expression: `\\int_0^1 e^x dx \\approx e-1`,
      explanation: "simple exponential converges immediately after allowed."
    },
    {
      expression: `\\int_0^1 (sin(8x))^2 dx\\approx pi`,
      explanation: "attains precision at subdividing power of 10"
    },
    {
      expression: `
      \\int_0^\\infty \\frac{e^{-x}}{1+x^2} dx\\approx
      \\\\
      \\int_0^{10^3} \\frac{e^{-x}}{1+x^2} dx \\approx .62145
      \\\\
      x = \\frac{u}{1-u} \\rightarrow dx = \\frac{1}{(1-u)^2} du
      \\\\
      \\int_0^\\infty \\frac{e^{-x}}{1+x^2} dx =
      \\int_0^1 \\frac{e^{-(\\frac{u}{1-u})}}{1+(\\frac{u}{1-u})^2} \\frac{1}{(1-u)^2} du
      \\approx .62145
      `,
      explanation: "Of note, the naive form takes over 200 times longer than the re-cast form."
    },
    {
      expression: `-`,
      explanation: "graph of heat capacity in appendix"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
