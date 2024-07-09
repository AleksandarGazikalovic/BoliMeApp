import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Ime je kratko!")
    .max(30, "Ime je predugo!")
    .required("Obavezno polje"),
  lastname: Yup.string()
    .min(3, "Prezime je kratko!")
    .max(30, "Prezime je predugo!")
    .required("Obavezno polje"),
  dateOfBirth: Yup.date().required("Obavezno polje"),
  email: Yup.string()
    .email("Unesite ispravnu email adresu")
    .required("Obavezno polje"),
  password: Yup.string()
    .required("Obavezno polje")
    .min(8, "Lozinka mora imati najmanje 8 karaktera"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Lozinke se ne poklapaju")
    .required("Obavezno polje"),
});
