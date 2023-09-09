export function Contact() {
  return (
    <section
      id="Get_In_Touch"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold">Get in Touch</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input />
        <textarea />
        <button>Submit</button>
      </form>
    </section>
  );
}
