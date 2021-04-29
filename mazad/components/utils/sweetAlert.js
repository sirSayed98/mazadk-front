import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const popUpMessage = (headline, message, flag) => {
  const MySwal = withReactContent(Swal);
  MySwal.fire(headline, message, flag);
};

export const confirmedMessage = () => {
  const MySwal = withReactContent(Swal);

   return MySwal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  })
};
