//@ts-ignore
import { ITokenService } from "./ITokenService";
// eslint-disable-next-line import/no-unresolved
//@ts-ignore
import { TokenServiceBase } from "./base/token.service.base";

<<<<<<< HEAD
export class TokenService extends TokenServiceBase implements ITokenService {}
=======
export class TokenService extends TokenServiceBase implements ITokenService {
  /**
   * @param bearer
   * @returns the username from a jwt token
   */
  decodeToken(bearer: string): string {
    return this.jwtService.verify(bearer).username;
  }
}
>>>>>>> main
