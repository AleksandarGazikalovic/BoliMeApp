export const resolveLoginErrors = (error) => {
  switch (error.response.data.error.message) {
    case "EMAIL_NOT_FOUND":
      return "Korisnik sa unetim email-om ne postoji.";
    case "INVALID_PASSWORD":
      return "Pogrešna lozinka.";
    case "INVALID_LOGIN_CREDENTIALS":
      return "Pogrešni podaci za prijavu.";
    default:
      return "Greška prilikom prijave.";
  }
};
export const resolveRegistrationErrors = (error) => {
  switch (error.response.data.error.message) {
    case "EMAIL_EXISTS":
      return "Korisnik sa unetim email-om već postoji.";
    default:
      return "Greška prilikom registracije.";
  }
};
