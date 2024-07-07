import { useFormik } from "formik";
import { useProfile } from "../context/ProfileContext";
import { useHistory } from "react-router";
import { PainSchema } from "../validation/newPainValidation";
import painService from "../services/painService";
import { useRef } from "react";

export const usePainForm = () => {
  const { profile } = useProfile();
  const history = useHistory();
  const modal = useRef(null);

  const formik = useFormik({
    initialValues: {
      painArea: "",
      valuePain: 5,
      qualityOfLife: 5,
      selectedOptionPain: "",
      selectedOptionCause: "",
      medicineOption: "ne",
      dosages: [{ id: 1, dose: "", unit: "" }],
      otherPainType: "",
      startDate: "",
      duration: "",
      durationUnit: "",
      otherCause: "",
      medicineName: "",
      comment: "",
    },
    validationSchema: PainSchema,
    onSubmit: async (values, { setSubmitting }) => {
      //   const painData = {
      //     painArea: values.painArea,
      //     valuePain: values.valuePain,
      //     qualityOfLife: values.qualityOfLife,
      //     painType:
      //       values.selectedOptionPain == "drugi-tip"
      //         ? values.otherPainType
      //         : values.selectedOptionPain,
      //     startDate: values.startDate,
      //     duration: values.duration + " " + values.durationUnit,
      //     cause:
      //       values.selectedOptionCause == "drugi-uzrok"
      //         ? values.otherCause
      //         : values.selectedOptionCause,
      //     medicine: values.medicineOption == "da" ? values.medicineName : "Nema",
      //     dosages: values.dosages,
      //     comment: values.comment,
      //   };
      try {
        const docRefId = await painService.createPain(
          profile.profileId,
          values
        );
        console.log("Document written with ID: ", docRefId);
        history.push("/history");
      } catch (error) {
        console.error("Error adding document: ", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleAddDosage = () => {
    formik.setFieldValue("dosages", [
      ...formik.values.dosages,
      { id: formik.values.dosages.length + 1, dose: "", unit: "" },
    ]);
  };

  const handleRemoveDosage = (index) => {
    const updatedDosages = formik.values.dosages.filter((_, i) => i !== index);
    formik.setFieldValue("dosages", updatedDosages);
  };

  const handleOpenModal = () => {
    if (formik.errors.painArea) {
      modal.current.present();
    }
  };

  return {
    formik,
    modal,
    handleAddDosage,
    handleRemoveDosage,
    handleOpenModal,
  };
};
