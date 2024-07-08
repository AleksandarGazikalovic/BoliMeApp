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
