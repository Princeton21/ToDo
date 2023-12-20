import React from "react";
import Button from "./Button";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteList } from "../../services/listService";

type Props = {
  listId: string;
};

const DltBtn = (props: Props) => {


  return (
    <>
      <Button icon={RiDeleteBin5Line}
        color={10}
      />
    </>
  );
};

export default DltBtn;
