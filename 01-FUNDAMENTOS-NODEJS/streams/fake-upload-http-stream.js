import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;
    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        this.push(String(i));
      }
    }, 1000);
  }
}

fetch('http://localhost:8080', {
    method: 'POST',
    body: new OneToHundredStream(),
})