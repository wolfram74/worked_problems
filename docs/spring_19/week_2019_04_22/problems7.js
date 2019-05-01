problems.push(
  {
    location:`part g`,
    description:"find the expected ratio of dipole moments for the proton and neutron",
    steps:[
    {
      //key fact that leads to non-zero spins is u= 2/3 e and d=-1/3 e
      expression: `
      |p \\uparrow>
      =
      \\frac{1}{6^{1/2}}(
        2|u \\uparrow u \\uparrow d \\downarrow>
        -
        |u \\uparrow u \\downarrow d \\uparrow>
        -
        |u \\downarrow u \\uparrow d \\uparrow>
        )
      \\\\
      |n \\uparrow>
      =
      \\frac{1}{6^{1/2}}(
        2|d \\uparrow d \\uparrow u \\downarrow>
        -
        |d \\uparrow d \\downarrow u \\uparrow>
        -
        |d \\downarrow d \\uparrow u \\uparrow>
        )
      `,
      explanation: "building our proton and neutron out of quarks."
    },
    {
      expression: `
      <\\mu_p> = <p \\uparrow| \\mu_z |p \\uparrow>
      \\\\
      =
      \\frac{1}{6}
      (
        4<u \\uparrow u \\uparrow d \\downarrow|
        \\mu_z
        |u \\uparrow u \\uparrow d \\downarrow>
        +
        <u \\uparrow u \\downarrow d \\uparrow|
        \\mu_z
        |u \\uparrow u \\downarrow d \\uparrow>
        +
        <u \\downarrow u \\uparrow d \\uparrow|
        \\mu_z
        |u \\downarrow u \\uparrow d \\uparrow>
        )
      \\\\
      =
      \\frac{\\gamma}{6}
      (
        4 (+2/3+2/3+1/3)
        +
        (2/3-2/3-1/3)
        +
        (-2/3+2/3-1/3)
        )
      \\\\
      =
      \\frac{\\gamma}{6}
      (
        20/3
        -
        1/3
        -
        1/3
        )
      =
      \\frac{\\gamma}{6}
      6
      `,
      explanation: "the expectation dipole moment for the proton"
    },
    {
      expression: `
      <\\mu_n> = <n \\uparrow| \\mu_z |n \\uparrow>
      \\\\
      =
      \\frac{1}{6}
      (
        4<d \\uparrow d \\uparrow u \\downarrow|
        \\mu_z
        |d \\uparrow d \\uparrow u \\downarrow>
        +
        <d \\uparrow d \\downarrow u \\uparrow|
        \\mu_z
        |d \\uparrow d \\downarrow u \\uparrow>
        +
        <d \\downarrow d \\uparrow u \\uparrow|
        \\mu_z
        |d \\downarrow d \\uparrow u \\uparrow>
        )
      \\\\
      =
      \\frac{\\gamma}{6}
      (
        4(-1/3 -1/3 -2/3)
        +
        (-1/3 +1/3 +2/3)
        +
        (+1/3 -1/3 +2/3)
        )
      \\\\
      =
      \\frac{\\gamma}{6}
      (
        -16/3
        +2/3
        +2/3
        )
      =-\\frac{\\gamma}{6} 3
      `,
      explanation: "the expected dipole for a neutron. The ratio of these two would be -2. These calculations have been taking the assumption that the mass of each quark is the same. Cursory research suggests that the down quark is better approximated as twice as heavy as the upquark."
    },
    {
      expression: `
      <\\mu_p>=
      \\frac{\\gamma}{6}
      (
        4 (+2/3+2/3+1/6)
        +
        (2/3-2/3-1/6)
        +
        (-2/3+2/3-1/6)
        )
      \\\\
      =
      \\frac{\\gamma}{6}
      (
        36/6
        -
        1/6
        -
        1/6
        )
      =
      \\frac{\\gamma}{6}
      34/6
      \\\\
      <\\mu_n>
      =
      \\frac{\\gamma}{6}
      (
        4(-1/6 -1/6 -4/6)
        +
        (-1/6 +1/6 +2/3)
        +
        (+1/6 -1/6 +2/3)
        )
      \\\\
      =
      \\frac{\\gamma}{6}
      (
        -12/3
        +2/3
        +2/3
        )
      =-\\frac{\\gamma}{6} 8/3
      \\\\
      \\mu_p/\\mu_n = -\\frac{34*3}{6*8}=-2.125
      `,
      explanation: "Attempting to account for the mass difference produces a small change. Both of these values over estimate experimental data (-1.46) by over 30%."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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


	)
