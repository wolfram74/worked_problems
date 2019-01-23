var problems = [
/*
steering notes
  find 4th and 5th member for committee
  form committee
  approve program of study
  candidacy exam topic approved and scheduled for fall
  topic by committee/advisor
    format: paper synthesizing content of several related papers and presentation
  thesis proposal

*/
  {
    location:`NA`,
    description:"SO(1,3) is the group of transformations $&\\Lambda&$ such that they are in GL(4), have a determinant of 1 and $&\\Lambda^T \\eta \\Lambda=\\eta&$",
    steps:[
    /*
    show
      Xclosure
      associativity
      identity
      invert ability
    */
    {
      expression: `
      \\Lambda_1\\Lambda_2 = \\Lambda_3
      \\\\
      |A| |B| = |AB|\\rightarrow |\\Lambda_3|=1
      \\\\
      \\Lambda_3^T = \\Lambda_2^T\\Lambda_1^T \\rightarrow
      \\Lambda_3^T \\eta \\Lambda_3
      =
      \\Lambda_2^T\\Lambda_1^T \\eta \\Lambda_1\\Lambda_2
      =
      \\Lambda_2^T \\eta \\Lambda_2
      =
      \\eta
      `,
      explanation: "The determinant continues to be 1 as well as leaving $&\\eta&$ unchanged, so the set is closed under multiplication. $&\\Lambda_i&$ is part of GL(4) and thus are also associative. The identity of $&\\delta_{n,m}&$ exists for 4x4 matrices by inpsection, and"
    },
    {
      expression: `
      det(\\Lambda_{23})=sin(\\theta)^2 + cos(\\theta)^2=1
      \\\\
      det(\\Lambda_{02}) = - \\sinh^{2}{\\left (\\phi \\right )} + \\cosh^{2}{\\left (\\phi \\right )} = 1
      \\\\
      \\Lambda_{23}^T\\eta\\Lambda_{23}
      =
      \\left[\\begin{matrix}-1 & 0 & 0 & 0\\\\0 & 1 & 0 & 0\\\\0 & 0 & \\sin^{2}{\\left (\\theta \\right )} + \\cos^{2}{\\left (\\theta \\right )} & 0\\\\0 & 0 & 0 & \\sin^{2}{\\left (\\theta \\right )} + \\cos^{2}{\\left (\\theta \\right )}\\end{matrix}\\right] =\\eta
      \\\\
      \\Lambda_{02}^T\\eta\\Lambda_{02}
      =
      \\left[\\begin{matrix}\\sinh^{2}{\\left (\\phi \\right )} - \\cosh^{2}{\\left (\\phi \\right )} & 0 & 0 & 0\\\\0 & 1 & 0 & 0\\\\0 & 0 & - \\sinh^{2}{\\left (\\phi \\right )} + \\cosh^{2}{\\left (\\phi \\right )} & 0\\\\0 & 0 & 0 & 1\\end{matrix}\\right]=\\eta
      `,
      explanation: "the determinant is one and returns the metric when applied."
    },
    {
      expression: `
      cos(\\theta) = 1 + O(\\theta^2)
      \\\\
      sin(\\theta) = 1 + \\theta + O(\\theta^2)
      \\\\
      cosh(\\theta) = 1 + O(\\theta^2)
      \\\\
      sinh(\\theta) = 1 + \\theta  + O(\\theta^2)
      \\\\
      \\lambda_{23} =
      \\left[\\begin{matrix}0 & 0 & 0 & 0\\\\0 & 0 & 0 & 0\\\\0 & 0 & 0 & 1\\\\0 & 0 & - 1 & 0\\end{matrix}\\right]
      ,
      \\lambda_{02} =
      \\left[\\begin{matrix}0 & 0 &  1 & 0\\\\0 & 0 & 0 & 0\\\\ 1 & 0 & 0 & 0\\\\0 & 0 & 0 & 0\\end{matrix}\\right]
      \\\\
      \\lambda_{23}^T \\eta + \\eta \\lambda_{23} = \\widehat 0
      \\\\
      \\lambda_{02}^T \\eta + \\eta \\lambda_{02} = \\widehat 0

      `,
      explanation: "satisfying the requirements for so(1,3)"
    },
    {
      expression: `
      (\\lambda_{\\mu \\nu})^{\\rho}_{\\ \\sigma}
      \\equiv
      \\delta_{\\mu}^{\\ \\rho} \\eta_{\\nu  \\sigma}
      -\\delta_{\\nu}^{\\ \\rho} \\eta_{\\mu  \\sigma}
      \\\\
      (\\lambda_{2 3})^{\\rho}_{\\ \\sigma}
      \\equiv
      \\delta_{2}^{\\ \\rho} \\eta_{3  \\sigma}
      -\\delta_{3}^{\\ \\rho} \\eta_{2  \\sigma}
      \\rightarrow
      (\\lambda_{2 3})^{2}_{\\ 3} = 1*1-0*0 =1
      ,
      (\\lambda_{2 3})^{3}_{\\ 2} = 0*0-1*1 =-1
      \\\\
      (\\lambda_{0 2})^{\\rho}_{\\ \\sigma}
      \\equiv
      \\delta_{0}^{\\ \\rho} \\eta_{2  \\sigma}
      -\\delta_{2}^{\\ \\rho} \\eta_{0  \\sigma}
      \\rightarrow
      (\\lambda_{2 3})^{0}_{\\ 2} = 1*1-0*0 =1
      ,
      (\\lambda_{2 3})^{2}_{\\ 0} = 0*0-1*(-1) =1
      `,
      // - delta_nu^rho eta_{mu sig}
      explanation: "the excplicitly calculated $&\\lambda&$s can be derived that way."
    },
    {
      expression: `\\lambda_{\\nu \\mu}\\eta ^{\\mu \\alpha} + \\lambda_{\\mu \\nu}\\eta ^{\\mu \\alpha}`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    description:"starting the with 2nd rank tensor $&T^{\\mu \\nu}&$ and first rank tensor $&V^{\\mu}&$ find the components of various transformations",
    steps:[
    {
      expression: `
      \\eta^{\\alpha \\beta}=\\eta_{\\alpha \\beta}
      =
      \\left[\\begin{matrix}-1 & 0 & 0 & 0\\\\0 & 1 & 0 & 0\\\\0 & 0 & 1 & 0\\\\0 & 0 & 0 & 1\\end{matrix}\\right]
      \\\\
      T^{\\mu}_{-\\nu} =
      T^{\\mu \\beta} \\eta_{\\beta \\nu}
      =

      `,
      explanation: "NA"
    },
    {
      expression: `T^{-\\nu}_{\\mu}`,
      explanation: "NA"
    },
    {
      expression: `
      T^{(\\mu \\nu)}\\equiv (T^{\\mu \\nu}+T^{\\nu \\mu})/2
      \\\\
      \\left[\\begin{matrix}
        2 & 0 & 1 & -1\\\\
        1 & 0 & -3 & 2\\\\
        -1 & 1 & 0 & 0\\\\
        2 & 1 & -1 & 2
      \\end{matrix}\\right]
      +
      \\left[\\begin{matrix}
        2 & 1 & -1 & 2\\\\
        0 & 0 & 1 & 1\\\\
        1 & -3 & 0 & -1\\\\
        -1 & 2 & 0 & 2
      \\end{matrix}\\right]
      =
      \\left[\\begin{matrix}
        4 & 1 & 0 & 1\\\\
        1 & 0 & -2 & 3\\\\
        0 & -2 & 0 & -1\\\\
        1 & 3 & -1 & 4
      \\end{matrix}\\right]
      \\\\
      T^{(\\mu \\nu)}
      =
      \\left[\\begin{matrix}
        2 & 1/2 & 0 & 1/2\\\\
        1/2 & 0 & -1 & 3/2\\\\
        0 & -1 & 0 & -1/2\\\\
        1/2 & 3/2 & -1/2 & 2
      \\end{matrix}\\right]

      `,
      explanation: "The symmetric part of $&T^{\\mu \\nu}&$"
    },
    {
      expression: `T_{[\\mu \\nu]} \\equiv (T_{\\mu \\nu}-T_{\\nu \\mu})/2`,
      explanation: "NA"
    },
    {
      expression: `T^{\\mu}_{-\\mu}`,
      explanation: "NA"
    },
    {
      expression: `
      V^{\\mu}V_{\\mu}
      = V^{\\mu} \\eta_{\\alpha \\mu} V^{\\alpha}
      = (-1)*1+(-2)^2+0^2+2^2=7
      `,
      explanation: "NA"
    },
    {
      expression: `V_{\\mu} T^{\\nu \\mu}`,
      explanation: "NA"
    },
    {
      expression: `T^{\\nu \\mu}V_{\\mu}`,
      explanation: "NA"
    },
    {
      expression: `V_{\\nu} T^{\\nu \\mu}`,
      explanation: "has vector properties"
    },
    {
      expression: `V^{\\nu} T_{\\nu \\mu}`,
      explanation: "has co-vector properties"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
