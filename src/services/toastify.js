import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig = {
  //   theme: "dark",
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const notifySuccess = (success) => toast.success(success, toastConfig);
export const notifyError = (error) => toast.error(error, toastConfig);
export const notifyInfo = (info) => toast.info(info, toastConfig);
