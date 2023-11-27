import { ConfigService } from "@nestjs/config";
<<<<<<< HEAD
import { EnumSecretsNameKey } from "../secretsNameKey.enum";

export interface ISecretsManager {
  getSecret: (key: EnumSecretsNameKey) => Promise<any | null>;
=======

export interface ISecretsManager {
  getSecret: (key: string) => Promise<any | null>;
>>>>>>> main
}

export class SecretsManagerServiceBase implements ISecretsManager {
  constructor(protected readonly configService: ConfigService) {}
<<<<<<< HEAD
  async getSecret<T>(key: EnumSecretsNameKey): Promise<T | null> {
    const value = this.configService.get(key.toString());
=======
  async getSecret<T>(key: string): Promise<T | null> {
    if (!key) {
      throw new Error("Didn't got the key");
    }
    const value = this.configService.get(key);
>>>>>>> main
    if (value) {
      return value;
    }
    return null;
  }
}
