export default function Form(props: { onChangeCallback: any; children: any }) {
  const onChangeCallback = (event: any) => {};
  return (
    <form
      className=""
      onChange={
        props.onChangeCallback ? props.onChangeCallback : onChangeCallback
      }
    >
      <div id="content">{props.children}</div>
    </form>
  );
}
