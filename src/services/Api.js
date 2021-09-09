import axios from "axios";
axios.defaults.baseURL = "http://localhost:7070/";

const getAllContactsApi = () => {
  return axios
    .get("contacts")
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export { getAllContactsApi };

const deleteContactApi = (idName) => {
  return axios
    .delete(`contacts/${idName}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export { deleteContactApi };

const addContactApi = (dataContact) => {
  return axios
    .post(`contacts`, dataContact)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export { addContactApi };
