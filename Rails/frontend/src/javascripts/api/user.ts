import axios from "./common/axios";

export async function IsLoggedIn() {
  try {
    const response = await axios.get("/user_login/authenticated");
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
}

export async function IsAdmin() {
  try {
    const response = await axios.get("/user/admin_privilege");
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
}
