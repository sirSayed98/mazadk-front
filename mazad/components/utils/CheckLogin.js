
import { useRouter } from "next/router";
import Cookies from "js-cookie";
export default function islogged (){
  const router = useRouter();

  if (Cookies.get("token")) {
    router.push("/");
    return true
  }
  return false
};
