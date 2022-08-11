export class YorozuAccount {
  name: string;

  constructor() {
    this.name = "Yorozu PAY";
  }

  set(name: string) {
    this.name = name;
  }

  get() {
    return this.name;
  }

  update() {
    console.log("update: name = ", this.name);
  }
}

export const withdraw = (amount: number) => {
  console.log("withdraw: amount = ", amount);
};

export const getBalance = (): number => {
  console.log("getBalance");
  return 1.234;
};
