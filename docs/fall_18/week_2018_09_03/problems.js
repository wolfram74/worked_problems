var problems = [

  {
    location:`problem set 1`,
    description:"Calculate the moment of inertia for a uniform disk",
    steps:[
    {
      expression: `
      I=\\int_{body}\\rho r^2 d^3x=
      \\rho
      \\int_0^R
      \\int_0^H
      \\int_0^{2\\pi}
      r^2 dr dz rd\\theta
      `,
      explanation: "The generic expression for moment of inertia and it's cylindrical equivalent given the symmetry of our disk."
    },
    {
      expression: `
      \\rho
      \\int_0^R
      \\int_0^H
      \\int_0^{2\\pi}
      r^2 dr dz rd\\theta
      =
      \\rho
      \\int_0^R r^3 dr
      \\int_0^H dz
      \\int_0^{2\\pi}d\\theta
      =
      \\rho \\frac{R^4}{4} H 2\\pi
      `,
      explanation: "The result of the indefinite integral"
    },
    {
      expression: `
      M = \\rho V = \\rho \\pi R^2 H
      \\\\
      I
      = \\rho \\frac{R^4}{4} H 2\\pi
      = \\rho \\pi R^2 H \\frac{R^2}{2}
      = M \\frac{R^2}{2}
      `,
      explanation: "Substituting in the mass of a uniform cylinder to simplify."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`problem set 1`,
    description:"Find the acceleration for an atwood machine with massive rope and pulley.",
    steps:[
    {
      expression: `
      U_2 = -m_2gh
      \\\\
      U_1 = -m_1g(L-2\\pi R-h)
      \\\\
      U_r = -\\lambda (\\frac{h}{2})^2g
      U_l = -\\lambda (\\frac{(L-2\\pi R-h)}{2})^2g
      `,
      explanation: "The four potential energy terms, U1 and U2 for the two masses, Ul and Ur are for the rope of length L on the left and right sides of the pulley respectively. Assuming the rope is uniform in mass density $&\\lambda&$ they can be treated as point particles at their center of mass, halfway down their respective sides."
    },
    {
      expression: `
      T_{lin} = \\frac{1}{2}(m_1+m_2+\\lambda L)\\dot h ^2
      \\\\
      T_{rot}
      = \\frac{1}{2}I\\dot \\theta ^2
      = \\frac{1}{2}\\frac{m_pR^2}{2}\\dot h ^2/R^2 =  \\frac{1}{4}m_p\\dot h ^2
      `,
      explanation: "the linear and rotational kinetic energy terms."
    },
    {
      expression: `
      T_{tot} = \\frac{1}{2}(m_1+m_2+\\lambda L+\\frac{m_p}{2})\\dot h ^2
      \\\\
      U_{tot} =
      U_2+U_1+U_r+U_l
      \\\\
      =
      -m_2gh
      -m_1g(L-2\\pi R-h)
      -\\lambda (\\frac{h}{2})^2g
      -\\lambda (\\frac{(L-2\\pi R-h)}{2})^2g
      \\\\
      =
      -(m_2-m_1)gh
      -m_1g(L-2\\pi R)
      -\\lambda (\\frac{h}{2})^2g
      -\\lambda g \\frac{1}{4}
      (
        h^2
        +2h(2\\pi R - L)
        +(2\\pi R)^2+L^2-4\\pi RL
        )
      \\\\
      =
      -h^2\\lambda \\frac{1}{2}g
      -h(m_2-m_1 - \\lambda\\frac{(2\\pi R - L)}{2})g
      -\\lambda g \\frac{1}{4}
      (
        +(2\\pi R)^2+L^2-4\\pi RL
        )
      -m_1g(L-2\\pi R)

      `,
      explanation: "expressions for total kinetic energy and total potential energy, potential energy sorted by order in h."
    },
    {
      expression: `
      -\\partial_h (T-U) =
      h\\lambda g
      +(m_2-m_1 - \\lambda\\frac{(2\\pi R - L)}{2})g
      \\\\
      \\partial_{\\dot h} (T-U) =
      (m_1+m_2+\\lambda L+\\frac{m_p}{2})\\dot h
      \\\\
      \\frac{d}{dt}(\\partial_{\\dot h} (T-U))
      =\\partial_h (T-U)
      \\rightarrow
      \\ddot h =
      h\\frac{\\lambda g}{m_1+m_2+\\lambda L+\\frac{m_p}{2}}
      +\\frac{
        (m_2-m_1 - \\lambda\\frac{(2\\pi R - L)}{2})
      }{m_1+m_2+\\lambda L+\\frac{m_p}{2}}g
      `,
      explanation: "we see that acceleration is now a function in h as opposed to a simple constant as the case with the massless rope. We also see that if h is not initially large enough the mass of the rope will overcome the mass of m2. If we were interested in acceleration as a function of time we could solve this second order differential equation to get an exponential function and then take two derivatives."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`problem set 1`,
    description:"Given a gravitational potential, determine the escape velocity.",
    steps:[
    {
      expression: `
      E=U+T = m V(r)+\\frac{m}{2}v^2
      `,
      explanation: "a particle with 0 or greater energy is considered free."
    },
    {
      expression: `
      m V(r)+\\frac{m}{2}v^2 \\geq 0
      \\\\
      \\frac{m}{2}v^2 \\geq -m V(r)+
      \\\\
      v^2 \\geq -2 (-G M_E r^{-1})
      \\\\
      v_{esc} \\geq (2 G M_E)^{1/2} r^{-1/2}
      `,
      explanation: "We can define escape velocity for a solid body by using the average surface radius."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`problem set 1`,
    description:"A rocket with exhaust velocity $&v_e&$, initial total mass $&M_0&$ and mass of fuel $&m_f&$ is working against a constant force of $&-Mg\\hat z&$ determine an expression for final velocity in terms of mass dedicated to fuel.",
    steps:[
    {
      expression: `
      m_f = \\alpha t_f \\leq M_0
      \\\\
      F_r = \\dot M v_e = \\alpha v_e
      \\\\
      F_g = -Mg = -(M_0-\\alpha t)g
      \\\\
      F_{tot} = F_r + F_g = \\alpha v_e - (M_0-\\alpha t)g
      `,
      explanation: "Assuming the rate of fuel consumption is constant over some period of time $&t_f&$, a force equation can be produced."
    },
    {
      expression: `
      F_{tot} = aM = a(M_0-\\alpha t) = \\alpha v_e - (M_0-\\alpha t)g
      \\\\
      a = \\frac{\\alpha v_e}{M_0-\\alpha t} -g
      `,
      explanation: "determining the net acceleration of the rocket"
    },
    {
      expression: `
      v(t_f)
      = \\int_0^{t_f}(\\frac{\\alpha v_e}{M_0-\\alpha t} -g) dt
      \\\\
      =\\int_0^{t_f}\\frac{\\alpha v_e}{M_0-\\alpha t} dt -t_f g
      \\\\
      =-v_e ln(1-\\frac{\\alpha t_f}{M_0}) -t_f g
      \\\\
      m_f = \\alpha t_f \\rightarrow t_f = \\frac{m_f}{\\alpha}
      \\\\
      v(m_f)
      = -v_e ln(1-\\frac{m_f}{M_0}) -g\\frac{m_f}{\\alpha}
      \\\\
      =v_e ln(\\frac{M_0}{M_0-m_f}) -g\\frac{m_f}{\\alpha}
      `,
      explanation: "An expression for final velocity in terms of fuel mass, exhaust velocity and burn rate. Sanity checks include that as burn rate goes to 0, a turn over point is found such that the final velocity is still 0 after all the fuel's been expended. To calculate a realistic mass fraction of fuel one would need to look up typical nozzle exhaust velocities (which vary strongly based on propellant and bell shape) and flow rates (which mostly depends on bell size)."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`Problem set 1`,
    description:"Given a definition of torque, show a closed system has conserved net angular momentum.",
    steps:[
    {
      expression: `
      \\vec N_i =
      \\Sigma_{j\\neq i}^n (\\vec r_i(t)-\\vec R)\\times \\vec F_{ij}(t)
      `,
      explanation: "Net torque on a particle."
    },
    {
      expression: `
      \\vec N_{tot}=
      \\Sigma_i^n \\vec N_i =
      \\Sigma_i^n\\Sigma_{j\\neq i}^n (\\vec r_i(t)-\\vec R)\\times \\vec F_{ij}(t)
      `,
      explanation: "Total torque on the system"
    },
    {
      expression: `
      (\\vec A - \\vec B) \\times \\vec C
      =
      \\vec A\\times \\vec C - \\vec B \\times \\vec C
      \\\\
      \\rightarrow
      \\\\
      \\vec N_{tot}=
      \\Sigma_i^n\\Sigma_{j\\neq i}^n
      \\vec r_i(t)\\times \\vec F_{ij}(t)
      -\\vec R\\times \\vec F_{ij}(t)
      `,
      explanation: "Noting distributivity of the cross product"
    },
    {
      expression: `
      \\vec F_{ij}(t) + \\vec F_{ji}(t) = 0
      \\\\
      \\rightarrow
      \\\\
      \\Sigma_i^n\\Sigma_{j\\neq i}^n
      \\vec R\\times \\vec F_{ij}(t) = 0
      `,
      explanation: "Assuming newton's third law, part of the sum trivially goes to 0 by symmetry."
    },
    {
      expression: `
      \\vec N_{tot}=
      \\Sigma_i^n\\Sigma_{j\\neq i}^n
      \\vec r_i(t)\\times \\vec F_{ij}(t)
      \\\\
      \\vec r_i(t)\\times \\vec F_{ij}(t)
      +\\vec r_j(t)\\times \\vec F_{ji}(t)
      =
      \\vec r_i(t)\\times \\vec F_{ij}(t)
      -\\vec r_j(t)\\times \\vec F_{ij}(t)
      =
      (\\vec r_i(t)-\\vec r_j(t))\\times \\vec F_{ij}(t)
      \\\\
      \\vec N_{tot}=
      \\Sigma_i^n\\Sigma_{j > i}^n
      (\\vec r_i(t)-\\vec r_j(t))\\times \\vec F_{ij}(t)
      `,
      explanation: "adding the lower half of the i-j grid to the upper half."
    },
    {
      expression: `
      \\vec r_{ij} = (\\vec r_i(t)-\\vec r_j(t))
      \\\\
      \\hat r_{ij} = \\hat F_{ij}
      \\\\
      \\rightarrow
      \\\\
      (\\vec r_i(t)-\\vec r_j(t))\\times \\vec F_{ij}(t) = 0
      \\\\
      \\rightarrow
      \\\\
      \\vec N_{tot} = 0 = \\vec{ \\dot L}
      `,
      explanation: "Assuming that the force is along the line of displacement, the net torque goes to 0 and angular momentum for the system is a constant."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
