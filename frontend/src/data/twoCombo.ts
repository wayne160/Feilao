
export type ProteinId =
  | 'Beef'
  | 'Crispy Pork'
  | 'BBQ Pork'
  | 'Pork Tripe'
  | 'Beef Tripe'
  | 'Intestines'
  | 'Grilled Sausage';

export type ComboOption = {
  proteins: ProteinId[];
  price: number;
};

export const twoCombos: ComboOption[] = [
  { proteins: ['Beef', 'Crispy Pork'], price: 0 },
  { proteins: ['Beef', 'BBQ Pork'], price: 0 },
  { proteins: ['Beef', 'Pork Tripe'], price: 0 },
  { proteins: ['Beef', 'Beef Tripe'], price: 0 },
  { proteins: ['Beef', 'Intestines'], price: 0 },
  { proteins: ['Beef', 'Grilled Sausage'], price: 0 },
  { proteins: ['Crispy Pork', 'BBQ Pork'], price: 0 },
  { proteins: ['Crispy Pork', 'Pork Tripe'], price: 0 },
  { proteins: ['Crispy Pork', 'Beef Tripe'], price: 0 },
  { proteins: ['Crispy Pork', 'Intestines'], price: 0 },
  { proteins: ['Crispy Pork', 'Grilled Sausage'], price: 0 },
  { proteins: ['BBQ Pork', 'Pork Tripe'], price: 0 },
  { proteins: ['BBQ Pork', 'Beef Tripe'], price: 0 },
  { proteins: ['BBQ Pork', 'Intestines'], price: 0 },
  { proteins: ['BBQ Pork', 'Grilled Sausage'], price: 0 },
  { proteins: ['Pork Tripe', 'Beef Tripe'], price: 0 },
  { proteins: ['Pork Tripe', 'Intestines'], price: 0 },
  { proteins: ['Pork Tripe', 'Grilled Sausage'], price: 0 },
  { proteins: ['Beef Tripe', 'Intestines'], price: 0 },
  { proteins: ['Beef Tripe', 'Grilled Sausage'], price: 0 },
  { proteins: ['Intestines', 'Grilled Sausage'], price: 0 },
]