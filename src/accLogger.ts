const fetch = async (...args: any) => {
  return import("node-fetch").then(({ default: fetch }: { default: any }) =>
    fetch(...args)
  );
};

export default class accSingIn {
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
    //any ref validate here
    this.ref = ref;
  }

  setYourLoginInfo(loginObject: any) {
    this.setYourEmail(loginObject.email);
    this.setYourPassword(loginObject.password);
    this.setYourRefLink(loginObject.ref);
    // this.tryToSign();
    // console.log(`${this.email} and ${this.password}, ref : ${this.ref}`);
  }

  async tryToSign() {
    try {
      const fetchResponce = await fetch(
        "https://crop-monitoring.eos.com/service/auth/account/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            email: this.email,
            password: this.password,
            extra_data: {},
          },
        }
      );
      const responce = await fetchResponce.json();
      console.log(responce);
    } catch (e) {
      console.log(e);
    }
  }
}
