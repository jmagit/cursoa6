import { Injectable } from '@angular/core';
import { NotifyService } from '../services/notify.service';
import { LoggerService } from '../../agio-core';

@Injectable()
export class PersonasVMService {
  private modo: 'list' | 'add' | 'edit' | 'view' | 'delete' = 'list';
  private listado: Array<any> = [];
  private elemento: any = {};
  private idOriginal = null;
  protected pk = 'id';

  constructor(private nsrv: NotifyService, private out: LoggerService) { }

  public get Modo() { return this.modo; }
  public get Listado() { return this.listado; }
  public get Elemento() { return this.elemento; }

  public list() {
    this.modo = 'list';
    if (this.listado.length === 0 ) {
      this.listado = [
        { id: 1, nombre: 'Carmelo', apellidos: 'Coton', edad: 34},
        { id: 2, nombre: 'Pepito', apellidos: 'Grillo', edad: 155},
        { id: 3, nombre: 'Pedro', apellidos: 'Pica Piedra', edad: 50},
        { id: 4, nombre: 'Pablo', apellidos: 'Marmol', edad: 18},
      ];
    }
  }

  public add() {
    this.modo = 'add';
    this.elemento = {};
  }

  public edit(key: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.modo = 'edit';
      this.elemento = Object.assign({}, rslt);
      this.idOriginal = key;
    } else {
      this.nsrv.add('encontrado');
    }
  }

  public view(key: any) {
    // tslint:disable-next-line:triple-equals
    const rslt = this.listado.find(item => item[this.pk] == key);
    if (rslt) {
      this.modo = 'view';
      this.elemento = Object.assign({}, rslt);
    } else {
      this.nsrv.add('encontrado');
    }
  }

  public remove(key: any) {
    if (!window.confirm('¿Seguro?')) { return; }
    // tslint:disable-next-line:triple-equals
    const indice = this.listado.findIndex(item => item[this.pk] == key);
    if (indice !== -1) {
      this.listado.splice(indice, 1);
      this.list();
    } else {
      this.nsrv.add('encontrado');
    }
  }

  public cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }

  public send() {
    switch (this.modo) {
      case 'add':
        this.listado.push(this.elemento);
        this.cancel();
        break;
      case 'edit':
          // tslint:disable-next-line:triple-equals
          const indice = this.listado.findIndex(item => item[this.pk] == this.idOriginal);
          if (indice !== -1) {
            this.listado[indice] = this.elemento;
            this.list();
          } else {
            this.nsrv.add('encontrado');
          }
          break;
      case 'view':
          this.cancel();
          break;
    }
  }

}