export default function FormInput(props: any) {
  return (
    <div>
      <p className="text-md font-sm mb-2 ">{props.label}</p>
      <input
        className="focus:shadow-outline w-full rounded border py-2 px-3 leading-tight text-gray-800"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
