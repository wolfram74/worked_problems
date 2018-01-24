var problems = [

  {
    location:`numerical methods handout`,
    description:"take 3 binary strings and convert to 32-bit floating point of the form s-M23-e8 with a bias of 128",
    steps:[
    {
      expression: `1a= 0 00000010 01000000000000000000000`,
      explanation: "raw string"
    },
    // "00000001001000000000000000000000"
    {
      expression: `s=0 \\rightarrow (-1)^0`,
      explanation: "it's a positive number"
    },
    {
      expression: `00000010=2\\rightarrow 2-128=-126`,
      explanation: "exponent is -126"
    },
    {
      expression: `01000000000000000000000=0*2^0+1*2^{-1}+0=0.5`,
      explanation: "mantissa is 0.5"
    },
    {
      expression: `2^{-1-126}`,
      explanation: "is approximately 5.87E-39, compiling string in python produces ~2.94E-38 which differs by a factor of ~5"
    },
    {
      expression: `1b= 1 00000110 00101000000000000000000`,
      explanation: "2nd string"
    },
    {
      expression: `s=1\\rightarrow (-1)^1=-1`,
      explanation: "It's a negative number"
    },
    {
      expression: `e=00000110=4+2=6\\rightarrow 6-128=-122`,
      explanation: "the exponent is -122"
    },
    {
      expression: `M = 00101000000000000000000= 0*2^0+0*2^{-1}+1*2^{-2}+0*2^{-3}+1*2^{-4}+0
      \\\\
      M=2^{-2} + 2^{-4}=5*2^{-4}
      \\\\
      1b = -5*2^{-4-122} = -5*2^{-126}
      `,
      explanation: "the final value is approximately -5.87E-38, compiling string in python produces ~(-4.35E-37) which differs by a factor of ~7"
    },
    {
      expression: `1C = 0 00100000 01000100000000000000000
      \\\\
      0 00011111 10001000000000000000000
      `,
      explanation: "The 3rd number"
    },
    {
      expression: `s=(-1)^0=1`,
      explanation: "positive"
    },
    {
      expression: `e=00100000=2^5=32\\rightarrow e_n=31`,
      explanation: "the exponent"
    },
    {
      expression: `M = 10001000000000000000000 = 2^{-1}+0+0+0+2^{-5}`,
      explanation: "NA"
    },
    {
      expression: `1C = (2^{-1}+2^{-5})*2^{31-128}
      =(2^{-1}+2^{-5})*2^{-97}
      =(2^{-98}+2^{-103})
      `,
      explanation: "or approximately 3.25E-30, compiling in python produces ~3.19E-29 off by a factor of 10"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`numerical methods assignment`,
    description:"convert 329.390625 to a 32-bit floating point number",
    steps:[
    {
      expression: `
      329 = 101001001
      \\\\
      0.390625 = 0.011001
      `,
      explanation: "binary expressions provided for the number"
    },
    {
      expression: `
      101001001.011001=1.01001001011001*2^{8}
      \\rightarrow
      M = 01001001011001
      `,
      explanation: "NA"
    },
    {
      expression: `e-E=8=e-128\\rightarrow e=136=128+8=2^7+2^3=10001000`,
      explanation: "NA"
    },
    {
      expression: `2a=0 10001000 01001001011001`,
      explanation: "A binary expression for 329.390625"
    },
    {
      expression: `
      0.1*2=0.2\\rightarrow 0
      \\\\
      0.2*2=0.4\\rightarrow 0
      \\\\
      0.4*2=0.8\\rightarrow 0
      \\\\
      0.8*2=1.6\\rightarrow 1
      \\\\
      0.6*2=1.2\\rightarrow 1
      \\\\
      0.2*2=0.4\\rightarrow 0
      \\\\
      `,
      explanation: "carrying on the algorithm for the decimal .1 we find ourselves on a loop on the 6th iteration and will continue to get the repeating binarystring '0011'"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`numerical methods assignment`,
    description:"run the powers of golden-mean recurrence relation calculator to determine powers of the golden mean and compare with direct calculation, observe and comment on differences",
    steps:[
    {
      expression: `\\phi_{n,err}=abs(\\phi_{n,recur}-\\phi_{n,direct})/\\phi_{n,direct}`,
      explanation: "Defining a term to capture the relative error at each step of the calculation. In the appendix is a plot of the log of this quantity. We see that the recurrence relation produces numbers exponentially larger diverging from the direct calculation."
    },
    {
      expression: `\\phi^{n+1}=\\phi^{n-1}-\\phi^n`,
      explanation: "That the recurrence relation is subtracting 2 numbers that are within a factor of 3 of each other means the result is mostly depending on the least significant digits so one would not expect it to be particularly reliable. Of interest is that when calculating $&\\phi_{n,recur}/\\phi_{n-1,recur}&$ it does not stay close to $&\\phi&$ as one would expect for a safe calculation but infact converges to $&-\\phi^{-1}&$. a means for predicting this result ab initio would be useful to provide useful heuristics for which calculations are safe or not."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
