import { User } from "../../entities/User"
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

describe("Create user", () => {

  it("should be able to create a new user", async () => {
    const userRepository = new PostgresUsersRepository()
    const mailtrapMailProvider = new MailtrapMailProvider()
    const createUserUserCase = new CreateUserUseCase(userRepository,mailtrapMailProvider)
    const userdata: User = {
        name: "teste name",
        email: "teste@test.com",
        id: "user",
        password: "12345"
       
    }

    const user = await createUserUserCase.execute(userdata)
    
    console.log(user);

    expect(user).toHaveReturned()
  });
});