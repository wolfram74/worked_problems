var problems = [
/*
1(
  stipulate a 2-d action
  the 2-d black hole metric is given
  Xa show that two presented vectors satisfy the killing vector criterion
  look around 5.46 for killing vector notation
  X?b calculate the area of the 2D black hole and thus it's entropy
  Xc
    replace time with a complex time
    and
    verify a coordinate change
    and
    expand the metric around rho=0 to get linear metric
    and
    figure out what it means for time to be periodic
    and
    verify the temperature for 2D blackhole

)
2( finding quasi normal modes (QNM-> w in Z) of 2D BH when hit by scalar wave
  a
    extend klein gordon (KG) equation into GR
    and
    rewrite it
  Xb expand KG eqn from 1a given metric of 2D BH
 ~ c given a function for phi
    and
    radial coordinate transform
    show
    the kg eqn from 2b can be rewritten
    and
    has a particular potential
  ~d show the equivalence between 12 and 13
    given constants listed in 14
  Xe given the cavilcade of coordinate transforms we've made so, far explain why eqn 13 only needs to be analyzed between 0 and 1
  Xf
    given a solution and constraints on valid constants
    show
    the possible frequencies
    and
    explain in the context of eqn9 why this means the solution is damped (expontential decay in time)
)
*/
  {
    //1a, 1b
    location:`NA`,
    description:"first glance at the BTZ metric",
    steps:[
    {
      expression: `
      ds^2 =
      -(
        \\frac{r^2}{L^2} - M
        )
      dt^2
      +(
        \\frac{r^2}{L^2} - M
        )^{-1}
      dr^2
      +
      r^2 d\\theta^2
      `,
      explanation: "The line element for the BTZ black hole"
    },
    {
      expression: `
      g_{tt}
      =-(
        \\frac{r^2}{L^2} - M
        )
      \\\\
      g_{rr}
      =(
        \\frac{r^2}{L^2} - M
        )^{-1}
      \\\
      g_{\\theta \\theta}
      = r^2
      \\\\
      g = det(g_{\\mu \\nu}) =  g_{tt} g_{rr} g_{\\theta \\theta}
      = -r^2
      \\\\
      (-g)^{1/2}=r
      `,
      explanation: "finding the determinant of our metric"
    },
    {
      expression: `
      \\partial_\\mu(r k^\\mu)
      =
      \\partial_\\mu(r) k^\\mu + r \\partial_\\mu(k^\\mu)
      `,
      explanation: "for k = (1,0,0) or (0,0,1) this is by inspection going to equal 0."
    },
    {
      expression: `
      A = \\int_{0}^{2\\pi} (-g)^{1/2}_{r=r_+} d\\theta
      \\\\
      A = \\int_{0}^{2\\pi} r_+ d\\theta = 2\\pi r_+
      \\\\
      S = \\frac{A}{4G} = \\frac{r_+ \\pi}{2G}
      `,
      explanation: "An entropy via argument by fiat."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
