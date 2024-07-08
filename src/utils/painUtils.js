export const resolvePainArea = (painArea) => {
  const painAreaMap = {
    "leva-podlaktica": "Leva podlaktica",
    "levi-lakat": "Levi lakat",
    "desno-rame": "Desno rame",
    "leva-nadlaktica": "Leva nadlaktica",
    "desna-podlaktica": "Desna podlaktica",
    "desna-nadlaktica": "Desna nadlaktica",
    vrat: "Vrat",
    glava: "Glava",
    "desna-potkolenica": "Desna potkolenica",
    "leva-potkolenica": "Leva potkolenica",
    "levo-koleno": "Levo koleno",
    "desno-koleno": "Desno koleno",
    "leva-butkica": "Leva butina",
    "desna-butkica": "Desna butina",
    pelvis: "Pelvis",
    stomak: "Stomak",
    "levo-rame": "Levo rame",
    grudi: "Grudi",
    "levo-stopalo": "Levo stopalo",
    "desno-stopalo": "Desno stopalo",
    "desni-lakat": "Desni lakat",
    "leva-saka": "Leva šaka",
    "desna-saka": "Desna šaka",
  };

  return painAreaMap[painArea];
};

export const resolvePainType = (painType) => {
  const painTypeMap = {
    ostar: "Oštar bol ",
    tup: "Tup bol ",
    pulsirajuci: "Pulsirajući bol",
    ukocenost: "Ukočenost ",
    neuropatski: "Neuropatski bol",
    "drugi-tip": "Drugo",
  };

  return painTypeMap[painType];
};

export const countPainOccurences = (painAreas) => {
  const painAreasCount = painAreas.reduce((acc, painArea) => {
    if (acc[painArea.painArea]) {
      acc[painArea.painArea]++;
    } else {
      acc[painArea.painArea] = 1;
    }
    return acc;
  }, {});

  return Object.entries(painAreasCount).map(([painArea, count]) => ({
    painArea,
    count,
  }));
};

export const getPaths = [
  "leva-podlaktica",
  "levi-lakat",
  "desno-rame",
  "leva-nadlaktica",
  "desna-podlaktica",
  "desna-nadlaktica",
  "vrat",
  "glava",
  "desna-potkolenica",
  "leva-potkolenica",
  "levo-koleno",
  "desno-koleno",
  "leva-butkica",
  "desna-butkica",
  "pelvis",
  "stomak",
  "levo-rame",
  "grudi",
  "levo-stopalo",
  "desno-stopalo",
  "desni-lakat",
  "leva-saka",
  "desna-saka",
];

