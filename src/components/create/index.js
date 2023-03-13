import CreateProvider from "../../context/ContextCreate";
import CreatePerson from "./CreatePerson";

export default () => {
  return (
    <CreateProvider>
      <CreatePerson />
    </CreateProvider>
  );
};
