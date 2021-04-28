import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const popUpMessage = (headline, message, flag) => {
  const MySwal = withReactContent(Swal);
  MySwal.fire(headline, message, flag);
};
