import Config from "./config";

class Greeting<T> {
  private email: T;
  private password: T;

  constructor(email: T, password: T) {
    this.email = email;
    this.password = password;
  }

  createNewAccount(): any {
    const accData = new Config();
    accData.setYourLoginInfo({ email: this.email, password: this.password });
  }
}

//Shoud write here your account settings
const _accData = {
  email: "vladyk.doter@gmail.com",
  password: "lolaomaf",
};

const greetClass = new Greeting<string>(_accData.email, _accData.password);
greetClass.createNewAccount();
