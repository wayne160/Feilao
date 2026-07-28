
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

export const threeCombos: ComboOption[] = [
  { proteins: ['Beef', 'Crispy Pork', 'BBQ Pork'], price: 0 },
  { proteins: ['Beef', 'Crispy Pork', 'Pork Tripe'], price: 0 },
  { proteins: ['Beef', 'Crispy Pork', 'Beef Tripe'], price: 0 },
  { proteins: ['Beef', 'Crispy Pork', 'Intestines'], price: 0 },
  { proteins: ['Beef', 'Crispy Pork', 'Grilled Sausage'], price: 0 },
  { proteins: ['Beef', 'BBQ Pork', 'Pork Tripe'], price: 0 },
  { proteins: ['Beef', 'BBQ Pork', 'Beef Tripe'], price: 0 },
  { proteins: ['Beef', 'BBQ Pork', 'Intestines'], price: 0 },
  { proteins: ['Beef', 'BBQ Pork', 'Grilled Sausage'], price: 0 },
  { proteins: ['Beef', 'Pork Tripe', 'Beef Tripe'], price: 0 },
  { proteins: ['Beef', 'Pork Tripe', 'Intestines'], price: 0 },
  { proteins: ['Beef', 'Pork Tripe', 'Grilled Sausage'], price: 0 },
  { proteins: ['Beef', 'Beef Tripe', 'Intestines'], price: 0 },
  { proteins: ['Beef', 'Beef Tripe', 'Grilled Sausage'], price: 0 },
  { proteins: ['Crispy Pork', 'BBQ Pork', 'Pork Tripe'], price: 0 },
  { proteins: ['Crispy Pork', 'BBQ Pork', 'Beef Tripe'], price: 0 },
  { proteins: ['Crispy Pork', 'BBQ Pork', 'Intestines'], price: 0 },
  { proteins: ['Crispy Pork', 'BBQ Pork', 'Grilled Sausage'], price: 0 },
  { proteins: ['Crispy Pork', 'Pork Tripe', 'Beef Tripe'], price: 0 },
  { proteins: ['Crispy Pork', 'Pork Tripe', 'Intestines'], price: 0 },
  { proteins: ['Crispy Pork', 'Pork Tripe', 'Grilled Sausage'], price: 0 },
  { proteins: ['Crispy Pork', 'Beef Tripe', 'Intestines'], price: 0 },
  { proteins: ['Beef', 'Beef Tripe', 'Grilled Sausage'], price: 0 },
  { proteins: ['Beef', 'Intestines', 'Grilled Sausage'], price: 0 },
  { proteins: ['Crispy Pork', 'BBQ Pork', 'Pork Tripe'], price: 0 },
  { proteins: ['Crispy Pork', 'BBQ Pork', 'Beef Tripe'], price: 0 },
  { proteins: ['Crispy Pork', 'BBQ Pork', 'Intestines'], price: 0 },
  { proteins: ['Crispy Pork', 'BBQ Pork', 'Grilled Sausage'], price: 0 },
  { proteins: ['Crispy Pork', 'Pork Tripe', 'Beef Tripe'], price: 0 },
  { proteins: ['Pork Tripe', 'Intestines', 'Grilled Sausage'], price: 0 },
  { proteins: ['Beef Tripe', 'Intestines', 'Grilled Sausage'], price: 0 },
];