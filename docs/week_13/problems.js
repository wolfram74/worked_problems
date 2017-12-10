var problems = [

  {
    location:`self posed`,
    description:"Take maxwells equations, suppose spatially inhomogeneous permetivity, permeability and conductivity and derive the wave equation",
    steps:[
    {
      expression: `
      \\nabla \\cdot \\vec D = \\rho_{f}, \\nabla \\cdot \\vec B = 0
      \\\\
      \\nabla \\times \\vec E = -\\partial_t \\vec B,
      \\nabla \\times \\vec H = \\vec J_{f} + \\partial_t \\vec D
      \\\\
      \\vec D = \\epsilon \\vec E,
      \\vec H = \\frac{1}{\\mu} \\vec B,
      \\vec J_f = \\sigma_c \\vec E,
      \\\\
      \\dot \\rho_f+\\nabla \\cdot \\vec J_f = 0
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
    },
    {
      expression: `NA`,
      explanation: "NA"
    },]
  },
    //12.1√, 12.2~, 12.9, 12.15, 12.17
    //custom probs 1a√, 1b√, 2√, 3√, 4
  {
    location:`Riley Mathematical methods 12.1`,
    description:"verify $&\\rho(z)=k+z^2/(4k)&$ minimizes the surface integral $&\\int \\rho^{-1/2}dS&$ subject to boundaries of joining 2 circles of radius a at distances c away from the origin along the z axis.",
    steps:[
    {
      expression: `dS=2\\pi \\rho ((dz)^2+(ds)^2)^{1/2}`,
      explanation: "an expression for the area element approximating it is an infinitesimal slice of cylinder"
    },
    {
      expression: `((dz)^2+(ds)^2)^{1/2} = dz(1+(\\frac{ds}{dz})^2)^{1/2}=dz(1+\\rho'^2)^{1/2}`,//'
      explanation: "pulling the dz element out from the differential element"
    },
    {
      expression: `
        \\int \\rho^{-1/2}dS=\\\\
        \\int \\rho^{-1/2}2\\pi \\rho(1+\\rho'^2)^{1/2}dz=\\\\
        2\\pi \\int \\rho^{1/2}(1+\\rho'^2)^{1/2}dz
      `,
      explanation: "substituting our dz element in for the dS element, we take note that the integrand is constant in z"
    },
    {
      expression: `
        F = \\rho^{1/2}(1+\\rho'^2)^{1/2}
        \\\\
        F-\\rho' \\partial_{\\rho'} F = \\gamma
        \\\\
        \\rho^{1/2}(1+\\rho'^2)^{1/2}
        -\\rho' \\frac{\\rho'\\rho^{1/2}}{(1+\\rho'^2)^{1/2}} = \\gamma
        \\\\
        \\frac{\\rho^{1/2}(1+\\rho'^2)}{(1+\\rho'^2)^{1/2}}
        - \\frac{\\rho'^2\\rho^{1/2}}{(1+\\rho'^2)^{1/2}} = \\gamma
        \\\\
        \\frac{\\rho^{1/2}+\\rho'^2\\rho^{1/2}}{(1+\\rho'^2)^{1/2}}
        - \\frac{\\rho'^2\\rho^{1/2}}{(1+\\rho'^2)^{1/2}} = \\gamma
        \\\\
        \\frac{\\rho^{1/2}}{(1+\\rho'^2)^{1/2}} = \\gamma
        \\\\
        \\frac{\\rho}{(1+\\rho'^2)} = \\gamma^2, \\rho = \\gamma^2(1+\\rho'^2)
      `,
      explanation: "The simplified euler lagrange equation that must be satisfied to find extrema of our surface."
    },
    {
      expression: `\\rho(z)=k+z^2/(4k), \\rho' = z/2k`,//'
      explanation: "the guess we'll be inserting into the euler lagrang equation"
    },
    {
      expression: `
        k+z^2/(4k) =
        \\gamma^2(1+(z/2k)^2)
        \\\\
        k+z^2/(4k) =
        \\gamma^2(1+z^2/4k^2)
        \\\\
      `,
      explanation: "if $&\\gamma^2=k&$ then the guessed expression for $&\\rho&$ satisfies the euler lagrange equation and will be an extremal curve."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`Handout from dr. Fejer`,
    description:"Find the extremal curve and stationary values for $&\\int_0^{\\pi/2}(y'^2+2yx-y^2)dx&$ with boundary values of y of 0 and pi/2",
    steps:[
    {
      expression: `
      F=(y'^2+2yx-y^2)
      \\\\
      \\partial_yF-\\frac{d}{dx}(\\partial_{y'}F)=0
      \\\\
      2x-2y-\\frac{d}{dx}(2y')=0
      \\\\
      2x-2y-2y''=0
      `,//'
      explanation: "Euler lagrange equation for this integrand"
    },
    {
      expression: `y=x, y''=0
      \\\\
      2x-2(x)-2(0)=0
      `,
      explanation: "a curve that satisfies the euler lagrange equation"
    },
    {
      expression: `
      \\int_0^{\\pi/2}(y'^2+2yx-y^2)dx=
      \\\\
      \\int_0^{\\pi/2}(1^2+2*x*x-x^2)dx=
      \\\\
      \\int_0^{\\pi/2}(1+x^2)dx=
      \\\\
      (x+x^3/3)|_0^{\\pi/2}=
      (\\pi/2+(\\pi/2)^3/3)=
      \\frac{\\pi}{2}(1+\\frac{\\pi^2}{12})
      `,//'
      explanation: "evaluatiing the extremal curve to find the extremal value"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`Handout from Dr. Fejer`,
    description:"Find the extremal curve and stationary values for $&\\int_0^{\\pi}(2 y sin(x)+y'^2)dx&$ with boundary values of y of pi and 0",
    steps:[
    {
      expression: `
        F=2ysin(x)+y'^2
        \\\\
        \\partial_yF - \\frac{d}{dx}(\\partial_{y'}F)=0
        \\\\
        2sin(x) - \\frac{d}{dx}(2y')=0
        \\\\
        2sin(x) - 2y''=0=sin(x) - y''
        `,//'
      explanation: "the euler lagrange equation that needs satisfying"
    },
    {
      expression: `
        y=-sin(x)+mx+b \\rightarrow y''=sin(x)
        \\\\
        y(0)=\\pi \\rightarrow b=\\pi
        \\\\
        y(\\pi)=0 \\rightarrow m=-1
        \\\\
        y=\\pi-sin(x)-x, y'=-cos(x)-1
        `,//'
      explanation: "The extremal curve satisfying the euler lagrange equations and boundary conditions"
    },
    {
      expression: `
        I=\\int_0^{\\pi}(2 y sin(x)+y'^2)dx=
        \\\\
        \\int_0^{\\pi}(2 (\\pi-sin(x)-x) sin(x)+(-cos(x)-1)^2)dx=
        \\\\
        \\int_0^{\\pi}(
          2 \\pi sin(x)-2sin(x)^2-2xsin(x)
          +cos(x)^2+1-2cos(x)
          )dx
        \\\\
        cos(x)^2+1-2sin(x)^2=
        cos(x)^2+1-2sin(x)^2+sin(x)^2-sin(x)^2=
        2-3sin(x)^2
        \\\\
        I=\\int_0^{\\pi}(
          2-3sin(x)^2
          +2 \\pi sin(x)-2cos(x)
          -2xsin(x)
          )dx=\\frac{5}{2}\\pi
      `,//'
      explanation: "The extremal value for the integrand with these boundary conditions"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`Riley Mathematical methods problem 12.2`,
    description:"verify the extremal value of $&\\int_{-1}^1\\frac{(1+y'^2)^{1/2}}{y}dx&$ is $&2ln(1+\\sqrt{2})&$ with boundary conditions of y(-1)=y(1)=1 ",
    steps:[
    {
      expression: `
        F=\\frac{(1+y'^2)^{1/2}}{y}=(1+y'^2)^{1/2}y^{-1}
        \\\\
        \\partial_yF -\\frac{d}{dx}(\\partial_{y'}F)=0
        \\\\
        -(1+y'^2)^{1/2}y^{-2} -\\frac{d}{dx}(2y'(1+y'^2)^{-1/2}y^{-1})=0
        \\\\
        -(1+y'^2)^{1/2}y^{-2} -
        \\frac{2y*y''-4y'^4-4y'^2}{
          y^3(y'^2+1)^{3/2}
        }=0
      `,
      explanation: "The euler lagran equation to solve, it is ugly."
    },
    {
      expression: `
        F-y'\\partial_{y'}F=\\gamma
        \\\\
        (1+y'^2)^{1/2}y^{-1} -
        y'2y'(1+y'^2)^{-1/2}y^{-1}=\\gamma
        \\\\
        (1+y'^2)^{1/2} -
        2y'^2(1+y'^2)^{-1/2}=\\gamma y
        \\\\
        1+y'^2 -
        2y'^2=\\gamma y(1+y'^2)^{1/2}
        \\\\
        1-y'^2
        =\\gamma y(1+y'^2)^{1/2}
        \\\\
        y = \\beta \\frac{1-y'^2}{(1+y'^2)^{1/2}}
      `,
      explanation: "taking advantage of no explicit x dependence to make a simpler euler lagrange equation"
    },
    {
      expression: `
        1-y'^2
        =\\gamma y(1+y'^2)^{1/2}
        \\\\
        1+y'^4-2y'^2
        =
        \\gamma^2 y^2 (1+y'^2)
        \\\\
        y'^4-y'^2(2+\\gamma^2 y^2)
        =
        \\gamma^2 y^2 -1
        \\\\
        y'^4
        -y'^2(2+\\gamma^2 y^2)
        -(\\gamma^2 y^2 -1)
        =
        0
        \\\\
        u=y'^2 \\rightarrow u =
        \\frac{
          (2+\\gamma^2 y^2)\\pm \\sqrt{(2+\\gamma^2 y^2)^2+4 (\\gamma^2 y^2 -1)}
        }{
          2
        }
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
    },]
  },
  {
    location:`From handout from Dr. Fejer`,
    description:"Find the extremal curve associated with $&\\int_0^1(\\frac{y'^2}{1+y^2})dx&$ with boundary conditions of y(0)=0 and y(1)=2",
    steps:[
    {
      expression: `
      F= \\frac{y'^2}{1+y^2}
      \\\\
      F -y'\\partial_{y'}F=c
      \\\\
      \\frac{y'^2}{1+y^2} -y'\\frac{2y'}{1+y^2}=c
      \\\\
      \\frac{y'^2}{1+y^2} -\\frac{2y'^2}{1+y^2}=c
      \\\\
      -\\frac{y'^2}{1+y^2}=c
      \\\\
      -y'^2=c(1+y^2)
      \\\\
      y'=-c(1+y^2)^{1/2}
      `,//'
      explanation: "the euler lagrange equation needed to satisfy for extremizing the integral."
    },
    {
      expression: `
      y'=-c(1+y^2)^{1/2}
      \\\\
      \\int (1+y^2)^{1/2} dy = -\\int c dx
      \\\\
      asinh(y) = -cx+b
      \\\\
      y = sinh(-cx+b)
      \\\\
      y(0)=0 \\rightarrow b=0
      \\\\
      y(1)=2 \\rightarrow -c=asinh(2)
      \\\\
      y(x) = sinh(asinh(2)x)
      `,//'
      explanation: "finding the form of the extremal curve and fitting it to boundary conditions"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`Dr. Fejer handout`,
    description:"extremize the integral $&\\int_0^{\\pi/2}(y'^2+2xyy')dx&$ subject to the constraints y(0)=0, $&y(\\pi/2)=1&$ and $&\\int_0^{\\pi/2} ydx = \\pi/2 -1&$",
    steps:[
    {
      expression: `
      F+kG=y'^2+2xyy'+ky
      \\\\
      \\partial_yF + k\\partial_yG - \\frac{d}{dx}\\partial_{y'}F -k \\frac{d}{dx}\\partial_{y'}G=0
      \\\\
      2xy' + k(1) - \\frac{d}{dx}(2y'+2xy) -k \\frac{d}{dx}(0)=0
      \\\\
      2xy' + k - 2y'' - 2y - 2xy'=0
      \\\\
      k - 2y'' - 2y=0
      \\\\
      k = 2y'' + 2y
      \\\\
      k/2 = l = y'' + y
      `,
      explanation: "the joint euler lagrange equation for the constraint"
    },
    {
      expression: `
      y=Acos(x)+Bsin(x)+ l
      `,
      explanation: "The general form of solutions to that equation"
    },
    {
      expression: `
      \\int_0^{\\pi/2} ydx = \\pi/2 -1
      \\\\
      \\pi/2 -1=
      \\int_0^{\\pi/2} Acos(x)+Bsin(x)+ l dx =
      \\\\
      (Asin(x)-Bcos(x)+ lx)|_0^{\\pi/2} =
      \\\\
      (A(1)-B(0)+ l(\\pi/2))-(A(0)-B(1)+ l0) =\\pi/2 -1
      \\\\
      A+ l(\\pi/2) + B =\\pi/2 -1
      `,
      explanation: "The integral constraint on the parameters"
    },
    {
      expression: `
      y=Acos(x)+Bsin(x)+ l
      \\\\
      y(0)=0 \\rightarrow A+l=0
      \\\\
      y(\\pi/2)=1 \\rightarrow B+l=1
      `,
      explanation: "The boundary constraints on the parameters"
    },
    {
      expression: `y=-cos(x)+0sin(x)+ 1`,
      explanation: "The specific solution for y satisfying the boundary conditions"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
