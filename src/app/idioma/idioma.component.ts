import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {
  ingles = {
    'Usuario': 'User',
    'Contrasena': 'Password',
    'btnIngresar': 'Login',
    'PosicionConsolidada': 'Consolidated Position',
    'SaldoAhorros': 'Savings Balance',
    'SaldoPrestamos': 'Loan Balance',
    'CreacionPersonas': 'Create Person',
    'AperturaCuentas': 'Account Aperture',
    'Depositos': 'Deposits',
    'Retiros': 'Retreats',
    'CerrarSesion': 'Sign Off',
    'ES':'Español',
    'EN' : 'English',
    'idSocio': 'Id of the Partner',
    'nombreSocio': 'Name of the Partner',
    'Cuenta': 'Account',
    'Producto': 'Product',
    'SaldoDisponible': 'Available Balance',
    'SaldoEfectivizar': 'Balance to de Effective',
    'BalanceBloqueado': 'Blocked Balance',
    'BalanceContable': 'Accounting Balance',
    'SaldoCapitalTotal': 'Total Capital Balance',
    'SaldoCapitalVendido': 'Capital Balance Due',
    'InteresesMoraPrestamoVencido': 'Interest Due + Past Due Loan Interest',
    'TotalVencidoPagar': 'Total Due to Pay',
    'PrimerNombre': 'First Name',
    'SegundoNombre': 'Second Name',
    'ApellidoPaterno': 'Paternal Last Name',
    'ApellidoMaterno': 'Maternal Last Name',
    'FechaNacimiento': 'Date of Birth',
    'LugarNacimiento': 'Place of Birth',
    'Sexo': 'Sex',
    'EstadoCivil': 'Civil Status',
    'NumeroCargas': 'Number of Loads',
    'TipoVivienda': 'Housing Type',
    'Direccion': 'Address',
    'DireccionEMail': 'E-mail Address',
    'NumeroTelefonoCelular': 'Cellphone Number',
    'Independiente': 'Independent',
    'TiempoFuncionamientoNegocio': 'Operating Buisness Time (Months)',
    'UbicacionNegocio': 'Buisness Location',
    'GrupoProducto': 'Product Group',
    'Cantidad': 'Quantity',
    'msjIdRequerido': 'The identification is required',
    'msjContrasenaRequerida': 'The password is required',
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
    'EN' : 'English',
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
