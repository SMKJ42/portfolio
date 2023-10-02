import AlertModal from "./alertModal";

export default function ErrorMessage(props: { close: () => void }) {
    const { close } = props;

    return (
        <AlertModal close={close}>
            <div>Oops Something went wrong!</div>
        </AlertModal>
    );
}
