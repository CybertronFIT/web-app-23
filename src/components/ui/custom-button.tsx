import { Loader2 } from "lucide-react";

const Button = (props: { loading: boolean, text: string, type: "button" | "reset" | "submit" }) => {
  return (
    <button
      className={`flex items-center py-3 px-4 ${props.loading ? "bg-cyan-600 border-cyan-600 text-white shadow-cyan-500" : "bg-cyan-400 border-cyan-500 text-black shadow-cyan-700"} border-2 shadow-lg hover:text-white hover:shadow-cyan-500 rounded-xl`}
      type={props.type}
      disabled={props.loading}
    >
      {props.loading && <Loader2 className="mr-2 animate-spin" />}
      {props.loading ? "Working..." : props.text}
    </button>
  );
};

export default Button;
