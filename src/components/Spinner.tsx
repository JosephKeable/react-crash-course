import { ClipLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "100px auto",
  size: "150px",
};
const Spinner = ({ loading }: { loading: boolean }) => {
  return (
    <ClipLoader
      loading={loading}
      color="#4338ca"
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
