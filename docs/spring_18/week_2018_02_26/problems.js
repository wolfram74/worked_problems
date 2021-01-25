var problems = [
/*
thoughts on problem 2
  write function that takes as inputs vectors length n+1 values and locations of value (y and x) and query location
  returns vector with first value being interpolated value and rest is some kind of error estimate?
thoughts on problem 3
  will need:
    a dot product for 2 vectors
    a magnitude of 1 vector
    a mag-delta between two vectors
  have:
    9 unknowns
    8 equations
      define a 8x9 matrix
*/
  {
    location:`from Numerical Methods handout`,
    description:"state the error estimate for a linear fit. Calcuate the error estimate associated with estimating $&e^x&$ as a quadratic based on values from x=(0, .1, .3) when interpolating the value at x=.2",
    steps:[
    {
      expression: `
      f(x)-P_n(x) = \\frac{1}{(n+1)!}f^{n+1}(\\xi) \\Pi_{i=0}^n(x-x_i)
      `,
      explanation: "The general error estimate expression. We'll be interested in cases of n=1 and n=2."
    },
    {
      expression: `
      f(x)-P_1(x) \\approx \\frac{1}{(1+1)!}f^{1+1}(\\xi) \\Pi_{i=0}^1(x-x_i)
      \\\\
      = \\frac{1}{2}f^{2}(\\xi) (x-x_0)(x-x_1)
      `,
      explanation: "Where f is an assertion about the function we are interpolating. To be most pessimistic about our interpolation, we should choose the largest value of the second derivative of f within our range."
    },
    {
      expression: `
      f(x)-P_2(x) \\approx \\frac{1}{(2+1)!}f^{2+1}(\\xi) \\Pi_{i=0}^2(x-x_i)
      \\\\
      =\\frac{1}{6}f^{3}(\\xi) \\Pi_{i=0}^2(x-x_i)
      \\\\
      \\partial_x^3 (e^x)=e^x
      \\\\
      E(x)=e^{\\xi}*(x-0)(x-.1)(x-.3)/6
      \\\\
      E(x)=e^{\\xi}*(.2-0)(.2-.1)(.2-.3)/6
      \\\\
      E(x)=e^{\\xi}*(.2)(.1)(-.1)/6=e^{\\xi}*(-3.3*10^{-4})
      \\\\
      E_{min} =(-3.3*10^{-4}), E_{max} =(-4.5*10^{-4})
      `,
      explanation: "1.2218 vs 1.2214"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`from Numerical Methods handout`,
    description:"Implement neville's algorithm",
    steps:[
    {
      expression: `.`,
      explanation: "to run on a *nix machine, go to your shell and enter the command 'make -version', if something is returned then while in the directory 'neville_algo' the command 'make clean; make; ./use_neville.ken' should execute the relevant built program."
    },
    {
      expression: `f(x)-P_n(x) = \\frac{1}{(n+1)!}f^{n+1}(\\xi) \\Pi_{i=0}^n(x-x_i)=
      \\\\
      \\frac{1}{(n+1)!}f^{n+1}(\\xi) \\Pi_{i=0}^n(x-x_i)
      `,
      explanation: "The estimated errors in our case agree for $&5\\pi/4&$ fairly well, but Cn and the error estimate formula disagree for the point $&\\pi/4&$."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`from Numerical Methods handout`,
    description:"Implement Kaczmarz algorithm for finding solutions to under-defined equations",
    steps:[
    {
      expression: `
      \\vec \\delta = \\vec s-\\vec g
      \\\\
      error=\\frac{2*|\\delta|}{|s|+|g|}
      `,
      explanation: "the procedure for running kaczmarz is similar to running neville's. Kaczmarz algorithm produces a vector which when put through the matrix in question should produce a vector very close to the constraints in question [$&\\vec s&$], the approximation is referred to as a guess vector g. an error is defined in terms of the delta between the guessed and the actual constraints. In the appendix is included a graph where the error is plotted as a function of iterations of the algorithm run. As the slope of the log-log plot appears to be positive, we infer that the algorithm converges super-polynomially."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
/*


*/