export const getPathD = (id) => {
  const pathMap = {
    "leva-podlaktica":
      "M6.57849 142.189L27.3032 146.261C26.387 152.035 25.1391 157.668 23.5779 163.089C22.7037 166.124 21.7313 169.093 20.6638 171.982C19.5013 175.129 18.2259 178.181 16.8423 181.122H1.88257C2.40354 174.306 2.86117 168.742 3.32579 163.978C3.73848 159.747 4.15671 156.147 4.6298 152.861C5.17949 149.044 5.80327 145.652 6.57849 142.189Z",
    "levi-lakat":
      "M30.0756 132.23L27.0935 146.775L6.36877 142.703L10.5264 127.069L30.0756 132.23Z",
    "desno-rame":
      "M72 58L72.2937 81.5599L102.148 82.013H129.423L126.76 72.9132L121.337 67.7328L112.925 64.2606L99.0599 58L72 58Z",
    "leva-nadlaktica":
      "M36.7017 116.417C36.1811 112.663 35.7077 108.769 35.613 107.737L35.1869 106.564L31.7316 123.689L29.5068 133.495L9.95764 128.334C11.852 121.811 13.3002 115.77 14.3642 109.895L16.3478 94.2241C16.7605 88.3303 17.2921 83.6521 18.0162 79.9327H45.1272L36.7017 116.417Z",
    "desna-podlaktica":
      "M143.386 155.084L146 186H132.722L130.594 180.8C128.31 175.553 126.505 170.772 125.023 165.911C123.233 160.043 121.914 154.059 120.79 147.001C120.597 145.793 120.32 144.264 120 142.614L140.436 140L143.386 155.084Z",
    "desna-nadlaktica":
      "M117.685 132L116.053 123.721L113.119 107.894L112.574 108.549L112.216 110.929L110.456 125.821L104 82H129.365C129.948 85.3745 130.413 89.3901 130.725 93.8416L132.721 110.929L137 129.463L117.685 132Z",
    vrat: "M60.455 43H86.6131L86.1458 47.6962L86.433 49.0303L87.2006 50.3643L89.259 52.2619L96.08 56.6064L99.8376 58.8133H73.4517L46 59.0624L53.1932 54.9841L59.2064 50.7885L60.6404 48.5856L60.8157 46.2374L60.455 43Z",
    glava:
      "M88.1483 36.1538L86.3079 44H60.8832L59.9113 39.8227L58.1513 35.7353L55.7129 33.5373L54.3327 30.9725L54 28.3164L55.0688 26.63C55.6669 26.63 55.7589 26.3032 55.5289 25.0891L54.9768 19.159L54.892 15.4824L55.7129 11.688L57.4847 7.7433L60.1849 4.41865L63.5893 2.12156L67.3529 0.715068L70.1299 0.171032L73.6182 0L79.0551 0.715081L84.0832 2.58786L88.1483 5.80467L90.6187 9.72922L91.9668 14.2031V21.8672L91.6371 26.1036L92.1968 27.1903L93 28.7589L92.804 30.9717L89.7586 34.6613L88.1483 36.1538Z",
    "desna-potkolenica":
      "M103.984 364H89.9304L91.9466 350.204L91.5959 343.981L90.2708 337.361L88.6312 326.645L88.228 315.459C88.228 311.337 88.1625 307.992 88 305H113.325L114 313.754L113.325 322.422L109.288 339.94C107.569 345.684 106.335 350.248 105.477 354.204L103.984 364Z",
    "leva-potkolenica":
      "M34 310.801C34 309.231 34.5457 304.378 35.2402 300L61 300.959L60.7872 308.184L60.259 321.252L58.5054 334.307L57.2652 340.064L57.0841 350.114L58.555 361H44.4424L42.489 350.114L39.4567 338.922C35.5874 325.885 34 317.605 34 310.801Z",
    "levo-koleno":
      "M60.7803 301L35 300.03L36.8687 284H63L61.2808 293.244L60.7803 301Z",
    "desno-koleno":
      "M87.3049 296.196L88.0734 305L113 305C112.075 298.767 111.441 293.337 111.077 288H86L87.3049 296.196Z",
    "leva-butkica":
      "M67.3659 260.215L62.0842 287H36.3474L36.3474 271.24L34.9268 251.837L34 227.583L34.9268 217L72 217.882L67.3659 260.215Z",
    "desna-butkica":
      "M81.05 259.19L86.7064 291H111.578V268.083L113 218H77L81.05 259.19Z",
    pelvis:
      "M110.263 194.182L108.439 180H38.6492L36.3684 196.841L35 217.227L71.4912 218.114V215.898L69.6667 214.568L67.8421 211.466L65.1053 205.261V200.83L66.4737 202.602L69.6667 207.92L74.2281 212.795H76.0526L79.2456 207.92L82.4386 200.83V205.261L79.2456 212.795L76.0526 214.568V218.114L113 219L112.088 207.92L110.263 194.182Z",
    stomak:
      "M107.368 165.076C107.513 169.374 108.096 175.869 108.63 179.482C108.817 180.731 109.027 182.201 109.249 183.829H38.7466L40.4949 164.588L40.0142 150.202L38.7466 139.194H109.257L107.694 152.516L107.368 165.076Z",
    "levo-rame":
      "M75.1839 81.2668L45.611 80.8221H18.0697C18.6945 77.663 19.4604 75.1956 20.4133 73.2624C21.1697 71.7278 22.0438 70.5298 23.0587 69.5897L27.6034 66.9571L32.724 64.9916C35.7816 64.0192 41.5169 61.2981 47.0055 58.3923L74.8929 58.1431L75.1839 81.2668Z",
    grudi:
      "M110.897 126.705L109.045 141.744L38.4931 141.744L35.5289 117.83L44.1785 79.488L103.948 80.4227L110.897 126.705Z",
    "levo-stopalo":
      "M59.4808 367.005L60.6023 377.85L61 386.414L60.9375 390.569L60.7587 392.637L60.3047 394.472L59.0706 396.236L57.1134 397.38L52.2561 398L47.8487 397.981L43.4402 397.533L40.2822 396.766L39.2249 396.236L38.4455 395.417L38.0743 394.472L38 393.28L38.4455 390.996L40.2789 386.414L41.9458 382.65L43.2668 378.82L43.6827 376.786L44.5907 370.538L44.8452 364.812L44.5191 359H58.1489L59.4808 367.005Z",
    "desno-stopalo":
      "M89.609 364H103.943L103.747 369.032L103.914 374.325L106.402 384.503L108.162 389.479C109.412 392.1 110.028 394.3 109.999 396.002C109.99 396.551 109.914 397.048 109.77 397.49C109.663 397.82 109.52 398.119 109.338 398.387C109.2 398.592 109.039 398.779 108.856 398.948L109.338 398.387L107.928 399.592L104.936 399.965L100.175 400L95.2338 399.948L92.6843 399.724L91.4726 399.411L90.3531 398.948L88.6517 398.017L87.6355 396.869L87.1605 395.386L87 393.834L87.079 388.198L87.8727 376.059L89.609 364Z",
    "desni-lakat":
      "M137.064 128L140.432 140.844L119.903 143.437L118.652 137.473C118.389 136.295 118.128 135.176 117.884 134.19C117.591 133.057 117.29 131.811 117 130.548L137.064 128Z",
    "leva-saka":
      "M18.8424 175C16.6445 179.786 15.2832 183.567 14.6747 186.927L14.3808 192.724L15.466 197.843L16.7041 205.176L16.7322 211.928L16.6385 218.724L16.085 222.742L14.6747 223.693L13.7514 220.686L11.1771 212.403L9.8739 212.087L7.8064 213.775L8.34398 219.842L11.1772 224.343L15.7825 227.175L18.1038 228.246L18.1037 229.443L16.0851 229.962L13.7514 229.666L9.71558 228.335L4.51416 224.343L1.0636 219.578L0.0560302 214.724L0 209.724L0.480102 199.224L1.90779 178.482L2.16931 175H18.8424Z",
    "desna-saka":
      "M130.347 180H145.353L146.988 202.79C147.157 204.983 147.277 206.896 147.346 208.581C147.443 210.996 147.433 212.944 147.302 214.581C147.207 215.763 147.048 216.783 146.822 217.7C146.554 218.786 146.19 219.727 145.722 220.621L144.299 222.874L142.403 225.081L140.497 226.853L138.125 228.482C137.709 228.695 137.246 228.896 136.757 229.081C136.215 229.287 135.642 229.472 135.065 229.633C133.191 230.153 131.282 230.403 130.317 230.17C129.712 230.022 129.321 229.817 129.133 229.581C129.008 229.425 128.972 229.256 129.021 229.081C129.047 228.99 129.095 228.898 129.167 228.805C129.49 228.386 130.276 227.961 131.478 227.638L133.565 226.853L135.44 225.581L136.011 225.055C136.703 224.367 137.309 223.578 137.811 222.714L138.125 222.14L139.065 219.666L139.453 217.081L139.338 214.818L138.88 212.919C138.88 212.919 138.88 212.919 138.88 212.919L138.565 212.373C138.565 212.373 138.565 212.373 138.565 212.373L138.125 212.073L137.594 212.035L136.964 212.181L136.065 212.581L135.699 214.081L134.801 217.456L132.744 223.576C132.205 224.246 131.792 224.536 131.478 224.29C131.185 224.061 130.977 223.367 130.832 222.081C130.63 220.29 130.549 217.35 130.528 212.919V205.295L131.794 198.042L133.219 191.395L132.213 185.581L130.347 180Z",
  };

  return pathMap[id];
};