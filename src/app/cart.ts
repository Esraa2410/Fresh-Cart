export interface IPay {
    shippingAddress: IShippingAddress
  }
  
  export interface IShippingAddress {
    details: string
    phone: string
    city: string
  }
  