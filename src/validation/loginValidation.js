import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Unesite ispravnu email adresu")
    .required("Obavezno polje"),
  password: Yup.string()
    .required("Obavezno polje")
    .min(8, "Lozinka mora imati najmanje 8 karaktera"),
});
