
import React, { useState } from "react";
import styles from "./HelloWord.module.css";

const HelloWord = () => {
  const [headerText, setHeaderText] = useState("Hello World!");
  const [outputText, setOutputText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setOutputText(headerText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{headerText}</h1>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={headerText}
          onChange={(e) => setHeaderText(e.target.value)}
          placeholder="Type your message..."
          className={styles.inputField}
        />

        <div className={styles.outputContainer}>
          <input
            type="text"
            value={outputText}
            readOnly
            className={styles.outputField}
          />
          {isCopied && <div className={styles.copiedNotification}>Copied!</div>}
        </div>

        <button onClick={handleCopy} className={styles.copyButton}>
          Copy Text
        </button>
      </div>
    </div>
  );
};

export default HelloWord;