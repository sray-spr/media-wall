import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@sprinklrjs/spaceweb/modal";
import { Button } from "@sprinklrjs/spaceweb/button";
import { FormControl } from "@sprinklrjs/spaceweb/form-control";
import { Input } from "@sprinklrjs/spaceweb/input";
const DownloadAllDialogBox = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}): ReactElement => {
  const [emailIDs, setEmailIDs] = useState("");
  return (
    <Modal
      onClose={() => setIsOpen(false)}
      isOpen={isOpen}
      animate
      autoFocus
      size="sm"
      role="dialog"
    >
      <ModalHeader>Download Assets</ModalHeader>
      <ModalBody>
        <FormControl label="Email Address (can be more than one)">
          <Input
            className="mb-3"
            placeholder="Enter comma seperated email addresses"
            value={emailIDs}
            onChange={(e) => setEmailIDs(e.target.value)}
          />
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button
          className="mr-3"
          variant="secondary"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            setIsOpen(false);
            alert("Send email Id to Backend (TODO) EmailIDs: " + emailIDs);
          }}
        >
          Submit
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export { DownloadAllDialogBox };
