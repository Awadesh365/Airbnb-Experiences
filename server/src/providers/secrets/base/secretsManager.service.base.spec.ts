import { ConfigService } from "@nestjs/config";
import { mock } from "jest-mock-extended";
import { SecretsManagerServiceBase } from "./secretsManager.service.base";
<<<<<<< HEAD
import { EnumSecretsNameKey } from "../secretsNameKey.enum";
=======
>>>>>>> main

describe("Testing the secrets manager base class", () => {
  const SECRET_KEY = "SECRET_KEY";
  const SECRET_VALUE = "SECRET_VALUE";
  const configService = mock<ConfigService>();
  const secretsManagerServiceBase = new SecretsManagerServiceBase(
    configService
  );
  beforeEach(() => {
    configService.get.mockClear();
  });
  it("should return value from env", async () => {
    //ARRANGE
    configService.get.mockReturnValue(SECRET_VALUE);
    //ACT
<<<<<<< HEAD
    const result = await secretsManagerServiceBase.getSecret(
      SECRET_KEY as unknown as EnumSecretsNameKey
    );
=======
    const result = await secretsManagerServiceBase.getSecret(SECRET_KEY);
>>>>>>> main
    //ASSERT
    expect(result).toBe(SECRET_VALUE);
  });
  it("should return null for unknown keys", async () => {
    //ARRANGE
    configService.get.mockReturnValue(undefined);
    //ACT
<<<<<<< HEAD
    const result = await secretsManagerServiceBase.getSecret(
      SECRET_KEY as unknown as EnumSecretsNameKey
    );
    //ASSERT
    expect(result).toBeNull();
  });
  it("should throw an exception if getting null key", () => {
    return expect(
      secretsManagerServiceBase.getSecret(null as unknown as EnumSecretsNameKey)
=======
    const result = await secretsManagerServiceBase.getSecret(SECRET_KEY);
    //ASSERT
    expect(result).toBeNull();
  });
  it("should throw error if dont get key", () => {
    return expect(secretsManagerServiceBase.getSecret("")).rejects.toThrow();
  });
  it("should throw an exeption if getting null key", () => {
    return expect(
      secretsManagerServiceBase.getSecret(null as unknown as string)
>>>>>>> main
    ).rejects.toThrow();
  });
});
