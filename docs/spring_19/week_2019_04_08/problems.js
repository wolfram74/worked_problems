var problems = [

  {
    location:`NA`,
    description:"contemplating time evolving operators",
    steps:[
    //
    {
      expression: `
      \\frac{dU}{dt} = K U(t),
      K=\\frac{-i}{\\hbar}H
      `,
      explanation: "typical expression for time evolution operator"
    },
    {
      expression: `
      U(t) = U(0) e^{tK}
      \\\\
      \\frac{dU}{dt} = U(0)Ke^{tK}
      \\\\
       U(0)Ke^{tK} = KU(t) \\iff [U(0),K]=0
      `,
      explanation: "The original ansatz is insufficient, we also need U(0) to commute with the hamiltonian for it to be a valid solution to the differential equation."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    description:"Examine the generic two state hamiltonian and find the eigenvalues.",
    steps:[
    {
      expression: `
      \\left[\\begin{matrix}g_{0} + g_{3} & g_{1} - i g_{2}\\\\g_{1} + i g_{2} & g_{0} - g_{3}\\end{matrix}\\right]
      `,
      explanation: "the general 2 state Hamiltonian"
    },
    {
      expression: `
      \\lambda^2-2 g_0 \\lambda +g_0^2-g_r^2
      \\\\
      g_r^2 = g_1^2 + g_2^2 + g_3^2
      `,
      explanation: "the characteristic polynomial for this matrix."
    },
    {
      expression: `
      \\lambda =
      \\frac{1}{2}(2 g_0 \\pm \\sqrt{4g_0^2 - 4(g_0^2-g_r^2)})=
      \\\\
      \\frac{1}{2}(2 g_0 \\pm \\sqrt{4g_r^2})=
      \\\\
      g_0 \\pm g_r`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    description:"Contemplate on the consequences of the time varying magnetic field",
    /*
    sakurai references
    SMR :342-344
    SP :74-77,165-166,324,343
    +20 for pdfs
    e/m*c <> gamma

    */
    steps:[
    {
      expression: `
      B(t) =
      B_0 \\hat z
      +B_1 (
        cos(\\omega_0 t) \\hat x
        +
        sin(\\omega_0 t)\\hat y
        )
      `,
      explanation: "Our time varying magnetic field."
    },
    {
      expression: `
      |n+>
      \\frac{
        \\sqrt{\\cos{\\left (\\theta \\right )} + 1}
      }{2^{1/2}}
      \\left[\\begin{matrix}
      - \\frac{e^{- i \\phi} \\sin{\\left (\\theta \\right )}}{\\cos{\\left (\\theta \\right )} - 1}
      \\\\
       1
      \\end{matrix}\\right]
      `,
      explanation: "The spin up eigenvector after applying the arbitrary spin operator, corresponding to pointing along the angle $&\\theta&$ derived in homework 2."
    },
    {
      expression: `
      |n+(t)> = \\widehat U(t)|n+(0)>
      \\\\
      \\widehat U(t)=Exp[-\\frac{i}{\\hbar} \\widehat H t]
      `,
      explanation: "if our hamiltonian didn't vary in time as pathologically this would be a useful time evolution operator."
    },
    {
      expression: `
      \\widehat U_r = Exp[-\\frac{i}{\\hbar} \\omega \\widehat S_z t]
      \\\\
      |n_r+> = \\widehat U_r |n+>
      \\\\
      \\widehat H_r = -\\gamma (B_0 (1-\\omega/\\omega_0)\\widehat S_z + B_1 \\widehat S_x)
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
    },]
  },
  {
    location:`NA`,
    description:"True false questions",
    steps:[
    {//equation 2.2.18 holds if 2.2.9 holds
      //schrondinger: state evolves in time, operator may also evolve
      //heisenberg: states are static, operator definitely evolves
      expression: `H_H ?= H_S`,
      explanation: "(F) Heisenberg hamiltonian and schrodinger hamiltonian are equivalent when the hamiltonian is constant in time, which is a stronger claim that it commutes with itself at different points in time."
    },
    {
      expression: `
      [ J_1 J_2,  J_1+ J_2]
      =
      J_1 J_2( J_1+ J_2) -( J_1+ J_2) J_1 J_2
      =
      J_1 J_2 J_1+ J_1 J_2 J_2 - J_1 J_1 J_2- J_2 J_1 J_2
      =
      \\\\
      J_3 J_1+ J_1 J_2^2 - J_1^2 J_2- J_2 J_3
      \\neq 0

      `,
      explanation: "(F) the product of two different angular momenta operators do not commute with their sum."
    },
    {
      expression: `-`,
      explanation: "(T) the Sx and Sy matrices are empty along the diaganol, and the Sz matrix has opposite terms in the two spots, so all three have a 0 trace"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
