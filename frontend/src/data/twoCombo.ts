export type ComboOption = {
  proteins: string[];
  price: number;
};

export const twoCombos: ComboOption[] = [
  { proteins: ['Beef', 'Crispy Pork'], price: 16 },
  { proteins: ['Beef', 'BBQ Pork'], price: 16 },
  { proteins: ['Beef', 'Pork Tripe'], price: 17 },
  { proteins: ['Beef', 'Beef Tripe'], price: 17 },
  { proteins: ['Beef', 'Intestines'], price: 20 },
  { proteins: ['Beef', 'Grilled Sausage'], price: 17 },
  { proteins: ['Crispy Pork', 'BBQ Pork'], price: 16 },
  { proteins: ['Crispy Pork', 'Pork Tripe'], price: 17 },
  { proteins: ['Crispy Pork', 'Beef Tripe'], price: 17 },
  { proteins: ['Crispy Pork', 'Intestines'], price: 20 },
  { proteins: ['Crispy Pork', 'Grilled Sausage'], price: 16 },
  { proteins: ['BBQ Pork', 'Pork Tripe'], price: 17 },
  { proteins: ['BBQ Pork', 'Beef Tripe'], price: 17 },
  { proteins: ['BBQ Pork', 'Intestines'], price: 19 },
  { proteins: ['BBQ Pork', 'Grilled Sausage'], price: 17 },
  { proteins: ['Pork Tripe', 'Beef Tripe'], price: 17 },
  { proteins: ['Pork Tripe', 'Intestines'], price: 18 },
  { proteins: ['Pork Tripe', 'Grilled Sausage'], price: 17 },
  { proteins: ['Beef Tripe', 'Intestines'], price: 19 },
  { proteins: ['Beef Tripe', 'Grilled Sausage'], price: 17 },
  { proteins: ['Intestines', 'Grilled Sausage'], price: 20 },
]