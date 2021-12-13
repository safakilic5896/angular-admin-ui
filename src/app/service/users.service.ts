import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@gmail.fr',
      registrationTime: new Date(),
      lastLoginTime: 'Never',
      confirmation: 'confirmed',
      passwordAge : '0',
      block: false,
      modify: false
    },
    {
      id: 2,
      username: 'safa',
      email: 'safa.kilic@gmail.fr',
      registrationTime: new Date(),
      lastLoginTime: 'Never',
      confirmation: 'confirmed',
      passwordAge : '0',
      block: false,
      modify: false
    },
    {
      id: 3,
      username: 'George',
      email: 'george.kilic@gmail.fr',
      registrationTime: new Date(),
      lastLoginTime: 'Never',
      confirmation: 'confirmed',
      passwordAge : '0',
      block: false,
      modify: false
    },
    {
      id: 4,
      username: 'Julien',
      email: 'Julien.ronaldo@gmail.fr',
      registrationTime: new Date(),
      lastLoginTime: 'Never',
      confirmation: 'confirmed',
      passwordAge : '0',
      block: false,
      modify: false
    },
    {
      id: 5,
      username: 'David',
      email: 'david.kintaro@gmail.fr',
      registrationTime: new Date(),
      lastLoginTime: 'Never',
      confirmation: 'confirmed',
      passwordAge : '0',
      block: false,
      modify: false
    },
    {
      id: 6,
      username: 'Kintaor',
      email: 'kintaro.oe@gmail.fr',
      registrationTime: new Date(),
      lastLoginTime: 'Never',
      confirmation: 'confirmed',
      passwordAge : '0',
      block: false,
      modify: false
    },
    {
      id: 7,
      username: 'Luffy',
      email: 'luffy.monkey@gmail.fr',
      registrationTime: new Date(),
      lastLoginTime: 'Never',
      confirmation: 'confirmed',
      passwordAge : '0',
      block: false,
      modify: false
    },
    {
      id: 8,
      username: 'Zoro',
      email: 'Zoro.roronoa@gmail.fr',
      registrationTime: new Date(),
      lastLoginTime: 'Never',
      confirmation: 'confirmed',
      passwordAge : '0',
      block: false,
      modify: false
    },
    {
      id: 9,
      username: 'Sanji',
      email: 'sanji.vinsmoke@gmail.fr',
      registrationTime: new Date(),
      lastLoginTime: 'Never',
      confirmation: 'confirmed',
      passwordAge : '0',
      block: false,
      modify: false
    },
    {
      id: 10,
      username: 'Robin',
      email: 'robin.nico@gmail.fr',
      registrationTime: new Date(),
      lastLoginTime: 'Never',
      confirmation: 'confirmed',
      passwordAge : '0',
      block: false,
      modify: false
    }
  ];

  private readonly users$: BehaviorSubject<any>;
  private readonly _modifyuser$: BehaviorSubject<number>;

  constructor() {
    this.users$ = new BehaviorSubject<any>(this.users);
    this._modifyuser$ = new BehaviorSubject<number>(-1);
  }

  get user(): Observable<any> {
    return this.users$;
  }

  get modifyUser$(): Observable<number> {
    return this._modifyuser$;
  }

  setModifyUser(index: number): void {
    this._modifyuser$.next(index);
  }

  changeUsers(users: Array<any>): void {
    this.users$.next(users);
  }

  blockedUser(id: number): void {
    this.users.forEach(user => {
      if (user.id === id) {
        user.block = true;
      }
    });
    this.changeUsers(this.users);
  }

  removeUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.changeUsers(this.users);
  }

  modify(id: number, value: boolean): void {
    this.users.forEach((user, index) => {
      if (user.id === id) {
        if (value) {
          this.setModifyUser(id);
        } else {
          this.setModifyUser(undefined);
        }
        user.modify = value;
      }
    });
    this.changeUsers(this.users);
  }

  deblockedUser(id: number): void {
   this.users.find(user => user.id === id).block = false;
   this.users$.next(this.users);
  }
  changeUser(element: any): void {
    this.users.forEach(user => {
      if (user.id === element.id) {
        user.email = element.email;
        user.username = element.username;
      }
    });
    this.modify(element.id, false);
  }
}
