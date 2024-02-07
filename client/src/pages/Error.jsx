import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return <p>notfound</p>;
  }
  return <div>Ocorreu um erro, por favor entre em contato com a galera da TI do PET</div>;
};
export default Error;
