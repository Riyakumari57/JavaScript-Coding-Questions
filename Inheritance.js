class surname {
  constructor() {
    console.log("kumari 💫");
  }
}

class Name extends surname {
  constructor() {
    console.log("Riya");
    super();
  }
}

const user = new Name();
