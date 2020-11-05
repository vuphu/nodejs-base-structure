import { Resolver, Query } from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
  @Query(() => String)
  async sayHello(): Promise<string> {
    return 'Hello, World';
  }
}
