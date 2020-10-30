import {getRepository} from 'typeorm';
import {hash} from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request{
  name: string;
  email: string;
  password: string;
}

class CreateUserService{
  public async execute({name, email, password}: Request): Promise<User>{
    const userReoisitore = getRepository(User);

    const checkUserExist = await userReoisitore.findOne({
      where: {email}
    });

    if(checkUserExist){
      throw new AppError('Email address already used.');
    }

    const hashPassword = await hash(password, 8);

    const user = userReoisitore.create({
      name, email, password: hashPassword
    });

    await userReoisitore.save(user);

    return user;
  }
}

export default CreateUserService;
