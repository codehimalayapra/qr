import { useState } from "react";
import QRCode from "react-qr-code";
import { encrypt } from "../utils";

export function QRGenerator() {
  const newURL =
    window.location.protocol + "//" + window.location.host + "/qr/";

  const [value, setValue] = useState("");

  return (
    <div>
      <center>
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value of Qr-code"
        />
        <br />
        <br />

        <br />
        <br />
        <br />
        {value && <QRCode value={newURL + encrypt(value)} />}
      </center>
    </div>
  );
}
