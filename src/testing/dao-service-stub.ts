import { of, Observable } from 'rxjs';

export class DAOServiceMock {
  constructor(private listado: Array<any>) { }
  query(): Observable<any> { return of(this.listado); }
  get(id: number) { return of(this.listado[id]); }
  add(item: any) { return of(item); }
  change(id: number, item: any) { return of(item); }
  remove(id: number) { return of(id); }
}
