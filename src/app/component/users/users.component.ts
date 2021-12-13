import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../service/users.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {skip} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  public readonly columnedTitle = ['Username', 'Email', 'Last login time', 'Confirmation', 'Password age', 'Block Status', 'Actions'];
  public indexModify: number = undefined;
  private userService: UsersService;
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(userService: UsersService) {
    this.userService = userService;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.userService.user.subscribe(users => {
      // copy Array
      const copyUsers = [];
      users.forEach(user => copyUsers.push(Object.assign({}, user)));
      this.dataSource.data = Object.assign([], copyUsers);
      this.dataSource.paginator = this.paginator;
      console.log(users);
    });
    this.userService.modifyUser$.pipe(skip(1)).subscribe(index => {
      this.indexModify = index;
    });
  }

  blockedUser(id: number): void {
    this.userService.blockedUser(id);
  }

  delete(id: number): void {
    this.userService.removeUser(id);
  }

  modify(id: number): void {
    this.userService.modify(id, true);
  }

  annulerCahnge(element: any): void {
    this.userService.modify(element.id, false);
  }

  deblockedUser(id: number): void {
    this.userService.deblockedUser(id);
  }

  changeUser(element: any): void {
    this.userService.changeUser(element);
  }
}
