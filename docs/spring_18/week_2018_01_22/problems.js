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
      expression: `0 00100000 01000100000000000000000`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
      expression: `e-E=8=e-128\\rightarrow e=136=128+8=2^7+2^3`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
