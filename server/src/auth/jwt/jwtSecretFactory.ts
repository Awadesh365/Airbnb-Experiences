<<<<<<< HEAD
import { JWT_SECRET_KEY_PROVIDER_NAME } from "../../constants";
import { SecretsManagerService } from "../../providers/secrets/secretsManager.service";
import { EnumSecretsNameKey } from "../../providers/secrets/secretsNameKey.enum";

export const jwtSecretFactory = {
  provide: JWT_SECRET_KEY_PROVIDER_NAME,
  useFactory: async (
    secretsService: SecretsManagerService
  ): Promise<string> => {
    const secret = await secretsService.getSecret<string>(
      EnumSecretsNameKey.JwtSecretKey
    );
=======
import { JWT_SECRET_KEY } from "../../constants";
import { SecretsManagerService } from "../../providers/secrets/secretsManager.service";

export const jwtSecretFactory = {
  provide: JWT_SECRET_KEY,
  useFactory: async (
    secretsService: SecretsManagerService
  ): Promise<string> => {
    const secret = await secretsService.getSecret<string>(JWT_SECRET_KEY);
>>>>>>> main
    if (secret) {
      return secret;
    }
    throw new Error("jwtSecretFactory missing secret");
  },
  inject: [SecretsManagerService],
};
