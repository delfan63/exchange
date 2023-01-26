export interface ICurrency {
    name: string;
    price: string;
    change?: string;
    percent?: Int16Array;
    low?: string;
    High?: string;
    update?: string;
  }

  export interface ICurrencyJson {
    Ok?:boolean;
    Result?:[ICurrency];
  }