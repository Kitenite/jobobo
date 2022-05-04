export default function Step(props: {
  header: string;
  subtitle: string;
  imgSrc: string;
}) {
  return (
    <div className="w-full max-w-6xl">
      <p className="text-2xl font-bold">{props.header}</p>
      <p className="text-lg">{props.subtitle}</p>
      <div className="grid w-full place-items-center">
        <img className="min-w-100 w-3/4 max-w-xl py-20" src={props.imgSrc} />
      </div>
    </div>
  );
}
