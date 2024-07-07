import * as Yup from "yup";

export const PainSchema = Yup.object({
  painArea: Yup.string().required(
    "Morate označiti mesto bola pre nego sto nastavite dalje!"
  ),
  valuePain: Yup.number().min(1).max(10).required("Obavezno polje"),
  qualityOfLife: Yup.number().min(1).max(10).required("Obavezno polje"),
  selectedOptionPain: Yup.string().required("Obavezno polje"),
  selectedOptionCause: Yup.string().required("Obavezno polje"),
  medicineOption: Yup.string().required("Obavezno polje"),
  dosages: Yup.array().when("medicineOption", {
    is: "da",
    then: Yup.array().of(
      Yup.object().shape({
        dose: Yup.string().required("Obavezno polje"),
        unit: Yup.string().required("Obavezno polje"),
      })
    ),
  }),
  otherPainType: Yup.string(),
  startDate: Yup.date().required("Obavezno polje"),
  duration: Yup.string().required("Obavezno polje"),
  durationUnit: Yup.string().required("Obavezno polje"),
  otherCause: Yup.string(),
  medicineName: Yup.string(),
  comment: Yup.string(),
});
