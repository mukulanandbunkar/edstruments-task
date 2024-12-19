import React, { useState } from "react";
import styles from "./EditModal.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function EditModal({ task, onClose, onSave }) {
  const [newName, setNewName] = useState(task.name);

  const handleSave = () => {
    if (newName.trim()) {
      onSave(newName);
    }
  };

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal__content"]}>
        <h2 className={styles["modal__heading"]}>Edit Task</h2>
        <Input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <div className={styles["modal__actions"]}>
          <Button
            disabled={!newName.trim()}
            variant="success"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button variant="primary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
