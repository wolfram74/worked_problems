var problems = [
// page 46 in djvu of advanced plasma theory 1964 lecture series corresponds to rosenbluths notes on microinstabilities
  {
    location:`independent`,
    description:"Some points of confusion reading over rosenbluth's and rutherford's paper on alfven wave excitation by beams",
    steps:[
    {
      expression: `
      \\vec V_E = \\frac{\\vec E \\times \\vec B}{B^2}
      \\\\
      \\vec V_D = \\frac{ m \\mu B + v_\\parallel^2}{eB^2} \\vec n \\times \\nabla B
      `,
      explanation: "The standard E cross B drift, $&V_D&$ looks a bit like the curvature drift in gurnett and bhatachargee (G&B) eq3.3.8 having the parallel kinetic energy involved. But it also might be related to plain old diffusion since it's got total kinetic energy over magnetic field energy involved. $&\\vec n&$ might refer to either the direction of the beam, the direction of the magnetic field or the direction of the alfven waves we're examining. I think the alfven waves is less likely because the wave numbers n and m should specify their direction. Also though it doesn't matter till later, $&\\omega_{*s}&$ diamagnetic frequency is hard to find references for. Velocities and currents abound, but the only explanation of diamagnetic frequencies I could find is ch3 of these notes http://physics.usask.ca/~hirose/P862/notes.htm"
    },
    // https://aip.scitation.org/doi/pdf/10.1063/1.1310201
    // http://physics.usask.ca/~hirose/P862/Ch3-Dec-06.pdf
    {
      expression: `
      \\vec V_p = \\frac{m}{eB^2}(1+\\frac{3}{4}\\rho ^2 \\nabla_\\perp^2)\\partial_t \\vec E
      \\\\
      \\frac{d \\epsilon}{ d t} = \\frac{e}{m}(
        v_\\parallel E_\\parallel
        + \\vec V_D \\cdot \\vec E)
      `,
      explanation: "The extra B squared in polarization drift kind of confuses me when otherwise it would make sense as the displacement current divided by charge you'd get from maxwell's equations. Work done by the electric field makes sense if we are treating E parallel as a scalar quantity and the perpendicular as an unrelated vector term."
    },
    {
      expression: `
      \\partial_t f
      + v_\\parallel \\vec n \\cdot \\nabla f
      + (\\vec V_E+\\vec V_D) \\cdot \\nabla f
      + \\nabla \\cdot (\\vec V_p f)
      + (e/m)(v_\\parallel E_\\parallel + \\vec V_D \\cdot \\vec E) \\partial_\\epsilon f
      = Cf
      `,
      explanation: "standard kinetics equation like G&B eq5.2.9 including collisions"
    },
    {
      expression: `
      \\vec E_\\perp = -\\nabla_\\perp \\phi
      \\\\
      \\vec E_\\parallel = -\\nabla_\\parallel \\phi - \\partial_t \\vec A_\\parallel
      `,
      explanation: "standard potential representation of electric fields."
    },
    {
      expression: `
      \\vec n_0 \\cdot \\nabla j_{\\parallel 1}
      +
      \\vec n_1 \\cdot \\nabla j_{\\parallel 0}
      +\\Sigma e \\int d^3v \\vec V_D \\cdot \\nabla f_1
      =
      -(
        i\\omega n_i m_i/b^2
        )
      (
        1+3/4\\rho_i^2
        )\\nabla_\\perp^2\\phi
      \\\\
      \\rho_i=\\frac{(m_iT_i)^{1/2}}{eB}
      \\\\
      \\nabla^2A_\\parallel = -4\\pi j_{\\parallel 1}
      `,
      explanation: "the gyro radius and relationship between current and vector potential are pretty standard, but I am a bit curious why the linearization is only being applied to the time aspect and all the gradients are left as is. I suspect it's because we're not in strictly cartesian coordinates so the gradient doesn't have the same form that allows it to be replaced with a k-vector. It also alludes to a 4th order derivative but the highest I can see is a 3rd order if $&\\omega \\nabla_\\perp^2&$ counts as 3rd order."
    },
    {
      expression: `
      -i \\omega \\vec B_1 =
      \\nabla \\times (\\vec V_E \\times \\vec B)
      -\\nabla \\times(E_\\parallel \\vec n)
      =
      (\\vec B \\cdot \\nabla) \\vec V_E + \\vec n \\times \\nabla E_\\parallel
      `,
      explanation: "perturbations to the unit vector n are supposed to be accounted for in this expression which supports the case that $&\\vec n&$ is the direction of the magnetic field"
    },
    {
      expression: `
      (
        -i\\omega
        +v_\\parallel \\vec n \\cdot \\nabla
        +\\vec V_D \\cdot \\nabla -C
        )(
        f_1 - \\vec V_E \\cdot \\nabla f_0/i\\omega
        )
      =
      \\\\
      -\\frac{i\\omega m f_0}{e b^2}
      \\nabla_\\perp^2 \\phi
      -\\frac{e}{m}(
        v_\\parallel E_\\parallel - \\vec V_D \\cdot \\nabla \\phi
        )\\partial_\\epsilon f_0
      +\\frac{1}{i\\omega }[
        \\frac{v_\\parallel}{B}
        \\vec n \\times \\nabla E_\\parallel \\cdot \\nabla f_0
        - \\vec V_d \\cdot \\nabla(\\vec V_E\\cdot\\nabla f_0)
      ]
      `,
      explanation: "I see where a lot of the left hand side comes from, the right hand side is a lot busier. Claims on why the collision operator vanish given how much was stated about it earlier seem to border on 'because magic'. Unless it's actually a collision coefficient and not an operator."
    },
    {
      expression: `
      v_\\parallel \\vec n \\cdot \\nabla
      (f_1 + \\vec V_E \\cdot \\nabla f_0/i\\omega)
      =
      \\\\
      -\\frac{e}{m}
      v_\\parallel E_\\parallel
      \\partial_\\epsilon f_0
      +\\frac{v_\\parallel}{i\\omega B}
      \\vec n \\times \\nabla E_\\parallel \\cdot \\nabla f_0
      `,
      explanation: "on my first pass it bothered me that the sign changed between this and eq7 for the distribution term on the left hand side. I can't tell where the minus sign went and enough other things are vague I don't know if it matters. The right hand side is just eq7 with only linear terms of parallel E surviving. Though why $&\\nabla \\phi&$ and $&V_E&$ didn't persist since they would be linear in Electric field is a bit puzzling."
    },
    {
      expression: `
      f_1+\\vec V_E \\cdot \\nabla f_0/i\\omega
      =g_e
      =
      -\\frac{e}{m}
      \\partial_\\epsilon f_0
      \\int^l E_\\parallel dl + \\bar g_e(\\mu, \\epsilon)
      `,
      explanation: "an expression for $&\\omega_{*b}&$ is given between eq13 and eq14 but I have to take it on faith that the diamagnetic frequency is used appropriately between eq8 and eq9. some property g begins to be used from here on. It is dimensionless like the distribution function, it can be different for different species, and it is given as a function of energy like quantities $&\\mu&$ and $&\\epsilon&$ so my guess is it's some kind of density of states function. It is rather annoying that this term isn't even named when basic fields as potentials get's an explanation. This disagreement in assumed understanding is maybe the most jarring thing in the paper so far making me wonder what I'm missing."
    },
    {
      expression: `
      \\oint \\frac{dl}{v_\\parallel}
      (-i\\omega + \\vec V_D \\cdot \\nabla - C)g_e
      =
      \\frac{e}{m}
      \\partial_\\epsilon f_0
      \\oint \\frac{dl}{v_\\parallel}\\vec V_D \\cdot \\nabla \\phi
      `,
      explanation: "These integrals look like the kind involved in calculating the bounce adiabatic invariant in a magnetic bottle, but with the integrand augmented a bit further. also the collision 'operator' is back, now a scalar multiplying the tentatively labeled density of states function"
    },
    {
      expression: `
      \\bar g_e^T =
      \\frac{e}{m}
      \\partial_\\epsilon f_0
      \\frac{\\omega}{\\omega+i\\nu_e^{eff}}
      <\\int^l E_\\parallel dl>
      `,
      explanation: "in between here and eq11 the collision 'operator' is just simply replaced with a scalar if being used conventionally is effective collision frequency. Also the aside for $&<\\int^l E_\\parallel dl>&$ is a bit confusing for me is it saying $&<\\int^l E_\\parallel dl>=(\\oint[int^l E_\\parallel dl] dl/v_\\parallel)(\\oint dl/v_\\parallel)^{-1}&$? Would that be kind of like average integrated parallel electric field over an orbit? "
    },
    {
      expression: `
      f_1 + \\frac{\\vec V_E \\cdot \\nabla f_0}{i\\omega}
      =g_i
      =
      \\frac{m f_0}{e B^2}\\nabla_\\perp^2 \\phi
      +\\frac{i e}{m \\omega}
      \\cdot \\nabla \\phi \\partial_\\epsilon f_0
      `,
      explanation: "NA"
    },
    {
      expression: `
      (-i\\omega
        + v_\\parallel \\vec n \\cdot \\nabla
        +\\vec V_D \\cdot \\nabla
        )g_b
      =(
        e f_0 / T_b
        )(
      1-\\omega_{*b}/\\omega
      )(
      v_\\parallel E_\\parallel - \\vec V_D \\cdot \\nabla \\phi
      )
      `,
      explanation: "NA"
    },
    {
      expression: `
      g_b = \\frac{
        \\pi i f_0 m_b(2\\epsilon-\\mu B)
      }{
        2BRT_b
      }(
        1-\\omega_{*b}/\\omega
        )
      \\delta(\\omega - \\frac{(nq-m+1)v_\\parallel}{qR})
      \\cdot e^{i\\theta} (
        \\frac{m\\phi}{r}
        +\\partial_r\\phi
        )
      `,
      explanation: "NA"
    },
    {
      expression: `
      E_\\parallel
      =
      -ik_\\parallel
      [
        1+(r/R)^{1/2}\\omega/(\\omega+i\\nu_e^{eff})
      ]\\rho_{ie}^2\\nabla_\\perp^2\\phi
      `,
      explanation: "NA"
    },
    {
      expression: `
      e\\int d^3 v \\vec V_D \\cdot \\nabla g_b
      =
      -\\frac{\\pi}{T_b}
      (\\frac{m}{2BR})^2
      (1-\\frac{\\omega_{*b}}{\\omega})
      \\nabla_\\perp^2\\phi
      \\int
        f_0 (2\\epsilon-\\mu B)^2
        \\delta(\\omega - \\frac{(nq-m+1)v_\\parallel}{qR})
        d^3 v
      \\\\
      \\approx
      -\\frac{n_b T_b}{\\omega B^2R^2}
      (
        1-\\frac{\\omega_{*b}}{\\omega}
        )\\nabla_\\perp^2\\phi
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\omega^2\\rho_i^2(\\frac{7}{4}-i\\delta)\\partial_r^4\\xi
      +\\frac{1}{r^3}\\partial_r r^3[
        \\omega^2(1+i\\eta) - \\omega_A^2
      ]\\partial_r \\xi
      -\\frac{m^2-1}{r^2}[\\omega^2(1+i\\eta)-\\omega_A^2]\\xi
      =0
      `,
      explanation: "NA"
    },
    {
      expression: `
      (\\frac{7}{4}-i\\delta)^{-1/2}
      \\int_0^{r_0} (
        1+i\\eta-\\frac{\\omega_A^2}{\\omega^2}
        )^{1/2} dr = n \\pi \\rho_i
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\frac{v_b}{v_A}
      \\frac{\\rho_b R}{r_b^2}
      \\frac{m q(r_0)}{n q(r_0)-m} > 1
      `,
      explanation: "NA"
    },
    {
      expression: `
      \\frac{r_0^2}{r_b^2}
      <
      \\frac{\\beta_b v_b \\rho_b}{v_e r_b^4}
      (\\frac{r}{R})^{1/2}
      (\\partial_r^2 ln(q))^{-1}
      \\frac{q(r_0)^2}{nq(r_0)-m}
      `,
      explanation: "NA"
    },]
  },

  {
    location:`related to rosenbluth paper`,
    description:"determine how $&d^3v = 2\\pi B d\\mu d\\epsilon /v_\\parallel&$",
    steps:[
    {
      expression: `
      \\epsilon = v^2/2
      \\\\
      \\mu = v_\\perp^2/(2B)
      `,
      explanation: "kinetic energy per unit mass terms described in the paper"
    },
    {
      expression: `
      d^3v
      =dv_\\parallel dv_{\\perp a} dv_{\\perp b}
      =dv_\\parallel dv_{\\perp} v_\\perp d\\theta

      `,
      explanation: "the volume element in velocity space relative to some preferred axis with two orthogonal perpendicular components and one parallel component or with the perpendicular component done in polar coordinates"
    },
    {
      expression: `
      \\frac{d\\epsilon}{ d v_i} = v_i
      \\\\
      d\\epsilon = v_i dv_i
      `,
      explanation: "possibly how the total kinetic energy differential could be expressed"
    },
    {
      expression: `
      \\frac{d\\epsilon}{ d v_{\\perp a}}
      = \\frac{d}{ d v_{\\perp a}} (v_{\\perp a}^2 + v_{\\perp b}^2)/(2B)
      = v_{\\perp a} /B
      \\\\
      B d\\mu = v_{\\perp a} dv_{\\perp a}
      `,
      explanation: "a similar relationship can be found for the second perpendicular component"
    },
    {
      expression: `
      dv_\\parallel = \\frac{d\\epsilon}{v_\\parallel}
      \\\\
      dv_\\perp =B \\frac{d\\mu}{v_\\perp}
      \\\\
      dv_\\parallel dv_{\\perp} v_\\perp d\\theta
      =
      \\frac{d\\epsilon}{v_\\parallel} B \\frac{d\\mu}{v_\\perp} v_\\perp d\\theta
      =
      \\\\
      \\frac{2\\pi B}{ v_\\parallel}  d\\epsilon d\\mu
      `,
      explanation: "taking the parallel component from step 3 and replacing the angular differential with 2 pi we get the same term described in the paper. I think this requires rotational symmetry around parallel axis."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
