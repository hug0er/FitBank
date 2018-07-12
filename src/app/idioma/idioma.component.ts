import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {
  ingles = {
    'Usuario': 'Usuario',
    'Contrasena': 'Contrasena',
    'btnIngresar': 'Ingresar',
    'PosicionConsolidada': 'Paco papu de los papus',
    'SaldoAhorros': 'Saldo Ahorros',
    'SaldoPrestamos': 'Saldo Préstamos',
    'CreacionPersonas': 'Creación de Personas',
    'AperturaCuentas': 'Apertura de Cuentas',
    'Depositos': 'Depósitos',
    'Retiros': 'Retiros',
    'CerrarSesion': 'Cerrar Sesión',
    'ES':'Español',
    'EN' : 'Inglés',
    'idSocio': 'Id del Socio',
    'nombreSocio': 'Nombre del Socio',
    'Cuenta': 'Cuenta',
    'Producto': 'Producto',
    'SaldoDisponible': 'Saldo Disponible',
    'SaldoEfectivizar': 'Saldo por Efectivizar',
    'BalanceBloqueado': 'Balance Bloqueado',
    'BalanceContable': 'Balance Contable',
    'SaldoCapitalTotal': 'Saldo Capital Total',
    'SaldoCapitalVendido': 'Saldo Capital Vendido',
    'InteresesMoraPrestamoVencido': 'Intereses Mora + Intereses Prestamo Vencido',
    'TotalVencidoPagar': 'Total Vencido a Pagar',
    'PrimerNombre': 'Primer Nombre',
    'SegundoNombre': 'Segundo Nombre',
    'ApellidoPaterno': 'Apellido Paterno',
    'ApellidoMaterno': 'Apellido Materno',
    'FechaNacimiento': 'Fecha Nacimiento',
    'LugarNacimiento': 'Lugar de Nacimiento',
    'Sexo': 'Sexo',
    'EstadoCivil': 'Estado Civil',
    'NumeroCargas': 'Numero de Cargas',
    'TipoVivienda': 'Tipo Vivienda',
    'Direccion': 'Direccion',
    'DireccionEMail': 'Direccion de E-Mail',
    'NumeroTelefonoCelular': 'Numero de Telefono Celular',
    'Independiente': 'Independiente',
    'TiempoFuncionamientoNegocio': 'Tiempo Funcionamiento Negocio (Meses)',
    'UbicacionNegocio': 'Ubicacion del Negocio',
    'GrupoProducto': 'Grupo del Producto',
    'Cantidad': 'Cantidad',
    'msjIdRequerido': 'La identificacion es requerida',
    'msjContrasenaRequerida': 'La contraseña es requerida',
  }
  espanol = {
    'Usuario': 'Usuario',
    'Contrasena': 'Contrasena',
    'btnIngresar': 'Ingresar',
    'PosicionConsolidada': 'Posición Consolidada',
    'SaldoAhorros': 'Saldo Ahorros',
    'SaldoPrestamos': 'Saldo Préstamos',
    'CreacionPersonas': 'Creación de Personas',
    'AperturaCuentas': 'Apertura de Cuentas',
    'Depositos': 'Depósitos',
    'Retiros': 'Retiros',
    'CerrarSesion': 'Cerrar Sesión',
    'ES':'Español',
    'EN' : 'Inglés',
    'idSocio': 'Id del Socio',
    'nombreSocio': 'Nombre del Socio',
    'Cuenta': 'Cuenta',
    'Producto': 'Producto',
    'SaldoDisponible': 'Saldo Disponible',
    'SaldoEfectivizar': 'Saldo por Efectivizar',
    'BalanceBloqueado': 'Balance Bloqueado',
    'BalanceContable': 'Balance Contable',
    'SaldoCapitalTotal': 'Saldo Capital Total',
    'SaldoCapitalVendido': 'Saldo Capital Vendido',
    'InteresesMoraPrestamoVencido': 'Intereses Mora + Intereses Prestamo Vencido',
    'TotalVencidoPagar': 'Total Vencido a Pagar',
    'PrimerNombre': 'Primer Nombre',
    'SegundoNombre': 'Segundo Nombre',
    'ApellidoPaterno': 'Apellido Paterno',
    'ApellidoMaterno': 'Apellido Materno',
    'FechaNacimiento': 'Fecha Nacimiento',
    'LugarNacimiento': 'Lugar de Nacimiento',
    'Sexo': 'Sexo',
    'EstadoCivil': 'Estado Civil',
    'NumeroCargas': 'Numero de Cargas',
    'TipoVivienda': 'Tipo Vivienda',
    'Direccion': 'Direccion',
    'DireccionEMail': 'Direccion de E-Mail',
    'NumeroTelefonoCelular': 'Numero de Telefono Celular',
    'Independiente': 'Independiente',
    'TiempoFuncionamientoNegocio': 'Tiempo Funcionamiento Negocio (Meses)',
    'UbicacionNegocio': 'Ubicacion del Negocio',
    'GrupoProducto': 'Grupo del Producto',
    'Cantidad': 'Cantidad',
    'msjIdRequerido': 'La identificacion es requerida',
    'msjContrasenaRequerida': 'La contraseña es requerida',
  }

  constructor() { }

  ngOnInit() {
  }

  getEspanol(){
    return this.espanol
  }

  getIngles(){
    return this.ingles
  }


}
