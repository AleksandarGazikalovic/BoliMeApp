import * as Yup from "yup";

export const ProfileSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Ime je kratko!")
    .max(30, "Ime je predugo!")
    .required("Obavezno polje"),
  lastname: Yup.string()
    .min(3, "Prezime je kratko!")
    .max(30, "Prezime je predugo!")
    .required("Obavezno polje"),
  age: Yup.number()
    .positive("Broj godina mora biti pozitivan broj")
    .integer("Broj godina mora biti ceo broj")
    .required("Obavezno polje"),
  dateOfBirth: Yup.date().required("Obavezno polje"),
  sex: Yup.string().required("Obavezno polje"),
  child: Yup.boolean().required("Obavezno polje"),
});
