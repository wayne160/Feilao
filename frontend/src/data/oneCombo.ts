export type ComboOption = {
  proteins: string[];
  price: number;
};

export const oneCombos: ComboOption[] = [
  { proteins: ['Beef'], price: 17 },
  { proteins: ['Crispy Pork'], price: 17 },
  { proteins: ['BBQ Pork'], price: 16 },
  { proteins: ['Pork Tripe'], price: 16 },
  { proteins: ['Beef Tripe'], price: 17 },
  { proteins: ['Intestines'], price: 25 },
  { proteins: ['Grilled Sausage'], price: 17 },
]