var problems = [

  {
    location:`self given`,
    description:"Supposing a graph with N nodes and nodes are paired together at random, what is the likelihood that a subset of M nodes have a connection internally from one member of set M to another member of set M.",
    steps:[
    {
      expression: `
      P(N,M)=?
      \\\\
      P(N,0)=P(N,1)=0
      \\\\
      P(N,M>N/2)=1
      `,
      explanation: "some obviously true facts about the problem, at M=0 or 1 there aren't enough members of the sub graph to form a pair, so it's impossible, and at M>N/2 there are more members of the sub graph than possible pairs that don't violate our criterion, so it's impossible not to."
    },
    {
      expression: `
      P(N, 2) = \\frac{1}{N-1}
      `,
      explanation: "given two nodes in the subgraph, there's N-1 nodes to connect one of the subgraph nodes to, and only one of them is also in the subgraph."
    },
    {
      expression: `
      P(N,M)_1 = \\frac{M-1}{N-1}
      `,
      explanation: "Given M nodes in the subgraph, the likelihood of connecting the first node to another node in the subgraph is above. If this does not occur, the new graph can be reduced to one with N-2 total nodes, and M-1 nodes in the subgraph."
    },
    {
      expression: `
      \\bar P(N,M)_2
      = (1-P(N,M)_1)(1-P(N-2, M-1)_1)
      = (1-\\frac{M-1}{N-1})(1-\\frac{M-2}{N-3})
      `,
      explanation: "The likelihood of not connecting two members of the subgraph on the first two connections."
    },
    {
      expression: `
      \\bar P(N,M)
      = \\Pi_{j=0}^{M-1} (1-P(N-2j,M-j)_1)
      = \\Pi_{j=0}^{M-1} (1-\\frac{M-1-j}{N-1-2j})
      `,
      explanation: "The likelihood of not joining any 2 members of subgraph after making all the pairs. Numerical explorations seem to point towards smaller and smaller relative sub graphs being needed to get 50/50 chance of self connection"
    },
    {
      expression: `
      ln(\\bar P(N,M)) =
      \\Sigma_{j=0}^{M-1} ln(1-\\frac{M-1-j}{N-1-2j})
      `,
      explanation: "Possible step towards closed form solution, use contour integral to compactify?"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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

  {3
    location:`self`,
    description:"generic symmetry central force problem, bounded-ness and perturbation",
    steps:[
    {
      expression: `
      L = T-U
      \\\\
      T = \\frac{1}{2}(mr^2\\dot \\theta^2 + m \\dot r^2)
      \\\\
      U = \\alpha r^n
      `,
      explanation: "Our starting lagrangian"
    },
    {
      expression: `
      p_\\theta = mr^2\\dot \\theta, p_r = m \\dot r
      \\\\
      \\dot \\theta = \\frac{p_\\theta}{mr^2}
      `,
      explanation: "Our momenta"
    },
    {
      expression: `
      H =
      \\frac{1}{2m}(\\frac{p_\\theta^2}{r^2} + p_r^2)
       +\\alpha r^n
      `,
      explanation: "Hamiltonian."
    },
    {
      expression: `
      -\\partial_q H = \\dot p_q \\therefore \\dot p_\\theta=0
      `,
      explanation: "a conserved quantity, independent of n, our only free variables are r and pr"
    },
    {
      expression: `
      -\\partial_r H = -\\alpha n r^{n-1} + \\frac{p_\\theta^2}{m}r^{-3}
      \\\\
      \\dot p_r=0 \\rightarrow
      \\frac{p_\\theta^2}{m}r^{-3} = \\alpha n r^{n-1}
      \\\\
      p_\\theta^2 = \\alpha n m r^{n+2}
      \\\\
      p_{\\theta 0} = (\\alpha n m)^{1/2} r^{n/2+1}
      \\\\
      \\dot \\theta_{0}
      =
      \\frac{p_{\\theta 0}}{mr^2}
      =
      r^{n/2-1}\\frac{(\\alpha n)^{1/2}}{m^{1/2}}
      `,
      explanation: "we note for a real angular momentum one constraint is that $&\\alpha n>0&$. For n=-1 we get the expected inverse 3/2 dependence between radius and angular velocity."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
