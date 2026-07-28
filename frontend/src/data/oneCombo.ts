
export type ProteinId =
  | 'Beef'
  | 'Crispy Pork'
  | 'BBQ Pork'
  | 'Pork Tripe'
  | 'Beef Tripe'
  | 'Intestines'
  | 'Grilled Sausage';

export type ComboOption = {
  protein: ProteinId;
  price: number;
};

export const oneCombos: ComboOption[] = [
  { protein: 'Beef', price: 17 },
  { protein: 'Crispy Pork', price: 17 },
  { protein: 'BBQ Pork', price: 16 },
  { protein: 'Pork Tripe', price: 16 },
  { protein: 'Beef Tripe', price: 17 },
  { protein: 'Intestines', price: 25 },
  { protein: 'Grilled Sausage', price: 17 },
]