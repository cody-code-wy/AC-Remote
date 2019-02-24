export interface ElectricImpResponse {
  temp: number;
  speed: number; // 0 = Auto, 1 = Low, 2 = Med , 3 = High
  mode: number; // 0 = Cool, 1 = Econ, 2 = Fan Only
}
