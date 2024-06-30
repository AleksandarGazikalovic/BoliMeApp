import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
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
