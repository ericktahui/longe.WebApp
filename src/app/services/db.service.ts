import { Injectable } from '@angular/core';
import User from '../../interfaces/user';

@Injectable()
export class DatabaseService {
  users: User[] = [
    {
      firstName: 'Noe',
      lastName: 'Olvera',
      age: 34,
      description: 'N A',
      id:null,
      password:null,
      token:null,
      username:null,
      role: null
    },
    {
      firstName: 'Ramiro',
      lastName: 'X',
      age: 34,
      description: 'N A',
      id:null,
      password:null,
      token:null,
      username:null,
      role: null
    },
    {
      firstName: 'Lil Peep',
      lastName: 'X',
      age: 34,
      description: 'N A',
      id:null,
      password:null,
      token:null,
      username:null,
      role: null
    },
    {
      firstName: 'Swae',
      lastName: 'Lee',
      age: 34,
      description: 'N A',
      id:null,
      password:null,
      token:null,
      username:null,
      role: null
    }
  ];
}
