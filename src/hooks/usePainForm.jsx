import { useFormik } from "formik";
import { useProfile } from "../context/ProfileContext";
import { PainSchema } from "../validation/newPainValidation";
import painService from "../services/painService";
import { useRef } from "react";
import { usePains } from "../context/PainContext";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router";

export const usePainForm = (initialValues = {}) => {
  const { profile } = useProfile();
  const modal = useRef(null);
  const { loadPains } = usePains();
  const { getToken } = useAuth();
  const history = useHistory();

  const handleSubmit = async (values, resetForm) => {
    if (initialValues.painId) {
      try {
        console.log(initialValues);
        await painService.updatePain(
          initialValues.painId,
          { ...values, profileId: initialValues.profileId },
          getToken()
        );
        loadPains();
      } catch (error) {
        console.error("Error updating pain: ", error);
      }
    } else {
      try {
        const docRefId = await painService.createPain(
          profile.profileId,
          values,
          getToken()
        );
        console.log("Document written with ID: ", docRefId);
        resetForm();
        loadPains();
        history.replace("/tabs/");
      } catch (error) {
        console.error("Error creating pain: ", error);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      painArea: initialValues?.painArea || "",
      valuePain: initialValues?.valuePain || 5,
      qualityOfLife: initialValues?.qualityOfLife || 5,
      selectedOptionPain: initialValues?.selectedOptionPain || "",
      selectedOptionCause: initialValues?.selectedOptionCause || "",
      medicineOption: initialValues?.medicineOption || "ne",
      dosages: initialValues?.dosages || [{ id: 1, dose: "", unit: "" }],
      otherPainType: initialValues?.otherPainType || "",
      startDate: initialValues?.startDate || new Date(),
      duration: initialValues?.duration || "",
      durationUnit: initialValues?.durationUnit || "dani",
      otherCause: initialValues?.otherCause || "",
      medicineName: initialValues?.medicineName || "",
      comment: initialValues?.comment || "",
    },
    validationSchema: PainSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
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
      handleSubmit(values, resetForm);
      loadPains();
      setSubmitting(false);
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
