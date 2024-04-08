export default class accCreater {
  private email: string;
  private password: string;
  private ref: string;

  constructor() {
    this.email = "";
    this.password = "";
    this.ref = "";
  }

  setYourEmail(email: string): void {
    //any mail validate here
    this.email = email;
  }

  setYourPassword(pass: string): void {
    //any password validate here
    this.password = pass;
  }

  setYourRefLink(ref: string): void {
    this.ref = ref;
  }

  setYourLoginInfo(loginObject: any) {
    this.setYourEmail(loginObject.email);
    this.setYourPassword(loginObject.password);
    this.setYourRefLink(loginObject.ref);
    console.log(`${this.email} and ${this.password}, ref : ${this.ref}`);
  }
}
