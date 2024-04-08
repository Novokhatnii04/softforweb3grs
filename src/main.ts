import accCreater from "./acccreater";
import Config from "./config";

class Global<T> {
  private email: T;
  private password: T;
  private ref: T;

  constructor(email: T, password: T, ref: T) {
    this.email = email;
    this.password = password;
    this.ref = ref;
  }

  createNewAccount(): any {
    const accData = new accCreater();
    accData.setYourLoginInfo({ email: this.email, password: this.password , ref : this.ref});
  }
}

const greetClass = new Global<string>(Config.email, Config.password , Config.ref);
greetClass.createNewAccount();
