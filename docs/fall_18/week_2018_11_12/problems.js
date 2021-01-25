var problems = [
/*described*/
  {
    location:`problem set 6`,
    description:"given a mass m=2E3kg, a radius r=6400E3m, an object at $&\\theta_p=\\pi/4&$ traveling towards the equator of the earth which rotates at $&\\Omega=2\\pi/(24*3600)&$, find the centrifugal and coriolis forces that must be counteracted to maintain it's course.",
    steps:[
    {
      expression: `
      \\vec r = sin(\\pi/4)r \\hat x + cos(\\pi/4)r \\hat z
      \\\\
      \\vec v = cos(\\pi/4)v \\hat x -sin(\\pi/4)v \\hat z
      \\\\
      \\vec \\Omega = \\Omega \\hat z
      `,
      explanation: "being explicit with our starting point"
    },
    {
      expression: `
      \\vec F_{cf} = m(\\vec \\Omega \\times \\vec r) \\times \\vec \\Omega
      \\\\
      \\Omega \\hat z \\times (sin(\\pi/4)r \\hat x + cos(\\pi/4)r \\hat z)
      =
      sin(\\pi/4)\\Omega r \\hat y
      \\\\
      m (sin(\\pi/4)\\Omega r \\hat y \\times \\Omega \\hat z)
      =
      m \\Omega^2 r sin(\\pi/4) \\hat x
      `,
      explanation: "Plugging in explicit numbers we'll need to apply roughly 48 newtons inwards towards the rotation axis to counter the centrifugal force."
    },
    {
      expression: `
      \\vec F_{co} = 2m \\vec{\\dot r} \\times \\Omega
      \\\\
      =2m cos(\\pi/4)v \\hat x \\times \\Omega \\hat z
      \\\\
      =-2 m cos(\\pi/4)\\Omega v \\hat y
      `,
      explanation: "plugging in explicit numbers we find we'd need about .2 N/(m/s) to lateral force to stay on course."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
/*described
done
*/
  {
    location:`Problem set 6`,
    description:"given a mass density $&\\rho = \\rho_0\\delta(z)&$ for x between 0 and a and y between 0 and b, otherwise 0. Calculate the momenta of inertia for rotation around the z axis",
    steps:[
    {
      expression: `
      M_{zz} = \\rho_0 \\int_0^a\\int_0^b (x^2+y^2)dxdy
      \\\\
      =\\rho_0 \\int_0^a (3bx^2+b^3)/3 dx
      \\\\
      =\\rho_0  (ba^3+ab^3)/3 =\\rho_0\\frac{ab}{3}(a^2+b^2)
      \\\\
      \\rho_0 = \\frac{M}{ab} \\therefore M_{zz} = \\frac{M}{3}(a^2+b^2)
      `,
      explanation: "The $&M_{zz}&$ element of the moment of inertia"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
/*described*/
  {
    location:`Problem set 6`,
    description:"find the moment of inertia tensor for a uniform cylinder about it's center of mass. Describe it's motion in time when the initial angular velocity is mostly along the long axis.",
    steps:[
    {
      expression: `
      \\rho = \\frac{M}{\\pi R^2 H}
      \\\\
      M_{ij} = \\int \\rho (\\delta_{ij}(r^2)-e_i*e_j )dv
      \\\\
      x = cos(\\theta) r
      \\\\
      y = sin(\\theta) r
      \\\\
      dv = rd\\theta dr dz
      `,
      explanation: "Starting point for our analysis"
    },
    {
    //Integrate[Integrate[Integrate[(z^2+r^2*sin(x)^2)r,x, 0, 2pi], r, 0, R], z, 0, H]
      expression: `
      M_{xx}
      = \\int \\rho (z^2+y^2 )rd\\theta dr dz
      \\\\
      = \\rho \\int_{-H/2}^{H/2}\\int_0^R\\int_0^{2\\pi} (z^2+r^2sin(\\theta)^2 )rd\\theta dr dz
      \\\\
      = \\rho \\int_{-H/2}^{H/2}\\int_0^R\\int_0^{2\\pi} (z^2+r^2sin(\\theta)^2 )rd\\theta dr dz
      \\\\
      = \\rho \\pi \\int_{-H/2}^{H/2}\\int_0^R (2z^2+r^2 )r dr dz
      \\\\
      = \\rho \\frac{\\pi}{4}R^2 \\int_{-H/2}^{H/2} (4z^2+R^2 )  dz
      \\\\
      = \\frac{1}{12}\\rho \\pi R^2 H (H^2+3R^2 )
      = \\frac{1}{12} M (H^2+3R^2 )
      `,
      explanation: "As we made no particular distinction between x and y axes, then $&M_{yy}&$ must be the same as well"
    },
    {
      expression: `
      M_{zz}
      = \\int \\rho (x^2+y^2 )rd\\theta dr dz
      \\\\
      = \\rho \\int_{-H/2}^{H/2}\\int_0^R\\int_0^{2\\pi}
      (r^2cos(\\theta)^2+r^2sin(\\theta)^2 )r
      d\\theta dr dz
      = \\rho \\int_{-H/2}^{H/2}\\int_0^R\\int_0^{2\\pi}
      r^3
      d\\theta dr dz
      \\\\
      =\\frac{1}{2} \\rho \\pi H R^2 R^2 = \\frac{1}{2} M R^2
      `,
      explanation: "spinning around the z axis we have as one would imagine no dependence on H once total mass is used"
    },
    {
      expression: `M_{xy}
      = -\\int \\rho (xy )rd\\theta dr dz
      \\\\
      = -\\int \\rho (cos(\\theta)sin(\\theta) )r^3d\\theta dr dz=0
      \\\\

      `,
      explanation: "we see the off diagonal terms are all 0 because they contain odd powers of sins and cosines."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    /*
  addendum, sphere of constant mass M and radius R, but density of ar^n
  therefore a=(n+3)M (4 pi R^(n+3))^-1
  some work on Ixx, finished
    */
  {
    location:`Problem set 6`,
    description:"find the moment of inertia tensor for a sphere around it's center given various density functions",
    steps:[
    {
      expression: `
      \\rho = ar^n
      \\\\
      a =(n+3)M (4 \\pi R^{n+3})^{-1}
      `,
      explanation: "density as a power of radius such that mass of the sphere is constant."
    },
    {
      expression: `
      M_{ij} = \\int \\rho (\\delta_{ij}(r^2)-e_i*e_j )dv
      `,
      explanation: "general definition for elements of moment of inertia tensor"
    },
    {
      expression: `
      dv = r^2 sin(\\theta_p) dr d\\theta_p d\\theta_e
      \\\\
      z = r cos(\\theta_p)
      \\\\
      x = r sin(\\theta_p)cos(\\theta_e)
      \\\\
      y = r sin(\\theta_p)sin(\\theta_e)
      `,
      explanation: "breaking cartesian coordinates down to spherical as it makes more sense for our density and shape"
    },
    {
      expression: `
      M_{xx}
      = a \\int r^n (r^2-x^2 )r^2 sin(\\theta_p) dr d\\theta_p d\\theta_e
      \\\\
      = a \\int r^n (
        r^2-r^2 sin^2(\\theta_p)cos^2(\\theta_e)
        )r^2 sin(\\theta_p) dr d\\theta_p d\\theta_e
      \\\\
      = a \\int r^{n+4} (
        1- sin^2(\\theta_p)cos^2(\\theta_e)
        )sin(\\theta_p) dr d\\theta_p d\\theta_e
      \\\\
      = a \\int_0^R r^{n+4}dr \\int_0^{2\\pi}\\int_0^{\\pi} (
        1- sin^2(\\theta_p)cos^2(\\theta_e)
        )sin(\\theta_p) dr d\\theta_p d\\theta_e
      \\\\
      = a R^{n+5}/(n+5) \\int_0^{2\\pi}\\int_0^{\\pi} (
        1- sin^2(\\theta_p)cos^2(\\theta_e)
        )sin(\\theta_p) dr d\\theta_p d\\theta_e
      \\\\
      = a R^{n+5}/(n+5) 8 \\pi/3 =
      \\frac{(n+3)M}{4 \\pi R^{n+3}}
      \\frac{R^{n+5} 8 \\pi}{3(n+5)}
      =
      \\frac{2(n+3)}{ 3(n+5)}M R^{2}
      `,
      explanation: "this agrees with the commonly cited 2/5 for uniform spheres associated with n = 0 and 2/3 for n going to infinite. The integral is invalid for n=-1 and the result gives non-physical values for n=-3 through -5. Since we defined our axes arbitrarily this is also the result for rotation around y and z."
    },
    {
      expression: `
      M_{xy}
      = -a \\int r^n (xy)r^2 sin(\\theta_p) dr d\\theta_p d\\theta_e
      \\\\
      = -a \\int r^n (
        r^2 sin(\\theta_p)cos(\\theta_e) sin(\\theta_p)sin(\\theta_p)
        )r^2 sin(\\theta_p) dr d\\theta_p d\\theta_e
      \\\\
      = -a \\int r^{n+4} (
         cos(\\theta_e) sin(\\theta_e)
        ) sin(\\theta_p)^3 dr d\\theta_p d\\theta_e
      \\\\
      = -a \\int r^{n+4} (
         sin(2\\theta_e)/2
        ) sin(\\theta_p)^3 dr d\\theta_p d\\theta_e
      \\\\
      \\int_0^{2\\pi}sin(2\\theta_e)/2 d\\theta_e=0 \\therefore M_{xy}=0
        `,
      explanation: "Similarly, as our axes are arbitrary, we see all off diagonal elements are 0."
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
    location:`exam`,
    description:"find the path for the action $&\\dot y^2 y^2&$ given an initial position and velocity",
    steps:[
    {
      expression: `
      \\partial_y L = \\frac{d}{dt}(\\partial_{\\dot y L})
      \\\\
      2y\\dot y^2 = \\frac{d}{dt}(2y^2\\dot y)
      \\\\
      y\\dot y^2 = \\frac{d}{dt}(y^2\\dot y)
      \\\\
      f = y^2\\dot y
      \\\\
      f^2y^{-3} = \\frac{d}{dt}(f)
      \\\\
      fy^{-3} = \\dot f f^{-1}
      \\\\
      \\dot y y^{-1} =\\dot f f^{-1}
      \\\\
      \\dot y y^{-1} =\\dot f f^{-1}
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
    },]
  },
 {
    location:`exam`,
    description:"find the conserved quantities for the action $&\\frac{m}{2}(\\dot x^2\\dot y^2 + \\dot z^2)-\\frac{1}{2}(ax^2+bz^2)&$",
    steps:[
    {
      expression: `
      \\partial_y L=0 \\therefore p_y=\\partial_{\\dot y} L= m\\dot x^2 \\dot y
      `,
      explanation: "first constant of motion"
    },
    {
      expression: `
      \\partial_t L = 0 \\therefore \\dot H =\\frac{d}{dt} [\\Sigma p_i\\dot q_i) -L]=0
      \\\\
      H =
      \\frac{1}{2}(ax^2+bz^2) + 2m\\dot x^2\\dot y^2 + m\\dot z^2
      -\\frac{m}{2}(\\dot x^2\\dot y^2 + \\dot z^2)
      \\\\
      =\\frac{m}{2}(3\\dot x^2\\dot y^2 + \\dot z^2)+\\frac{1}{2}(ax^2+bz^2)
      `,
      explanation: "the hamiltonian constant of motion"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
      explanation: "NA"
    },
    {
      expression: `NA`,
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
