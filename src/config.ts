export default class Config {
  private email: string;
  private password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }

  setYourEmail(email: string): void {
    //any mail validate here
    this.email = email;
  }

  setYourPassword(pass: string): void {
    //any password validate here
    this.password = pass;
  }

  setYourLoginInfo(loginObject: any) {
    this.setYourEmail(loginObject.email);
    this.setYourPassword(loginObject.password);
    console.log(`${this.email} and ${this.password}`);
  }
}
