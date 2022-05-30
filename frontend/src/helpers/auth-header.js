import { authenticationService } from "../services/authentication.service";

export default function authHeader() {
  const user = authenticationService.getCurrentUser();
  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
