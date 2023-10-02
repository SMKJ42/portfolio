import React, { Dispatch, SetStateAction } from "react";
import AlertModal from "./alertModal";

export default function SuccessMessage(props: { close: () => void }) {
    const { close } = props;
    return (
        <AlertModal close={close}>
            <div>Success!</div>
        </AlertModal>
    );
}
